#!/usr/bin/env python3
"""Refresh the research feed (data/news.js) from PubMed.

Uses NCBI E-utilities (esearch + esummary) with only the Python standard library.
Topic searches live in data/news_topics.json. New papers are merged with the existing
feed, de-duplicated by PMID, sorted newest first and capped at max_items.

Usage:  python scripts/update_news.py            # writes data/news.js and data/news.json
Env:    NCBI_API_KEY (optional, raises the rate limit), NCBI_EMAIL (optional, polite contact)
"""
import datetime as dt
import json
import os
import pathlib
import sys
import time
import urllib.parse
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
TOPICS = ROOT / "data" / "news_topics.json"
OUT_JSON = ROOT / "data" / "news.json"
OUT_JS = ROOT / "data" / "news.js"
EUTILS = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/"
MONTHS = {m: i for i, m in enumerate(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], 1)}


def call(endpoint, params):
    params = dict(params, tool="feeling-brain-library")
    if os.environ.get("NCBI_API_KEY"):
        params["api_key"] = os.environ["NCBI_API_KEY"]
    if os.environ.get("NCBI_EMAIL"):
        params["email"] = os.environ["NCBI_EMAIL"]
    url = EUTILS + endpoint + "?" + urllib.parse.urlencode(params)
    for attempt in range(4):
        try:
            with urllib.request.urlopen(url, timeout=30) as r:
                return json.load(r)
        except Exception as e:  # network hiccup or 429
            if attempt == 3:
                raise
            time.sleep(2 ** attempt * 2)
    return {}


def iso_date(summary):
    """Best-effort ISO date (YYYY-MM-DD or YYYY-MM) from an esummary record."""
    for key in ("epubdate", "pubdate", "sortpubdate"):
        raw = (summary.get(key) or "").strip()
        if not raw:
            continue
        if "/" in raw[:10]:  # sortpubdate "2025/03/14 00:00"
            parts = raw[:10].split("/")
            return "-".join(parts)
        bits = raw.replace(",", " ").split()
        try:
            year = int(bits[0])
        except (ValueError, IndexError):
            continue
        month = MONTHS.get(bits[1][:3]) if len(bits) > 1 else None
        day = bits[2] if len(bits) > 2 and bits[2].isdigit() else None
        if month and day:
            return f"{year:04d}-{month:02d}-{int(day):02d}"
        if month:
            return f"{year:04d}-{month:02d}"
        return f"{year:04d}"
    return ""


def authors(summary):
    names = [a.get("name", "") for a in summary.get("authors", []) if a.get("authtype", "Author") == "Author"]
    if len(names) > 3:
        return ", ".join(names[:3]) + ", et al."
    return ", ".join(names)


def doi(summary):
    for aid in summary.get("articleids", []):
        if aid.get("idtype") == "doi":
            return aid.get("value", "")
    return ""


SKIP_TYPES = {"Erratum", "Published Erratum", "Comment", "Editorial", "Retraction of Publication", "Retracted Publication"}


def fetch_topic(topic, days, limit):
    res = call("esearch.fcgi", {"db": "pubmed", "term": topic["query"], "retmode": "json", "sort": "pub_date",
                                 "retmax": limit * 2, "datetype": "edat", "reldate": days})
    ids = res.get("esearchresult", {}).get("idlist", [])
    if not ids:
        return []
    time.sleep(0.4)
    summ = call("esummary.fcgi", {"db": "pubmed", "id": ",".join(ids), "retmode": "json"})
    out = []
    for pmid in summ.get("result", {}).get("uids", []):
        s = summ["result"][pmid]
        if SKIP_TYPES & set(s.get("pubtype", [])):
            continue
        out.append({"pmid": pmid, "title": s.get("title", "").rstrip("."), "authors": authors(s),
                    "journal": s.get("source", ""), "date": iso_date(s), "doi": doi(s), "topics": [topic["id"]]})
        if len(out) >= limit:
            break
    return out


def load_existing():
    if OUT_JSON.exists():
        try:
            return json.loads(OUT_JSON.read_text(encoding="utf-8")).get("items", [])
        except json.JSONDecodeError:
            pass
    return []


def main():
    cfg = json.loads(TOPICS.read_text(encoding="utf-8"))
    items = {it["pmid"]: it for it in load_existing()}
    added = 0
    for topic in cfg["topics"]:
        try:
            found = fetch_topic(topic, cfg.get("lookback_days", 120), cfg.get("max_per_topic", 8))
        except Exception as e:
            print(f"warning: topic {topic['id']} failed: {e}", file=sys.stderr)
            continue
        for it in found:
            if it["pmid"] in items:
                old = items[it["pmid"]]
                old["topics"] = sorted(set(old.get("topics", [])) | set(it["topics"]))
            else:
                items[it["pmid"]] = it
                added += 1
        print(f"{topic['id']}: {len(found)} found")
        time.sleep(0.4)
    ordered = sorted(items.values(), key=lambda x: x.get("date", ""), reverse=True)[: cfg.get("max_items", 400)]
    data = {"updated": dt.date.today().isoformat(), "source": "PubMed (NCBI E-utilities)",
            "topics": [{"id": t["id"], "group": t.get("group", ""), "label": t["label"], "cluster": t.get("cluster", ""), "query": t["query"]} for t in cfg["topics"]],
            "items": ordered}
    OUT_JSON.write_text(json.dumps(data, indent=1, ensure_ascii=False) + "\n", encoding="utf-8")
    OUT_JS.write_text("/* Generated by scripts/update_news.py. Do not edit by hand. */\nwindow.NEWS = "
                      + json.dumps(data, ensure_ascii=False) + ";\n", encoding="utf-8")
    print(f"added {added} new papers; feed now has {len(ordered)}")


if __name__ == "__main__":
    main()
