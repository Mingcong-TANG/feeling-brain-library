#!/usr/bin/env python3
"""Check the module's journal citations against PubMed.

Extracts APA-style references from data/cases.js and data/assessments.js, searches PubMed for
each title, and compares year, volume and first page with the PubMed record. Writes a Markdown
report to docs/citation-report.md. Books, manuals and non-indexed journals are reported as
"not found" and need a manual check.

Usage:  python scripts/check_citations.py
"""
import json
import pathlib
import re
import time
import urllib.parse
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
FILES = [ROOT / "data" / "cases.js", ROOT / "data" / "assessments.js"]
REPORT = ROOT / "docs" / "citation-report.md"
EUTILS = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/"
# Author list, (Year). Title. Journal, Volume(Issue), pages
REF = re.compile(r"(?P<authors>[^\"]+?)\((?P<year>\d{4})\)\.\s+(?P<title>.+?[.?!”])\s+(?P<journal>[A-Z][^,]+),\s+(?P<vol>\d+)(?:\([^)]*\))?,\s+(?P<pages>[e\d]+)")


def call(endpoint, params):
    url = EUTILS + endpoint + "?" + urllib.parse.urlencode(dict(params, tool="feeling-brain-library"))
    for attempt in range(4):
        try:
            with urllib.request.urlopen(url, timeout=30) as r:
                return json.load(r)
        except Exception:
            time.sleep(2 ** attempt * 2)
    return {}


def refs():
    seen = set()
    for f in FILES:
        text = f.read_text(encoding="utf-8").encode().decode("unicode_escape", errors="ignore")
        for raw in re.findall(r'"([^"\n]{40,600})"', text):
            for part in raw.split("; "):
                m = REF.search(part)
                if m and m.group(0) not in seen:
                    seen.add(m.group(0))
                    yield m


def check(m):
    title = re.sub(r"[“”\"'?:]", " ", m.group("title")).strip(" .")
    words = [w for w in re.findall(r"[A-Za-z]{4,}", title)][:10]
    res = call("esearch.fcgi", {"db": "pubmed", "term": " AND ".join(f"{w}[ti]" for w in words), "retmode": "json", "retmax": 3})
    ids = res.get("esearchresult", {}).get("idlist", [])
    if not ids:
        return "not found", ""
    time.sleep(0.4)
    s = call("esummary.fcgi", {"db": "pubmed", "id": ids[0], "retmode": "json"}).get("result", {}).get(ids[0], {})
    problems = []
    if m.group("year") not in (s.get("pubdate", "") + s.get("epubdate", "")):
        problems.append(f"year {s.get('pubdate', '')[:4]}")
    if s.get("volume") and s.get("volume") != m.group("vol"):
        problems.append(f"volume {s.get('volume')}")
    first = (s.get("pages") or "").split("-")[0]
    if first and first.lstrip("e") != m.group("pages").lstrip("e"):
        problems.append(f"pages {s.get('pages')}")
    return ("check: " + ", ".join(problems)) if problems else "ok", ids[0]


def main():
    rows = []
    for m in refs():
        status, pmid = check(m)
        rows.append((status, pmid, m.group(0)))
        time.sleep(0.4)
    ok = sum(r[0] == "ok" for r in rows)
    lines = [f"# Citation check\n", f"{ok} of {len(rows)} journal references matched PubMed on year, volume and first page.\n",
             "| Status | PMID | Reference |", "|---|---|---|"]
    for status, pmid, ref in sorted(rows):
        link = f"[{pmid}](https://pubmed.ncbi.nlm.nih.gov/{pmid}/)" if pmid else ""
        lines.append(f"| {status} | {link} | {ref.replace('|', '/')} |")
    REPORT.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(lines[1])


if __name__ == "__main__":
    main()
