# The Feeling Brain Library

An interactive teaching module and research reference on the **neuropsychology of affective decision-making**.
It uses research-informed case vignettes of brain injury and neurological conditions to show how changes in
brain systems affect reward learning, decision-making and emotional behavior.

*Note.* This repository is for innovation project PS 829 only.

- **Live site:** https://mingcong-tang.github.io/feeling-brain-library/ (after GitHub Pages is turned on, see below)
- **Repository:** https://github.com/Mingcong-TANG/feeling-brain-library

## What's inside

| Section | What it contains |
|---|---|
| **Start here** | Primer on why emotion is part of judgment, and an interactive brain map. |
| **Case library** | 37 cases in 6 clusters, organized by brain system. Each case has a story, referral question, brain diagram, illustrative neuropsychological profile, three predict-and-check questions, a case conceptualization (brain → function → assessment → everyday life, strengths, weaknesses, differential) and a clinical takeaway with sources. Filter by brain region, cause or function. |
| **Assessments** | 275 clinical and research instruments in 22 domains, filterable by format (batteries, performance tests, experimental tasks, questionnaires, informant and clinician rating scales, structured interviews, diagnostic criteria and research methods), each with its subscales, indices or sub-dimensions, main scores, key reference, and links to the cases that use it. |
| **Compare** | Matrix of which functions (valuation, risk, reward learning, emotion, social behavior, motivation, expression, insight) each case affects. |
| **Research feed** | A search for the newest research: pick any of 38 topics, or enter a researcher, journal, title words, keywords or a year range (any one field is enough), sorted newest first, oldest first or by relevance. Runs live against PubMed (through the viewer's PubMed connector inside claude.ai, or PubMed's public E-utilities on GitHub Pages), otherwise searches a stored feed that a GitHub Action refreshes weekly, with a one-click link to the same search on PubMed. |
| **About** | Coverage audit and the full reference list. |

### Case clusters

- **A. Valuing outcomes** (vmPFC/OFC): Phineas Gage, EVR, reversal learning, moral judgment, early-onset damage, regret, Ultimatum Game
- **B. Threat, fear and loss** (amygdala, medial temporal lobe): SM, Klüver–Bucy features after encephalitis, temporal lobectomy
- **C. Reward learning and motivation** (dopamine, basal ganglia): Parkinson's impulse control disorders, subthalamic DBS, pallidal apathy, Huntington's disease, addiction
- **D. Body states, effort and initiative** (insula, ACC, medial frontal): insula stroke and smoking, cingulate apathy, acquired collecting, utilization behavior
- **E. Feeling, expression, mood and awareness** (hemispheric, cortico-ponto-cerebellar): anosognosia, Capgras delusion, post-stroke depression and catastrophic reaction, secondary mania, pseudobulbar affect
- **F. Progressive and diffuse conditions**: bvFTD, Alzheimer's and scams, traumatic brain injury, semantic dementia (right temporal), Wernicke–Korsakoff syndrome

## Run it

No build step is needed. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

### Publish with GitHub Pages

1. In the repository, go to **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
3. After a minute or two the site appears at https://mingcong-tang.github.io/feeling-brain-library/.
4. Optional: paste that link into the **About → Website** field on the repository page.

On GitHub Pages the Research feed searches PubMed live for every visitor, so results are always current.

### Uploading through the browser

The weekly feed update and the citation check live in the hidden `.github/workflows/` folder. Finder and File Explorer hide folders that start with a dot, so a drag-and-drop upload usually leaves it out. To add it, open the repository, choose **Add file → Create new file**, type `.github/workflows/update-news.yml` as the name, and paste the file's contents from the zip (repeat for `check-citations.yml`). Then check that both appear under the **Actions** tab.

### Single-file version

`python3 scripts/build_single_file.py` writes `dist/index.html`, one self-contained file with all data inlined.

## Core and extended libraries

By default the site shows a **core set**: the 24 classic cases and the 105 most commonly used instruments. Clinical tests, batteries, mood and validity measures follow the test-usage surveys of Rabin et al. (2005, 2016). Affective, social and research tasks follow the standard tasks in the studies behind the cases. A toggle on the Case library and Assessments tabs switches to the **extended** library (all 37 cases and 275 instruments). The lists live in `data/core.js`.

## Coverage audit

The About tab includes a coverage audit. The assessment library was checked area by area against Lezak et al. (2012), Strauss, Sherman and Spreen (2006), Heilman and Valenstein (2012) and Parsons and Braun (2024), down to battery subtests and indices, then extended with affective, social and research measures. The case library was checked against 37 phenomena of affective neuropsychology. See `docs/coverage-audit.md` and `data/coverage.js`.

## Research feed: search and weekly updates

**Searching.** On the Research feed tab, fill in any one field (or several): topics, researcher (e.g. `Bechara A`), journal, words in the title, keywords (title or abstract), or a year range. Inside claude.ai the published module searches PubMed live through the viewer's own PubMed connector (the first search asks permission; each topic is searched separately because the connector allows at most 20 boolean operators per query, and results are merged). When the site is served from GitHub Pages or any normal web server, the search runs live against PubMed's E-utilities. Either way it shows 40 matches, sorted newest first, oldest first or by relevance (the **Sort by** menu), attributed to PubMed, with PubMed and DOI links. If PubMed cannot be reached (for example inside a sandboxed preview), it searches the stored feed instead. Either way, a link opens the identical search on pubmed.ncbi.nlm.nih.gov. "Remember these topics" saves your topic choice in your browser.

**Weekly updates.**

A static site cannot update itself, so the feed is a data file that a scheduled job refreshes:

- `data/news_topics.json` holds the PubMed searches (one per topic) and settings such as the look-back window.
- `scripts/update_news.py` queries PubMed's public E-utilities, merges new papers into `data/news.json` and `data/news.js`, and keeps the newest 1,000. On opening the tab inside claude.ai, the page also fetches the newest papers for eight core topics through the viewer's PubMed connector, so the default list is current on every visit. The feed was first seeded on 2026-11-02 with the newest papers for every topic. Topic queries avoid `*` wildcards and stay under 20 boolean operators so the same query works through the connector.
- `.github/workflows/update-news.yml` runs the script **every Monday** and commits any changes. Run it right away from **Actions → Update research feed → Run workflow**.
- Optional: add repository secrets `NCBI_API_KEY` and `NCBI_EMAIL` (Settings → Secrets and variables → Actions) for higher PubMed rate limits.

Papers are added automatically and are not reviewed. Edit the topic queries to change what the feed tracks.

## Checking citations

`scripts/check_citations.py` searches PubMed for every journal reference in `data/cases.js` and `data/assessments.js`
and writes `docs/citation-report.md`, flagging mismatches in year, volume or first page. It runs from
**Actions → Check citations** and on pull requests that change the data files. See `docs/citation-status.md`
for what has been checked by hand.

## Repository layout

```
index.html                 page shell
assets/css/styles.css      styles (hand-drawn sketchbook look; light paper and dark chalkboard)
assets/js/app.js           brain map, routing, views and interactions
data/clusters.js           clusters, causes and function domains
data/cases.js              the 37 cases
data/coverage.js           coverage audit (reference areas and phenomena)
data/assessments.js        the assessment library
data/core.js               the core (most commonly used) cases and instruments
data/news_topics.json      research-feed searches
data/news.js, news.json    research feed (generated)
scripts/                   update_news.py, check_citations.py, build_single_file.py
dist/index.html            single-file build (generated on demand, not stored in the repository)
.github/workflows/         weekly feed update, citation check
docs/                      citation status and reports
```

## Editing content

- **Add a case:** copy an object in `data/cases.js`, give it a unique `id`, a `cluster` (A–F), `hits` (region keys from `assets/js/app.js`), `etiology` and `domains` keys from `data/clusters.js`.
- **Add an instrument:** add an object to `data/assessments.js` with a `domain` from `ASSESSMENT_DOMAINS` and the case `id`s it relates to.

## Important notes

- Except for Phineas Gage, every patient is an **illustrative composite**; stories and scores are invented to show typical patterns and are not real patient data.
- This is a teaching resource, **not for clinical use**. Many listed instruments are copyrighted and require purchase and training.
- Prepared with AI assistance (Claude); content was reviewed and should be checked against the cited sources.
