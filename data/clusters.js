/* ---------- Clusters (the hierarchy) ---------- */
const CLUSTERS = [
  { id: "A", name: "Valuing outcomes", system: "Ventromedial prefrontal and orbitofrontal cortex",
    fn: "Assigning emotional value to options, learning when rewards change, and weighing social and moral consequences.",
    tasks: "Iowa Gambling Task, probabilistic reversal learning, moral dilemmas, economic games" },
  { id: "B", name: "Threat, fear and loss", system: "Amygdala and medial temporal lobe",
    fn: "Detecting danger, learning what predicts harm, and giving potential losses their emotional weight.",
    tasks: "Fear recognition from faces, fear conditioning with skin conductance, mixed gambles (loss aversion)" },
  { id: "C", name: "Reward learning and motivation", system: "Dopamine, striatum, pallidum and subthalamic nucleus",
    fn: "Learning which actions pay off, braking impulsive choices, and turning value into action.",
    tasks: "Probabilistic selection, conflict and delay-discounting tasks, impulse control and apathy scales" },
  { id: "D", name: "Body states, effort and initiative", system: "Insula, anterior cingulate and medial frontal cortex",
    fn: "Feeling cravings, risk and disgust from inside the body, deciding whether a reward is worth the effort, and acting on goals rather than on whatever the environment offers.",
    tasks: "Cambridge Gamble Task, interoception tasks, craving ratings, effort-based choice, Stroop, apathy scales, Frontal Assessment Battery" },
  { id: "E", name: "Feeling, expression, mood and awareness", system: "Hemispheric and cortico-ponto-cerebellar networks",
    fn: "Reading emotion in voices and faces, feeling that a familiar person is familiar, matching expression to feeling, regulating mood, and knowing one's own limits. Several cases contrast left and right hemisphere damage.",
    tasks: "Affective prosody, anosognosia interviews, autonomic responses to faces, depression and mania scales, affective lability scales" },
  { id: "F", name: "Progressive and diffuse conditions", system: "Several systems at once",
    fn: "How dementias and traumatic brain injury erode judgment gradually or across many circuits.",
    tasks: "Social cognition tests, financial capacity instruments, caregiver questionnaires" }
];

const ETIOLOGY = {
  tbi: "Traumatic brain injury", surgery: "Tumor or surgery", stroke: "Stroke or aneurysm",
  infection: "Infection", genetic: "Genetic", neurodeg: "Neurodegenerative",
  treatment: "Medication or stimulation", substance: "Substance use", hypoxic: "Toxic, metabolic or hypoxic injury", demyel: "Demyelinating disease",
  early: "Early childhood injury", autoimmune: "Autoimmune or inflammatory", epilepsy: "Epilepsy"
};

const DOMAINS = {
  value: "Valuation", risk: "Risk and loss", learn: "Reward learning", emotion: "Emotion recognition or experience",
  social: "Social and moral behavior", motiv: "Motivation and initiative", expr: "Emotional expression and mood", insight: "Insight and awareness"
};

