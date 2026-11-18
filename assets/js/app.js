/* ---------- Brain regions (schematic sagittal view, front at left) ---------- */
const REGIONS = {
  vmpfc: { label: "vmPFC / OFC", lx: 50, ly: 210, shape: '<ellipse class="shape" cx="104" cy="164" rx="28" ry="18"/>',
    name: "Ventromedial prefrontal and orbitofrontal cortex",
    role: "Integrates bodily and emotional signals with expected outcomes to assign value to options. Supports learning from punishment, updating when rewards change, and social and moral emotions." },
  dlpfc: { label: "dlPFC (lateral)", lx: 70, ly: 66, shape: '<ellipse class="shape lat" cx="112" cy="88" rx="30" ry="17"/>',
    name: "Dorsolateral prefrontal cortex (lateral surface)",
    role: "Working memory, planning and rule use. Often spared in the cases here, which is why standard executive tests can look normal. On the right, it contributes to checking beliefs against evidence." },
  acc: { label: "ACC", lx: 132, ly: 84, shape: '<ellipse class="shape" cx="158" cy="104" rx="30" ry="9" transform="rotate(-18 158 104)"/>',
    name: "Anterior cingulate cortex",
    role: "Monitors conflict and errors and weighs whether a reward is worth the effort. Contributes to the unpleasant, motivating part of pain." },
  caudate: { label: "Caudate", lx: 168, ly: 112, shape: '<ellipse class="shape" cx="182" cy="124" rx="15" ry="8"/>',
    name: "Caudate nucleus (dorsal striatum)",
    role: "Part of loops with the frontal lobes that support flexible, goal-directed behavior. Degenerates early in Huntington's disease." },
  striatum: { label: "Ventral striatum", lx: 112, ly: 140, shape: '<circle class="shape" cx="166" cy="148" r="11"/>',
    name: "Ventral striatum (nucleus accumbens)",
    role: "Receives dopamine signals about reward. Helps learn which actions lead to reward and drives motivation to pursue it." },
  gp: { label: "Globus pallidus", lx: 132, ly: 184, shape: '<circle class="shape" cx="194" cy="150" r="8"/>',
    name: "Globus pallidus",
    role: "An output stage of the basal ganglia. Helps turn the value of a goal into the energy to act on it; bilateral damage can cause severe apathy." },
  insula: { label: "Insula (lateral)", lx: 256, ly: 126, shape: '<ellipse class="shape lat" cx="226" cy="131" rx="24" ry="11"/>',
    name: "Anterior insula (deep, lateral)",
    role: "Maps internal body states (interoception), such as heartbeat, craving and disgust, and feeds them into decisions about risk and social behavior." },
  stn: { label: "STN", lx: 250, ly: 182, shape: '<circle class="shape" cx="240" cy="172" r="6"/>',
    name: "Subthalamic nucleus",
    role: "A brake in the basal ganglia that raises the threshold for acting when options conflict, buying time to decide." },
  vta: { label: "VTA / SN", lx: 296, ly: 252, shape: '<circle class="shape" cx="270" cy="186" r="9"/>',
    name: "Ventral tegmental area and substantia nigra",
    role: "Dopamine neurons here signal reward prediction errors: they fire more when an outcome is better than expected and less when it is worse." },
  atl: { label: "Temporal pole", lx: 84, ly: 228, shape: '<ellipse class="shape lat" cx="160" cy="200" rx="15" ry="9"/>',
    name: "Anterior temporal lobe (temporal pole)",
    role: "Stores knowledge about the meaning of objects, people and social concepts. Vulnerable to herpes encephalitis and head injury." },
  amygdala: { label: "Amygdala", lx: 160, ly: 246, shape: '<ellipse class="shape" cx="198" cy="194" rx="12" ry="10"/>',
    name: "Amygdala (medial temporal lobe)",
    role: "Detects threat and emotionally significant stimuli, supports fear learning and the felt experience of fear, and helps weigh potential losses." },
  hippocampus: { label: "Hippocampus", lx: 200, ly: 228, shape: '<ellipse class="shape" cx="234" cy="203" rx="20" ry="6"/>',
    name: "Hippocampus",
    role: "Forms new memories of facts and events. Shown here as a contrast: it supports knowing what happened, while the amygdala supports feeling it." },
  fusiform: { label: "Face areas (fusiform)", lx: 296, ly: 196, shape: '<ellipse class="shape lat" cx="300" cy="176" rx="20" ry="7"/>',
    name: "Fusiform and ventral visual face areas",
    role: "Recognize faces. Their links to limbic regions give familiar faces an emotional sense of familiarity." },
  parietal: { label: "Parietal (lateral)", lx: 262, ly: 54, shape: '<ellipse class="shape lat" cx="290" cy="78" rx="30" ry="17"/>',
    name: "Parietal cortex (lateral surface)",
    role: "Spatial attention and the body map. Right-sided damage can cause neglect and lack of awareness of weakness; it also degenerates in Alzheimer's disease." }
};
REGIONS.thalamus = { label: "Thalamus / mammillary", lx: 256, ly: 150, shape: '<ellipse class="shape" cx="238" cy="153" rx="13" ry="7"/>',
  name: "Medial thalamus and mammillary bodies (diencephalon)",
  role: "Relay and memory hubs linked to the hippocampus and frontal lobes. Damaged by thiamine deficiency in Wernicke\u2013Korsakoff syndrome." };
REGIONS.cerebellum = { label: "Cerebellum", lx: 306, ly: 220, shape: '<ellipse class="shape" cx="322" cy="214" rx="40" ry="24"/>',
  name: "Cerebellum",
  role: "Best known for coordinating movement, it also adjusts emotional expression and thought to context. Disrupted cortico-ponto-cerebellar pathways can cause pathological laughing and crying." };
REGIONS.pons = { label: "Pons", lx: 226, ly: 262, shape: '<path class="shape" d="M258 214 C260 228 262 240 264 250 L288 250 C285 238 284 226 285 214 Z"/>',
  name: "Pons (brainstem)",
  role: "Relays signals between the cortex and cerebellum and contains centers for facial and vocal expression." };
const REGION_ORDER = ["cerebellum", "pons", "vmpfc", "dlpfc", "acc", "striatum", "caudate", "gp", "thalamus", "stn", "vta", "insula", "amygdala", "hippocampus", "atl", "fusiform", "parietal"];

function brainSVG(key, hits, opts = {}) {
  const showAll = !!opts.showAll;
  const regions = REGION_ORDER.map(k => { const r = REGIONS[k];
    const on = hits.includes(k);
    return `<g class="region${on ? " hit" : ""}" data-region="${k}" data-fig="${key}" tabindex="0" role="button" aria-label="${r.name}"><title>${r.name}</title>${r.shape}${on || showAll ? `<text x="${r.lx}" y="${r.ly}">${r.label}</text>` : ""}</g>`; }).join("");
  return `<svg viewBox="0 0 420 290" role="img" aria-label="Schematic side view of the brain with affected regions highlighted">
    <defs><marker id="arr-${key}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--brain-line)"/></marker></defs>
    <path d="M70 172 C42 122 68 56 150 38 C222 22 312 34 352 84 C378 116 376 160 348 182 C322 199 292 192 272 198 C242 207 202 202 172 207 C132 214 92 202 70 172 Z" fill="var(--brain)" stroke="var(--brain-line)" stroke-width="1.5"/>
    <ellipse cx="322" cy="214" rx="40" ry="24" fill="var(--brain)" stroke="var(--brain-line)" stroke-width="1.5"/>
    <path d="M256 196 C259 222 262 244 266 272 L290 272 C285 244 283 220 286 196 Z" fill="var(--brain)" stroke="var(--brain-line)" stroke-width="1.5"/>
    <path d="M136 120 C186 92 262 94 306 128" fill="none" stroke="var(--brain-line)" stroke-width="5" stroke-linecap="round" opacity=".45"/>
    <path d="M262 182 C230 170 200 160 180 152" fill="none" stroke="var(--brain-line)" stroke-width="1" stroke-dasharray="3 3" marker-end="url(#arr-${key})" opacity=".7"/>
    <text x="40" y="30" class="fig-note">Front</text>
    <text x="352" y="30" class="fig-note">Back</text>
    ${regions}
  </svg>`;
}

/* ---------- Helpers ---------- */
const byId = Object.fromEntries(CASES.map(c => [c.id, c]));
/* Core (most commonly used) versus extended library */
let EXT = false;
try { EXT = localStorage.getItem("fgc-ext") === "1"; } catch (e) {}
const HAS_CORE = typeof CORE !== "undefined";
const isCoreCase = c => !HAS_CORE || CORE.cases.includes(c.id);
const isCoreTool = t => !HAS_CORE || CORE.tools.includes(t.id);
const visCases = () => EXT ? CASES : CASES.filter(isCoreCase);
const visTools = () => EXT ? ASSESSMENTS : ASSESSMENTS.filter(isCoreTool);
function extToggle(kind) {
  if (!HAS_CORE) return "";
  const core = kind === "cases" ? CASES.filter(isCoreCase).length : ASSESSMENTS.filter(isCoreTool).length;
  const all = kind === "cases" ? CASES.length : ASSESSMENTS.length;
  const what = kind === "cases" ? "cases" : "instruments";
  return `<div class="seg" role="group" aria-label="Library size">
    <button type="button" data-ext="0" aria-pressed="${!EXT}">Core: most commonly used (${core} ${what})</button>
    <button type="button" data-ext="1" aria-pressed="${EXT}">Extended: everything (${all})</button>
  </div>`;
}
const extTag = x => EXT && HAS_CORE && !(x.cases ? isCoreTool(x) : isCoreCase(x)) ? `<span class="tag sm ext">Extended</span>` : "";
const aliasMap = Object.fromEntries(CASES.filter(c => c.alias).map(c => [c.alias, c.id]));
const ORDER = CLUSTERS.flatMap(cl => CASES.filter(c => c.cluster === cl.id).map(c => c.id));
const clusterOf = c => CLUSTERS.find(cl => cl.id === c.cluster);
const caseLabel = c => `${c.cluster}${CASES.filter(x => x.cluster === c.cluster).indexOf(c) + 1}`;
const main = document.getElementById("main");

function infoHTML(k) {
  const r = REGIONS[k];
  const cases = visCases().filter(c => c.hits.includes(k));
  return `<span class="eyebrow">Selected region</span><h3>${r.name}</h3><p>${r.role}</p>
    ${cases.length ? `<p class="note">Cases involving this region: ${cases.map(c => `<a href="#case/${c.id}">${c.title}</a>`).join(" · ")}</p>` : ""}`;
}

/* A swipe of highlighter under each page heading. */
function markHeadings() { main.querySelectorAll("h2").forEach(h => { if (!h.querySelector(".hl")) h.innerHTML = `<span class="hl">${h.innerHTML}</span>`; }); }

/* A small pen doodle of whoever is telling the story. The look follows the speaker named in the case
   (for example "His wife" or "Mr. N, 58"); anything else gets a neutral figure. */
function faceSVG(c) {
  const speaker = c.who.split(/,?\s+describing\b/)[0];
  const name = speaker.split(",")[0].toLowerCase();
  const self = speaker === c.who;
  const age = self ? +((c.who.match(/,\s*(\d{2})\b/) || [])[1] || 0) : 0;
  let h = 0; for (const ch of c.id) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const kind = /\b(wife|daughter|sister|mother)\b|\bm(r)?s\./.test(name) ? "f" : /\b(husband|son|brother|father)\b|\bmr\./.test(name) ? "m" : "n";
  const hairs = {
    f: ['<path class="f-hair H" d="M9 31 C5 12 17 6 24 7 C31 6 43 12 39 31 C38 23 34 17 24 17 C14 17 10 23 9 31 Z"/>',
        '<circle class="f-hair H" cx="24" cy="6.5" r="4.6"/><path class="f-hair H" d="M10 25 C9 13 17 9 24 9 C31 9 39 13 38 25 C34 18 30 15 24 15 C18 15 14 18 10 25 Z"/>',
        '<path class="f-hair H" d="M9 40 C3 16 15 6 24 7 C33 6 45 16 39 40 C39 26 35 17 24 17 C13 17 9 26 9 40 Z"/>'],
    m: ['<path class="f-hair H" d="M11 23 C10 12 18 9 24 9 C30 9 38 12 37 23 C33 17 29 15 24 15 C19 15 15 17 11 23 Z"/>',
        '<path class="f-hair H" d="M10 24 C9 11 20 8 27 9 C34 10 39 15 37 24 C34 18 30 16 21 17 C16 18 12 20 10 24 Z"/>',
        '<path class="f-ink" d="M12 20 C14 14 18 11 22 11 M26 11 C30 11 34 14 36 20"/><circle class="f-ink" cx="18.5" cy="27" r="4.2"/><circle class="f-ink" cx="29.5" cy="27" r="4.2"/><path class="f-ink" d="M22.7 27 H25.3"/>'],
    n: ['<g class="f-hair H"><circle cx="13" cy="19" r="4.5"/><circle cx="18" cy="13" r="4.8"/><circle cx="24.5" cy="11" r="5"/><circle cx="31" cy="13" r="4.8"/><circle cx="35.5" cy="19" r="4.5"/></g>',
        '<path class="f-hat" d="M10 22 C10 10 18 7 24 7 C30 7 38 10 38 22 Z"/><path class="f-ink" d="M9 22 H39"/><circle class="f-hat" cx="24" cy="5.5" r="2.6"/>']
  };
  let hair = hairs[kind][h % hairs[kind].length];
  if (age >= 60) hair = hair.replace(/f-hair H/g, "f-hair f-grey");
  const eyes = h % 3 === 0 ? '<path class="f-ink" d="M16.5 27.5 q2 -2.4 4 0 M27.5 27.5 q2 -2.4 4 0"/>' : '<circle class="f-dot" cx="18.5" cy="27" r="1.7"/><circle class="f-dot" cx="29.5" cy="27" r="1.7"/>';
  const mouth = h % 2 ? '<path class="f-ink" d="M20 33.5 q4 3 8 0"/>' : '<path class="f-ink" d="M20.5 34 q3.5 1.6 7 0"/>';
  return `<svg class="face sketch" viewBox="0 0 48 52" aria-hidden="true">
    <path class="f-body" d="M7 52 C8 42 16 39 24 39 C32 39 40 42 41 52 Z"/>
    <circle class="f-skin" cx="24" cy="26" r="13.5"/>${hair}
    <ellipse class="f-cheek" cx="15.5" cy="31.5" rx="3" ry="2"/><ellipse class="f-cheek" cx="32.5" cy="31.5" rx="3" ry="2"/>
    ${eyes}${mouth}</svg>`;
}

function questionHTML(q, key) {
  return `<div class="q" data-q="${key}">
    <p class="stem">${q.stem}</p>
    <div class="opts">${q.opts.map((o, i) => `<button class="opt" data-i="${i}">${o}</button>`).join("")}</div>
    <p class="fb" hidden></p>
  </div>`;
}

/* ---------- Views ---------- */
function primerHTML() {
  return `<section class="view">
    <div class="prose">
      <span class="eyebrow">Start here</span>
      <h2>Emotion is part of judgment</h2>
      <p>People with damage to certain brain systems can reason perfectly well about a choice yet still choose badly, because the feelings that normally mark options as risky, rewarding, effortful or socially costly no longer reach the decision.</p>
      <p>The case library groups ${visCases().length} ${EXT ? "" : "core "}cases into ${CLUSTERS.length} clusters by the brain system most affected. Every case follows the same six steps: meet the person, locate the damage, read the profile, predict and check, build the case conceptualization, and consider what a clinician would do.</p>
    </div>
    <div class="brain-row">
      <figure class="brain-fig">${brainSVG("primer", [], { showAll: true })}
        <figcaption class="cap">Schematic side view, front at left. Structures at different depths are drawn on one plane; dashed outlines are on the lateral surface or deep inside it. Click a region.</figcaption>
      </figure>
      <div class="info" id="info-primer">${infoHTML("vmpfc")}</div>
    </div>
    <div class="circuit">${CLUSTERS.map(cl => `<a class="link card cl-${cl.id}" href="#library/${cl.id}"><span class="eyebrow">Cluster ${cl.id}</span><strong>${cl.name}</strong><span class="note">${cl.system}</span></a>`).join("")}</div>
    <div class="circuit">
      <a class="link card" href="#tools"><span class="eyebrow">Assessment library</span><strong>${visTools().length} ${EXT ? "" : "commonly used "}instruments</strong><span class="note">Clinical and research tests, questionnaires, rating scales and methods, with their subscales, linked to the cases.</span></a>
      <a class="link card" href="#research"><span class="eyebrow">Research feed</span><strong>Find the newest research</strong><span class="note">Search PubMed by topic, researcher, journal, title, keywords or years.</span></a>
      <a class="link card" href="#compare"><span class="eyebrow">Compare</span><strong>Functions by case</strong><span class="note">Which cases inform valuation, risk, learning, emotion, motivation, expression and awareness.</span></a>
    </div>
    <div class="pager"><span></span><a class="btn" href="#library">Open the case library</a></div>
  </section>`;
}

let filt = { q: "", et: "", region: "", dom: "" };
function libraryHTML(focus) {
  return `<section class="view">
    <div class="prose"><span class="eyebrow">Case library</span><h2>${visCases().length} ${EXT ? "" : "core "}cases in ${CLUSTERS.length} clusters</h2>
      <p>Browse by brain system, or narrow the list by searching, choosing a cause, or clicking a region on the brain. The core set holds the classic, most-taught cases; switch to Extended for less common phenomena.</p></div>
    ${extToggle("cases")}
    <div class="lib-tools">
      <figure class="brain-fig small">${brainSVG("lib", filt.region ? [filt.region] : [], { showAll: false })}
        <figcaption class="cap" id="lib-region-cap">${filt.region ? `Showing cases involving the ${REGIONS[filt.region].name.toLowerCase()}. <button class="linkbtn" data-clear="region">Clear</button>` : "Click a region to filter cases."}</figcaption></figure>
      <div class="filters">
        <label class="fld"><span class="eyebrow">Search</span><input id="f-q" type="search" placeholder="e.g. gambling, fear, stroke" value="${filt.q}"></label>
        <label class="fld"><span class="eyebrow">Cause</span><select id="f-et"><option value="">All causes</option>${Object.entries(ETIOLOGY).map(([k, v]) => `<option value="${k}"${filt.et === k ? " selected" : ""}>${v}</option>`).join("")}</select></label>
        <label class="fld"><span class="eyebrow">Function affected</span><select id="f-dom"><option value="">All functions</option>${Object.entries(DOMAINS).map(([k, v]) => `<option value="${k}"${filt.dom === k ? " selected" : ""}>${v}</option>`).join("")}</select></label>
        <p class="note" id="lib-count" aria-live="polite"></p>
      </div>
    </div>
    <div id="lib-list"></div>
  </section>`;
}

function libListHTML() {
  const q = filt.q.trim().toLowerCase();
  const match = c => (!filt.et || c.etiology === filt.et) && (!filt.region || c.hits.includes(filt.region)) && (!filt.dom || c.domains.includes(filt.dom)) &&
    (!q || [c.title, c.condition, c.story, c.who, c.finding, c.chain.join(' '), c.questions.map(x => x.stem).join(' '), ETIOLOGY[c.etiology], clusterOf(c).name, clusterOf(c).system].join(" ").toLowerCase().includes(q));
  let n = 0;
  const html = CLUSTERS.map(cl => {
    const cs = visCases().filter(c => c.cluster === cl.id && match(c));
    n += cs.length;
    if (!cs.length) return "";
    return `<section class="cluster cl-${cl.id}" id="cluster-${cl.id}">
      <div class="cluster-head"><span class="cl-badge">${cl.id}</span><div><h3>${cl.name}</h3><p class="note">${cl.system}. ${cl.fn}</p><p class="note"><strong>Key tasks:</strong> ${cl.tasks}</p></div></div>
      <div class="cards">${cs.map(c => `<a class="ccard" href="#case/${c.id}">
        <span class="eyebrow">${caseLabel(c)} · ${ETIOLOGY[c.etiology]}</span>${extTag(c)}
        <strong>${c.title}</strong>
        <span class="note">${c.condition}</span>
        <span class="dots">${c.hits.map(h => `<span class="tag sm">${REGIONS[h].label.replace(" (lateral)", "")}</span>`).join("")}</span>
      </a>`).join("")}</div></section>`;
  }).join("");
  return { html: html || `<p class="note">No cases match. <button class="linkbtn" data-clear="all">Clear filters</button></p>`, n };
}

function renderLibList() {
  const { html, n } = libListHTML();
  document.getElementById("lib-list").innerHTML = html;
  document.getElementById("lib-count").textContent = `${n} of ${visCases().length} cases shown`;
}

function caseHTML(c) {
  const i = ORDER.indexOf(c.id), prev = byId[ORDER[i - 1]], next = byId[ORDER[i + 1]], cl = clusterOf(c);
  return `<section class="view case cl-${cl.id}">
    <nav class="crumbs note" aria-label="Breadcrumb"><a href="#library">Library</a> › <a href="#library/${cl.id}">${cl.id}. ${cl.name}</a> › ${caseLabel(c)}</nav>
    <div class="case-head"><div class="case-band" aria-hidden="true"></div>
      <span class="eyebrow">Case ${caseLabel(c)} · ${i + 1} of ${CASES.length}</span>
      <h2>${c.title}</h2>
      <div class="case-meta"><span class="tag">${c.condition}</span><span class="tag">${ETIOLOGY[c.etiology]}</span><span class="tag">Side: ${c.side}</span>${c.week ? `<span class="tag">Course link: ${c.week}</span>` : ""}${c.domains.map(d => `<span class="tag dom fn-${d}">${DOMAINS[d]}</span>`).join("")}</div>
    </div>

    <div class="step"><div class="step-num">1</div><div class="step-body">
      <h3>Meet the person</h3>
      <figure class="talk"><blockquote class="story">${c.story}</blockquote><figcaption class="who">${faceSVG(c)}<span>${c.who}</span></figcaption></figure>
      <p class="referral"><span class="eyebrow">Referral question</span> ${c.referral}</p>
    </div></div>

    <div class="step"><div class="step-num">2</div><div class="step-body">
      <h3>Locate the damage</h3>
      <p>Highlighted regions are affected in this case. Click any region to read about its normal role and see other cases that involve it.</p>
      <div class="brain-row">
        <figure class="brain-fig">${brainSVG(c.id, c.hits)}<figcaption class="cap">Affected: ${c.hits.map(h => REGIONS[h].name).join("; ")}. Side: ${c.side}.</figcaption></figure>
        <div class="info" id="info-${c.id}">${infoHTML(c.hits[0])}</div>
      </div>
    </div></div>

    <div class="step"><div class="step-num">3</div><div class="step-body">
      <h3>Read the profile</h3>
      <div class="tbl"><table>
        <thead><tr><th>Measure</th><th>Result</th><th>Interpretation</th></tr></thead>
        <tbody>${c.profile.map(p => `<tr><td>${p[0]}</td><td class="score">${p[1]}</td><td><span class="chip ${p[3]}">${p[2]}</span></td></tr>`).join("")}</tbody>
      </table></div>
      <p class="disclaimer">${c.profileNote || "Illustrative profile modeled on published cases and group studies. Scores are invented to show a typical pattern."}</p>
      ${toolsForCase(c.id)}
    </div></div>

    <div class="step"><div class="step-num">4</div><div class="step-body">
      <h3>Predict, then check</h3>
      ${c.questions.map((q, k) => questionHTML(q, `${c.id}-${k}`)).join("")}
      ${c.igt ? igtHTML() : ""}
    </div></div>

    <div class="step"><div class="step-num">5</div><div class="step-body">
      <h3>Case conceptualization</h3>
      <div class="chain">
        <div class="link"><span class="eyebrow">Brain</span>${c.chain[0]}</div>
        <div class="link"><span class="eyebrow">Function</span>${c.chain[1]}</div>
        <div class="link"><span class="eyebrow">Assessment</span>${c.chain[2]}</div>
        <div class="link"><span class="eyebrow">Everyday life</span>${c.chain[3]}</div>
      </div>
      <div class="formulation">
        <p><span class="eyebrow">Strengths</span> ${c.profile.filter(p => p[3] === "ok").map(p => p[0]).join("; ") || "None documented"}</p>
        <p><span class="eyebrow">Weaknesses</span> ${c.profile.filter(p => p[3] !== "ok").map(p => p[0]).join("; ")}</p>
        <p><span class="eyebrow">Rule out</span> ${c.differential}</p>
      </div>
      <p class="finding">${c.finding}</p>
    </div></div>

    <div class="step"><div class="step-num">6</div><div class="step-body">
      <h3>Clinical takeaway</h3>
      <p class="measure">${c.takeaway}</p>
      <details><summary class="note">Sources for this case</summary>
        <ol class="refs">${c.refs.map(r => `<li>${r}</li>`).join("")}</ol>
      </details>
    </div></div>

    <div class="pager">
      ${prev ? `<a class="btn ghost" href="#case/${prev.id}">Back: ${caseLabel(prev)}</a>` : `<a class="btn ghost" href="#library">Back to library</a>`}
      ${next ? `<a class="btn" href="#case/${next.id}">Next: ${caseLabel(next)} ${next.title}</a>` : `<a class="btn" href="#tools">Assessment library</a>`}
    </div>
  </section>`;
}

function compareHTML() {
  const doms = Object.keys(DOMAINS);
  return `<section class="view">
    <div class="prose"><span class="eyebrow">Compare</span><h2>Which functions does each case affect?</h2>
      <p>A dot marks a function that is prominently affected in that case. Read down a column to find every case that informs one function, or across a row to see a case's profile at a glance. The function names stay at the top as you scroll.</p></div>
    <div class="tbl cmp-scroll"><table class="cmp">
      <thead><tr><th>Case</th>${doms.map(d => `<th class="c">${DOMAINS[d]}</th>`).join("")}</tr></thead>
      <tbody>${CLUSTERS.map(cl => `<tr class="grp cl-${cl.id}"><td colspan="${doms.length + 1}"><span>${cl.id}. ${cl.name} · ${cl.system}</span></td></tr>` +
        visCases().filter(c => c.cluster === cl.id).map(c => `<tr><td><a href="#case/${c.id}">${caseLabel(c)} ${c.title}</a><br><span class="note">${c.condition}</span></td>${doms.map(d => `<td class="c">${c.domains.includes(d) ? '<span class="dot" aria-label="affected">●</span>' : ""}</td>`).join("")}</tr>`).join("")).join("")}</tbody>
    </table></div>
  </section>`;
}

/* ---------- Assessment library ---------- */
const toolById = Object.fromEntries(ASSESSMENTS.map(t => [t.id, t]));
const domainById = Object.fromEntries(ASSESSMENT_DOMAINS.map(d => [d.id, d]));
const GROUP_COLOR = { "Core neuropsychological battery": "A", "Affective and social neuropsychology": "B", "Behavior, mood and awareness": "E", "Function, capacity and validity": "C", "Research methods": "D" };
const TOPIC_COLOR = { "Brain systems": "A", "Functions": "C", "Conditions": "B", "Assessment and methods": "D" };
let tfilt = { q: "", dom: "", use: "", fmt: "" };
const FORMATS = [["perf", "Performance tests and batteries"], ["task", "Experimental tasks"], ["self", "Self-report questionnaires"], ["inf", "Informant ratings"], ["clin", "Clinician ratings and interviews"], ["crit", "Diagnostic criteria and staging"], ["meth", "Physiology, imaging and analysis methods"]];
function toolFormat(t) {
  const k = t.kind.toLowerCase();
  if (k.includes("criteria")) return "crit";
  if (k.includes("experimental task")) return "task";
  if (k.includes("method") || k.includes("psychophys") || k.includes("imaging")) return "meth";
  if (k.startsWith("performance") || k.includes("battery")) return "perf";
  if (k.startsWith("clinician") || k.includes("interview") || k.includes("observer") || k.startsWith("questionnaire / clinician")) return "clin";
  if (k.startsWith("informant")) return "inf";
  return "self";
}

function toolsForCase(id) {
  const ts = ASSESSMENTS.filter(t => t.cases.includes(id));
  if (!ts.length) return "";
  return `<p class="note tools-for"><strong>Assessment tools relevant to this case:</strong> ${ts.map(t => `<a href="#tools/${t.id}">${t.abbr}</a>`).join(" · ")}</p>`;
}

function toolsHTML() {
  return `<section class="view">
    <div class="prose"><span class="eyebrow">Assessment library</span><h2>${visTools().length} ${EXT ? "" : "commonly used "}instruments in ${ASSESSMENT_DOMAINS.filter(d => visTools().some(t => t.domain === d.id)).length} domains</h2>
      <p>Clinical and research measures used to assess affective decision-making and the cognitive, emotional and behavioral functions around it. Each entry lists its subscales, indices or sub-dimensions, its main scores, and the cases that use it. Domains are grouped from the core neuropsychological battery to research methods. Filter by format to see only tests, experimental tasks, questionnaires, informant or clinician ratings, criteria or methods. <a href="#about" data-cov="1">How coverage was checked</a>.</p>
      <p class="note">The core set follows the instruments neuropsychologists report using most often (Rabin et al., 2005, 2016), plus the standard affective and social tasks from the studies behind the cases. Extended adds less common, specialized and research-only measures.</p></div>
    ${extToggle("tools")}
    <div class="filters row">
      <label class="fld"><span class="eyebrow">Search</span><input id="t-q" type="search" placeholder="e.g. empathy, apathy, IGT, insight" value="${tfilt.q}"></label>
      <label class="fld"><span class="eyebrow">Domain</span><select id="t-dom"><option value="">All domains</option>${ASSESSMENT_DOMAINS.map(d => `<option value="${d.id}"${tfilt.dom === d.id ? " selected" : ""}>${d.name}</option>`).join("")}</select></label>
      <label class="fld"><span class="eyebrow">Format</span><select id="t-fmt"><option value="">All formats</option>${FORMATS.map(([id, n]) => `<option value="${id}"${tfilt.fmt === id ? " selected" : ""}>${n} (${visTools().filter(t => toolFormat(t) === id).length})</option>`).join("")}</select></label>
      <label class="fld"><span class="eyebrow">Setting</span><select id="t-use"><option value="">Clinical and research</option><option value="Clinical"${tfilt.use === "Clinical" ? " selected" : ""}>Mainly clinical</option><option value="Research"${tfilt.use === "Research" ? " selected" : ""}>Mainly research</option><option value="Both"${tfilt.use === "Both" ? " selected" : ""}>Both</option></select></label>
    </div>
    <p class="note" id="t-count" aria-live="polite"></p>
    <div id="t-list"></div>
    <p class="disclaimer">Subscale lists follow published manuals and validation papers. Many instruments are copyrighted and require purchase and training; check the current manual edition before clinical use.</p>
  </section>`;
}

function renderTools() {
  const q = tfilt.q.trim().toLowerCase();
  const match = t => (!tfilt.dom || t.domain === tfilt.dom) && (!tfilt.use || t.use === tfilt.use) && (!tfilt.fmt || toolFormat(t) === tfilt.fmt) &&
    (!q || [t.name, t.abbr, t.measures, t.sub.join(" "), t.scores, t.kind, domainById[t.domain].name].join(" ").toLowerCase().includes(q));
  let n = 0, html = "", lastGroup = "";
  ASSESSMENT_DOMAINS.forEach(d => {
    const ts = visTools().filter(t => t.domain === d.id && match(t));
    if (!ts.length) return;
    n += ts.length;
    if (d.group !== lastGroup) { html += `<h3 class="tgroup cl-${GROUP_COLOR[d.group] || "A"}">${d.group}</h3>`; lastGroup = d.group; }
    html += `<section class="tdomain"><h4>${d.name} <span class="note">(${ts.length})</span></h4>
      ${ts.map(t => `<details class="tool" id="tool-${t.id}"><summary><span class="tname"><strong>${t.abbr}</strong> ${t.name}</span>${extTag(t)}<span class="tmeta"><span class="tag sm">${t.kind}</span><span class="tag sm ${t.use === "Research" ? "res" : t.use === "Clinical" ? "cli" : ""}">${t.use === "Both" ? "Clinical and research" : t.use}</span></span></summary>
        <div class="tbody">
          <p>${t.measures}</p>
          <p class="eyebrow">Subscales, indices or dimensions</p>
          <ul class="subs">${t.sub.map(x => `<li>${x}</li>`).join("")}</ul>
          <p><span class="eyebrow">Scores</span> ${t.scores}</p>
          ${t.cases.length ? `<p><span class="eyebrow">Used in cases</span> ${t.cases.filter(id => byId[id]).map(id => `<a href="#case/${id}">${caseLabel(byId[id])} ${byId[id].title}</a>`).join(" · ")}</p>` : ""}
          <p class="note">${t.ref}</p>
        </div></details>`).join("")}
    </section>`;
  });
  document.getElementById("t-list").innerHTML = html || `<p class="note">No instruments match.</p>`;
  document.getElementById("t-count").textContent = `${n} of ${visTools().length} instruments shown`;
}

function openTool(id) {
  const el = document.getElementById("tool-" + id);
  if (el) { el.open = true; setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 30); }
}

/* ---------- Research feed and search ---------- */
const NEWSDATA = (typeof window !== "undefined" && window.NEWS) || { updated: "", topics: [], items: [] };
const NTOPICS = NEWSDATA.topics || [];
const ntopicById = Object.fromEntries(NTOPICS.map(t => [t.id, t]));
let nq = { topics: [], author: "", journal: "", title: "", keywords: "", from: "", to: "", sort: "new" };
try { const saved = JSON.parse(localStorage.getItem("fgc-topics") || "[]"); if (Array.isArray(saved)) nq.topics = saved.filter(id => ntopicById[id]); } catch (e) {}
let nsearchSeq = 0;

function researchHTML() {
  const groups = [...new Set(NTOPICS.map(t => t.group || "Topics"))];
  const yr = new Date().getFullYear();
  return `<section class="view">
    <div class="prose"><span class="eyebrow">Research feed</span><h2>Find the newest research</h2>
      <p>Search by any one of these, or combine them: topics you are interested in, a researcher, a journal, words in the title, keywords, or a range of years. Results are newest first.</p></div>
    <form id="nform" class="nform" autocomplete="off">
      <fieldset class="topics"><legend class="eyebrow">Topics <span class="note">(${NTOPICS.length}; choose any)</span></legend>
        ${groups.map(g => `<div class="tg cl-${TOPIC_COLOR[g] || "A"}"><p class="note"><strong>${g}</strong></p><div class="chips">${NTOPICS.filter(t => (t.group || "Topics") === g).map(t => `<label class="chip-check"><input type="checkbox" name="topic" value="${t.id}"${nq.topics.includes(t.id) ? " checked" : ""}><span>${t.label}</span></label>`).join("")}</div></div>`).join("")}
        <div class="chips"><button type="button" class="linkbtn" id="n-save">Remember these topics</button><button type="button" class="linkbtn" id="n-none">Clear topics</button><span class="note" id="n-saved" aria-live="polite"></span></div>
      </fieldset>
      <div class="filters row">
        <label class="fld"><span class="eyebrow">Researcher</span><input name="author" placeholder="e.g. Bechara A or Fellows LK" value="${esc(nq.author)}"></label>
        <label class="fld"><span class="eyebrow">Journal</span><input name="journal" placeholder="e.g. Brain or Neuropsychologia" value="${esc(nq.journal)}"></label>
        <label class="fld"><span class="eyebrow">Words in title</span><input name="title" placeholder="e.g. orbitofrontal" value="${esc(nq.title)}"></label>
        <label class="fld"><span class="eyebrow">Keywords (title or abstract)</span><input name="keywords" placeholder="e.g. apathy reward" value="${esc(nq.keywords)}"></label>
        <label class="fld"><span class="eyebrow">From year</span><input name="from" type="number" min="1900" max="${yr}" placeholder="e.g. 2020" value="${nq.from}"></label>
        <label class="fld"><span class="eyebrow">To year</span><input name="to" type="number" min="1900" max="${yr + 1}" placeholder="${yr}" value="${nq.to}"></label>
        <label class="fld"><span class="eyebrow">Sort by</span><select name="sort">${SORTS.map(([k, l]) => `<option value="${k}"${(nq.sort || "new") === k ? " selected" : ""}>${l}</option>`).join("")}</select></label>
      </div>
      <div class="chips"><button class="btn" type="submit">Search</button><button class="btn ghost" type="button" id="n-reset">Clear all</button></div>
    </form>
    <div id="n-status" class="note" aria-live="polite"></div>
    <div id="n-list"></div>
  </section>`;
}

const SORTS = [["new", "Newest first"], ["old", "Oldest first"], ["rel", "Most relevant"]];
function orderItems(items) {
  const s = nq.sort || "new";
  if (s === "rel") return items;
  const out = items.slice().sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  return s === "old" ? out.reverse() : out;
}
function readNForm() {
  const f = document.getElementById("nform");
  const v = n => (f.elements[n].value || "").trim();
  nq = { topics: [...f.querySelectorAll('input[name="topic"]:checked')].map(x => x.value),
    author: v("author"), journal: v("journal"), title: v("title"), keywords: v("keywords"), from: v("from"), to: v("to"), sort: v("sort") || "new" };
}

function nIsEmpty() { return !nq.topics.length && !nq.author && !nq.journal && !nq.title && !nq.keywords && !nq.from && !nq.to; }

function pubmedTerm() {
  const parts = [];
  if (nq.topics.length) parts.push("(" + nq.topics.map(id => "(" + ntopicById[id].query + ")").join(" OR ") + ")");
  if (nq.author) parts.push(nq.author.split(/[;,]/).map(a => a.trim()).filter(Boolean).map(a => `"${a}"[au]`).join(" AND "));
  if (nq.journal) parts.push(`"${nq.journal}"[journal]`);
  if (nq.title) parts.push(nq.title.split(/\s+/).map(w => `${w}[ti]`).join(" AND "));
  if (nq.keywords) parts.push(nq.keywords.split(/\s+/).map(w => `${w}[tiab]`).join(" AND "));
  if (nq.from || nq.to) parts.push(`${nq.from || 1900}:${nq.to || new Date().getFullYear() + 1}[dp]`);
  return parts.join(" AND ");
}

function localMatches() {
  const has = (hay, needle) => !needle || needle.toLowerCase().split(/\s+/).every(w => (hay || "").toLowerCase().includes(w));
  return (NEWSDATA.items || []).filter(it => {
    const y = parseInt((it.date || "").slice(0, 4), 10);
    return (!nq.topics.length || (it.topics || []).some(t => nq.topics.includes(t))) &&
      (!nq.author || nq.author.split(/[;,]/).every(a => has(it.authors, a.trim().split(" ")[0]))) &&
      has(it.journal, nq.journal) && has(it.title, nq.title) && has(it.title, nq.keywords) &&
      (!nq.from || y >= +nq.from) && (!nq.to || y <= +nq.to);
  });
}

function itemHTML(it) {
  const ts = (it.topics || []).map(id => ntopicById[id]).filter(Boolean);
  return `<article class="nitem">
    <a class="ntitle" href="https://pubmed.ncbi.nlm.nih.gov/${it.pmid}/" target="_blank" rel="noopener">${esc(it.title)}</a>
    <p class="note">${esc(it.authors || "")} · <em>${esc(it.journal || "")}</em> · ${esc(it.date || "")}${it.doi ? ` · <a href="https://doi.org/${encodeURI(it.doi)}" target="_blank" rel="noopener">DOI</a>` : ""}</p>
    ${ts.length ? `<p class="dots">${ts.map(t => `<span class="tag sm">${t.label}</span>${t.cluster ? `<a class="tag sm dom cl-${t.cluster}" href="#library/${t.cluster}">Cluster ${t.cluster}</a>` : ""}`).join("")}</p>` : ""}
  </article>`;
}

function listHTML(items, flat) {
  if (flat) return `<section class="nmonth">${items.map(itemHTML).join("")}</section>`;
  const byMonth = {};
  items.forEach(it => { const m = (it.date || "Undated").slice(0, 7); (byMonth[m] = byMonth[m] || []).push(it); });
  return Object.entries(byMonth).map(([m, list]) => `<section class="nmonth"><h3>${/^\d{4}-\d{2}$/.test(m) ? new Date(m + "-01T00:00:00").toLocaleDateString(undefined, { year: "numeric", month: "long" }) : m}</h3>${list.map(itemHTML).join("")}</section>`).join("");
}

function pubmedLink() {
  const srt = { new: "&sort=date", old: "&sort=date&sort_order=asc", rel: "" }[nq.sort || "new"];
  return `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(pubmedTerm())}${srt}`;
}

const LATEST_TOPICS = ["vmpfc", "amygdala", "striatum", "insula", "dm_risk", "emotion_recog", "apathy", "bvftd"];
let liveLatest = null;
function newestStored() {
  const byId = {};
  (liveLatest || []).concat(NEWSDATA.items || []).forEach(it => { if (!byId[it.pmid]) byId[it.pmid] = it; });
  return Object.values(byId).sort((a, b) => (b.date || "").localeCompare(a.date || "")).slice(0, 60);
}
function showNewest() {
  const status = document.getElementById("n-status"), list = document.getElementById("n-list");
  if (!status || !nIsEmpty()) return;
  const items = newestStored();
  status.innerHTML = items.length ? `The newest papers. Source: PubMed.` : "";
  list.innerHTML = items.length ? listHTML(items) : "";
}
async function refreshLatest() {
  if (liveLatest) return;
  const mcp = await getMcp(); if (!mcp) return;
  try {
    const tagOf = {}; const ids = [];
    const ts = LATEST_TOPICS.filter(id => ntopicById[id]);
    for (let i = 0; i < ts.length; i += 2) {
      const res = await Promise.all(ts.slice(i, i + 2).map(id => callPubMed(mcp, "search_articles", { query: noWildcards(ntopicById[id].query), sort: "pub_date", max_results: 6 }, 3600000).then(r => ({ id, r }))));
      res.forEach(({ id, r }) => (r.pmids || []).forEach(p => { if (!tagOf[p]) { tagOf[p] = []; ids.push(p); } tagOf[p].push(id); }));
    }
    if (!ids.length) return;
    liveLatest = await articlesFor(mcp, ids.slice(0, 48), tagOf); showNewest();
  } catch (e) {}
}
function renderNews() {
  if (nIsEmpty()) { showNewest(); refreshLatest(); return; }
  runSearch();
}

/* PubMed through the viewer's claude.ai PubMed connector (inside claude.ai), else E-utilities directly (GitHub Pages), else the stored feed. */
const WILD = { "Alzheimer": ["Alzheimer"], "Huntington": ["Huntington"], "Korsakoff": ["Korsakoff"], "Parkinson": ["Parkinson"],
  behavio: ["behavior", "behaviour", "behavioral", "behavioural"], cerebell: ["cerebellum", "cerebellar"], cognit: ["cognition", "cognitive"],
  decision: ["decision", "decisions"], dopamin: ["dopamine", "dopaminergic"], emotion: ["emotion", "emotions", "emotional"],
  hemispher: ["hemisphere", "hemispheric"], impulsiv: ["impulsive", "impulsivity"], insula: ["insula", "insular"],
  interocept: ["interoception", "interoceptive"], irritab: ["irritability", "irritable"], lateraliz: ["lateralization", "lateralized"],
  lesion: ["lesion", "lesions"], mentaliz: ["mentalizing", "mentalising"], model: ["model", "models", "modeling", "modelling"],
  neurolog: ["neurological", "neurology"], psychometric: ["psychometric", "psychometrics"], risk: ["risk", "risky"], scam: ["scam", "scams"],
  striat: ["striatum", "striatal"] };
function noWildcards(q) {
  return q.replace(/"([^"]*?)\*"/g, '"$1"').replace(/([A-Za-z-]+)\*(\[[A-Za-z]+\])?/g, (m, stem, tag) => {
    const forms = WILD[stem] || [stem]; tag = tag || "";
    return forms.length === 1 ? forms[0] + tag : "(" + forms.map(f => f + tag).join(" OR ") + ")";
  }).replace(/\*/g, "");
}
let mcpPromise = null;
function getMcp() {
  if (!mcpPromise) mcpPromise = (window.claude && typeof window.claude.use === "function") ? window.claude.use("mcp").catch(() => null) : Promise.resolve(null);
  return mcpPromise;
}
function shortAuthors(list) { return list.length > 3 ? list.slice(0, 3).join(", ") + ", et al." : list.join(", "); }
function fieldTerm() {
  const keep = { topics: nq.topics, from: nq.from, to: nq.to };
  nq.topics = []; nq.from = ""; nq.to = "";
  const t = pubmedTerm(); Object.assign(nq, keep); return t;
}
const sleep = ms => new Promise(r => setTimeout(r, ms));
async function callPubMed(mcp, tool, input, stale) {
  for (let tries = 0; ; tries++) {
    try { return (await mcp.callTool("PubMed", tool, input, { cache: { staleTime: stale, gcTime: 86400000 } })).payload || {}; }
    catch (e) { if (tries < 2 && e && (e.retryable || /RATE_LIMIT/.test(e.message || ""))) { await sleep(2000 * (tries + 1)); continue; } throw e; }
  }
}
/* The connector allows at most 20 boolean operators per query, so each topic is searched on its own and the results are merged. */
const MAX_TOPICS = 6;
async function articlesFor(mcp, ids, tagOf) {
  const d = await callPubMed(mcp, "get_article_metadata", { pmids: ids }, 86400000);
  const pad = v => v ? String(v).padStart(2, "0") : "";
  return (d.articles || []).map(a => {
    const pd = a.publication_date || {}; const id = a.identifiers || {};
    return { pmid: String(id.pmid || ""), title: (a.title || "").replace(/\.$/, ""),
      authors: shortAuthors((a.authors || []).map(x => `${x.last_name || ""} ${x.initials || ""}`.trim()).filter(Boolean)),
      journal: (a.journal && (a.journal.iso_abbreviation || a.journal.title)) || "",
      date: [pd.year, pad(pd.month), pad(pd.day)].filter(Boolean).join("-"), doi: id.doi || a.doi || "", topics: tagOf[String(id.pmid)] || [] };
  }).sort((x, y) => (y.date || "").localeCompare(x.date || ""));
}
const GENERIC_Q = "(decision[tiab] OR emotion[tiab] OR reward[tiab]) AND (lesion[tiab] OR lesions[tiab] OR patients[tiab]) AND neuropsycholog[tiab]".replace("neuropsycholog[tiab]", "(neuropsychological[tiab] OR neuropsychology[tiab])");
async function searchViaConnector(mcp) {
  const fields = noWildcards(fieldTerm());
  const topics = nq.topics.slice(0, MAX_TOPICS);
  const jobs = topics.length ? topics.map(id => ({ id, query: "(" + noWildcards(ntopicById[id].query) + ")" + (fields ? " AND " + fields : "") })) : [{ id: null, query: fields || GENERIC_Q }];
  const per = topics.length > 1 ? 15 : 40;
  const base = { sort: nq.sort === "rel" ? "relevance" : "pub_date", max_results: per };
  if (nq.from || nq.to) { base.date_from = String(nq.from || 1900); base.date_to = String(nq.to || new Date().getFullYear() + 1); }
  const tagOf = {}; let total = 0; const order = [];
  for (let i = 0; i < jobs.length; i += 2) {
    const res = await Promise.all(jobs.slice(i, i + 2).map(async j => {
      let r = await callPubMed(mcp, "search_articles", Object.assign({ query: j.query }, base), 3600000);
      /* PubMed lists newest first, so the oldest papers are on the last page. */
      if (nq.sort === "old" && (r.total_count || 0) > per) r = Object.assign(await callPubMed(mcp, "search_articles", Object.assign({ query: j.query, retstart: r.total_count - per }, base), 3600000), { total_count: r.total_count });
      return { j, r };
    }));
    res.forEach(({ j, r }) => { total += r.total_count || 0;
      (r.pmids || []).forEach(id => { if (!tagOf[id]) { tagOf[id] = []; order.push(id); } if (j.id) tagOf[id].push(j.id); }); });
  }
  /* PMIDs rise with time, so the largest are the newest. Relevance keeps PubMed's order, alternating between topics. */
  let ids;
  if (nq.sort === "rel") ids = order.slice(0, 40);
  else ids = order.sort((a, b) => nq.sort === "old" ? +a - +b : +b - +a).slice(0, 40);
  let items = ids.length ? await articlesFor(mcp, ids, tagOf) : [];
  if (nq.sort === "rel") { const pos = Object.fromEntries(ids.map((id, i) => [id, i])); items.sort((a, b) => pos[a.pmid] - pos[b.pmid]); }
  return { items, total, approx: topics.length > 1, capped: nq.topics.length > MAX_TOPICS };
}
async function searchViaEutils() {
  const base = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/";
  const ctl = new AbortController(); const timer = setTimeout(() => ctl.abort(), 9000);
  try {
    const q = `${base}esearch.fcgi?db=pubmed&retmode=json&sort=${nq.sort === "rel" ? "relevance" : "pub_date"}&retmax=40&tool=feeling-brain-library&term=${encodeURIComponent(pubmedTerm())}`;
    let s = await fetch(q, { signal: ctl.signal }).then(r => r.json());
    const cnt = +((s.esearchresult && s.esearchresult.count) || 0);
    if (nq.sort === "old" && cnt > 40) s = await fetch(q + `&retstart=${cnt - 40}`, { signal: ctl.signal }).then(r => r.json());
    const ids = (s.esearchresult && s.esearchresult.idlist) || [];
    const total = (s.esearchresult && s.esearchresult.count) || 0;
    let items = [];
    if (ids.length) {
      const d = await fetch(`${base}esummary.fcgi?db=pubmed&retmode=json&tool=feeling-brain-library&id=${ids.join(",")}`, { signal: ctl.signal }).then(r => r.json());
      items = (d.result && d.result.uids || []).map(id => { const r = d.result[id];
        const doi = (r.articleids || []).find(a => a.idtype === "doi");
        return { pmid: id, title: (r.title || "").replace(/\.$/, ""), authors: shortAuthors((r.authors || []).map(a => a.name)),
          journal: r.source || "", date: r.sortpubdate ? r.sortpubdate.slice(0, 10).replace(/\//g, "-") : (r.pubdate || ""), doi: doi ? doi.value : "",
          topics: nq.topics.slice() }; });
      if (nq.sort === "rel") { const pos = Object.fromEntries(ids.map((id, i) => [String(id), i])); items.sort((a, b) => pos[a.pmid] - pos[b.pmid]); }
    }
    return { items, total };
  } finally { clearTimeout(timer); }
}
const CONNECTOR_NOTE = {
  server_not_connected: "To search PubMed live here, add the free PubMed connector in claude.ai (Settings, then Connectors).",
  needs_reauth: "Reconnect the PubMed connector in claude.ai (Settings, then Connectors) to search live.",
  selection_required: "Choose which PubMed connector this page should use when claude.ai asks.",
  not_in_manifest: "PubMed access is turned off for this page. You can allow it from the page's Permissions menu.",
  approval_required: "Allow PubMed for this page when claude.ai asks, then search again.",
  blocked_by_policy: "Your organization's settings block the PubMed connector for this page."
};
async function runSearch() {
  const seq = ++nsearchSeq;
  const status = document.getElementById("n-status"), list = document.getElementById("n-list");
  const link = `<a href="${pubmedLink()}" target="_blank" rel="noopener">Open this search on PubMed</a>`;
  status.innerHTML = `Searching PubMed… ${link}`;
  const show = (res, how) => {
    if (seq !== nsearchSeq) return;
    status.innerHTML = `According to PubMed: ${res.approx ? "about " : ""}${Number(res.total).toLocaleString()} papers match; showing the ${res.items.length} ${{ new: "newest", old: "oldest", rel: "most relevant" }[nq.sort || "new"]}.${res.capped ? ` Only your first ${MAX_TOPICS} topics were searched.` : ""} ${link}`;
    const items = nq.sort === "rel" ? res.items : orderItems(res.items);
    list.innerHTML = items.length ? listHTML(items, nq.sort === "rel") : `<p class="note">No papers match. Try fewer fields or a broader topic.</p>`;
  };
  let note = "";
  const mcp = await getMcp();
  if (mcp) {
    try { show(await searchViaConnector(mcp), "live, through your PubMed connector"); return; }
    catch (e) { note = CONNECTOR_NOTE[e && e.code] || (e && e.code === "tool_error" ? "PubMed could not run this search. Try simpler terms." : "The PubMed connector did not answer just now."); }
  }
  try { show(await searchViaEutils(), "live"); return; } catch (e) {}
  if (seq !== nsearchSeq) return;
  /* Saved papers have no relevance score, so "Most relevant" lists them newest first. */
  const items = nq.sort === "old" ? orderItems(localMatches()) : localMatches().sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  status.innerHTML = `${note ? esc(note) + " " : ""}Showing ${items.length} saved ${items.length === 1 ? "match" : "matches"}. ${link} to see every match.`;
  list.innerHTML = items.length ? listHTML(items) : `<div class="info"><p>No stored papers match yet. Use <strong>${link}</strong> to run the same search there.</p></div>`;
}

document.addEventListener("change", e => {
  if (e.target.name !== "sort" || !e.target.closest("#nform")) return;
  readNForm(); if (!nIsEmpty()) runSearch();
});
document.addEventListener("submit", e => {
  if (e.target.id !== "nform") return;
  e.preventDefault(); readNForm();
  if (nIsEmpty()) { document.getElementById("n-status").textContent = "Fill in at least one field or choose a topic."; return; }
  runSearch();
});
document.addEventListener("click", e => {
  if (e.target.id === "n-reset") { nq = { topics: [], author: "", journal: "", title: "", keywords: "", from: "", to: "", sort: "new" }; route(); }
  if (e.target.id === "n-none") { document.querySelectorAll('#nform input[name="topic"]').forEach(x => x.checked = false); }
  if (e.target.id === "n-save") { readNForm(); let ok = true; try { localStorage.setItem("fgc-topics", JSON.stringify(nq.topics)); } catch (err) { ok = false; }
    document.getElementById("n-saved").textContent = ok ? `Saved ${nq.topics.length} topic${nq.topics.length === 1 ? "" : "s"} on this device.` : "This browser can't save preferences."; }
});

function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

function aboutHTML() {
  const all = CASES.flatMap(c => c.refs).concat([
    "Parsons, M. W., & Braun, M. M. (Eds.). (2024). Clinical neuropsychology: A pocket handbook for assessment (4th ed.). American Psychological Association.",
    "Damasio, H., Grabowski, T., Frank, R., Galaburda, A. M., & Damasio, A. R. (1994). The return of Phineas Gage: Clues about the brain from the skull of a famous patient. Science, 264(5162), 1102–1105."
  ]);
  const uniq = [...new Set(all.map(r => r.replace(" (Course reading)", "")))].sort((a, b) => a.localeCompare(b));
  return `<section class="view">
    <div class="prose"><span class="eyebrow">About</span><h2>About this module</h2>
      <p>This module was created as an Innovation Project for PS 829 Principles of Neuropsychology.</p>
    </div>
    ${coverageHTML()}
    <div class="prose"><h3>References</h3><ol class="refs">${uniq.map(r => `<li>${r}</li>`).join("")}</ol></div>
  </section>`;
}

function coverageHTML() {
  if (typeof COVERAGE === "undefined") return "";
  const dn = Object.fromEntries(ASSESSMENT_DOMAINS.map(d => [d.id, d.name]));
  const n = ids => ASSESSMENTS.filter(t => ids.includes(t.domain)).length;
  return `<div class="prose" id="coverage"><h3>Coverage audit</h3>
      <p>The assessment library was checked area by area against the standard reference texts below, down to the subtests, indices and subscales of the major batteries, and extended with affective and social measures those texts cover only briefly. The case library was checked against the phenomena of affective neuropsychology described in clinical texts and the lesion literature. Each phenomenon below links to the cases that show it.</p>
      <ul class="refs">${COVERAGE.sources.map(s => `<li>${s}</li>`).join("")}</ul>
      ${HAS_CORE ? `<p><strong>Core set.</strong> ${CORE.note}</p><ul class="refs">${CORE.basis.map(s => `<li>${s}</li>`).join("")}</ul>` : ""}</div>
    <div class="tbl"><table class="cmp cov"><thead><tr><th>Reference area</th><th>Module domains</th><th>Instruments</th></tr></thead>
      <tbody>${COVERAGE.areas.map(([a, ids]) => `<tr><td>${a}</td><td>${ids.map(id => `<a href="#tools" data-dom="${id}" class="cov-dom">${dn[id]}</a>`).join("; ")}</td><td>${n(ids)}</td></tr>`).join("")}</tbody></table></div>
    <div class="tbl"><table class="cmp cov"><thead><tr><th>Phenomenon (${COVERAGE.phenomena.length})</th><th>Cases</th></tr></thead>
      <tbody>${COVERAGE.phenomena.map(([p, ids]) => `<tr><td>${p}</td><td>${ids.filter(id => byId[id]).map(id => `<a href="#case/${id}">${byId[id].title}</a>${HAS_CORE && !isCoreCase(byId[id]) ? ' <span class="note">(extended)</span>' : ""}`).join("<br>")}</td></tr>`).join("")}</tbody></table></div>`;
}

function igtHTML() {
  return `<div class="igt" id="igt">
    <div class="prose tight">
      <span class="eyebrow">Try it yourself</span>
      <h3>A short version of the Iowa Gambling Task</h3>
      <p>You start with $2,000. Pick 40 cards, one at a time, from any deck. Each card wins money, but some also lose money. Try to finish with as much as possible.</p>
    </div>
    <div class="decks">${["A","B","C","D"].map(d => `<button class="deck" data-deck="${d}" aria-label="Deck ${d}">${d}</button>`).join("")}</div>
    <div class="igt-stats"><span>Balance <b id="igt-bal">$2,000</b></span><span>Cards left <b id="igt-left">40</b></span><span>Picks A/B/C/D <b id="igt-count">0 / 0 / 0 / 0</b></span></div>
    <p class="igt-msg" id="igt-msg" aria-live="polite">Pick a card to begin.</p>
    <button class="btn ghost" id="igt-reset" hidden>Play again</button>
  </div>`;
}

/* ---------- Router ---------- */
const TABS = [["primer", "Start here"], ["library", "Case library"], ["tools", "Assessments"], ["compare", "Compare"], ["research", "Research feed"], ["about", "About"]];
document.getElementById("tabs").innerHTML = TABS.map(([id, l]) => `<li><a class="tab" href="#${id}" data-tab="${id}">${l}</a></li>`).join("");

function route() {
  let h = location.hash.replace(/^#/, "");
  if (aliasMap[h]) h = "case/" + aliasMap[h];
  if (!h) { try { h = localStorage.getItem("fgc-route") || "primer"; } catch (e) { h = "primer"; } }
  const [view, arg] = h.split("/");
  let tab = view, html;
  if (view === "case" && byId[arg]) { html = caseHTML(byId[arg]); tab = "library"; }
  else if (view === "library") html = libraryHTML(arg);
  else if (view === "compare") html = compareHTML();
  else if (view === "tools") html = toolsHTML();
  else if (view === "research") html = researchHTML();
  else if (view === "about") html = aboutHTML();
  else { html = primerHTML(); tab = "primer"; }
  main.innerHTML = html;
  markHeadings();
  document.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-current", t.dataset.tab === tab ? "page" : "false"));
  if (view === "tools") { if (arg && toolById[arg] && !isCoreTool(toolById[arg]) && !EXT) { EXT = true; main.innerHTML = toolsHTML(); } renderTools(); if (arg) openTool(arg); else window.scrollTo(0, 0); }
  else if (view === "research") { renderNews(); window.scrollTo(0, 0); }
  else if (view === "library") {
    renderLibList();
    if (arg) { const el = document.getElementById("cluster-" + arg); if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 30); }
    else window.scrollTo(0, 0);
  } else window.scrollTo(0, 0);
  if (document.getElementById("igt")) igtReset();
  try { localStorage.setItem("fgc-route", h); } catch (e) {}
}
window.addEventListener("hashchange", route);

/* ---------- Interactions ---------- */
document.addEventListener("click", e => {
  const opt = e.target.closest(".opt"); if (opt) { answer(opt); return; }
  const reg = e.target.closest(".region"); if (reg) { selectRegion(reg); return; }
  const deck = e.target.closest(".deck"); if (deck) { igtPick(deck.dataset.deck); return; }
  const ex = e.target.closest("[data-ext]"); if (ex) { EXT = ex.dataset.ext === "1"; try { localStorage.setItem("fgc-ext", EXT ? "1" : "0"); } catch (err) {} route(); return; }
  const cov = e.target.closest(".cov-dom"); if (cov) { tfilt = { q: "", dom: cov.dataset.dom, use: "", fmt: "" }; }
  const clr = e.target.closest("[data-clear]");
  if (clr) { if (clr.dataset.clear === "all") filt = { q: "", et: "", region: "", dom: "" }; else filt.region = ""; route(); return; }
  if (e.target.id === "igt-reset") igtReset();
});
document.addEventListener("keydown", e => {
  const reg = e.target.closest && e.target.closest(".region");
  if (reg && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); selectRegion(reg); }
});
document.addEventListener("input", e => {
  if (e.target.id === "f-q") { filt.q = e.target.value; renderLibList(); }
  if (e.target.id === "t-q") { tfilt.q = e.target.value; renderTools(); }
});
document.addEventListener("change", e => {
  if (e.target.id === "f-et") { filt.et = e.target.value; renderLibList(); }
  if (e.target.id === "f-dom") { filt.dom = e.target.value; renderLibList(); }
  if (e.target.id === "t-dom") { tfilt.dom = e.target.value; renderTools(); }
  if (e.target.id === "t-use") { tfilt.use = e.target.value; renderTools(); }
  if (e.target.id === "t-fmt") { tfilt.fmt = e.target.value; renderTools(); }
});

function selectRegion(reg) {
  const fig = reg.dataset.fig, k = reg.dataset.region;
  if (fig === "lib") {
    filt.region = filt.region === k ? "" : k;
    document.querySelectorAll('.region[data-fig="lib"]').forEach(r => { const on = r.dataset.region === filt.region; r.classList.toggle("hit", on);
      const t = r.querySelector("text"); if (t) t.remove();
      if (on) r.insertAdjacentHTML("beforeend", `<text x="${REGIONS[k].lx}" y="${REGIONS[k].ly}">${REGIONS[k].label}</text>`); });
    document.getElementById("lib-region-cap").innerHTML = filt.region ? `Showing cases involving the ${REGIONS[k].name.toLowerCase()}. <button class="linkbtn" data-clear="region">Clear</button>` : "Click a region to filter cases.";
    renderLibList(); return;
  }
  document.querySelectorAll(`.region[data-fig="${fig}"]`).forEach(r => r.classList.toggle("sel", r === reg));
  const box = document.getElementById("info-" + fig); if (box) box.innerHTML = infoHTML(k);
}

function answer(opt) {
  const box = opt.closest(".q");
  const key = box.dataset.q, cut = key.lastIndexOf("-");
  const group = key.slice(0, cut), idx = +key.slice(cut + 1);
  const q = byId[group].questions[idx];
  const pick = +opt.dataset.i;
  box.querySelectorAll(".opt").forEach((b, i) => { b.disabled = true; if (i === q.a) b.classList.add("right"); else if (i === pick) b.classList.add("wrong"); });
  const fb = box.querySelector(".fb"); fb.hidden = false;
  fb.classList.toggle("yay", pick === q.a);
  fb.innerHTML = `<strong>${pick === q.a ? "Yes, nicely reasoned!" : "Not quite, and that's okay."}</strong> ${q.why}`;
}

/* ---------- Mini Iowa Gambling Task ----------
   A and B: +$100 per card, net loss over time. C and D: +$50 per card, net gain over time.
   A: 50% chance of a $150 to $350 loss. B: 10% chance of a $1,250 loss.
   C: 50% chance of a $25 to $75 loss.  D: 10% chance of a $250 loss. */
let igt;
function igtReset() {
  igt = { bal: 2000, left: 40, n: { A: 0, B: 0, C: 0, D: 0 } };
  document.querySelectorAll(".deck").forEach(d => d.disabled = false);
  document.getElementById("igt-reset").hidden = true;
  igtDraw("Pick a card to begin.");
}
function igtDraw(msg) {
  document.getElementById("igt-bal").textContent = (igt.bal < 0 ? "−$" : "$") + Math.abs(igt.bal).toLocaleString();
  document.getElementById("igt-left").textContent = igt.left;
  document.getElementById("igt-count").textContent = `${igt.n.A} / ${igt.n.B} / ${igt.n.C} / ${igt.n.D}`;
  document.getElementById("igt-msg").textContent = msg;
}
function igtPick(d) {
  if (!igt || igt.left <= 0) return;
  const win = (d === "A" || d === "B") ? 100 : 50;
  let loss = 0;
  if (d === "A" && Math.random() < 0.5) loss = [150, 200, 250, 300, 350][Math.floor(Math.random() * 5)];
  if (d === "B" && Math.random() < 0.1) loss = 1250;
  if (d === "C" && Math.random() < 0.5) loss = [25, 50, 75][Math.floor(Math.random() * 3)];
  if (d === "D" && Math.random() < 0.1) loss = 250;
  igt.bal += win - loss; igt.left -= 1; igt.n[d] += 1;
  let msg = `Deck ${d}: you won $${win}` + (loss ? ` but lost $${loss.toLocaleString()}.` : ".");
  if (igt.left === 0) {
    const safe = igt.n.C + igt.n.D;
    document.querySelectorAll(".deck").forEach(x => x.disabled = true);
    document.getElementById("igt-reset").hidden = false;
    msg = `Done. You took ${safe} of 40 cards from the safe decks. Decks A and B pay more per card but lose $25 per card on average; C and D pay less but gain $25 per card. Healthy players drift toward C and D over time, while patients with vmPFC damage keep returning to A and B.`;
  }
  igtDraw(msg);
}

route();


/* Height of the sticky tab bar, so sticky table headers sit just below it. */
function setNavH() { const n = document.querySelector("nav.index"); if (n) document.documentElement.style.setProperty("--navh", n.offsetHeight + "px"); }
window.addEventListener("resize", setNavH); window.addEventListener("load", setNavH); setNavH();

/* The brain buddy in the header: tap it to hear another well-known saying from neuropsychology and neuroscience. */
const SAYINGS = [
  ["We are not thinking machines that feel; we are feeling machines that think.", "attributed to Antonio Damasio"],
  ["When you've seen one brain injury, you've seen one brain injury.", "a saying in brain injury rehabilitation"],
  ["Ask not what disease the person has, but what person the disease has.", "attributed to William Osler"],
  ["It's not just the score. It's how you got there.", "the idea behind the Boston Process Approach (Edith Kaplan)"],
  ["Neurons that fire together wire together.", "Hebb's rule, as phrased by Carla Shatz"],
  ["The heart has its reasons, of which reason knows nothing.", "Blaise Pascal"],
  ["He was \u201cno longer Gage.\u201d", "Gage's friends, as reported by John Harlow (1868)"],
  ["Time is brain.", "a saying in stroke care"]
];
let sayIdx = 0;
(function () {
  const btn = document.getElementById("buddy-btn"), box = document.getElementById("buddy-say");
  if (!btn || !box) return;
  btn.addEventListener("click", () => {
    sayIdx = (sayIdx + 1) % SAYINGS.length;
    document.getElementById("buddy-q").textContent = SAYINGS[sayIdx][0];
    document.getElementById("buddy-by").textContent = SAYINGS[sayIdx][1];
    box.classList.remove("swap"); void box.offsetWidth; box.classList.add("swap");
  });
})();
