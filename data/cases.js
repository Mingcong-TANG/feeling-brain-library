/* Case library. Each case is an illustrative composite unless marked historical. */
/* ---------- Cases ---------- */
const CASES = [
/* ===== A. Valuing outcomes ===== */
{
  id: "gage", cluster: "A", title: "The foreman who was “no longer Gage”", etiology: "tbi",
  condition: "Penetrating frontal injury (1848)", hits: ["vmpfc"], side: "Left, possibly both", historical: true,
  story: `In September 1848 a railroad foreman named Phineas Gage was tamping blasting powder in Vermont when it ignited. The iron rod, more than a meter long, went up through his left cheek and out the top of his head. He was talking within minutes. His physician, John Harlow, later wrote that the balance between his “intellectual faculties and animal propensities” seemed destroyed: he was impatient, profane and full of plans he abandoned, so that his friends said he was “no longer Gage.”`,
  who: "Phineas Gage, 25 at the time of injury. This is the one real, named patient in the library; his story is told from historical sources.",
  referral: "Historical case. Today the question would be: why can a man who speaks, remembers and reasons normally no longer hold his job?",
  profile: [
    ["Speech and comprehension", "Reported normal", "Intact", "ok"],
    ["Memory for people and events", "Reported normal", "Intact", "ok"],
    ["Motor and sensory function", "Lost left eye; otherwise normal", "Largely intact", "ok"],
    ["Work reliability", "Not rehired as foreman", "Impaired", "low"],
    ["Social conduct", "Profane, impatient, “fitful”", "Impaired", "low"],
    ["Planning and follow-through", "Many plans, few completed", "Impaired", "low"],
    ["Later life (Macmillan, 2000)", "Worked for years as a stagecoach driver in Chile", "Suggests partial recovery", "mid"]
  ],
  profileNote: "Gage was never formally tested. The rows summarize historical reports, framed as a modern profile.",
  questions: [
    { stem: "Gage could talk, remember and reason soon after the accident. What does his case first show about the frontal lobes?",
      opts: ["The frontal lobes are not needed for anything important.",
             "Damage to the ventral frontal lobes can change personality and judgment while sparing language and memory.",
             "Personality is stored in the left eye.",
             "Frontal damage always causes paralysis."],
      a: 1, why: "Gage became the textbook example of frontal damage altering conduct and judgment rather than basic cognition. His case helped shift thinking toward the idea that social behavior depends on specific brain regions." },
    { stem: "Historian Malcolm Macmillan found that many popular accounts of Gage exaggerated his decline. Why does that matter for students?",
      opts: ["It means the case is worthless.",
             "Single historical cases are vulnerable to retelling, so claims should be checked against primary sources and modern lesion studies.",
             "It proves frontal lobes have no role in behavior.",
             "It only matters to historians."],
      a: 1, why: "Macmillan (2000) showed that Gage later held demanding jobs, which suggests some social recovery. Modern group lesion studies, not one 19th-century case, carry the weight of the evidence." },
    { stem: "Modern reconstructions of the skull disagree about whether the right hemisphere was damaged, but they agree on one point. Which?",
      opts: ["The rod spared the frontal lobes entirely.",
             "The left ventral and orbital frontal cortex, and the white matter linking it to other regions, were damaged.",
             "Only the cerebellum was damaged.",
             "The damage was limited to the motor cortex."],
      a: 1, why: "H. Damasio et al. (1994) proposed bilateral ventromedial damage; Ratiu et al. (2004) argued the injury was left-sided; Van Horn et al. (2012) estimated that major white matter connections were cut. All place the damage in the left ventral frontal lobe." }
  ],
  chain: ["Left ventral frontal cortex and its connections destroyed", "Emotional and social consequences no longer steer behavior", "Speech and memory spared; conduct and planning changed", "Lost his job, abandoned plans, offended others"],
  differential: "Today a clinician would rule out a mood disorder, a primary memory problem and infection (Gage did develop a serious wound infection), and would document premorbid personality from informants.",
  finding: "The Gage case is better as a starting question than as proof. Its lessons were confirmed by later patients such as EVR (next case) and by group studies of people with ventromedial prefrontal lesions.",
  takeaway: "Ask families how the person has changed, not only how they score. Behavior change after frontal injury is real, can partly recover, and is easy to miss in a short office visit.",
  refs: [
    "Harlow, J. M. (1868). Recovery from the passage of an iron bar through the head. Publications of the Massachusetts Medical Society, 2, 327–347.",
    "Damasio, H., Grabowski, T., Frank, R., Galaburda, A. M., & Damasio, A. R. (1994). The return of Phineas Gage: Clues about the brain from the skull of a famous patient. Science, 264(5162), 1102–1105.",
    "Macmillan, M. (2000). An odd kind of fame: Stories of Phineas Gage. MIT Press.",
    "Ratiu, P., Talos, I.-F., Haker, S., Lieberman, D., & Everett, P. (2004). The tale of Phineas Gage, digitally remastered. Journal of Neurotrauma, 21(5), 637–643.",
    "Van Horn, J. D., Irimia, A., Torgerson, C. M., et al. (2012). Mapping connectivity damage in the case of Phineas Gage. PLoS ONE, 7(5), e37454."
  ],
  domains: ["value", "social"]
},
{
  id: "evr", alias: "c1", cluster: "A", title: "The accountant who could not decide", etiology: "surgery",
  condition: "Orbitofrontal meningioma resection", hits: ["vmpfc"], side: "Bilateral", featured: true, week: "Attention and executive functioning (Nov 6)",
  story: `“Before the surgery he ran the accounting office and never missed a deadline. Afterward he scored well on every test the hospital gave him, but at home he would spend two hours choosing a restaurant. He went into business with a man everyone warned him about and lost our savings. When I told him I was leaving, he talked about it as if it were the weather.”`,
  who: "His wife, describing Mr. E, 44, two years after removal of a large orbitofrontal meningioma. Modeled on patient EVR.",
  referral: "Family asks why he keeps making disastrous decisions when the hospital says his cognition is normal.",
  profile: [
    ["WAIS-IV Full Scale IQ", "118", "High average", "ok"],
    ["WMS-IV Delayed Memory Index", "112", "High average", "ok"],
    ["Trail Making Test, Part B", "52nd percentile", "Average", "ok"],
    ["Wisconsin Card Sorting Test", "6 of 6 categories", "Intact", "ok"],
    ["Verbal fluency (FAS)", "45th percentile", "Average", "ok"],
    ["Iowa Gambling Task, net score (last 60 cards)", "−18", "Impaired: keeps choosing risky decks", "low"],
    ["Skin conductance before risky choices", "Absent", "Impaired: no anticipatory arousal", "low"],
    ["Daily life (informant report)", "Severe problems", "Planning, finances, relationships", "low"]
  ],
  questions: [
    { stem: "Mr. E scores in the average to high average range on IQ, memory and card sorting. What does this pattern suggest?",
      opts: ["His real-world problems are probably exaggerated by his family.",
             "Standard tests can miss impairments in using emotion and future consequences to guide choices.",
             "He must have a primary memory disorder.",
             "The surgery had no lasting effect on his brain."],
      a: 1, why: "Patients like EVR (Eslinger & Damasio, 1985) passed standard tests yet made disastrous life decisions. Tests with clear rules and immediate feedback do not capture decisions made under uncertainty, where emotional signals normally guide us." },
    { stem: "On the Iowa Gambling Task, decks A and B pay large rewards but larger occasional losses. What do healthy participants usually do?",
      opts: ["Keep choosing A and B because the rewards are bigger.",
             "Shift toward the safer decks C and D, and show stress responses before choosing risky decks, often before they can explain why.",
             "Choose all four decks equally throughout.",
             "Stop playing once they lose money."],
      a: 1, why: "Bechara et al. (1997) found that healthy participants developed anticipatory skin conductance responses to the risky decks and moved away from them before they could say which decks were bad. vmPFC patients showed neither." },
    { stem: "Which everyday difficulty best fits vmPFC damage?",
      opts: ["Forgetting conversations from earlier in the day.",
             "Being unable to name common objects.",
             "Repeating choices that lead to bad outcomes despite knowing the facts.",
             "Losing the ability to recognize familiar faces."],
      a: 2, why: "Knowledge is intact; what is lost is the emotional weight that marks some options as bad. Memory loss, naming problems and face recognition problems point to other systems." }
  ],
  chain: ["Ventromedial and orbitofrontal cortex damaged", "Emotional signals are not linked to future outcomes", "Normal IQ and memory, impaired Iowa Gambling Task, no anticipatory arousal", "Poor financial and social decisions, slow and indecisive choices"],
  differential: "Rule out depression (indecision, flat affect), malingering, and a primary memory disorder. Normal memory and effort testing, plus the informant history, point to a frontal decision-making problem.",
  finding: "The somatic marker hypothesis (Damasio; Bechara et al., 1994, 1997) proposes that bodily emotional signals bias decisions toward good options. Critics note that healthy players may learn the Iowa Gambling Task consciously more than first thought (Maia & McClelland, 2004), and that the task also depends on reversal learning (Dunn et al., 2006).",
  takeaway: "A normal neuropsychological battery does not rule out frontal damage. When families report changes in judgment, add tests of decision-making under uncertainty (such as the Iowa Gambling Task), ask detailed questions about daily functioning, and consider supervised management of finances.",
  refs: [
    "Eslinger, P. J., & Damasio, A. R. (1985). Severe disturbance of higher cognition after bilateral frontal lobe ablation: Patient EVR. Neurology, 35(12), 1731–1741.",
    "Bechara, A., Damasio, A. R., Damasio, H., & Anderson, S. W. (1994). Insensitivity to future consequences following damage to human prefrontal cortex. Cognition, 50(1–3), 7–15.",
    "Bechara, A., Damasio, H., Tranel, D., & Damasio, A. R. (1997). Deciding advantageously before knowing the advantageous strategy. Science, 275(5304), 1293–1295.",
    "Maia, T. V., & McClelland, J. L. (2004). A reexamination of the evidence for the somatic marker hypothesis. PNAS, 101(45), 16075–16080.",
    "Dunn, B. D., Dalgleish, T., & Lawrence, A. D. (2006). The somatic marker hypothesis: A critical evaluation. Neuroscience & Biobehavioral Reviews, 30(2), 239–271."
  ],
  domains: ["value", "risk", "emotion"], igt: true
},
{
  id: "reversal", cluster: "A", title: "The man who kept choosing the old winner", etiology: "tbi",
  condition: "Bilateral orbitofrontal contusions", hits: ["vmpfc"], side: "Bilateral",
  story: `“After the crash, Dan went back to his favorite lunch place every day, even after it changed owners and he complained the food was awful. At work, when his boss changed the filing system, he kept using the old one for weeks. He can tell you the new rule perfectly. He just doesn't switch.”`,
  who: "His sister, describing Mr. O, 38, eighteen months after a car crash that bruised the undersides of both frontal lobes",
  referral: "Vocational rehabilitation asks why he cannot adapt at work despite good test scores.",
  profile: [
    ["WAIS-IV Full Scale IQ", "104", "Average", "ok"],
    ["WMS-IV Delayed Memory Index", "97", "Average", "ok"],
    ["Wisconsin Card Sorting Test, perseverative errors", "34th percentile", "Average", "ok"],
    ["Probabilistic reversal learning: initial learning", "Normal", "Intact", "ok"],
    ["Probabilistic reversal learning: after contingencies reverse", "Keeps choosing old option", "Impaired", "low"],
    ["Vocal and facial emotion recognition", "Below cutoff", "Impaired", "low"],
    ["FrSBe disinhibition (family rating)", "T = 72", "Clinically elevated", "low"]
  ],
  questions: [
    { stem: "Mr. O learns which of two options pays off most of the time, but when the payoffs secretly swap, he keeps choosing the old one. What is this called?",
      opts: ["A reversal learning deficit", "Anterograde amnesia", "Hemispatial neglect", "Expressive aphasia"],
      a: 0, why: "Reversal learning measures how quickly someone updates when a previously rewarded choice starts to be punished. Rolls et al. (1994) and Fellows and Farah (2003) found this ability is impaired after ventral frontal damage, while initial learning is spared." },
    { stem: "Fellows and Farah (2003) argued their reversal findings might explain Iowa Gambling Task failures in vmPFC patients. Why?",
      opts: ["The IGT has no learning component.",
             "In the IGT the risky decks look good at first and only turn bad later, so players must reverse an early preference.",
             "The IGT measures only memory.",
             "Reversal learning and the IGT use the same cards."],
      a: 1, why: "Decks A and B start with big wins, so early choices favor them. Moving to C and D requires reversing that first impression. When Fellows and Farah shuffled the IGT so that losses appeared early, vmPFC patients performed close to normal." },
    { stem: "For case conceptualization, which recommendation follows best from this profile?",
      opts: ["Memory training with flashcards.",
             "Make rule changes explicit and written, with direct feedback, rather than expecting him to infer changes from outcomes.",
             "No intervention; his scores are normal.",
             "Speech therapy for naming."],
      a: 1, why: "His knowledge of rules is intact; what fails is updating from changing rewards and punishments. External, explicit cues compensate for the missing internal update." }
  ],
  chain: ["Orbitofrontal cortex bruised on bony ridges of the skull", "Stimulus–reward links do not update when outcomes change", "Normal IQ and card sorting, impaired reversal learning and emotion recognition", "Sticks with bad habits, misses social cues, struggles with changes at work"],
  differential: "Distinguish from dorsolateral prefrontal “set-shifting” problems (which would usually show on card sorting) and from memory failure (he remembers the new rule).",
  finding: "Hornak et al. (2004) studied patients after surgical excisions and found that bilateral orbitofrontal lesions impaired reward-related reversal learning. Patients' failures were linked to their everyday social and emotional changes.",
  takeaway: "Include a reversal task when frontal injury is suspected. Rehabilitation should make changes in rules and expectations explicit, because the person will not reliably learn them from feedback alone.",
  refs: [
    "Rolls, E. T., Hornak, J., Wade, D., & McGrath, J. (1994). Emotion-related learning in patients with social and emotional changes associated with frontal lobe damage. Journal of Neurology, Neurosurgery & Psychiatry, 57(12), 1518–1524.",
    "Fellows, L. K., & Farah, M. J. (2003). Ventromedial frontal cortex mediates affective shifting in humans: Evidence from a reversal learning paradigm. Brain, 126(8), 1830–1837.",
    "Hornak, J., O'Doherty, J., Bramham, J., et al. (2004). Reward-related reversal learning after surgical excisions in orbito-frontal or dorsolateral prefrontal cortex in humans. Journal of Cognitive Neuroscience, 16(3), 463–478."
  ],
  domains: ["learn", "value", "emotion"]
},
{
  id: "moral", cluster: "A", title: "The engineer who would push the man", etiology: "stroke",
  condition: "Ruptured anterior communicating artery aneurysm", hits: ["vmpfc"], side: "Bilateral",
  story: `“In the ethics discussion group at the rehab center, they asked whether you would push one man off a footbridge to stop a trolley from killing five people. Everyone hesitated. Roberto said ‘Of course, five is more than one’ and moved on. He's not cruel. He just doesn't seem to feel the pull the rest of us feel.”`,
  who: "A rehabilitation therapist describing Mr. V, 49, a year after a ruptured anterior communicating artery aneurysm",
  referral: "Team asks whether his blunt, cold-seeming judgments reflect brain injury or premorbid personality.",
  profile: [
    ["WAIS-IV Full Scale IQ", "109", "Average", "ok"],
    ["Delayed story recall", "18th percentile", "Low average", "mid"],
    ["Social and moral knowledge interview", "Knows norms well", "Intact", "ok"],
    ["Impersonal moral dilemmas", "Typical responses", "Intact", "ok"],
    ["High-conflict personal dilemmas", "Endorses harming one to save many far more than peers", "Atypical", "low"],
    ["Trust game (as trustee)", "Returns little; reports no guilt", "Atypical", "low"],
    ["Skin conductance to distressing pictures", "Reduced", "Blunted", "low"]
  ],
  questions: [
    { stem: "Mr. V knows social rules well but judges emotionally charged dilemmas differently. What did Koenigs et al. (2007) find in vmPFC patients?",
      opts: ["They refused to answer moral questions.",
             "They endorsed harmful actions that save more lives more often than controls, but only in high-conflict personal dilemmas.",
             "They showed no differences from controls at all.",
             "They lost all knowledge of right and wrong."],
      a: 1, why: "Their judgments were normal for impersonal and low-conflict dilemmas. The difference appeared where an emotional aversion to harming someone normally competes with a cost–benefit calculation." },
    { stem: "Why is his delayed memory low average when vmPFC patients usually have normal memory?",
      opts: ["Anterior communicating artery aneurysms often also damage the basal forebrain, which supports memory.",
             "He is not trying on the test.",
             "Moral judgment and memory are the same function.",
             "Memory always declines after age 40."],
      a: 0, why: "This is a useful conceptualization point: the cause of the lesion matters. ACoA rupture can damage the basal forebrain as well as vmPFC, producing memory problems and sometimes confabulation." },
    { stem: "In the trust game, Mr. V keeps most of the money investors send him and reports no guilt. What best explains this?",
      opts: ["He cannot do arithmetic.",
             "Damage reduces the anticipated feeling of guilt that normally motivates repaying trust.",
             "He misunderstands the rules.",
             "He is extremely poor."],
      a: 1, why: "Krajbich et al. (2009) used economic games to show that vmPFC patients returned less money and showed a diminished sense of guilt. The game turns a social emotion into a measurable choice." }
  ],
  chain: ["Ventromedial prefrontal cortex (and basal forebrain) damaged by aneurysm rupture", "Emotional aversion to harming others is weakened", "Normal social knowledge, atypical personal moral and trust-game choices", "Seems blunt or cold; others feel hurt or exploited"],
  differential: "Weigh premorbid personality (get informant history), psychopathy (rare and lifelong), depression, and confabulation from basal forebrain damage.",
  finding: "These studies suggest that moral judgment has at least two components: rules and calculations that survive vmPFC damage, and emotional reactions to harming others that depend on it.",
  takeaway: "Knowing rules is not the same as feeling them. Interpret apparent coldness as a possible effect of the lesion, educate the family, and coach explicit social rules for repairing relationships.",
  refs: [
    "Koenigs, M., Young, L., Adolphs, R., Tranel, D., Cushman, F., Hauser, M., & Damasio, A. (2007). Damage to the prefrontal cortex increases utilitarian moral judgements. Nature, 446(7138), 908–911.",
    "Krajbich, I., Adolphs, R., Tranel, D., Denburg, N. L., & Camerer, C. F. (2009). Economic games quantify diminished sense of guilt in patients with damage to the prefrontal cortex. Journal of Neuroscience, 29(7), 2188–2192."
  ],
  domains: ["social", "emotion", "value"]
},
{
  id: "early", cluster: "A", title: "The girl injured as a toddler", etiology: "early",
  condition: "Prefrontal damage before age 2", hits: ["vmpfc"], side: "Bilateral",
  story: `“She was hit by a car at fifteen months and seemed to recover completely. But by her teens she was stealing from us, lying constantly, and never seemed sorry. She got good grades in some classes, but she could never hold a job and she spent money as soon as she had it. Punishment did nothing.”`,
  who: "Her parents, describing Ms. A, 20. Modeled on the patients described by Anderson et al. (1999).",
  referral: "Psychiatry asks whether her lifelong conduct problems relate to the early injury.",
  profile: [
    ["WAIS-IV Full Scale IQ", "98", "Average", "ok"],
    ["Academic achievement", "Average", "Intact", "ok"],
    ["Delayed memory", "Average", "Intact", "ok"],
    ["Iowa Gambling Task", "Persistently chooses risky decks", "Impaired", "low"],
    ["Moral reasoning interview", "Very immature, self-focused level", "Impaired", "low"],
    ["Knowledge of social rules", "Poor", "Impaired", "low"],
    ["Conduct history", "Theft, lying, no remorse", "Severe", "low"]
  ],
  questions: [
    { stem: "Adults who acquire vmPFC damage still know social and moral rules. How were Anderson et al.'s early-onset patients different?",
      opts: ["They knew the rules but ignored them, just like adults.",
             "They also lacked factual knowledge of social and moral rules, as if they had never learned them.",
             "They had no behavioral problems.",
             "They had severe aphasia."],
      a: 1, why: "This suggests the vmPFC is needed to acquire social and moral knowledge in childhood, not just to apply it. The adult-onset patients had learned the rules before injury." },
    { stem: "Her parents say punishment never worked. Which part of the profile helps explain this?",
      opts: ["Her average IQ",
             "Her persistent risky choices on the Iowa Gambling Task, showing insensitivity to future punishment",
             "Her average academic achievement",
             "Her normal memory"],
      a: 1, why: "Like adult vmPFC patients, she does not let future losses steer her choices. Punishment depends on exactly that learning signal." },
    { stem: "What does this case teach about brain plasticity in childhood?",
      opts: ["Early injuries always recover fully because the young brain is plastic.",
             "Early damage can have effects that only become visible years later, when the skills that region supports are expected to develop.",
             "Children cannot have frontal injuries.",
             "Plasticity only applies to language."],
      a: 1, why: "Effects of early frontal injury may emerge as the child grows into social demands, a pattern sometimes called “growing into deficit.” Follow-up into adolescence matters." }
  ],
  chain: ["Bilateral prefrontal damage in infancy", "Social and moral rules never learned; future punishments do not guide behavior", "Average IQ, impaired IGT and moral reasoning", "Stealing, lying, financial dependence, no remorse"],
  differential: "Conduct disorder or antisocial personality without injury; family and environmental factors; ADHD. The documented early lesion and IGT profile support an acquired cause.",
  finding: "Anderson et al. (1999) described two adults with prefrontal damage before 16 months. Their profile resembled psychopathy and differed from adult-onset cases in the loss of social knowledge itself.",
  takeaway: "Early brain injury needs long-term follow-up. Neuropsychologists should assess social cognition and decision-making as children reach adolescence, not only IQ and school skills.",
  refs: [
    "Anderson, S. W., Bechara, A., Damasio, H., Tranel, D., & Damasio, A. R. (1999). Impairment of social and moral behavior related to early damage in human prefrontal cortex. Nature Neuroscience, 2(11), 1032–1037."
  ],
  domains: ["social", "value", "learn"]
},

/* ===== B. Threat, fear and loss ===== */
{
  id: "sm", alias: "c2", cluster: "B", title: "The woman who felt no fear", etiology: "genetic",
  condition: "Urbach–Wiethe disease", hits: ["amygdala"], side: "Bilateral", featured: true, week: "Emotional dysregulation (Nov 13)",
  story: `“I was walking home through the park at night and a man waved me over. I went right up to him. He pulled a knife and held it to my throat. I wasn't scared; I just told him I'd be back for him if he hurt me, and he let me go. The next night I walked through the same park.”`,
  who: "Ms. S, 42, who has Urbach–Wiethe disease, a rare genetic condition that has calcified both amygdalae. Modeled on patient SM.",
  referral: "Social worker asks why she repeatedly ends up in dangerous situations.",
  profile: [
    ["WAIS-IV Full Scale IQ", "94", "Average", "ok"],
    ["WMS-IV Delayed Memory Index", "98", "Average", "ok"],
    ["Executive function composite", "Average", "Intact", "ok"],
    ["Facial emotion recognition: happy, sad, disgust", "Within normal limits", "Intact", "ok"],
    ["Facial emotion recognition: fear", "2 of 10 correct", "Impaired", "low"],
    ["Fear conditioning (skin conductance)", "No conditioned response", "Impaired", "low"],
    ["Mixed gambles (loss aversion)", "Accepts most 50/50 gambles", "Reduced loss aversion", "low"],
    ["Self-reported fear, daily diary", "Near zero over 3 months", "Markedly reduced", "low"]
  ],
  questions: [
    { stem: "Ms. S recognizes happy and sad faces normally but rarely identifies fear. What does this tell us about the amygdala?",
      opts: ["It processes all emotions equally.",
             "It plays an especially important role in recognizing and experiencing fear.",
             "It is only involved in memory.",
             "Face recognition depends entirely on the amygdala."],
      a: 1, why: "Patient SM (Adolphs et al., 1994) showed a selective deficit in recognizing fear from faces, and later work showed she also rarely experienced fear herself (Feinstein et al., 2011)." },
    { stem: "Offered a coin flip to win $20 or lose $15, most people decline. Ms. S accepts. Why?",
      opts: ["She cannot calculate expected value.",
             "Losses do not carry their usual emotional weight, so she lacks normal loss aversion.",
             "She has a gambling addiction.",
             "She misunderstood the instructions."],
      a: 1, why: "De Martino et al. (2010) found that two patients with amygdala lesions showed no loss aversion even though they understood the odds. The amygdala seems to amplify the felt cost of potential losses." },
    { stem: "Which safety risk is most important to discuss with Ms. S and her family?",
      opts: ["Getting lost in familiar places.",
             "Approaching dangerous people and situations without hesitation.",
             "Forgetting to take medication.",
             "Difficulty reading and writing."],
      a: 1, why: "Without fear signals, Ms. S does not avoid threats. Rules-based safety strategies (for example, not walking alone at night) can replace the missing warning signal." }
  ],
  chain: ["Bilateral amygdala damage", "Threat is not flagged as emotionally important", "Fear recognition impaired, no fear conditioning, reduced loss aversion", "Approaches danger, trusts strangers, takes risky bets"],
  differential: "Rule out general face-processing problems (other emotions are recognized), intellectual disability and impulsivity disorders. The selectivity for fear is the key sign.",
  finding: "Feinstein et al. (2011) exposed patient SM to snakes, spiders and a haunted house; she showed curiosity but no fear. Interestingly, SM did feel panic when she inhaled CO₂ (Feinstein et al., 2013), showing that fear from internal body signals can bypass the amygdala.",
  takeaway: "Selective emotion recognition tests, not just general cognitive tests, are needed to detect amygdala damage. Treatment focuses on explicit safety rules and on educating family members about risks the person cannot feel.",
  refs: [
    "Adolphs, R., Tranel, D., Damasio, H., & Damasio, A. (1994). Impaired recognition of emotion in facial expressions following bilateral damage to the human amygdala. Nature, 372(6507), 669–672.",
    "Feinstein, J. S., Adolphs, R., Damasio, A., & Tranel, D. (2011). The human amygdala and the induction and experience of fear. Current Biology, 21(1), 34–38.",
    "Feinstein, J. S., Buzza, C., Hurlemann, R., et al. (2013). Fear and panic in humans with bilateral amygdala damage. Nature Neuroscience, 16(3), 270–272.",
    "De Martino, B., Camerer, C. F., & Adolphs, R. (2010). Amygdala damage eliminates monetary loss aversion. PNAS, 107(8), 3788–3792."
  ],
  domains: ["emotion", "risk"]
},
{
  id: "kbs", cluster: "B", title: "The calm man who ate everything", etiology: "infection",
  condition: "Herpes simplex encephalitis (Klüver–Bucy features)", hits: ["amygdala", "hippocampus", "atl"], side: "Bilateral",
  story: `“Since the encephalitis, Kevin is gentle in a way he never was. Nothing upsets him, not even the fire alarm. But he puts everything in his mouth: soap, coins, paper. He makes sexual comments to the nurses. He can't remember that I visited this morning, and sometimes he picks up a fork and seems not to know what it is.”`,
  who: "His partner, describing Mr. K, 29, three months after herpes simplex virus encephalitis damaged both temporal lobes",
  referral: "Inpatient team asks for a profile to plan discharge and supervision.",
  profile: [
    ["WMS-IV Delayed Memory Index", "52", "Severely impaired", "low"],
    ["Boston Naming Test", "Well below expected", "Impaired (semantic loss)", "low"],
    ["Object recognition by sight", "Inconsistent", "Impaired (visual agnosia)", "low"],
    ["Attention span (digits forward)", "Normal", "Intact", "ok"],
    ["Fear recognition from faces", "Near chance", "Impaired", "low"],
    ["Startle and avoidance (observed)", "Absent or weak", "Placid", "low"],
    ["Behavior (staff ratings)", "Mouths objects, hypersexual comments", "Clinically significant", "low"]
  ],
  questions: [
    { stem: "Placidity, putting objects in the mouth, hypersexuality and failure to recognize objects together form which syndrome?",
      opts: ["Klüver–Bucy syndrome", "Korsakoff syndrome", "Gerstmann syndrome", "Balint syndrome"],
      a: 0, why: "Klüver and Bucy (1939) described these signs in monkeys after bilateral temporal lobe removal. Lilly et al. (1983) found that most human cases are partial and arise from several causes, including herpes encephalitis." },
    { stem: "Which part of his profile is most closely linked to amygdala damage specifically?",
      opts: ["Severe amnesia", "Naming problems", "Placidity and loss of fear", "Normal attention span"],
      a: 2, why: "Amnesia reflects hippocampal damage, naming problems reflect anterior temporal (semantic) damage, and placidity and loss of fear reflect the amygdala. Herpes encephalitis hits all three." },
    { stem: "Hyperorality and disinhibition also appear in another condition in this library. Which one, and how would you tell them apart?",
      opts: ["Parkinson's disease; tremor separates them.",
             "Behavioral-variant FTD; it is gradual with relatively spared memory, while encephalitis is sudden with severe amnesia.",
             "Urbach–Wiethe disease; it causes fever.",
             "There is no overlap with any other condition."],
      a: 1, why: "Onset and memory are the clues. A sudden febrile illness with dense amnesia points to encephalitis; slow change with preserved memory points to bvFTD." }
  ],
  chain: ["Bilateral medial and anterior temporal damage (amygdala, hippocampus, temporal pole)", "Loss of threat detection, memory and object meaning", "Severe amnesia, naming and recognition problems, loss of fear", "Placid, mouths objects, socially inappropriate, needs supervision"],
  differential: "Autoimmune encephalitis, bvFTD (gradual), Korsakoff syndrome (memory without placidity), and post-ictal states.",
  finding: "Terzian and Dalle Ore (1955) reported the syndrome in a man after both temporal lobes were removed for seizures, linking monkey findings to humans.",
  takeaway: "Early antiviral treatment limits damage. Afterward, a profile separating memory, semantic and emotional deficits guides supervision, safety (choking and ingestion risk) and family education.",
  refs: [
    "Klüver, H., & Bucy, P. C. (1939). Preliminary analysis of functions of the temporal lobes in monkeys. Archives of Neurology and Psychiatry, 42(6), 979–1000.",
    "Terzian, H., & Dalle Ore, G. (1955). Syndrome of Klüver and Bucy reproduced in man by bilateral removal of the temporal lobes. Neurology, 5(6), 373–380.",
    "Lilly, R., Cummings, J. L., Benson, D. F., & Frankel, M. (1983). The human Klüver–Bucy syndrome. Neurology, 33(9), 1141–1145."
  ],
  domains: ["emotion", "social", "risk"]
},
{
  id: "lobectomy", cluster: "B", title: "The patient who knew but didn't flinch", etiology: "surgery",
  condition: "Right anterior temporal lobectomy for epilepsy", hits: ["amygdala", "hippocampus", "atl"], side: "Right",
  story: `“The surgery stopped my seizures, which changed my life. In the research study afterward they played a tone and then a loud blast of noise, over and over. I could tell them exactly which tone came before the blast. But the sweat sensors showed my body never started bracing for it, the way it does for other people.”`,
  who: "Ms. L, 34, one year after removal of the right anterior temporal lobe, including the amygdala, for drug-resistant epilepsy",
  referral: "Post-surgical follow-up of memory and emotional functioning.",
  profile: [
    ["Seizure frequency", "Seizure-free", "Excellent outcome", "ok"],
    ["Verbal memory (story recall)", "Average", "Intact", "ok"],
    ["Visual memory (figure recall)", "Low average", "Mild decline", "mid"],
    ["Fear conditioning: skin conductance to warning tone", "Minimal", "Impaired", "low"],
    ["Fear conditioning: can report which tone predicted noise", "Correct", "Intact", "ok"],
    ["Mood screen", "Mild anxiety", "Monitor", "mid"]
  ],
  questions: [
    { stem: "Ms. L can say which tone predicts the noise but shows no bodily fear response to it. What does this dissociation show?",
      opts: ["Emotional (implicit) learning and factual (explicit) learning about the same event can depend on different structures.",
             "She is pretending.",
             "Fear conditioning depends on the visual cortex.",
             "All learning is the same process."],
      a: 0, why: "Bechara et al. (1995) found that patient SM (amygdala damage) knew the facts but showed no conditioned skin conductance, while a patient with hippocampal damage showed the opposite: conditioned arousal without remembering the pairing." },
    { stem: "Why is visual memory, not verbal memory, more affected after her right-sided surgery?",
      opts: ["The right medial temporal lobe contributes more to nonverbal memory in most right-handed people.",
             "Verbal memory is stored in the cerebellum.",
             "The surgery always spares memory.",
             "It is random."],
      a: 0, why: "Material-specific lateralization is a core concept in epilepsy neuropsychology: left temporal resections tend to affect verbal memory and right resections nonverbal memory, though the pattern is not absolute." },
    { stem: "What role does the neuropsychologist play before this kind of surgery?",
      opts: ["None; surgery decisions are purely neurological.",
             "Establish a baseline, help lateralize dysfunction, and estimate the risk of memory decline after surgery.",
             "Choose the surgical instruments.",
             "Prescribe anti-seizure medication."],
      a: 1, why: "Pre-surgical evaluation helps predict who is at risk of losing function and gives a baseline for comparison, as in this follow-up." }
  ],
  chain: ["Right amygdala, hippocampus and temporal pole removed", "Learning that a cue predicts harm is weakened in the body but not in knowledge", "Normal verbal memory, mild visual memory decline, reduced conditioned arousal", "Seizure-free; less bodily alarm to warning cues"],
  differential: "Post-operative depression or anxiety, medication effects, and pre-existing memory problems from the epilepsy itself.",
  finding: "LaBar et al. (1995) found that even unilateral temporal lobectomy impaired fear conditioning, while patients could still report the tone–noise pairing.",
  takeaway: "Emotional learning can be impaired when explicit knowledge is not. Post-surgical assessment should look beyond memory to mood and emotional functioning.",
  refs: [
    "Bechara, A., Tranel, D., Damasio, H., Adolphs, R., Rockland, C., & Damasio, A. R. (1995). Double dissociation of conditioning and declarative knowledge relative to the amygdala and hippocampus in humans. Science, 269(5227), 1115–1118.",
    "LaBar, K. S., LeDoux, J. E., Spencer, D. D., & Phelps, E. A. (1995). Impaired fear conditioning following unilateral temporal lobectomy in humans. Journal of Neuroscience, 15(10), 6846–6855."
  ],
  domains: ["emotion", "learn"]
},

/* ===== C. Reward learning and motivation ===== */
{
  id: "pd", alias: "c3", cluster: "C", title: "The retired engineer and the slot machines", etiology: "treatment",
  condition: "Parkinson's disease on a dopamine agonist", hits: ["vta", "striatum"], side: "Bilateral", featured: true, week: "Movement disorders (Oct 23)",
  story: `“Dad was diagnosed with Parkinson's three years ago. Six months after his neurologist added a new pill, pramipexole, his tremor was much better, but he started driving to the casino every afternoon. We found $40,000 in credit card debt. He kept saying he was ‘on a winning streak.’ He'd never gambled in his life.”`,
  who: "His daughter, describing Mr. P, 67, with Parkinson's disease treated with a dopamine agonist",
  referral: "Neurologist asks whether cognitive decline explains the new gambling.",
  profile: [
    ["MoCA (cognitive screen)", "27 / 30", "Normal", "ok"],
    ["WMS-IV Delayed Memory Index", "101", "Average", "ok"],
    ["Trail Making Test, Part B", "22nd percentile", "Low average (slowed)", "mid"],
    ["QUIP (impulse control screen)", "Positive for gambling and buying", "Clinically significant", "low"],
    ["Probabilistic selection task, on medication", "Learns from rewards; poor learning from losses", "Imbalanced reward learning", "low"],
    ["Delay discounting", "Strongly prefers immediate rewards", "Elevated impulsivity", "low"],
    ["Motor symptoms (on medication)", "Much improved", "Good treatment response", "ok"]
  ],
  questions: [
    { stem: "Dopamine neurons fire more when an outcome is better than expected and less when it is worse. What is this signal called?",
      opts: ["A reward prediction error", "A somatic marker", "An action potential threshold", "Long-term potentiation"],
      a: 0, why: "Schultz et al. (1997) showed that midbrain dopamine neurons encode reward prediction errors, the difference between the reward received and the reward expected. This signal teaches the striatum which actions pay off." },
    { stem: "Why might a dopamine agonist trigger gambling in Mr. P?",
      opts: ["It damages the hippocampus, causing memory loss.",
             "It floods reward circuits with tonic dopamine, boosting learning from wins and blunting learning from losses.",
             "It causes a stroke in the frontal lobe.",
             "It reduces his IQ."],
      a: 1, why: "Frank et al. (2004) found that Parkinson's patients on dopamine medication learned better from positive feedback and worse from negative feedback. Constant stimulation of ventral striatal receptors may also make the dips that signal “worse than expected” less effective." },
    { stem: "What is the most appropriate first step for Mr. P's care team?",
      opts: ["Prescribe more of the same medication.",
             "Screen for impulse control disorders and consider reducing or switching the dopamine agonist.",
             "Refer him for memory rehabilitation.",
             "Conclude that the gambling is a personality flaw unrelated to treatment."],
      a: 1, why: "Weintraub et al. (2010) found impulse control disorders in 17.1% of patients taking dopamine agonists versus 6.9% of those not taking them. Routine screening and medication adjustment are standard practice." }
  ],
  chain: ["Dopamine agonist overstimulates the ventral striatum", "Wins are overlearned and losses underlearned", "Normal memory, mild executive slowing, positive impulse control screen", "Compulsive gambling and spending despite large losses"],
  differential: "Early Parkinson's dementia, mania, and lifelong gambling problems. The timing after starting the agonist and the normal cognitive screen point to a medication effect.",
  finding: "Frank, Seeberger and O'Reilly (2004) titled their study “By carrot or by stick.” Off medication, Parkinson's patients learned better from punishment; on medication, they learned better from reward. The same brain could be pushed in either direction by dopamine levels.",
  takeaway: "Ask every patient on dopamine agonists, and their family, about gambling, shopping, eating and sexual behavior, because patients often do not report these changes. Neuropsychological assessment should include impulse control screening alongside cognition.",
  refs: [
    "Schultz, W., Dayan, P., & Montague, P. R. (1997). A neural substrate of prediction and reward. Science, 275(5306), 1593–1599.",
    "Frank, M. J., Seeberger, L. C., & O'Reilly, R. C. (2004). By carrot or by stick: Cognitive reinforcement learning in parkinsonism. Science, 306(5703), 1940–1943.",
    "Weintraub, D., Koester, J., Potenza, M. N., et al. (2010). Impulse control disorders in Parkinson disease: A cross-sectional study of 3090 patients. Archives of Neurology, 67(5), 589–595.",
    "Thomas, J., & Tröster, A. (2024). Neuropsychology and movement disorders. Neurologic Clinics, 42, 821–833. (Course reading)"
  ],
  domains: ["learn", "risk", "value"]
},
{
  id: "dbs", cluster: "C", title: "The man who stopped pausing", etiology: "treatment",
  condition: "Subthalamic deep brain stimulation for Parkinson's disease", hits: ["stn"], side: "Bilateral",
  story: `“The stimulator gave me my hands back. I can button a shirt again. But my wife says I've become a snap decider. I bought a car after a ten-minute test drive and agreed to sell our house before we'd talked about it. When there's a hard choice, I just go.”`,
  who: "Mr. D, 59, a year after bilateral subthalamic nucleus deep brain stimulation for Parkinson's disease",
  referral: "Movement disorders team asks whether stimulation is contributing to impulsive decisions.",
  profile: [
    ["Motor symptoms (on stimulation)", "Markedly improved", "Excellent response", "ok"],
    ["Delayed memory", "Average", "Intact", "ok"],
    ["Phonemic verbal fluency", "Down from 48th to 21st percentile since surgery", "Mild decline", "mid"],
    ["High-conflict choices: response time", "No slowing compared with easy choices", "Impaired", "low"],
    ["Learning from rewards and losses", "Balanced", "Intact", "ok"],
    ["Impulsivity rating (spouse)", "Elevated", "Clinically significant", "low"]
  ],
  questions: [
    { stem: "Healthy people slow down when two options are almost equally good. Frank et al. (2007) found that STN stimulation removed this slowing. What does that suggest the STN does?",
      opts: ["Stores long-term memories.",
             "Acts as a brake, buying time when options conflict (“hold your horses”).",
             "Produces dopamine.",
             "Controls vision."],
      a: 1, why: "The subthalamic nucleus raises the threshold for acting when choices conflict. Stimulation disrupted this, so patients made fast, impulsive choices on hard trials." },
    { stem: "In the same study, dopamine medication changed learning from rewards and losses but did not remove conflict slowing. Why does this matter?",
      opts: ["It shows medication and stimulation cause impulsivity in different ways, so they need different solutions.",
             "It proves stimulation is useless.",
             "It shows medication causes all impulsivity.",
             "It does not matter clinically."],
      a: 0, why: "This is a double dissociation: medication alters what is learned, stimulation alters how long you wait before acting. Knowing the mechanism guides whether to adjust medication or stimulation settings." },
    { stem: "His phonemic fluency dropped after surgery. How should this be interpreted?",
      opts: ["As evidence of Alzheimer's disease.",
             "As a known, usually mild change after STN surgery that pre-operative testing helps document.",
             "As malingering.",
             "As unrelated to anything."],
      a: 1, why: "Verbal fluency decline is one of the most consistent cognitive changes after STN DBS. Pre-operative neuropsychological testing provides the baseline that makes this comparison possible." }
  ],
  chain: ["High-frequency stimulation of the subthalamic nucleus", "The brake that buys time during conflict is weakened", "Normal memory, no slowing on hard choices, mild fluency decline", "Fast, impulsive major decisions"],
  differential: "Medication-related impulse control disorder, post-operative hypomania, and frontal cognitive decline.",
  finding: "Frank et al.'s (2007) paper “Hold your horses” tied a computational model of the basal ganglia to a clinical side effect, showing how theory can guide care.",
  takeaway: "Include decision-making and impulsivity in pre- and post-operative assessment for DBS. Stimulation settings can sometimes be adjusted, and families can agree on a waiting period before large decisions.",
  refs: [
    "Frank, M. J., Samanta, J., Moustafa, A. A., & Sherman, S. J. (2007). Hold your horses: Impulsivity, deep brain stimulation, and medication in parkinsonism. Science, 318(5854), 1309–1312."
  ],
  domains: ["risk", "value"]
},
{
  id: "pallidal", cluster: "C", title: "The man who waited to be asked", etiology: "hypoxic",
  condition: "Bilateral globus pallidus lesions after carbon monoxide poisoning", hits: ["gp"], side: "Bilateral",
  story: `“After the furnace leak, Gary sits in his chair all day. He isn't sad; if you ask him, he says he feels fine. If I say ‘Let's make dinner,’ he gets up and cooks a perfect meal. Then he sits down again. He used to love fishing. He says he still does, but he never goes.”`,
  who: "His wife, describing Mr. G, 52, a year after carbon monoxide poisoning damaged both globus pallidi",
  referral: "Primary care asks whether he is depressed and should start an antidepressant.",
  profile: [
    ["WAIS-IV Full Scale IQ", "96", "Average", "ok"],
    ["Delayed memory", "Low average", "Mildly reduced", "mid"],
    ["Performance when prompted step by step", "Normal", "Intact", "ok"],
    ["Apathy Evaluation Scale (informant)", "Severe", "Clinically significant", "low"],
    ["Depression scale (self-report)", "No sadness or guilt", "Not depressed", "ok"],
    ["Reward sensitivity task", "Does not speed up for bigger rewards", "Impaired", "low"]
  ],
  questions: [
    { stem: "Mr. G does nothing on his own but performs well when prompted. What is this pattern called?",
      opts: ["Auto-activation deficit (psychic akinesia)", "Hemispatial neglect", "Anterograde amnesia", "Prosopagnosia"],
      a: 0, why: "Laplane et al. (1989) described patients with bilateral basal ganglia lesions who lost spontaneous activity and thought, yet could act normally when externally prompted. Levy and Dubois (2006) call this an auto-activation deficit." },
    { stem: "For case conceptualization, what best separates his apathy from depression?",
      opts: ["Apathy always includes sadness.",
             "He lacks drive but reports no sadness, guilt or hopelessness.",
             "Depression never reduces activity.",
             "There is no difference."],
      a: 1, why: "Apathy is reduced goal-directed behavior; depression includes negative mood and thoughts. They can co-occur, but treating apathy as depression may not help." },
    { stem: "Adam et al. (2013) found that patients like Mr. G did not speed up for bigger rewards. What happened when they received a dopamine agonist?",
      opts: ["Nothing changed.",
             "Their reward sensitivity improved.",
             "They became more depressed.",
             "They lost memory."],
      a: 1, why: "The finding suggests apathy here is a problem of translating reward into effort, and it pointed to a possible treatment in carefully selected patients." }
  ],
  chain: ["Both globus pallidi damaged", "Rewards no longer energize action", "Normal performance with prompts, severe apathy, no depression, reward insensitivity", "Sits all day, abandons hobbies, needs others to start activities"],
  differential: "Depression, frontal lesions, hypothyroidism, and akinetic mutism from medial frontal damage (compare the cingulate case).",
  finding: "These patients show that motivation can be lost while knowledge, skill and mood are preserved, which makes apathy a distinct target for assessment and treatment.",
  takeaway: "Measure apathy separately from depression. Recommend external prompts, routines and checklists; a trial of dopaminergic medication may be considered by the medical team.",
  refs: [
    "Laplane, D., Levasseur, M., Pillon, B., et al. (1989). Obsessive-compulsive and other behavioural changes with bilateral basal ganglia lesions. Brain, 112(3), 699–725.",
    "Levy, R., & Dubois, B. (2006). Apathy and the functional anatomy of the prefrontal cortex–basal ganglia circuits. Cerebral Cortex, 16(7), 916–928.",
    "Adam, R., Leff, A., Sinha, N., et al. (2013). Dopamine reverses reward insensitivity in apathy following globus pallidus lesions. Cortex, 49(5), 1292–1303."
  ],
  domains: ["motiv", "learn"]
},
{
  id: "hd", cluster: "C", title: "The nurse with a short fuse", etiology: "genetic",
  condition: "Early Huntington's disease", hits: ["caudate", "insula"], side: "Bilateral",
  story: `“Mom was always patient. Now she screams over small things and then forgets it a minute later. She's spending money on things we don't need. She has little movements in her fingers that she doesn't notice. Her father had Huntington's, and she never wanted to be tested.”`,
  who: "Her daughter, describing Ms. H, 45, recently diagnosed with Huntington's disease",
  referral: "Neurology asks for a baseline profile and guidance on work and finances.",
  profile: [
    ["Symbol Digit Modalities Test", "6th percentile", "Impaired (slowed)", "low"],
    ["Stroop interference", "9th percentile", "Impaired", "low"],
    ["Delayed recall with cues", "Low average", "Retrieval weaker than storage", "mid"],
    ["Iowa Gambling Task", "Continues choosing risky decks", "Impaired", "low"],
    ["Facial disgust recognition", "Well below controls", "Impaired", "low"],
    ["Irritability (Problem Behaviors Assessment)", "Moderate to severe", "Clinically significant", "low"],
    ["Motor exam", "Mild chorea", "Abnormal", "low"]
  ],
  questions: [
    { stem: "Huntington's disease first targets which structure, shown highlighted?",
      opts: ["Caudate nucleus of the striatum", "Occipital cortex", "Cerebellum", "Hippocampus"],
      a: 0, why: "Medium spiny neurons in the caudate and putamen degenerate early. Because the striatum connects to frontal circuits, the cognitive profile looks “frontal”: slowed, poor at switching, and weak at retrieval." },
    { stem: "Sprengelmeyer et al. (1996) found an emotion recognition deficit that was especially severe for one emotion in Huntington's disease. Which?",
      opts: ["Disgust", "Happiness", "Surprise", "No emotion was affected"],
      a: 0, why: "Disgust recognition was most affected, linking it to the basal ganglia and insula. Compare Ms. S, whose amygdala damage selectively impaired fear." },
    { stem: "Stout et al. (2001) found Huntington's patients chose risky decks on the IGT. Which recommendation follows?",
      opts: ["None; she can manage everything.",
             "Discuss financial safeguards and future planning early, while she can take part in decisions.",
             "Memory training only.",
             "Tell her not to worry about money."],
      a: 1, why: "Risky decision-making, irritability and reduced insight make early planning important. Involving the patient early respects her autonomy." }
  ],
  chain: ["Degeneration of the caudate and connected frontal and insular circuits", "Poor control of impulses, emotion reading and risk", "Slowed processing, impaired Stroop and IGT, poor disgust recognition", "Irritable outbursts, impulsive spending, strain at work and home"],
  differential: "Other choreas, depression (common in HD), and early frontotemporal dementia. Family history and genetic testing confirm the diagnosis.",
  finding: "Huntington's disease shows how a subcortical disease can produce emotional and decision-making changes years before severe motor disability.",
  takeaway: "Assess emotion and decision-making, not only motor and cognitive symptoms. Genetic counseling, mood treatment and financial planning are part of care.",
  refs: [
    "Stout, J. C., Rodawalt, W. C., & Siemers, E. R. (2001). Risky decision making in Huntington's disease. Journal of the International Neuropsychological Society, 7(1), 92–101.",
    "Sprengelmeyer, R., Young, A. W., Calder, A. J., et al. (1996). Loss of disgust: Perception of faces and emotions in Huntington's disease. Brain, 119(5), 1647–1665."
  ],
  domains: ["risk", "emotion", "social"]
},
{
  id: "addiction", cluster: "C", title: "The welder who always relapsed", etiology: "substance",
  condition: "Stimulant and alcohol use disorder", hits: ["vmpfc", "striatum"], side: "Bilateral",
  story: `“I know what meth costs me. I lost my job, my truck, and I don't see my son. Every time I get out of treatment I mean it. Then someone offers and the next few hours are all that exist. Next month might as well be next century.”`,
  who: "Mr. M, 31, four months into treatment for methamphetamine and alcohol use disorder",
  referral: "Treatment program asks whether cognitive problems contribute to repeated relapse.",
  profile: [
    ["WAIS-IV Full Scale IQ", "99", "Average", "ok"],
    ["Delayed memory", "Average", "Intact", "ok"],
    ["Wisconsin Card Sorting Test", "Average", "Intact", "ok"],
    ["Iowa Gambling Task", "Prefers risky decks", "Impaired (vmPFC-like pattern)", "low"],
    ["Delay discounting", "Very steep", "Strongly prefers immediate rewards", "low"],
    ["Craving rating when shown drug cues", "High", "Elevated", "low"]
  ],
  questions: [
    { stem: "Bechara et al. (2001) found that many substance users performed like vmPFC patients on the IGT. What did they call this kind of problem?",
      opts: ["Myopia for the future", "Global amnesia", "Visual neglect", "Expressive aphasia"],
      a: 0, why: "People with this pattern are driven by immediate outcomes and insensitive to future consequences, positive or negative. Not every user showed it; a subgroup performed normally." },
    { stem: "Is his IGT performance a cause or a consequence of drug use?",
      opts: ["Definitely a cause.",
             "Definitely a consequence.",
             "Cross-sectional studies cannot tell; it may be a pre-existing vulnerability, an effect of drugs on the brain, or both.",
             "Neither; the IGT is unrelated."],
      a: 2, why: "This is a key research-literacy point. Longitudinal and family studies are needed to separate vulnerability from damage." },
    { stem: "Which treatment approach best fits his profile?",
      opts: ["Long lectures on the future harms of drug use.",
             "Contingency management with immediate, concrete rewards for abstinence.",
             "No treatment; his IQ is average.",
             "Memory rehabilitation."],
      a: 1, why: "If future consequences carry little weight, immediate rewards are more likely to shape behavior than distant threats." }
  ],
  chain: ["Altered vmPFC–striatal valuation (vulnerability, drug effects or both)", "Immediate rewards dominate; future losses carry little weight", "Normal IQ and card sorting, impaired IGT, steep discounting", "Relapse despite knowing the costs"],
  differential: "Withdrawal effects, depression, ADHD and traumatic brain injury, all common in this population.",
  finding: "Addiction is not a classic lesion, but it shows the same decision profile as vmPFC damage, suggesting a shared circuit for weighing now against later.",
  takeaway: "Assess decision-making in people with repeated relapse, and match treatment to the profile: immediate reinforcement, cue management and structured support.",
  refs: [
    "Bechara, A., Dolan, S., Denburg, N., Hindes, A., Anderson, S. W., & Nathan, P. E. (2001). Decision-making deficits, linked to a dysfunctional ventromedial prefrontal cortex, revealed in alcohol and stimulant abusers. Neuropsychologia, 39(4), 376–389."
  ],
  domains: ["value", "risk", "learn"]
},

/* ===== D. Body states and effort ===== */
{
  id: "insula", cluster: "D", title: "The smoker whose body forgot the urge", etiology: "stroke",
  condition: "Left insular stroke", hits: ["insula"], side: "Left",
  story: `“I smoked two packs a day for forty years. After the stroke I just stopped. No patches, no willpower. I didn't miss it. It was as if my body had forgotten that it wanted a cigarette. My doctors were more surprised than I was.”`,
  who: "Mr. N, 58, a year after a stroke that damaged his left insula",
  referral: "Stroke clinic follow-up of cognition and mood.",
  profile: [
    ["Language screen", "Mild word-finding pauses", "Mildly reduced", "mid"],
    ["Delayed memory", "Average", "Intact", "ok"],
    ["Craving for cigarettes", "None since stroke", "Abolished", "low"],
    ["Cambridge Gamble Task: bets adjusted to odds", "Bets similar amounts regardless of odds", "Reduced risk adjustment", "low"],
    ["Gambling task: near-miss and gambler's fallacy effects", "Absent", "Atypical (reduced distortion)", "mid"],
    ["Heartbeat detection task", "Below average", "Reduced interoceptive accuracy", "low"]
  ],
  questions: [
    { stem: "Naqvi et al. (2007) found that smokers with insula damage were more likely to quit easily and without relapse. What does the insula seem to contribute?",
      opts: ["The conscious urge or bodily feeling of craving", "Memory for smoking", "Motor control of the hands", "Vision"],
      a: 0, why: "The insula maps internal body states (interoception). Damage disrupted the felt urge to smoke, suggesting the insula is a target for understanding addiction." },
    { stem: "Clark et al. (2014) found that insula damage abolished the “near miss” and gambler's fallacy effects. Why is that interesting?",
      opts: ["It shows these gambling distortions depend partly on the insula, which may matter for gambling disorder.",
             "It proves insula patients become gambling addicts.",
             "It means the insula stores numbers.",
             "It has no relevance to real life."],
      a: 0, why: "In healthy people, near misses feel almost like wins and increase the urge to keep playing. Without the insula, this distortion disappeared." },
    { stem: "On the Cambridge Gamble Task, he bets about the same amount whether odds are good or bad. What does this suggest for everyday life?",
      opts: ["He will have trouble reading.",
             "He may not scale his risk-taking to the actual odds, for example in finances or driving.",
             "He will become fearful of all risks.",
             "No everyday implications."],
      a: 1, why: "Clark et al. (2008) found insula lesions reduced adjustment of bets to the odds of winning, a pattern different from vmPFC lesions." }
  ],
  chain: ["Insula damaged by stroke", "Body signals such as craving and risk-related arousal no longer feed decisions", "Craving abolished, bets not scaled to odds, reduced interoception", "Quit smoking easily; possibly less calibrated risk-taking"],
  differential: "Motivation from a health scare (Naqvi et al. compared with non-insula strokes), and depression or apathy.",
  finding: "These cases show that the same body-state signals that support everyday risk calibration also support cravings, a reminder that an “impairment” can sometimes help.",
  takeaway: "Interoception and craving can be assessed. After insular strokes, ask about changes in appetite, craving and risk-taking, and consider safety in financial decisions.",
  refs: [
    "Naqvi, N. H., Rudrauf, D., Damasio, H., & Bechara, A. (2007). Damage to the insula disrupts addiction to cigarette smoking. Science, 315(5811), 531–534.",
    "Clark, L., Bechara, A., Damasio, H., Aitken, M. R. F., Sahakian, B. J., & Robbins, T. W. (2008). Differential effects of insular and ventromedial prefrontal cortex lesions on risky decision-making. Brain, 131(5), 1311–1322.",
    "Clark, L., Studer, B., Bruss, J., Tranel, D., & Bechara, A. (2014). Damage to insula abolishes cognitive distortions during simulated gambling. PNAS, 111(16), 6098–6103."
  ],
  domains: ["risk", "emotion", "value"]
},
{
  id: "acc", cluster: "D", title: "The woman for whom nothing was worth it", etiology: "stroke",
  condition: "Bilateral anterior cingulate infarcts", hits: ["acc"], side: "Bilateral",
  story: `“Since the strokes, Carol barely speaks unless you ask her something directly, and then she answers in a word or two. She'll lie in bed until noon. When she broke her wrist she said it hurt but didn't seem bothered. If you offer her a choice between a walk to the garden and staying in bed, she always stays.”`,
  who: "Her husband, describing Mrs. C, 63, after bilateral anterior cerebral artery strokes affecting the anterior cingulate cortex",
  referral: "Rehabilitation team asks why she won't engage in therapy.",
  profile: [
    ["Orientation", "Intact", "Intact", "ok"],
    ["Delayed memory", "Low average", "Mildly reduced", "mid"],
    ["Verbal fluency", "2nd percentile", "Severely reduced", "low"],
    ["Stroop interference", "Many errors", "Impaired", "low"],
    ["Effort-based choice task", "Rarely accepts higher effort for higher reward", "Impaired", "low"],
    ["Apathy scale (informant)", "Severe", "Clinically significant", "low"],
    ["Pain report", "Notices pain, little distress", "Reduced pain affect", "mid"]
  ],
  questions: [
    { stem: "Mrs. C rarely chooses to work harder for a bigger reward. Current models link this to the anterior cingulate cortex. What does the ACC seem to do?",
      opts: ["Weigh whether a reward is worth the effort required.", "Store vocabulary.", "Process visual motion.", "Control breathing."],
      a: 0, why: "Le Heron et al. (2018) describe apathy as a failure of effort-based decision-making, with the ACC central to computing whether effort is worth it." },
    { stem: "Her extreme case is close to which classic syndrome?",
      opts: ["Akinetic mutism", "Locked-in syndrome", "Wernicke's aphasia", "Balint syndrome"],
      a: 0, why: "Akinetic mutism, seen after bilateral medial frontal and cingulate damage, involves little speech or movement despite being awake. Unlike locked-in syndrome, the problem is drive, not paralysis." },
    { stem: "She notices pain but is not distressed by it. What does this suggest?",
      opts: ["The ACC contributes to the emotional, unpleasant part of pain.",
             "She has lost all sensation.",
             "She is pretending.",
             "Pain is processed only in the spinal cord."],
      a: 0, why: "Devinsky et al. (1995) review evidence that the ACC supports the affective component of pain; cingulotomy was once used to reduce suffering from intractable pain." }
  ],
  chain: ["Bilateral anterior cingulate damage", "Effort no longer seems worth the reward; conflict monitoring weakened", "Severe fluency loss, Stroop errors, low effort choices, apathy", "Stays in bed, speaks little, disengages from therapy"],
  differential: "Depression, hypoactive delirium, locked-in syndrome, and pallidal apathy (compare Mr. G).",
  finding: "Medial frontal cases suggest motivation can be studied as a decision: is this reward worth this effort?",
  takeaway: "Treat disengagement as a symptom of the lesion, not as unwillingness. Lower effort costs, give external cues, and reward small steps.",
  refs: [
    "Devinsky, O., Morrell, M. J., & Vogt, B. A. (1995). Contributions of anterior cingulate cortex to behaviour. Brain, 118(1), 279–306.",
    "Le Heron, C., Apps, M. A. J., & Husain, M. (2018). The anatomy of apathy: A neurocognitive framework for amotivated behaviour. Neuropsychologia, 118(Pt B), 54–67."
  ],
  domains: ["motiv", "emotion"]
},

/* ===== E. Feeling, familiarity and awareness ===== */
{
  id: "rhs", cluster: "E", title: "The man who said he could drive home", etiology: "stroke",
  condition: "Right middle cerebral artery stroke", hits: ["insula", "parietal", "dlpfc"], side: "Right",
  story: `“Dad's left arm and leg don't move since the stroke, but he keeps telling the nurses he's fine and wants to drive home. He speaks normally, but in a flat voice, and he doesn't get it when I'm joking. When I cried in front of him, he asked what was for lunch.”`,
  who: "His son, describing Mr. R, 70, two weeks after a large right hemisphere stroke",
  referral: "Discharge team asks whether he can make safe decisions about going home.",
  profile: [
    ["Language (naming, comprehension)", "Normal", "Intact", "ok"],
    ["Line bisection and cancellation", "Misses left side", "Left neglect", "low"],
    ["Awareness of weakness (anosognosia interview)", "Denies left-sided weakness", "Anosognosia", "low"],
    ["Affective prosody comprehension", "Misreads emotional tone", "Impaired", "low"],
    ["Facial emotion recognition", "Below average", "Mildly impaired", "mid"],
    ["Delayed memory", "Low average", "Mildly reduced", "mid"]
  ],
  questions: [
    { stem: "Mr. R denies his paralysis. What is this called, and why does it matter for decisions?",
      opts: ["Anosognosia; he cannot weigh risks he doesn't believe exist.",
             "Aphasia; he cannot speak.",
             "Amnesia; he forgot the stroke.",
             "Agnosia; he cannot see objects."],
      a: 0, why: "Anosognosia is most common after right hemisphere damage (Orfei et al., 2007). Decisions about driving or living alone become unsafe because the person's self-model is wrong." },
    { stem: "Gainotti (1972) compared emotional reactions after left versus right hemisphere lesions. What did he find?",
      opts: ["Left lesions often brought distress (“catastrophic reactions”); right lesions more often brought indifference.",
             "No differences.",
             "Right lesions caused more crying.",
             "Only left lesions affected emotion."],
      a: 0, why: "This classic laterality finding fits Mr. R's indifference. The course reading by Turnbull and Salas (2021) discusses how laterality and hierarchy shape emotion after brain damage." },
    { stem: "For conceptualization, who should make the discharge decision?",
      opts: ["Mr. R alone, since his language and IQ are fine.",
             "A team decision that includes a capacity assessment, because anosognosia and neglect undermine his judgment about his own safety.",
             "No one; discharge immediately.",
             "Only the insurance company."],
      a: 1, why: "Intact language can make people seem fully capable. A capacity evaluation focused on understanding and appreciating his own situation is needed." }
  ],
  chain: ["Large right hemisphere stroke (insula, parietal and frontal regions)", "Awareness of the body and others' emotions is disrupted", "Normal language, left neglect, anosognosia, impaired prosody", "Unsafe plans, indifference, misread family emotions"],
  differential: "Delirium, psychological denial, and dementia. Anosognosia often improves over weeks, so reassessment is important.",
  finding: "Ross (1981) described aprosodias after right hemisphere damage, organized much like the aphasias but for emotional tone.",
  takeaway: "Right hemisphere strokes can impair judgment while leaving language intact. Assess awareness, prosody and neglect, and involve family in safety planning.",
  refs: [
    "Gainotti, G. (1972). Emotional behavior and hemispheric side of the lesion. Cortex, 8(1), 41–55.",
    "Ross, E. D. (1981). The aprosodias: Functional-anatomic organization of the affective components of language in the right hemisphere. Archives of Neurology, 38(9), 561–569.",
    "Orfei, M. D., Robinson, R. G., Prigatano, G. P., et al. (2007). Anosognosia for hemiplegia after stroke is a multifaceted phenomenon: A systematic review of the literature. Brain, 130(12), 3075–3090.",
    "Turnbull, O. H., & Salas, C. E. (2021). The neuropsychology of emotion and emotion regulation: The role of laterality and hierarchy. Brain Sciences, 11(8), 1075. (Course reading)"
  ],
  domains: ["insight", "emotion", "social"]
},
{
  id: "capgras", cluster: "E", title: "The woman whose husband was an impostor", etiology: "tbi",
  condition: "Capgras delusion after right frontal and temporal injury", hits: ["fusiform", "amygdala", "dlpfc"], side: "Right",
  story: `“After the accident Yvonne looked at me and said, ‘You look exactly like my husband, but you're not him.’ When I call her from work, she's happy to talk to me. When I come home, she locks the bedroom door against the ‘impostor.’”`,
  who: "Her husband, describing Mrs. Y, 46, after a car accident injured the right frontal and temporal lobes",
  referral: "Psychiatry and neurology ask whether the delusion has a neurological explanation.",
  profile: [
    ["Face recognition (Benton Facial Recognition Test)", "Normal", "Intact", "ok"],
    ["Voice recognition of husband", "Accurate", "Intact", "ok"],
    ["Skin conductance to familiar faces", "No larger than to strangers", "Absent familiarity response", "low"],
    ["Belief evaluation (reasoning about evidence)", "Holds belief despite contrary evidence", "Impaired", "low"],
    ["Delayed memory", "Average", "Intact", "ok"]
  ],
  questions: [
    { stem: "Mrs. Y recognizes her husband's face but feels he is an impostor. What did Ellis et al. (1997) and Hirstein and Ramachandran (1997) find?",
      opts: ["Capgras patients lack the normal autonomic (skin conductance) response to familiar faces.",
             "Capgras patients cannot see faces at all.",
             "Capgras patients have normal responses to everything.",
             "Capgras is caused by poor eyesight."],
      a: 0, why: "Recognition is intact, but the emotional glow of familiarity is missing. The mind explains the mismatch: he looks right but feels wrong, so he must be an impostor." },
    { stem: "Why does she accept her husband on the phone?",
      opts: ["The disconnection affects the link between face processing and emotional systems, not voice processing.",
             "Phones make everyone sound the same.",
             "She has forgotten his voice.",
             "It is random."],
      a: 0, why: "The delusion is specific to visual input, supporting a disconnection account between ventral visual face areas and limbic regions." },
    { stem: "Many people have odd experiences without forming delusions. The “two-factor” theory adds a second problem. What is it?",
      opts: ["Impaired belief evaluation, often linked to right frontal damage", "Hearing loss", "Low IQ", "Left hemisphere language loss"],
      a: 0, why: "Factor one is the abnormal experience (no familiarity response). Factor two is a failure to reject an implausible explanation, which is why her belief-evaluation result matters." }
  ],
  chain: ["Disconnection between face areas and limbic regions, plus right frontal damage", "Familiar faces do not feel familiar; implausible beliefs are not rejected", "Normal face recognition, absent familiarity skin conductance, impaired belief evaluation", "Rejects spouse as impostor, locks him out"],
  differential: "Primary psychotic disorder, dementia with Lewy bodies (Capgras is common there), and delirium.",
  finding: "Capgras is a mirror image of prosopagnosia, where people cannot recognize faces but can show skin conductance responses to familiar ones.",
  takeaway: "A delusion can be the logical response to a strange emotional experience. Assess for neurological causes, and address safety, as rare cases have involved aggression toward the “impostor.”",
  refs: [
    "Hirstein, W., & Ramachandran, V. S. (1997). Capgras syndrome: A novel probe for understanding the neural representation of the identity and familiarity of persons. Proceedings of the Royal Society B, 264(1380), 437–444.",
    "Ellis, H. D., Young, A. W., Quayle, A. H., & De Pauw, K. W. (1997). Reduced autonomic responses to faces in Capgras delusion. Proceedings of the Royal Society B, 264(1384), 1085–1092."
  ],
  domains: ["emotion", "insight", "social"]
},

/* ===== F. Progressive and diffuse conditions ===== */
{
  id: "bvftd", alias: "c4", cluster: "F", title: "The teacher who changed", etiology: "neurodeg",
  condition: "Behavioral-variant frontotemporal dementia", hits: ["vmpfc", "insula", "acc"], side: "Right > left", featured: true, week: "Memory and neurodegenerative disorders (Oct 16)",
  story: `“My mother taught third grade for thirty years and was the kindest person I knew. Over the last two years she's started eating whole boxes of cookies, buying things she doesn't need, and making rude comments to strangers about their weight. When my father was in the hospital she didn't seem to care. She still remembers every birthday.”`,
  who: "Her son, describing Mrs. F, 61, referred for a memory evaluation",
  referral: "Primary care asks whether this is early Alzheimer's disease.",
  profile: [
    ["MMSE (cognitive screen)", "28 / 30", "Normal", "ok"],
    ["Story recall, delayed", "40th percentile", "Average", "ok"],
    ["Verbal fluency (FAS)", "12th percentile", "Low average", "mid"],
    ["Faux Pas Recognition Test", "Misses most social errors", "Impaired", "low"],
    ["Facial emotion recognition", "Impaired for negative emotions", "Impaired", "low"],
    ["Cambridge Gamble Task", "Bets more, deliberates less", "Risky decision-making", "low"],
    ["Neuropsychiatric Inventory (caregiver)", "Disinhibition, apathy, hyperorality", "Clinically significant", "low"],
    ["MRI", "Orbitofrontal, cingulate and anterior insula atrophy, right > left", "Consistent with bvFTD", "low"]
  ],
  questions: [
    { stem: "Mrs. F was referred for a memory evaluation, but her memory scores are normal. Which diagnosis fits best?",
      opts: ["Early Alzheimer's disease", "Behavioral-variant frontotemporal dementia", "Normal aging", "Major depression only"],
      a: 1, why: "bvFTD often begins with changes in personality, social behavior and eating while memory is relatively preserved. The revised criteria (Rascovsky et al., 2011) list disinhibition, apathy, loss of empathy, compulsive behavior and hyperorality." },
    { stem: "Why do standard screening tests like the MMSE often miss bvFTD early on?",
      opts: ["The MMSE mostly measures orientation, memory and language, not social and emotional judgment.",
             "Patients with bvFTD always score perfectly on all tests.",
             "The MMSE is only used for children.",
             "bvFTD only affects the cerebellum."],
      a: 0, why: "Screening tools focus on cognitive domains that are often spared early in bvFTD. Social cognition tests, caregiver questionnaires and decision-making tasks are needed to show the deficits." },
    { stem: "Mrs. F's loss of empathy and inappropriate comments are most closely linked to which change?",
      opts: ["Hippocampal atrophy", "Atrophy of the orbitofrontal cortex and anterior insula", "Damage to primary visual cortex", "Cerebellar degeneration"],
      a: 1, why: "The orbitofrontal cortex helps evaluate social consequences and the insula maps internal emotional states, including empathy for others' feelings. Both are early sites of atrophy in bvFTD." }
  ],
  chain: ["Progressive orbitofrontal, cingulate and insula atrophy", "Social and emotional consequences lose their weight", "Normal memory, impaired social cognition and risky betting", "Disinhibition, overspending, loss of empathy, overeating"],
  differential: "Alzheimer's disease (memory first), late-onset psychiatric illness, and the encephalitis case in this library (sudden onset with severe amnesia).",
  finding: "Rahman et al. (1999) found that patients with mild frontal-variant FTD performed normally on many standard tests but made riskier bets and deliberated less on a gambling task, which made decision-making tasks sensitive markers of early disease.",
  takeaway: "Behavior change in midlife with preserved memory should raise suspicion of bvFTD. Collateral history from family is essential, since patients often lack insight. Caregiver education and financial safeguards are early priorities.",
  refs: [
    "Rahman, S., Sahakian, B. J., Hodges, J. R., Rogers, R. D., & Robbins, T. W. (1999). Specific cognitive deficits in mild frontal variant frontotemporal dementia. Brain, 122(8), 1469–1493.",
    "Rascovsky, K., Hodges, J. R., Knopman, D., et al. (2011). Sensitivity of revised diagnostic criteria for the behavioural variant of frontotemporal dementia. Brain, 134(9), 2456–2477.",
    "Weintraub, S. (2022). Neuropsychological assessment in dementia diagnosis. Continuum, 28(3), 781–799. (Course reading)"
  ],
  domains: ["social", "risk", "emotion", "insight", "motiv"]
},
{
  id: "ad", cluster: "F", title: "The widow and the phone call from her “grandson”", etiology: "neurodeg",
  condition: "Early Alzheimer's disease", hits: ["hippocampus", "parietal"], side: "Bilateral",
  story: `“A man called saying he was my grandson and that he'd been arrested in Mexico. He cried and asked me not to tell his parents. I wired him $12,000 that afternoon, and more the next week. My real grandson was at college the whole time. I have always been careful with money.”`,
  who: "Mrs. B, 78, a retired bookkeeper, seen after her family discovered the transfers",
  referral: "Family asks whether she can still manage her own finances.",
  profile: [
    ["MoCA (cognitive screen)", "22 / 30", "Below cutoff", "mid"],
    ["Delayed word-list recall", "3rd percentile", "Impaired", "low"],
    ["Financial capacity instrument: basic money skills", "Intact", "Intact", "ok"],
    ["Financial capacity instrument: checkbook and bank statement", "Many errors", "Impaired", "low"],
    ["Financial judgment (scam detection items)", "Misses warning signs", "Impaired", "low"],
    ["Depression screen", "Negative", "Not depressed", "ok"]
  ],
  questions: [
    { stem: "Marson et al. (2000) studied financial capacity in Alzheimer's disease. What pattern did they find in mild AD?",
      opts: ["All financial skills were intact.",
             "Simple money skills were often preserved while complex skills such as checkbook management and financial judgment declined.",
             "All skills were lost at once.",
             "Financial skills are unrelated to dementia."],
      a: 1, why: "Financial capacity declines in a graded way. Complex, judgment-heavy tasks fail first, so a quick question like “Can you count change?” can miss risk." },
    { stem: "Boyle et al. (2019) followed older adults for years. What predicted a later diagnosis of Alzheimer's dementia?",
      opts: ["Lower scam awareness", "Higher income", "Owning a smartphone", "Living alone"],
      a: 0, why: "Low scam awareness predicted incident Alzheimer's dementia and mild cognitive impairment, suggesting that social and financial decision-making changes can be early signs." },
    { stem: "Which recommendation best follows from her profile?",
      opts: ["Take away all her independence immediately.",
             "Set up protections such as a trusted co-signer or power of attorney, while respecting the money skills she still has.",
             "No action is needed.",
             "Advise her to stop answering the phone forever and say nothing else."],
      a: 1, why: "Recommendations should match the graded profile: protect against the high-risk decisions while preserving autonomy where skills remain." }
  ],
  chain: ["Medial temporal and parietal degeneration (and early changes in valuation networks)", "Memory and complex judgment decline; emotionally urgent appeals are not checked", "Impaired recall and complex financial skills, basic money skills intact", "Scammed out of savings"],
  differential: "Normal aging, depression, and bvFTD (which can also bring poor financial judgment, but with early behavioral change).",
  finding: "Financial exploitation is often one of the first signs of cognitive decline that families notice, which makes financial capacity a key part of dementia assessment.",
  takeaway: "Ask about recent financial decisions in every older adult evaluation. Use a structured financial capacity assessment, and connect families with protections early.",
  refs: [
    "Marson, D. C., Sawrie, S. M., Snyder, S., et al. (2000). Assessing financial capacity in patients with Alzheimer disease: A conceptual model and prototype instrument. Archives of Neurology, 57(6), 877–884.",
    "Boyle, P. A., Yu, L., Schneider, J. A., Wilson, R. S., & Bennett, D. A. (2019). Scam awareness related to incident Alzheimer dementia and mild cognitive impairment: A prospective cohort study. Annals of Internal Medicine, 170(10), 702–709.",
    "Weintraub, S. (2022). Neuropsychological assessment in dementia diagnosis. Continuum, 28(3), 781–799. (Course reading)"
  ],
  domains: ["value", "risk", "insight"]
},
{
  id: "tbi", cluster: "F", title: "The student after the motorcycle crash", etiology: "tbi",
  condition: "Moderate–severe traumatic brain injury", hits: ["vmpfc", "atl", "dlpfc"], side: "Bilateral",
  story: `“Since the crash, Tyler went back to college but got into two fights in the first month. He says people were ‘looking at him wrong.’ He bets on sports apps late at night and has maxed out a credit card. He can't tell when I'm upset unless I say so. He says he's fine.”`,
  who: "His mother, describing Mr. T, 24, a year after a motorcycle crash with diffuse axonal injury and frontal and temporal contusions",
  referral: "College disability services asks what supports he needs.",
  profile: [
    ["Processing speed index", "9th percentile", "Low", "low"],
    ["Delayed memory", "Low average", "Mildly reduced", "mid"],
    ["Iowa Gambling Task", "Prefers risky decks", "Impaired", "low"],
    ["Facial emotion recognition", "Below cutoff, especially negative emotions", "Impaired", "low"],
    ["Toronto Alexithymia Scale", "Elevated", "Difficulty identifying own feelings", "low"],
    ["FrSBe disinhibition (family vs self)", "Family rating much higher", "Reduced insight", "low"]
  ],
  questions: [
    { stem: "Why are the orbitofrontal cortex and temporal poles especially vulnerable in head injuries like Tyler's?",
      opts: ["They rub against bony ridges at the base of the skull when the brain moves.",
             "They have no blood supply.",
             "They are on the surface of the back of the head.",
             "They are not vulnerable."],
      a: 0, why: "Acceleration and deceleration push the ventral frontal and anterior temporal lobes against rough skull surfaces, which is why emotional and social problems are so common after TBI." },
    { stem: "Babbage et al. (2011) pooled studies of facial emotion recognition after TBI. What did they find?",
      opts: ["Recognition difficulties are common and substantial after moderate to severe TBI.",
             "TBI never affects emotion recognition.",
             "Only happy faces are affected.",
             "Recognition improves after injury."],
      a: 0, why: "A large share of people with moderate to severe TBI have marked difficulty, which helps explain misread social situations like Tyler's fights." },
    { stem: "Fujiwara et al. (2008) related ventral frontal volume loss after TBI to performance on which kind of task?",
      opts: ["Decision-making and other ventral frontal tasks such as the IGT", "Visual acuity", "Hearing tests", "Finger tapping only"],
      a: 0, why: "Quantified MRI showed that ventral frontal damage, not total brain damage alone, related to performance on ventral frontal tasks, linking the lesion pattern to the profile." }
  ],
  chain: ["Diffuse axonal injury plus orbitofrontal and temporal pole contusions", "Slowed processing, poor emotion reading, weak future-oriented valuation", "Slow speed, impaired IGT and emotion recognition, alexithymia, poor insight", "Fights, night-time betting, debt, strained relationships"],
  differential: "Post-traumatic stress, depression, substance use, and pre-injury ADHD or conduct problems.",
  finding: "TBI combines several systems in this library: valuation (cluster A), emotion recognition (cluster B) and awareness (cluster E), which is why profiles vary so much between people.",
  takeaway: "Assess social cognition and decision-making after TBI, compare self and family ratings to gauge insight, and recommend supports such as emotion-recognition training and financial limits on betting apps.",
  refs: [
    "Babbage, D. R., Yim, J., Zupan, B., Neumann, D., Tomita, M. R., & Willer, B. (2011). Meta-analysis of facial affect recognition difficulties after traumatic brain injury. Neuropsychology, 25(3), 277–285.",
    "Fujiwara, E., Schwartz, M. L., Gao, F., Black, S. E., & Levine, B. (2008). Ventral frontal cortex functions and quantified MRI in traumatic brain injury. Neuropsychologia, 46(2), 461–474."
  ],
  domains: ["emotion", "risk", "social", "insight"]
},
{
  id: "regret", cluster: "A", title: "The gambler who felt no regret", etiology: "surgery",
  condition: "Orbitofrontal damage after tumor resection", hits: ["vmpfc"], side: "Bilateral",
  story: `“In the study they showed me two wheels of fortune. I picked one and lost a little. Then they showed me that the other wheel would have won big. The researcher asked how I felt. I said I felt a bit bad about losing. She asked whether it bothered me that the other wheel would have won. Honestly, no. Why would it? It's done.”`,
  who: "Ms. Q, 51, three years after removal of a tumor that damaged the orbitofrontal cortex. Modeled on the patients studied by Camille et al. (2004).",
  referral: "Research referral: does the patient experience regret, and does anticipated regret shape her choices?",
  profile: [
    ["WAIS-IV Full Scale IQ", "106", "Average", "ok"],
    ["Delayed memory", "Average", "Intact", "ok"],
    ["Disappointment (outcome worse than expected)", "Rated as unpleasant", "Intact", "ok"],
    ["Regret (unchosen option would have been better)", "No change in rated emotion", "Absent", "low"],
    ["Skin conductance to counterfactual outcomes", "No response", "Absent", "low"],
    ["Later choices shaped by anticipated regret", "No", "Absent", "low"]
  ],
  questions: [
    { stem: "Disappointment and regret both follow a bad outcome. What is the key difference?",
      opts: ["Regret requires comparing what happened with what would have happened if you had chosen differently.", "Regret is just stronger disappointment.", "Disappointment needs memory, regret does not.", "There is no difference."],
      a: 0, why: "Regret is counterfactual: it depends on knowing the outcome of the option you did not choose and feeling responsible for the choice." },
    { stem: "Camille et al. (2004) found that orbitofrontal patients felt disappointment but not regret. Why does this matter for decisions?",
      opts: ["Anticipated regret normally steers people away from choices they might regret; without it, learning from “what might have been” is lost.", "It means patients cannot feel anything.", "It shows regret is stored in the hippocampus.", "It has no effect on choice."],
      a: 0, why: "Healthy participants learned to avoid options likely to cause regret. The patients did not, linking the orbitofrontal cortex to counterfactual emotion and its role in future choices." },
    { stem: "For case conceptualization, which everyday problem is most likely?",
      opts: ["Repeating the same poor choices because missed opportunities don't sting.", "Forgetting where she parked.", "Losing the ability to read.", "Tremor at rest."],
      a: 0, why: "Without regret, the comparison that normally pushes us to change strategy is missing." }
  ],
  chain: ["Orbitofrontal cortex damaged", "Outcomes are not compared with what might have been", "Normal IQ and memory, disappointment intact, regret absent", "Repeats choices whose alternatives would have been better"],
  differential: "Depression (blunted emotion overall), alexithymia, and misunderstanding the task. Intact disappointment shows the problem is specific.",
  finding: "This study separated two emotions that seem similar, showing that the orbitofrontal cortex is needed for the one that depends on comparing real and imagined outcomes.",
  takeaway: "When frontal patients don't learn from mistakes, ask whether they compare their choice with alternatives. Explicit “what if” review can stand in for missing regret.",
  refs: ["Camille, N., Coricelli, G., Sallet, J., Pradat-Diehl, P., Duhamel, J.-R., & Sirigu, A. (2004). The involvement of the orbitofrontal cortex in the experience of regret. Science, 304(5674), 1167–1170."],
  domains: ["value", "emotion", "learn"]
},
{
  id: "ug", cluster: "A", title: "The man who refused free money", etiology: "stroke",
  condition: "Ventromedial prefrontal damage after aneurysm surgery", hits: ["vmpfc"], side: "Bilateral",
  story: `“They gave the other player $10 to split with me. He offered me $2 and kept $8. If I said no, we'd both get nothing. I said no every time he lowballed me, even though that left me with nothing. It was the principle. My wife says I've always been stubborn, but never like this.”`,
  who: "Mr. U, 55, two years after surgery for an anterior communicating artery aneurysm",
  referral: "Research referral comparing his social decisions with his moral judgments.",
  profile: [
    ["WAIS-IV Full Scale IQ", "101", "Average", "ok"],
    ["Ultimatum Game: rejection of fair offers", "Rare", "Typical", "ok"],
    ["Ultimatum Game: rejection of unfair offers", "Much more often than controls", "Atypical", "low"],
    ["Irritability (family rating)", "Elevated", "Clinically significant", "low"],
    ["Social knowledge", "Intact", "Intact", "ok"]
  ],
  questions: [
    { stem: "Koenigs and Tranel (2007) found vmPFC patients rejected unfair Ultimatum Game offers more often than controls. Why is this surprising?",
      opts: ["Rejecting any offer leaves you with nothing, so it is the less “rational” economic choice, yet the patients did it more.", "Patients accepted every offer.", "It shows vmPFC patients are perfectly rational.", "It is not surprising."],
      a: 0, why: "One might expect blunted emotion to produce coldly rational acceptance. Instead, patients reacted more to unfairness, suggesting vmPFC helps regulate anger rather than simply generating emotion." },
    { stem: "How does this fit with the moral dilemma case (Mr. V), where vmPFC patients seemed less emotional?",
      opts: ["vmPFC damage does not simply remove emotion; it disrupts how emotions are weighed and regulated in context.", "The two findings cannot both be true.", "The moral case was wrong.", "Only one study used patients."],
      a: 0, why: "Across studies, vmPFC patients show reduced social emotions like guilt and empathy but heightened, poorly regulated reactions like anger to unfairness." },
    { stem: "What should the clinician tell his family?",
      opts: ["That irritability and punishing others at his own expense are plausible effects of the injury, and strategies to pause before reacting may help.", "That he is choosing to be difficult.", "That nothing can be done.", "That it proves he has dementia."],
      a: 0, why: "Framing behavior as a brain-based regulation problem reduces blame and opens practical strategies." }
  ],
  chain: ["Ventromedial prefrontal damage", "Anger at unfairness is poorly regulated", "Normal IQ and social knowledge, high rejection of unfair offers", "Costly retaliation, irritability, damaged relationships"],
  differential: "Premorbid personality, post-stroke depression with irritability, and frontal disinhibition from other causes.",
  finding: "Together with the moral and trust studies, this shows vmPFC shapes how emotions guide social choices, in both directions.",
  takeaway: "Expect both blunted and exaggerated emotional reactions after vmPFC damage. Assess social decision-making directly rather than assuming one direction.",
  refs: ["Koenigs, M., & Tranel, D. (2007). Irrational economic decision-making after ventromedial prefrontal damage: Evidence from the Ultimatum Game. Journal of Neuroscience, 27(4), 951–956."],
  domains: ["social", "emotion", "value"]
},
{
  id: "collecting", cluster: "D", title: "The man whose garage filled with newspapers", etiology: "stroke",
  condition: "Mesial frontal damage (abnormal collecting)", hits: ["vmpfc", "acc"], side: "Right > left",
  story: `“After the surgery he started bringing home things: broken radios, old newspapers, catalogues. The garage is full and now the hallway too. If I throw something away he gets upset and goes looking for it. He was never a collector before. He knows the house is a mess. He just can't stop.”`,
  who: "His wife, describing Mr. H, 62, after damage to the medial frontal lobe. Modeled on the patients described by Anderson, Damasio and Damasio (2005).",
  referral: "Psychiatry asks whether this is obsessive-compulsive disorder.",
  profile: [
    ["WAIS-IV Full Scale IQ", "103", "Average", "ok"],
    ["Delayed memory", "Average", "Intact", "ok"],
    ["Collecting behavior (structured interview)", "Severe, began after injury", "Clinically significant", "low"],
    ["Obsessive thoughts or distress about collecting", "None reported", "Not typical OCD", "mid"],
    ["Iowa Gambling Task", "Mildly impaired", "Borderline", "mid"]
  ],
  questions: [
    { stem: "Anderson et al. (2005) found that abnormal collecting followed damage to which region?",
      opts: ["Mesial prefrontal cortex, especially on the right, including anterior cingulate and frontal polar regions", "Occipital lobe", "Cerebellum", "Left temporal lobe"],
      a: 0, why: "They proposed that this region normally keeps a primitive collecting drive, driven by subcortical and posterior regions, in check and tied to context." },
    { stem: "Why is this not simply OCD?",
      opts: ["The behavior began after a lesion and lacks the intrusive thoughts and distress typical of OCD.", "OCD never involves collecting.", "OCD only occurs in children.", "There is no difference."],
      a: 0, why: "Onset, lesion and phenomenology point to an acquired disinhibition of collecting rather than a primary anxiety disorder." },
    { stem: "Which intervention fits best?",
      opts: ["Environmental structure: agreed limits, regular supervised clear-outs and removing triggers.", "Ask him to try harder.", "Memory training.", "No action."],
      a: 0, why: "When internal control is lost, external structure is the most effective tool." }
  ],
  chain: ["Mesial frontal damage", "A collecting drive is released from contextual control", "Normal IQ and memory, severe collecting without obsessions", "Home filled with unneeded objects, family conflict"],
  differential: "OCD, hoarding disorder, bvFTD (which can also cause collecting), and depression.",
  finding: "This study suggests some complex behaviors reflect old drives normally regulated by frontal cortex, a recurring idea across this library.",
  takeaway: "New-onset hoarding in adulthood should prompt a neurological evaluation.",
  refs: ["Anderson, S. W., Damasio, H., & Damasio, A. R. (2005). A neural basis for collecting behaviour in humans. Brain, 128(1), 201–212."],
  domains: ["motiv", "value"]
},
{
  id: "utilization", cluster: "D", title: "The visitor who started using the doctor's tools", etiology: "neurodeg",
  condition: "Bilateral frontal damage (utilization and imitation behavior)", hits: ["vmpfc", "acc", "dlpfc"], side: "Bilateral",
  story: `“In the doctor's office, he put on the glasses lying on the desk, though he already had his own on. When the doctor put a hammer and nails in front of him, he started hammering a picture into the wall. Nobody asked him to. At home, if he sees a toothbrush he brushes his teeth, even if he just did.”`,
  who: "His daughter, describing Mr. L, 66, with frontal damage from a slowly progressive frontal disease",
  referral: "Neurology asks for a profile of frontal dysfunction.",
  profile: [
    ["MMSE", "26 / 30", "Borderline", "mid"],
    ["Frontal Assessment Battery", "9 / 18", "Impaired", "low"],
    ["Prehension behavior (FAB item)", "Grasps examiner's hands", "Impaired", "low"],
    ["Utilization behavior (observed)", "Uses objects within reach without instruction", "Present", "low"],
    ["Imitation behavior (observed)", "Copies examiner's gestures", "Present", "low"],
    ["Verbal fluency", "5th percentile", "Impaired", "low"]
  ],
  questions: [
    { stem: "Using objects just because they are present is called utilization behavior. What did Lhermitte (1986) call the broader pattern?",
      opts: ["Environmental dependency syndrome", "Alien hand syndrome", "Anton syndrome", "Capgras syndrome"],
      a: 0, why: "Lhermitte showed that frontal patients' actions were captured by their surroundings, as if the environment were giving instructions." },
    { stem: "What does this suggest about the frontal lobes' role in decisions?",
      opts: ["They let internal goals override the pull of whatever is in front of us.", "They store object names.", "They control vision.", "They are not involved."],
      a: 0, why: "Without frontal control, the most available action wins, so choices are driven by the environment instead of goals." },
    { stem: "Which bedside test item specifically probes environmental autonomy?",
      opts: ["Prehension behavior on the Frontal Assessment Battery", "Digit span", "Naming", "Clock drawing"],
      a: 0, why: "The FAB includes a prehension item: the examiner offers their hands without instruction and notes whether the patient grasps them." }
  ],
  chain: ["Bilateral frontal damage", "Goals no longer override environmental cues", "Impaired FAB, utilization and imitation behavior", "Uses others' belongings, acts on whatever is nearby"],
  differential: "Delirium, psychosis and obsessive-compulsive behavior.",
  finding: "Lhermitte's demonstrations remain among the most vivid evidence that the frontal lobes protect our autonomy from the environment.",
  takeaway: "Simplify the environment and remove risky objects; caregivers should know that behavior is cue-driven rather than deliberate.",
  refs: [
    "Lhermitte, F. (1986). Human autonomy and the frontal lobes. Part II: Patient behavior in complex and social situations: The “environmental dependency syndrome.” Annals of Neurology, 19(4), 335–343.",
    "Lhermitte, F., Pillon, B., & Serdaru, M. (1986). Human autonomy and the frontal lobes. Part I: Imitation and utilization behavior. Annals of Neurology, 19(4), 326–334."
  ],
  domains: ["motiv", "social", "insight"]
},
{
  id: "lhs", cluster: "E", title: "The woman who wept at the word she couldn't find", etiology: "stroke",
  condition: "Left frontal stroke with aphasia and post-stroke depression", hits: ["dlpfc", "insula"], side: "Left",
  story: `“When the therapist asked Lena to name a picture of a key and she couldn't, she started sobbing and pushed the cards off the table. She said ‘No good, no good.’ Since then she's stopped wanting to come to therapy and sleeps most of the afternoon.”`,
  who: "Her husband, describing Mrs. L, 64, six weeks after a left frontal stroke",
  referral: "Rehabilitation team asks whether her distress is a catastrophic reaction, depression or both.",
  profile: [
    ["Boston Diagnostic Aphasia Examination", "Nonfluent aphasia, comprehension relatively spared", "Impaired", "low"],
    ["Right-sided weakness", "Moderate", "Impaired", "low"],
    ["Awareness of deficits", "Fully aware", "Intact", "ok"],
    ["Depression (aphasia-friendly scale, observer-rated)", "Moderate", "Clinically significant", "low"],
    ["Anhedonia (caregiver report)", "Present", "Clinically significant", "low"]
  ],
  questions: [
    { stem: "Gainotti (1972) described sudden distress during testing after left hemisphere damage. What did he call it?",
      opts: ["Catastrophic reaction", "Indifference reaction", "Anosognosia", "Pseudobulbar affect"],
      a: 0, why: "Catastrophic reactions (tears, refusal, anger when confronted with failure) were more common after left lesions, contrasting with indifference after right lesions." },
    { stem: "Robinson et al. (1984) linked post-stroke depression to left anterior lesions. What did later systematic reviews find?",
      opts: ["The link with lesion location is inconsistent, so all stroke survivors should be screened.", "Only left lesions ever cause depression.", "Depression never follows stroke.", "Right lesions always cause depression."],
      a: 0, why: "Later meta-analyses did not consistently confirm the lateralization. Depression is common after strokes in any location, so screening is universal." },
    { stem: "How should depression be assessed in someone with aphasia?",
      opts: ["Use observer-rated or aphasia-friendly visual scales, not long verbal questionnaires.", "Skip assessment.", "Use only a verbal interview.", "Rely on IQ testing."],
      a: 0, why: "Language impairment makes standard self-report invalid; observer ratings and visual scales are recommended." }
  ],
  chain: ["Left frontal stroke", "Language loss with preserved awareness; frontal mood circuits affected", "Nonfluent aphasia, full awareness, depression", "Distress during tasks, withdrawal from therapy"],
  differential: "Pseudobulbar affect (crying without matching sadness), adjustment reaction and apathy.",
  finding: "Comparing this case with Mr. R (right hemisphere) shows how lesion side and awareness shape emotional reactions to disability.",
  takeaway: "Screen for depression after every stroke with methods suited to the person's language ability, and treat it, since it slows recovery.",
  refs: [
    "Gainotti, G. (1972). Emotional behavior and hemispheric side of the lesion. Cortex, 8(1), 41–55.",
    "Robinson, R. G., Kubos, K. L., Starr, L. B., Rao, K., & Price, T. R. (1984). Mood disorders in stroke patients: Importance of location of lesion. Brain, 107(1), 81–93.",
    "Carson, A. J., MacHale, S., Allen, K., et al. (2000). Depression after stroke and lesion location: A systematic review. Lancet, 356(9224), 122–126."
  ],
  domains: ["emotion", "motiv", "expr"]
},
{
  id: "mania", cluster: "E", title: "The accountant who suddenly felt invincible", etiology: "stroke",
  condition: "Secondary mania after right orbitofrontal and basotemporal stroke", hits: ["vmpfc", "atl"], side: "Right",
  story: `“A month after his stroke, Martin stopped sleeping. He talked nonstop, made plans to open three businesses and spent $20,000 on equipment in a week. He'd never had any mood problems. He says he's never felt better.”`,
  who: "His brother, describing Mr. M, 68, after a right hemisphere stroke",
  referral: "Psychiatry asks whether this is new bipolar disorder or a result of the stroke.",
  profile: [
    ["Young Mania Rating Scale", "31", "Moderate to severe mania", "low"],
    ["Sleep", "2–3 hours a night", "Severely reduced", "low"],
    ["Prior psychiatric history", "None", "—", "ok"],
    ["Family history of mood disorder", "Positive (mother)", "Risk factor", "mid"],
    ["Executive tests", "Disinhibited errors", "Impaired", "low"]
  ],
  questions: [
    { stem: "Starkstein et al. (1987) studied mania after brain injury. Which lesions were most often involved?",
      opts: ["Right hemisphere regions connected to the limbic system, such as orbitofrontal and basotemporal cortex", "Left occipital cortex", "Cerebellum only", "Spinal cord"],
      a: 0, why: "Secondary mania was linked to right-sided limbic-connected lesions, often in people with additional risk factors such as family history." },
    { stem: "What is the most urgent practical issue?",
      opts: ["Protecting finances and safety while mania is treated.", "Memory training.", "Speech therapy.", "Nothing; it will pass."],
      a: 0, why: "Manic spending and risk-taking can cause lasting harm; temporary safeguards are needed." },
    { stem: "Why does family history matter here?",
      opts: ["It suggests a vulnerability that the lesion may have unmasked.", "It proves the stroke is irrelevant.", "It means he is pretending.", "It has no relevance."],
      a: 0, why: "Lesion and predisposition can interact. Conceptualization considers both." }
  ],
  chain: ["Right orbitofrontal and basotemporal damage", "Regulation of mood and reward is lost", "Manic symptoms, disinhibited test errors", "Overspending, grandiose plans, no sleep"],
  differential: "Primary bipolar disorder, steroid or medication effects, and delirium.",
  finding: "Secondary mania mirrors the depression case: damage on either side can produce mood disorders, and the right hemisphere seems especially linked to elevated mood.",
  takeaway: "New mania late in life should prompt brain imaging. Treat mood, protect finances and monitor for recurrence.",
  refs: ["Starkstein, S. E., Pearlson, G. D., Boston, J., & Robinson, R. G. (1987). Mania after brain injury: A controlled study of causative factors. Archives of Neurology, 44(10), 1069–1073."],
  domains: ["emotion", "risk", "insight"]
},
{
  id: "pba", cluster: "E", title: "The teacher who laughed at a funeral", etiology: "demyel",
  condition: "Pseudobulbar affect in multiple sclerosis", hits: ["pons", "cerebellum"], side: "Bilateral",
  story: `“At my aunt's funeral I started laughing and couldn't stop. I wasn't happy at all; I was mortified. Other times I burst into tears at a TV commercial. The feeling inside doesn't match what my face is doing. People think I'm unstable.”`,
  who: "Ms. P, 44, who has had multiple sclerosis for twelve years",
  referral: "Neurology asks whether these episodes are depression.",
  profile: [
    ["Symbol Digit Modalities Test", "12th percentile", "Low average", "mid"],
    ["CNS-Lability Scale", "21", "Above cutoff for pseudobulbar affect", "low"],
    ["Depression (PHQ-9)", "6", "Mild, not major depression", "mid"],
    ["Mood between episodes", "Stable", "Intact", "ok"],
    ["Insight", "Fully aware episodes are involuntary", "Intact", "ok"]
  ],
  questions: [
    { stem: "What distinguishes pseudobulbar affect from depression?",
      opts: ["Sudden laughing or crying that doesn't match the inner feeling, with normal mood between episodes.", "Low mood every day for two weeks.", "Loss of interest in everything.", "There is no difference."],
      a: 0, why: "Pseudobulbar affect is a disorder of emotional expression, not of emotional experience." },
    { stem: "Parvizi et al. (2001) linked pathological laughter and crying to which pathways?",
      opts: ["Circuits linking the cortex, pons and cerebellum", "The occipital lobe", "The hippocampus alone", "The spinal cord"],
      a: 0, why: "They proposed the cerebellum adjusts emotional expression to context, so damage to cortico-ponto-cerebellar pathways lets expression escape that adjustment." },
    { stem: "What does this case teach about emotion?",
      opts: ["Emotional experience and emotional expression can be separated by brain damage.", "Emotions are only facial movements.", "Laughing always means happiness.", "The cerebellum has no role in behavior."],
      a: 0, why: "This dissociation is a useful contrast to cases where feeling is lost but expression is preserved." }
  ],
  chain: ["Demyelination in cortico-ponto-cerebellar pathways", "Expression of emotion is not matched to context", "Elevated CNS-LS, stable mood, mild slowing", "Embarrassing outbursts, social avoidance"],
  differential: "Depression, mania, and emotional lability in bipolar disorder. Also seen after stroke, ALS and TBI.",
  finding: "Pseudobulbar affect shows that the brain has separate machinery for producing an emotion's outward signs.",
  takeaway: "Screen with the CNS-LS. Effective treatments exist; explaining the condition to family and colleagues reduces stigma.",
  refs: [
    "Parvizi, J., Anderson, S. W., Martin, C. O., Damasio, H., & Damasio, A. R. (2001). Pathological laughter and crying: A link to the cerebellum. Brain, 124(9), 1708–1719.",
    "Moore, S. R., Gresham, L. S., Bromberg, M. B., Kasarkis, E. J., & Smith, R. A. (1997). A self report measure of affective lability. Journal of Neurology, Neurosurgery & Psychiatry, 63(1), 89–93."
  ],
  domains: ["expr", "social"]
},
{
  id: "svppa", cluster: "F", title: "The man who no longer knew his friends' faces or feelings", etiology: "neurodeg",
  condition: "Semantic dementia, right temporal variant", hits: ["atl", "amygdala", "insula"], side: "Right > left",
  story: `“Ron used to be the warmest person at every party. Now he doesn't recognize old friends, and when our daughter cried about her divorce he talked about his crossword. He eats the same meal every day at exactly noon and gets upset if it's late.”`,
  who: "His wife, describing Mr. S, 63, with atrophy of the right anterior temporal lobe",
  referral: "Memory clinic asks whether this is Alzheimer's disease or a frontotemporal syndrome.",
  profile: [
    ["Famous and familiar face recognition", "Severely impaired", "Impaired", "low"],
    ["Knowledge about known people", "Severely impaired", "Impaired", "low"],
    ["Boston Naming Test", "Mildly reduced", "Mild", "mid"],
    ["Episodic memory for recent events", "Relatively spared", "Intact", "ok"],
    ["Interpersonal Reactivity Index (informant): empathic concern", "Very low", "Impaired", "low"],
    ["Behavior", "Rigid routines, food fads", "Clinically significant", "low"]
  ],
  questions: [
    { stem: "Rankin et al. (2006) linked loss of empathy in neurodegenerative disease to which region, among others?",
      opts: ["The right anterior (temporal pole) and medial frontal regions", "The left occipital lobe", "The cerebellum alone", "The spinal cord"],
      a: 0, why: "Informant-rated empathy correlated with right temporal pole and medial frontal volume." },
    { stem: "Why does right-sided semantic dementia look different from left-sided?",
      opts: ["Right temporal atrophy affects knowledge of people, faces and emotions more; left affects word meaning more.", "There is no difference.", "Right-sided disease only affects movement.", "Left-sided disease causes paralysis."],
      a: 0, why: "This is another example of laterality: semantic knowledge is distributed, with social and emotional knowledge leaning right." },
    { stem: "Which feature best separates this from Alzheimer's disease?",
      opts: ["Relatively spared memory for recent events with loss of knowledge about people and emotions.", "Early loss of recent memory.", "Visual hallucinations.", "Resting tremor."],
      a: 0, why: "Typical Alzheimer's starts with episodic memory loss; semantic dementia starts with loss of meaning." }
  ],
  chain: ["Right anterior temporal atrophy", "Loss of knowledge about people and emotions", "Impaired face and person knowledge, low empathy, spared episodic memory", "Doesn't recognize friends, seems cold, rigid routines"],
  differential: "Alzheimer's disease, bvFTD (which often follows), prosopagnosia from other causes, and depression.",
  finding: "Semantic dementia shows that emotional understanding depends on stored conceptual knowledge, not only on fast emotional reactions.",
  takeaway: "Assess person knowledge and empathy, not just naming. Families benefit from knowing the coldness reflects lost knowledge.",
  refs: ["Rankin, K. P., Gorno-Tempini, M. L., Allison, S. C., et al. (2006). Structural anatomy of empathy in neurodegenerative disease. Brain, 129(11), 2945–2956."],
  domains: ["social", "emotion", "insight"]
},
{
  id: "korsakoff", cluster: "F", title: "The chef who kept betting on one number", etiology: "hypoxic",
  condition: "Wernicke–Korsakoff syndrome", hits: ["thalamus", "dlpfc"], side: "Bilateral",
  story: `“He can't remember that I visited yesterday. But what worries me more is money. He keeps buying lottery tickets on the same single number, even after I explain the odds. He'll say he understands, then do it again.”`,
  who: "His sister, describing Mr. K, 57, with Wernicke–Korsakoff syndrome after years of alcohol use and poor nutrition",
  referral: "Social work asks whether he can manage his money.",
  profile: [
    ["Delayed recall (CVLT-3)", "<1st percentile", "Severely impaired", "low"],
    ["Confabulation (observed)", "Occasional", "Present", "mid"],
    ["Game of Dice Task", "Frequent risky single-number bets", "Impaired", "low"],
    ["Executive tests (card sorting, set shifting)", "Impaired", "Impaired", "low"],
    ["Use of negative feedback", "Poor", "Impaired", "low"]
  ],
  questions: [
    { stem: "Brand et al. (2005) found Korsakoff patients made risky choices on the Game of Dice Task, where the odds are explicit. What predicted this?",
      opts: ["Executive dysfunction and poor use of feedback", "Visual impairment", "Language loss", "Motor slowing"],
      a: 0, why: "Decisions under explicit risk depend on executive functions to calculate and use feedback, unlike ambiguous decisions such as the IGT that lean on emotional learning." },
    { stem: "Which structures are classically damaged in Korsakoff syndrome?",
      opts: ["Mammillary bodies and medial thalamus, with frontal connections", "Occipital cortex", "Cerebellar hemispheres only", "Spinal cord"],
      a: 0, why: "Thiamine deficiency damages the diencephalon, disrupting memory and frontal circuits." },
    { stem: "What recommendation follows for his finances?",
      opts: ["A financial capacity assessment and supported money management.", "Teach him the odds again.", "No action.", "Memory games."],
      a: 0, why: "Explaining odds does not stick when memory and feedback use are impaired; external supports are needed." }
  ],
  chain: ["Thiamine deficiency damages mammillary bodies, medial thalamus and frontal circuits", "Memory and use of feedback fail", "Severe amnesia, executive deficits, risky choices with known odds", "Repeated losing bets, financial vulnerability"],
  differential: "Alcohol-related dementia, hepatic encephalopathy and Alzheimer's disease.",
  finding: "This case contrasts with the vmPFC cases: decisions under known risk rely more on executive control, decisions under ambiguity more on emotional learning.",
  takeaway: "Treat thiamine deficiency urgently, assess financial capacity, and use external memory and money supports.",
  refs: ["Brand, M., Fujiwara, E., Borsutzky, S., Kalbe, E., Kessler, J., & Markowitsch, H. J. (2005). Decision-making deficits of Korsakoff patients in a new gambling task with explicit rules: Associations with executive functions. Neuropsychology, 19(3), 267–277."],
  domains: ["risk", "learn", "insight"]
},
/* ===== Added in version 4 ===== */
{
  id: "confab", cluster: "A", title: "The patient who was sure he had a meeting", etiology: "stroke",
  condition: "Confabulation after anterior communicating artery aneurysm rupture", hits: ["vmpfc"], side: "Bilateral, basal forebrain and orbitofrontal",
  story: `“Every morning he puts on his tie and tells the nurses he has to leave for a board meeting at ten. He retired four years ago. When they say no, he gets upset and insists his secretary is waiting. Yesterday he told me he had already been home for lunch. He has not left the ward in three weeks.”`,
  who: "His wife, describing Mr. C, 66, five weeks after rupture and clipping of an anterior communicating artery aneurysm",
  referral: "The ward team asks why he keeps trying to leave and whether he can go home safely.",
  profile: [
    ["Delayed recall (RAVLT)", "Low, with many intrusions", "Impaired", "low"],
    ["Temporal context confusion (continuous recognition, Schnider)", "Many false positives for items seen in earlier runs", "Impaired", "low"],
    ["Spontaneous confabulation (observed)", "Daily, acted upon", "Present", "low"],
    ["Provoked confabulation (questioned)", "Frequent", "Present", "low"],
    ["Orientation", "Wrong year and place", "Impaired", "low"],
    ["Naming and comprehension", "Normal", "Intact", "ok"],
    ["Insight into memory problem", "Denies any problem", "Absent", "low"]
  ],
  profileNote: "The rows are an illustrative composite based on published patients with spontaneous confabulation.",
  questions: [
    { stem: "Schnider and colleagues found that spontaneous confabulators fail to suppress memories that were once relevant but no longer apply to now. Which damage is most associated with this?",
      opts: ["Orbitofrontal cortex and basal forebrain, often after anterior communicating artery rupture", "Primary visual cortex", "Cerebellar vermis", "Left angular gyrus only"],
      a: 0, why: "Spontaneous confabulation is linked to posterior orbitofrontal and basal forebrain damage, which disrupts a filter that tags memories as belonging to the present or the past (Schnider et al., 1996; Schnider, 2003)." },
    { stem: "Fotopoulou and colleagues noticed that one patient's confabulations made his situation sound better than it was. What does this suggest?",
      opts: ["Confabulation is deliberate lying.", "Emotion and motivation can shape which false memories are accepted when frontal monitoring fails.", "Confabulation only happens in psychosis.", "Memories are stored in the eyes."],
      a: 1, why: "Confabulations often have a pleasant, self-enhancing slant. This links memory distortion to affective value, the same signals that guide choices in other vmPFC cases." },
    { stem: "Mr. C keeps acting on his false beliefs by trying to leave. What is the first safety recommendation?",
      opts: ["Discharge him so he can attend his meeting.", "Supervision and a structured, consistent daily routine, with gentle reorientation rather than argument.", "Teach him a list of facts to memorize.", "Ignore the behavior; it will stop."],
      a: 1, why: "Acted-upon confabulation is a safety risk. Most spontaneous confabulation fades over weeks to months as reality filtering recovers, so the aim is to keep him safe meanwhile." }
  ],
  chain: ["Aneurysm damages basal forebrain and orbitofrontal cortex", "Memories are no longer tagged as past or present, and pleasant ones win", "Amnesia with confident false memories and no insight", "Gets dressed for a meeting that does not exist and tries to leave"],
  differential: "Delirium, Korsakoff syndrome (see that case), dementia and psychosis. Confabulation differs from lying because the person believes it.",
  finding: "Confabulation shows that the orbitofrontal cortex helps decide which thoughts are true for now. When that check fails, people act confidently on memories that feel right.",
  takeaway: "Ask whether false statements are acted upon. Spontaneous confabulators need supervision, and most improve as the brain recovers.",
  refs: [
    "Schnider, A., von Däniken, C., & Gutbrod, K. (1996). The mechanisms of spontaneous and provoked confabulations. Brain, 119(4), 1365–1375.",
    "Schnider, A. (2003). Spontaneous confabulation and the adaptation of thought to ongoing reality. Nature Reviews Neuroscience, 4(8), 662–671.",
    "Fotopoulou, A., Solms, M., & Turnbull, O. (2004). Wishful reality distortions in confabulation: A case report. Neuropsychologia, 42(6), 727–744."
  ],
  domains: ["value", "insight"]
},
{
  id: "emomem", cluster: "B", title: "The student who remembered the sad story flatly", etiology: "genetic",
  condition: "Bilateral amygdala calcification (Urbach–Wiethe disease)", hits: ["amygdala", "hippocampus"], side: "Bilateral",
  story: `“In the study they showed me slides of a boy walking with his mother. In one version he gets hit by a car and surgeons reattach his feet. A week later they asked me what I remembered. I recalled the beginning and the end about as well as the others did, but the accident part was no better for me. For them it stuck.”`,
  who: "Mr. B, 29, with bilateral amygdala damage from Urbach–Wiethe disease, describing a memory study. Modeled on patient BP (Cahill et al., 1995).",
  referral: "A research group asks whether emotional events get any memory boost in a person without amygdalae.",
  profile: [
    ["General memory (WMS-IV indices)", "Average", "Intact", "ok"],
    ["Recall of neutral story parts", "Similar to controls", "Intact", "ok"],
    ["Recall of emotional story part", "No enhancement versus neutral parts", "Impaired", "low"],
    ["Rated emotional intensity of the story", "Normal", "Intact", "ok"],
    ["Fear conditioning (skin conductance)", "No conditioned response", "Impaired", "low"],
    ["Declarative knowledge of the conditioning rule", "Correct", "Intact", "ok"]
  ],
  profileNote: "Illustrative composite. Rows 5 and 6 reflect the dissociation reported by Bechara et al. (1995) in a patient with bilateral amygdala damage.",
  questions: [
    { stem: "Control participants remembered the emotional middle of the story best. Mr. B did not, although his overall memory was normal. What does this show?",
      opts: ["The amygdala stores all memories.", "The amygdala is needed for the boost that emotional arousal gives to memory, but not for memory itself.", "He did not understand the story.", "Emotional memories are stored in the cerebellum."],
      a: 1, why: "Cahill et al. (1995) showed the emotional enhancement of memory was missing after bilateral amygdala damage, even though the patient judged the story as emotional." },
    { stem: "Bechara and colleagues found the reverse pattern in hippocampal damage: a conditioned skin response without knowing the rule. What does the double dissociation tell us?",
      opts: ["Implicit emotional learning depends on the amygdala and explicit knowledge on the hippocampus.", "Both structures do the same thing.", "Skin conductance measures memory for words.", "Neither structure is involved in learning."],
      a: 0, why: "Bechara et al. (1995) reported that amygdala damage removed the conditioned autonomic response while knowledge of the pairing stayed, and hippocampal damage did the opposite." },
    { stem: "How might this matter for decisions?",
      opts: ["It does not.", "Choices often rely on memories of past good and bad outcomes. Without emotional tagging, important past losses may be weighed like ordinary events.", "He will always choose randomly.", "He cannot form any memories."],
      a: 1, why: "Emotional memory is one way past outcomes steer future choices; this links cluster B to the somatic marker idea in cluster A." }
  ],
  chain: ["Bilateral amygdala damage", "No arousal-driven boost to memory consolidation, no conditioned autonomic response", "Normal general memory, flat memory for emotional events", "Past dangers and losses may not stand out when deciding"],
  differential: "General amnesia (excluded by normal indices), low engagement with the task, and depression.",
  finding: "The amygdala does not hold memories but marks which ones matter. That mark helps the past guide future choices.",
  takeaway: "Normal memory scores do not mean emotional learning is intact. Specific paradigms are needed to test it.",
  refs: [
    "Cahill, L., Babinsky, R., Markowitsch, H. J., & McGaugh, J. L. (1995). The amygdala and emotional memory. Nature, 377(6547), 295–296.",
    "Bechara, A., Tranel, D., Damasio, H., Adolphs, R., Rockland, C., & Damasio, A. R. (1995). Double dissociation of conditioning and declarative knowledge relative to the amygdala and hippocampus in humans. Science, 269(5227), 1115–1118."
  ],
  domains: ["emotion", "learn"]
},
{
  id: "vets", cluster: "B", title: "The veteran whose injury spared him nightmares", etiology: "tbi",
  condition: "Penetrating head injury in combat, with and without amygdala or vmPFC damage", hits: ["amygdala", "vmpfc"], side: "Varies by veteran",
  story: `“Both of us were hit in the same ambush. My friend still has nightmares and jumps at every loud noise forty years on. My shrapnel went into the front of my brain. My wife says I'm calmer than I should be, and sometimes too blunt. I don't have the flashbacks he has.”`,
  who: "Mr. V, 63, a Vietnam veteran with a penetrating ventromedial prefrontal injury. Modeled on the Vietnam Head Injury Study.",
  referral: "A research team compares PTSD and depression rates across veterans with injuries in different brain regions.",
  profile: [
    ["PTSD symptoms (CAPS-5)", "Below diagnostic threshold", "Low", "ok"],
    ["Combat exposure", "Severe", "High", "mid"],
    ["Depression (BDI-II)", "Minimal", "Low", "ok"],
    ["Social conduct (informant, FrSBe)", "Raised disinhibition", "Changed", "mid"],
    ["Iowa Gambling Task", "Disadvantageous choices", "Impaired", "low"],
    ["General cognition", "Within normal limits", "Intact", "ok"]
  ],
  profileNote: "Illustrative composite. The group findings come from the Vietnam Head Injury Study (Koenigs et al., 2008).",
  questions: [
    { stem: "Koenigs et al. (2008) found PTSD was much less common in veterans with damage to the amygdala or vmPFC than in those with damage elsewhere. What does this suggest?",
      opts: ["Brain injury is a good treatment for PTSD.", "These regions are part of the circuit that produces lasting fear and intrusive memory after trauma.", "PTSD is unrelated to the brain.", "The veterans were not exposed to combat."],
      a: 1, why: "If damage to a region lowers the risk of a disorder, that region is likely needed for the disorder to develop. Exposure was similar across groups." },
    { stem: "In a related study, vmPFC damage lowered depression risk but dorsolateral PFC damage raised it. How does this challenge a simple story?",
      opts: ["It shows that 'frontal lobe' is too coarse; subregions can have opposite effects on mood.", "It shows the frontal lobe has no role in mood.", "It proves depression is caused by the dlPFC alone.", "It shows lesions never affect mood."],
      a: 0, why: "Koenigs et al. (2008, J Neurosci) reported opposite effects of ventromedial and dorsolateral damage, consistent with a vmPFC role in negative self-focused emotion." },
    { stem: "Mr. V has fewer PTSD symptoms but blunter social behavior and poorer IGT choices. What is the clinical lesson?",
      opts: ["The same circuit that sustains fear also supports adaptive emotional guidance, so losing it has costs as well as benefits.", "He has no deficits.", "He is malingering.", "PTSD and decision-making are unrelated."],
      a: 0, why: "Emotional signals that cause suffering in PTSD are also those that steer choices in everyday life. Lesion effects are rarely purely good or bad." }
  ],
  chain: ["Penetrating injury to vmPFC or amygdala", "Trauma memories carry less lasting fear and self-focused distress", "Lower PTSD and depression rates, but blunted emotional guidance", "Fewer flashbacks, blunter social conduct, riskier choices"],
  differential: "Resilience from other causes, under-reporting due to poor insight, and differences in combat exposure (measured in the study).",
  finding: "Lesion studies in veterans give some of the strongest causal evidence that the amygdala and vmPFC take part in PTSD and depression.",
  takeaway: "Fear and emotional value share circuits. Reduced distress after injury can come with reduced emotional guidance of behavior.",
  refs: [
    "Koenigs, M., Huey, E. D., Raymont, V., Cheon, B., Solomon, J., Wassermann, E. M., & Grafman, J. (2008). Focal brain damage protects against post-traumatic stress disorder in combat veterans. Nature Neuroscience, 11(2), 232–237.",
    "Koenigs, M., Huey, E. D., Calamia, M., Raymont, V., Tranel, D., & Grafman, J. (2008). Distinct regions of prefrontal cortex mediate resistance and vulnerability to depression. Journal of Neuroscience, 28(47), 12341–12348."
  ],
  domains: ["emotion", "risk", "expr"]
},
{
  id: "als", cluster: "F", title: "The engineer whose weakness hid a change in judgment", etiology: "neurodeg",
  condition: "Amyotrophic lateral sclerosis with behavioral and cognitive change (ALS-FTSD)", hits: ["vmpfc", "dlpfc", "insula"], side: "Bilateral",
  story: `“The neurologist focused on his hands and his speech. But at home the bigger change is him. He stopped caring whether the bills were paid, he eats sweets all day, and he signed up for an expensive trial abroad without asking me. When I'm upset he doesn't seem to notice.”`,
  who: "His partner, describing Mr. A, 61, eighteen months after an ALS diagnosis",
  referral: "The ALS clinic asks for a cognitive and behavioral screen before decisions about feeding tubes and ventilation.",
  profile: [
    ["ECAS ALS-specific score (fluency, language, executive)", "Below cutoff", "Impaired", "low"],
    ["ECAS ALS-nonspecific score (memory, visuospatial)", "Normal", "Intact", "ok"],
    ["Verbal fluency, adjusted for motor speed", "Low", "Impaired", "low"],
    ["Emotion recognition (faces)", "Low for negative emotions", "Impaired", "low"],
    ["Iowa Gambling Task", "Did not learn to avoid bad decks", "Impaired", "low"],
    ["Apathy and disinhibition (caregiver interview)", "Raised", "Present", "low"],
    ["Motor function (ALSFRS-R)", "Moderate decline", "Impaired", "mid"]
  ],
  profileNote: "Illustrative composite. About half of people with ALS show some cognitive or behavioral change; a smaller share meet criteria for frontotemporal dementia.",
  questions: [
    { stem: "Why does the ECAS adjust verbal fluency for motor and speech speed?",
      opts: ["So that weakness and slurred speech are not mistaken for a cognitive deficit.", "Because fluency is not a frontal test.", "To make the test longer.", "Because ALS improves speech."],
      a: 0, why: "Abrahams et al. (2014) built the ECAS for people with motor disability, so executive and language scores reflect cognition rather than movement." },
    { stem: "The revised ALS-FTSD criteria (Strong et al., 2017) name several categories. Which one fits Mr. A?",
      opts: ["ALS with behavioral impairment (ALSbi), or possibly ALS-FTD if criteria for bvFTD are met.", "Pure ALS with no cognitive change.", "Alzheimer's disease.", "Parkinson's disease."],
      a: 0, why: "Apathy, changed eating and loss of empathy are behavioral features; the criteria separate ALSci, ALSbi, ALScbi and ALS-FTD." },
    { stem: "Why does this matter for decisions about tubes and ventilation?",
      opts: ["It doesn't.", "Behavioral and cognitive change can affect capacity, so decisions should be planned early and capacity assessed carefully, with the partner involved.", "He should never decide anything.", "Only motor scores matter."],
      a: 1, why: "Frontal and insular changes can reduce weighing of future consequences. Early planning protects his own values." }
  ],
  chain: ["TDP-43 pathology spreads from motor to frontal, insular and temporal regions", "Weaker emotional valuation, empathy and executive control", "Low ALS-specific scores, emotion recognition and IGT deficits, apathy", "Unplanned risky choices, neglected bills, changed eating"],
  differential: "Depression, reactive adjustment to diagnosis, effects of respiratory failure on cognition, and medication effects.",
  finding: "ALS and bvFTD share genetics (such as C9orf72) and pathology, so judgment and emotion can change in a disease people think of as purely motor.",
  takeaway: "Screen cognition and behavior in ALS with motor-adjusted tools, and plan major decisions early.",
  refs: [
    "Abrahams, S., Newton, J., Niven, E., Foley, J., & Bak, T. H. (2014). Screening for cognition and behaviour changes in ALS. Amyotrophic Lateral Sclerosis and Frontotemporal Degeneration, 15(1–2), 9–14.",
    "Strong, M. J., Abrahams, S., Goldstein, L. H., et al. (2017). Amyotrophic lateral sclerosis – frontotemporal spectrum disorder (ALS-FTSD): Revised diagnostic criteria. Amyotrophic Lateral Sclerosis and Frontotemporal Degeneration, 18(3–4), 153–174.",
    "Girardi, A., MacPherson, S. E., & Abrahams, S. (2011). Deficits in emotional and social cognition in amyotrophic lateral sclerosis. Neuropsychology, 25(1), 53–65."
  ],
  domains: ["value", "social", "motiv", "insight"]
},
/* ===== Added in version 5 ===== */
{
  id: "disgust", cluster: "D", title: "The man who could not see disgust", etiology: "stroke",
  condition: "Left insula and putamen infarct", hits: ["insula", "striatum"], side: "Left",
  story: `“He used to be the one who wouldn't touch leftovers. Now he'll eat food that has clearly gone off and doesn't understand why I'm upset. When the grandchildren pull faces at something gross, he thinks they're surprised. He still knows when someone is angry or sad.”`,
  who: "His wife, describing Mr. N, 52, a year after a left insula and putamen stroke. Modeled on patient NK (Calder et al., 2000).",
  referral: "The stroke clinic asks why he seems unbothered by things that used to disgust him.",
  profile: [
    ["Disgust recognition, faces (FEEST)", "Well below controls", "Impaired", "low"],
    ["Disgust recognition, sounds (retching)", "Well below controls", "Impaired", "low"],
    ["Fear, anger, sadness, happiness recognition", "Normal", "Intact", "ok"],
    ["Self-reported disgust (DS-R)", "Low", "Reduced", "low"],
    ["Face identity (BFRT)", "Normal", "Intact", "ok"],
    ["General cognition", "Within normal limits", "Intact", "ok"]
  ],
  profileNote: "Illustrative composite based on patient NK and later insula lesion studies.",
  questions: [
    { stem: "Mr. N fails to recognize disgust in faces and sounds, and feels less disgust himself. What does this pattern suggest?",
      opts: ["A general face perception problem.", "A shared system for experiencing and recognizing disgust, involving the insula and basal ganglia.", "Hearing loss.", "Low motivation on testing."],
      a: 1, why: "Calder et al. (2000) found that NK's deficit crossed modalities and included his own experience, pointing to a common substrate for feeling and recognizing disgust." },
    { stem: "Which other condition in this library shows a selective problem recognizing disgust?",
      opts: ["Early Huntington's disease", "Urbach–Wiethe disease", "Korsakoff syndrome", "Capgras delusion"],
      a: 0, why: "Sprengelmeyer et al. (1996) reported disproportionate disgust recognition deficits in Huntington's disease, which damages the striatum." },
    { stem: "Why might this matter for everyday decisions?",
      opts: ["It doesn't.", "Disgust protects against contamination and helps signal social and moral violations, so losing it can lead to unsafe food choices and missed social cues.", "He will become fearful.", "He will lose language."],
      a: 1, why: "Disgust is a fast avoidance signal. Without it, food safety and some social judgments need external checks." }
  ],
  chain: ["Left insula and putamen damaged", "Disgust is no longer felt or mapped onto others", "Selective loss of disgust recognition and experience", "Eats spoiled food, misreads others' reactions"],
  differential: "Anosmia (check with UPSIT), general emotion recognition deficit, and bvFTD.",
  finding: "Specific emotions can depend on partly specific circuits: fear on the amygdala, disgust on the insula and basal ganglia.",
  takeaway: "Test emotion recognition one emotion at a time; a total score can hide a selective loss.",
  refs: [
    "Calder, A. J., Keane, J., Manes, F., Antoun, N., & Young, A. W. (2000). Impaired recognition and experience of disgust following brain injury. Nature Neuroscience, 3(11), 1077–1078.",
    "Wicker, B., Keysers, C., Plailly, J., Royet, J.-P., Gallese, V., & Rizzolatti, G. (2003). Both of us disgusted in my insula: The common neural basis of seeing and feeling disgust. Neuron, 40(3), 655–664."
  ],
  domains: ["emotion", "social"]
},
{
  id: "ictal", cluster: "B", title: "The woman whose fear came out of nowhere", etiology: "epilepsy",
  condition: "Mesial temporal lobe epilepsy with ictal fear", hits: ["amygdala", "hippocampus"], side: "Right",
  story: `“It starts with a rising feeling in my stomach, then sheer terror, as if something awful is about to happen. There's nothing there. It lasts maybe a minute. Sometimes I smell burning rubber first. Afterward I'm exhausted and can't remember what people said to me.”`,
  who: "Ms. I, 34, with drug-resistant right mesial temporal lobe epilepsy, describing her seizures",
  referral: "The epilepsy surgery team asks for a pre-surgical neuropsychological evaluation.",
  profile: [
    ["Verbal memory (RAVLT)", "Average", "Intact", "ok"],
    ["Visual memory (BVMT-R, RCFT delay)", "Low average to borderline", "Mildly impaired", "mid"],
    ["Fear recognition (faces)", "Mildly low", "Mildly impaired", "mid"],
    ["Anxiety (STAI, interictal)", "Raised", "Raised", "mid"],
    ["Seizure semiology", "Epigastric rising, fear, olfactory aura", "Right mesial temporal onset", "low"],
    ["Wada test", "Left language; right memory weaker", "Lateralizing", "mid"]
  ],
  profileNote: "Illustrative composite.",
  questions: [
    { stem: "Her fear has no outside cause and comes in brief attacks. Why does this point to the amygdala?",
      opts: ["Seizure activity in or near the amygdala can produce the feeling of fear directly, without a threat.", "Fear always comes from the visual cortex.", "It shows she has a phobia.", "It shows the cerebellum is involved."],
      a: 0, why: "Gloor et al. (1982) and later stimulation studies showed that activating the amygdala can produce fear and vivid experiences. Ictal fear is a well-known sign of mesial temporal onset." },
    { stem: "How would you tell ictal fear from a panic attack?",
      opts: ["You can't.", "Ictal fear is brief and stereotyped, may come with an olfactory aura, automatisms or impaired awareness, and is confirmed by EEG.", "Panic attacks always involve smells.", "Ictal fear only happens at night."],
      a: 1, why: "Stereotyped episodes, auras, postictal confusion and EEG changes favor seizures. Misdiagnosis as panic disorder is common." },
    { stem: "After right anterior temporal surgery, what change in emotional learning might you expect? (Compare the lobectomy case.)",
      opts: ["Stronger fear conditioning.", "Reduced fear conditioning, with knowledge of the rule intact.", "Loss of language.", "No change at all."],
      a: 1, why: "LaBar et al. (1995) found impaired fear conditioning after unilateral temporal lobectomy." }
  ],
  chain: ["Seizures start in right mesial temporal structures", "Abnormal activity drives the amygdala's fear response", "Brief stereotyped fear, olfactory aura, postictal memory gaps", "Unprovoked terror, avoidance of going out, misdiagnosed panic"],
  differential: "Panic disorder, functional (psychogenic) seizures, and frontal lobe seizures.",
  finding: "The amygdala can generate fear from the inside, without any threat. That is evidence that it helps create the feeling, not only detect danger.",
  takeaway: "Brief, stereotyped, unprovoked fear with an aura deserves an EEG before a psychiatric label.",
  refs: [
    "Gloor, P., Olivier, A., Quesney, L. F., Andermann, F., & Horowitz, S. (1982). The role of the limbic system in experiential phenomena of temporal lobe epilepsy. Annals of Neurology, 12(2), 129–144.",
    "Biraben, A., Taussig, D., Thomas, P., et al. (2001). Fear as the main feature of epileptic seizures. Journal of Neurology, Neurosurgery & Psychiatry, 70(2), 186–191.",
    "Lanteaume, L., Khalfa, S., Régis, J., Marquis, P., Chauvel, P., & Bartolomei, F. (2007). Emotion induction after direct intracerebral stimulations of human amygdala. Cerebral Cortex, 17(6), 1307–1313."
  ],
  domains: ["emotion", "risk"]
},
{
  id: "nmdar", cluster: "B", title: "The student who changed in a week", etiology: "autoimmune",
  condition: "Anti-NMDA receptor encephalitis", hits: ["hippocampus", "amygdala", "vmpfc"], side: "Bilateral",
  story: `“She had a flu-like illness, then within days she was anxious, sleepless and convinced her roommates were spying on her. She laughed and cried for no reason and spent her rent money on things she didn't need. The psychiatry unit thought it was a first episode of psychosis, until she had a seizure.”`,
  who: "Her mother, describing Ms. N, 22, a university student",
  referral: "After immunotherapy, the team asks what cognitive and emotional problems remain and whether she can return to university.",
  profile: [
    ["Verbal memory (CVLT-3, 6 months)", "Low average", "Mildly impaired", "mid"],
    ["Executive function (D-KEFS, 6 months)", "Low average", "Mildly impaired", "mid"],
    ["Processing speed (SDMT)", "Below average", "Impaired", "low"],
    ["Psychiatric symptoms at onset (BPRS)", "High", "Severe", "low"],
    ["Emotion regulation (DERS, 6 months)", "Raised", "Impaired", "mid"],
    ["Functional status (UPSA)", "Improving", "Partly recovered", "mid"]
  ],
  profileNote: "Illustrative composite. Most patients improve over months to years after treatment, but memory and executive problems often persist.",
  questions: [
    { stem: "Why is this condition important for anyone assessing sudden changes in emotion and judgment in a young adult?",
      opts: ["It only affects older adults.", "It often presents with psychiatric symptoms first and is treatable with immunotherapy, so missing it causes lasting harm.", "It is untreatable.", "It never causes seizures."],
      a: 1, why: "Dalmau et al. (2008) described a typical course: prodrome, psychiatric symptoms, then seizures, dyskinesias and reduced consciousness. Early treatment improves outcome (Titulaer et al., 2013)." },
    { stem: "Antibodies reduce NMDA receptors, which are dense in the hippocampus and frontal cortex. Which residual problems fit?",
      opts: ["Memory and executive deficits with emotional dysregulation.", "Pure motor weakness.", "Isolated hearing loss.", "Color blindness."],
      a: 0, why: "NMDA receptors are central to learning and plasticity; memory and executive deficits are the most common long-term problems." },
    { stem: "What would you recommend for her return to university?",
      opts: ["Return full time immediately.", "Graded return with academic accommodations, repeat testing at 12 months, and support for mood and impulsive spending.", "Never return.", "Only physical therapy."],
      a: 1, why: "Recovery continues for a long time, so serial assessment and supports are the usual approach." }
  ],
  chain: ["Antibodies remove NMDA receptors in hippocampus and frontal cortex", "Learning, emotion regulation and reality testing break down", "Acute psychosis and mood lability; later memory and executive deficits", "Paranoia, impulsive spending, then a slow return to study"],
  differential: "Primary psychosis, viral encephalitis (HSV), drug-induced states and other autoimmune encephalitides.",
  finding: "A treatable autoimmune disorder can mimic psychiatric illness. Emotion and judgment depend on synaptic receptors as well as on intact brain structures.",
  takeaway: "New psychosis with seizures, dyskinesia or fluctuating consciousness needs a neurological workup, including antibody testing.",
  refs: [
    "Dalmau, J., Gleichman, A. J., Hughes, E. G., et al. (2008). Anti-NMDA-receptor encephalitis: Case series and analysis of the effects of antibodies. Lancet Neurology, 7(12), 1091–1098.",
    "Titulaer, M. J., McCracken, L., Gabilondo, I., et al. (2013). Treatment and prognostic factors for long-term outcome in patients with anti-NMDA receptor encephalitis: An observational cohort study. Lancet Neurology, 12(2), 157–165.",
    "Graus, F., Titulaer, M. J., Balu, R., et al. (2016). A clinical approach to diagnosis of autoimmune encephalitis. Lancet Neurology, 15(4), 391–404."
  ],
  domains: ["emotion", "expr", "insight"]
},
{
  id: "ccas", cluster: "E", title: "The baker whose cerebellar stroke flattened her", etiology: "stroke",
  condition: "Posterior cerebellar stroke (cerebellar cognitive affective syndrome)", hits: ["cerebellum"], side: "Bilateral posterior lobe",
  story: `“Her balance came back within weeks, so everyone said she was fine. But she isn't herself. She speaks in a flat voice, doesn't laugh at jokes, and can't plan the week's orders anymore. Some days she's oddly giddy and says things that embarrass the staff.”`,
  who: "Her business partner, describing Ms. B, 49, four months after a posterior inferior cerebellar artery stroke",
  referral: "Her neurologist asks whether the cerebellar stroke could explain the change in personality and planning.",
  profile: [
    ["CCAS Scale", "4 tests failed", "Definite CCAS", "low"],
    ["Verbal fluency (phonemic, category switching)", "Low", "Impaired", "low"],
    ["Working memory (digits backward)", "Low", "Impaired", "low"],
    ["Visuospatial (cube copy)", "Disorganized", "Impaired", "low"],
    ["Prosody (production)", "Flat", "Impaired", "low"],
    ["Affect (observation, informant)", "Blunted, with episodes of disinhibition", "Changed", "low"],
    ["Gait and coordination", "Mild residual ataxia", "Largely recovered", "mid"]
  ],
  profileNote: "Illustrative composite based on Schmahmann and Sherman (1998).",
  questions: [
    { stem: "Schmahmann and Sherman described patients with cerebellar lesions who had executive, spatial, language and affective changes. Which lesions were most associated with this?",
      opts: ["Posterior lobe and vermis lesions", "Anterior lobe lesions only", "Spinal cord lesions", "Occipital lesions"],
      a: 0, why: "The posterior lobe connects with prefrontal and limbic cortex; the vermis was linked particularly to affective change. Anterior lobe lesions mostly cause motor signs." },
    { stem: "Why might her changes have been missed?",
      opts: ["Teams often think of the cerebellum as purely motor, and her motor recovery was good.", "She had no symptoms.", "Cerebellar strokes are always obvious.", "Personality cannot change after stroke."],
      a: 0, why: "The 'dysmetria of thought' idea holds that the cerebellum smooths thought and emotion as it smooths movement." },
    { stem: "Which other case in this library also involves the cerebellum and emotional expression?",
      opts: ["Pseudobulbar affect", "Korsakoff syndrome", "Patient SM", "Capgras delusion"],
      a: 0, why: "Pseudobulbar affect involves cortico-ponto-cerebellar pathways that gate emotional expression (Parvizi et al., 2001)." }
  ],
  chain: ["Posterior cerebellar and vermis damage", "Cerebro-cerebellar loops no longer modulate prefrontal and limbic activity", "Executive, spatial, prosodic and affective changes", "Flat affect, poor planning, occasional disinhibition"],
  differential: "Post-stroke depression, apathy from a second supratentorial lesion, and medication effects.",
  finding: "The cerebellum shapes emotion and thought, not only movement.",
  takeaway: "After cerebellar stroke, screen cognition and affect with the CCAS Scale even when motor recovery is good.",
  refs: [
    "Schmahmann, J. D., & Sherman, J. C. (1998). The cerebellar cognitive affective syndrome. Brain, 121(4), 561–579.",
    "Hoche, F., Guell, X., Vangel, M. G., Sherman, J. C., & Schmahmann, J. D. (2018). The cerebellar cognitive affective/Schmahmann syndrome scale. Brain, 141(1), 248–270."
  ],
  domains: ["expr", "motiv", "emotion"]
}

];
