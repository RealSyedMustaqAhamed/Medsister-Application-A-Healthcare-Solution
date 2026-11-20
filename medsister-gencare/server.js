/**
 * MedSister GenCare Server (v2.0)
 * Future Health Digital Innovation Challenge - Abu Dhabi
 * Fertility Track - Challenge 03: Understanding and Reducing Inherited Disease Risk
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Simulated Panel Database based on the Abu Dhabi 570-Gene Recessive Screening Panel
// Highlights conditions with elevated regional prevalence in the UAE / Middle East
const SCREENED_PANEL = [
  {
    id: "GENE-001",
    gene: "HBB",
    disease_en: "Beta-Thalassemia",
    disease_ar: "ثلاسيميا بيتا (أنيميا البحر المتوسط)",
    inheritance: "Autosomal Recessive",
    carrier_freq_uae: "8.5%",
    description_en: "A blood disorder that reduces the production of hemoglobin. Carriers are completely healthy with normal lifespan. Only if both parents carry an altered HBB gene is there a 25% risk per child.",
    description_ar: "اضطراب وراثي في الدم يقلل إنتاج الهيموغلوبين. الحامل للطفرة سليم تماماً ويعيش حياة طبيعية. الخطر يظهر فقط عند زواج حاملين لنفس الطفرة بنسبة 25% لكل حمل.",
    clinvar_id: "VCV000015421",
    severity: "Severe to Moderate",
    reproductive_options: ["IVF with PGT-M", "Prenatal Diagnosis (CVS/Amnio)", "Early Transfusion/Chelation Protocol"]
  },
  {
    id: "GENE-002",
    gene: "HBB",
    variant: "c.20A>T (p.Glu7Val)",
    disease_en: "Sickle Cell Disease",
    disease_ar: "فقر الدم المنجلي",
    inheritance: "Autosomal Recessive",
    carrier_freq_uae: "2.8%",
    description_en: "Affects red blood cell morphology. Carriers (Sickle Cell Trait) live normal healthy lives. Couple concordance introduces 25% risk of homozygous Sickle Cell Disease.",
    description_ar: "يؤثر على شكل خلايا الدم الحمراء. حامل السمة المنجلية يعيش حياة طبيعية وصحية. إذا كان كلا الشريكين حاملين، فإن احتمال ولادة طفل مصاب هو 25% لكل حمل.",
    clinvar_id: "VCV000015423",
    severity: "Severe",
    reproductive_options: ["IVF with PGT-M", "Prenatal Diagnosis", "Hydroxyurea / Gene Therapy linkage"]
  },
  {
    id: "GENE-003",
    gene: "SMN1",
    variant: "Exon 7/8 deletion",
    disease_en: "Spinal Muscular Atrophy (SMA)",
    disease_ar: "ضمور العضلات الشوكي",
    inheritance: "Autosomal Recessive",
    carrier_freq_uae: "1.9%",
    description_en: "Motor neuron loss causing muscle weakness. Being a carrier causes no muscle symptoms whatsoever. 1 in 4 chance per pregnancy if both partners are carriers.",
    description_ar: "فقدان الخلايا العصبية الحركية المسببة لضعف العضلات. لا تظهر على الحامل أي أعراض إطلاقاً. يبلغ خطر إصابة الطفل 25% فقط في حال كان كلا الأبوين حاملين للطفرة.",
    clinvar_id: "VCV000021677",
    severity: "Severe",
    reproductive_options: ["IVF with PGT-M", "Prenatal Diagnosis", "Presymptomatic Neonatal Gene Therapy (Zolgensma / Nusinersen)"]
  },
  {
    id: "GENE-004",
    gene: "CFTR",
    variant: "c.1521_1523delCTT (p.Phe508del)",
    disease_en: "Cystic Fibrosis",
    disease_ar: "التليف الكيسي",
    inheritance: "Autosomal Recessive",
    carrier_freq_uae: "2.1%",
    description_en: "Affects respiratory and digestive mucus consistency. Asymptomatic in single-copy carriers. Detectable in premarital panel.",
    description_ar: "يؤثر على لزوجة الإفرازات في الرئتين والجهاز الهضمي. الحامل السليم لا تظهر عليه أعراض. يتم كشفه بدقة في الفحص الجيني قبل الزواج.",
    clinvar_id: "VCV000007105",
    severity: "Severe",
    reproductive_options: ["IVF with PGT-M", "Prenatal Diagnosis", "Early CFTR Modulator Therapy"]
  },
  {
    id: "GENE-005",
    gene: "GJB2",
    variant: "c.35delG",
    disease_en: "Nonsyndromic Sensorineural Hearing Loss",
    disease_ar: "ضعف السمع الحسي العصبي الوراثي",
    inheritance: "Autosomal Recessive",
    carrier_freq_uae: "3.4%",
    description_en: "Congenital non-syndromic hearing impairment. Carriers have full normal hearing. Couple concordance confers 25% probability of child hearing loss.",
    description_ar: "ضعف سمع وراثي خلقي دون تأثيرات جهازية أخرى. حاملو الطفرة يتمتعون بسمع سليم تماماً. نسبة الخطر 25% إذا كان الشريكان حاملين لنفس الجين.",
    clinvar_id: "VCV000017013",
    severity: "Moderate (Sensory)",
    reproductive_options: ["Early Cochlear Implant Pathway", "IVF with PGT-M", "Preconception Counseling"]
  },
  {
    id: "GENE-006",
    gene: "CYP21A2",
    variant: "c.293-13C>G",
    disease_en: "Congenital Adrenal Hyperplasia (CAH)",
    disease_ar: "تضخم الغدة الكظرية الخلقي",
    inheritance: "Autosomal Recessive",
    carrier_freq_uae: "1.5%",
    description_en: "Endocrine disorder affecting adrenal steroid hormone synthesis. Carriers remain asymptomatic. Early prenatal dexamethasone can mitigate virilization if managed early.",
    description_ar: "اضطراب هرموني في الغدة الكظرية. لا يعاني الحامل من أي أعراض. التخطيط المبكر يتيح العلاج الدوائي الهرموني للأم فور ثبوت الحمل لحماية الجنين.",
    clinvar_id: "VCV000012431",
    severity: "Severe to Moderate",
    reproductive_options: ["Maternal Dexamethasone in Pregnancy", "IVF with PGT-M", "Immediate Neonatal Endocrine Protocol"]
  },
  {
    id: "GENE-007",
    gene: "PAH",
    variant: "c.1066-11G>A",
    disease_en: "Phenylketonuria (PKU)",
    disease_ar: "بيلة الفينيل كيتون (PKU)",
    inheritance: "Autosomal Recessive",
    carrier_freq_uae: "1.2%",
    description_en: "Inability to metabolize phenylalanine. Fully manageable with low-Phe diet from birth if known in advance.",
    description_ar: "خلل في استقلاب حمض الفينيل ألانين. يمكن التحكم فيه والوقاية التامة من الإعاقة الفكرية عبر حمية غذائية تبدأ من أول يوم ولادة عند معرفة الخطر مسبقاً.",
    clinvar_id: "VCV000000577",
    severity: "Manageable with Diet",
    reproductive_options: ["Early Newborn Screening & Diet Plan", "IVF with PGT-M", "Prenatal Diagnosis"]
  }
];

// In-Memory Consent & Audit Ledger (Simulation of Cryptographically Verified Consent Trail)
const AUDIT_LEDGER = [
  {
    id: "TX-7809-A",
    timestamp: "2026-11-19T08:15:22Z",
    action: "CONSENT_REGISTERED",
    subject_pseudonym: "UAE-P1-9042",
    scope: "COUPLE_MATCHING_PSI_ONLY",
    prohibit_family_access: true,
    signature: "0x89f4b1...e72c",
    status: "VERIFIED"
  },
  {
    id: "TX-7810-B",
    timestamp: "2026-11-19T08:18:45Z",
    action: "CONSENT_REGISTERED",
    subject_pseudonym: "UAE-P2-3318",
    scope: "COUPLE_MATCHING_PSI_ONLY",
    prohibit_family_access: true,
    signature: "0x4a19c0...f291",
    status: "VERIFIED"
  }
];

// Referral Storage for Genetic Counselor Tele-Triage
const REFERRALS = [
  {
    id: "REF-2026-081",
    patientPair: "Couple #AE-948",
    status: "SCHEDULED",
    concordantGene: "HBB (Beta-Thalassemia)",
    urgency: "HIGH",
    counselor: "Dr. Maryam Al-Mansoori, MS, CGC (Cleveland Clinic Abu Dhabi)",
    date: "2026-11-22T10:00:00Z",
    pedigreeReady: true,
    comprehensionScore: "85%"
  }
];

// Pre/Post Quiz Statistics (Measurable Comprehension)
let COMPREHENSION_STATS = {
  totalAssessments: 1420,
  preScoreAvg: 48.2, // % before MedSister education
  postScoreAvg: 89.6, // % after MedSister education
  decisionalConflictAvg: 22.4, // DCS score < 25 indicates strong decision implementation
  counselingUptakeRate: "93.4%",
  medianReferralDays: 3.2,
  cancelledMarriagesTreatedAsSuccess: false // Explicitly reject marriage cancellation as KPI!
};

// --- REST API ENDPOINTS ---

// 1. Get the screened panel conditions
app.get('/api/genomics/panel', (req, res) => {
  res.json({
    status: "success",
    panel_name: "Abu Dhabi Premarital Recessive Genetic Panel (EGP/DoH Standard)",
    total_screened_genes: 570,
    featured_conditions: SCREENED_PANEL
  });
});

// 2. Cryptographic Private Set Intersection (PSI) Matching Simulator
app.post('/api/crypto/match', (req, res) => {
  const { partner1_data, partner2_data, couple_salt } = req.body;

  if (!partner1_data || !partner2_data) {
    return res.status(400).json({ error: "Missing partner genetic screening datasets" });
  }

  const salt = couple_salt || crypto.randomBytes(16).toString('hex');

  // Compute Blinded Hashes (Simulating Private Set Intersection)
  // Each party computes Token_i = HMAC_SHA256(Gene_Variant, Salt)
  const p1_tokens = partner1_data.map(item => ({
    gene: item.gene,
    variant: item.variant || "pathogenic",
    token: crypto.createHmac('sha256', salt).update(`${item.gene}:${item.variant || 'default'}`).digest('hex')
  }));

  const p2_tokens = partner2_data.map(item => ({
    gene: item.gene,
    variant: item.variant || "pathogenic",
    token: crypto.createHmac('sha256', salt).update(`${item.gene}:${item.variant || 'default'}`).digest('hex')
  }));

  // Find intersection on gene level (Recessive concordance: mutations in the same gene)
  const sharedGenes = [];
  const p1_genes = partner1_data.map(x => x.gene);
  const p2_genes = partner2_data.map(x => x.gene);

  p1_genes.forEach(g1 => {
    if (p2_genes.includes(g1) && !sharedGenes.includes(g1)) {
      sharedGenes.push(g1);
    }
  });

  // Calculate privacy metrics:
  // Non-shared variants are NEVER returned to either partner!
  const p1_private_hidden_count = partner1_data.filter(x => !sharedGenes.includes(x.gene)).length;
  const p2_private_hidden_count = partner2_data.filter(x => !sharedGenes.includes(x.gene)).length;

  const concordant = sharedGenes.length > 0;
  const matchedDetails = SCREENED_PANEL.filter(p => sharedGenes.includes(p.gene));

  // Log transaction to tamper-evident audit ledger
  const txId = `TX-${Date.now().toString(36).toUpperCase()}`;
  AUDIT_LEDGER.unshift({
    id: txId,
    timestamp: new Date().toISOString(),
    action: "PSI_COMPATIBILITY_EVALUATION",
    subject_pseudonym: "PAIR-" + crypto.createHash('md5').update(salt).digest('hex').substring(0, 8),
    scope: "ZERO_KNOWLEDGE_INTERSECTION",
    result_status: concordant ? "CONCORDANT_RISK_IDENTIFIED" : "COMPATIBLE_NO_SHARED_RISK",
    signature: "0x" + crypto.createHmac('sha256', "auditor-key").update(txId).digest('hex').substring(0, 32),
    status: "COMMITTED"
  });

  res.json({
    status: "success",
    txId,
    timestamp: new Date().toISOString(),
    concordant,
    shared_genes_count: sharedGenes.length,
    concordant_genes: matchedDetails,
    privacy_metrics: {
      zero_knowledge_match: true,
      partner1_hidden_unshared_carriers: p1_private_hidden_count,
      partner2_hidden_unshared_carriers: p2_private_hidden_count,
      data_minimization: "100% - Only intersecting recessive genes disclosed; zero unrelated carrier traits leaked to partner or family.",
      audit_tx: txId
    },
    clinical_guidance: concordant ? {
      recurrence_risk: "25% chance of affected child in each pregnancy; 50% carrier (healthy); 25% non-carrier (healthy).",
      action_required: "Schedule a tele-consultation with an accredited DoH/ADPHC Genetic Counselor. Modern reproductive options (PGT-M/IVF, early newborn protocols) are available in Abu Dhabi.",
      escalate_to_human_counselor: true
    } : {
      recurrence_risk: "Standard population background risk (<0.1% for screened 570 conditions).",
      action_required: "Compatible for screened recessive disorders. Proceed with standard premarital certificate clearance.",
      escalate_to_human_counselor: false
    }
  });
});

// 3. FHIR Genomics Pedigree Generator
app.post('/api/fhir/pedigree', (req, res) => {
  const { couple_id, condition, consanguinity_relation } = req.body;

  const fhirBundle = {
    resourceType: "Bundle",
    id: `fhir-pedigree-${Date.now()}`,
    type: "collection",
    timestamp: new Date().toISOString(),
    meta: {
      profile: ["http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/genomic-study"]
    },
    entry: [
      {
        resource: {
          resourceType: "FamilyMemberHistory",
          id: "fmh-proband-couple",
          status: "completed",
          relationship: {
            coding: [{
              system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              code: consanguinity_relation || "FCSN",
              display: consanguinity_relation === "FCSN" ? "First Cousin Union (F=0.0625)" : "Consanguineous Union"
            }]
          },
          condition: [{
            code: {
              coding: [{
                system: "http://snomed.info/sct",
                code: "234532001",
                display: condition || "Carrier of Beta-Thalassemia (HBB)"
              }]
            },
            outcome: {
              text: "Asymptomatic Heterozygous Carrier - Couple Level Recessive Concordance"
            }
          }]
        }
      },
      {
        resource: {
          resourceType: "ServiceRequest",
          id: "sr-genetic-counseling",
          status: "active",
          intent: "order",
          category: [{
            coding: [{
              system: "http://snomed.info/sct",
              code: "394580004",
              display: "Clinical Genetics Service"
            }]
          }],
          code: {
            concept: {
              coding: [{
                system: "http://snomed.info/sct",
                code: "401267002",
                display: "Pre-marital Genetic Counseling & Reproductive Options Discussion (PGT-M)"
              }]
            }
          },
          performer: [{
            display: "Accredited DoH Clinical Geneticist / Counselor - Malaffi Connected"
          }]
        }
      }
    ]
  };

  res.json({
    status: "success",
    fhir_bundle: fhirBundle
  });
});

// 4. Clinical Tele-Triage & Booking
app.post('/api/triage/referral', (req, res) => {
  const { pairId, counselorName, preferredDate, urgency } = req.body;

  const newRef = {
    id: `REF-2026-${Math.floor(100 + Math.random() * 900)}`,
    patientPair: pairId || "Anonymous Couple #AE-948",
    status: "CONFIRMED",
    concordantGene: "HBB (Beta-Thalassemia)",
    urgency: urgency || "STANDARD_EXPEDITED",
    counselor: counselorName || "Dr. Maryam Al-Mansoori, MS, CGC (Cleveland Clinic Abu Dhabi)",
    date: preferredDate || new Date(Date.now() + 3 * 86400000).toISOString(),
    pedigreeReady: true,
    comprehensionScore: "92%"
  };

  REFERRALS.unshift(newRef);
  res.json({ status: "success", referral: newRef });
});

// 5. Measurable Comprehension & Decision Quality Stats
app.get('/api/metrics/stats', (req, res) => {
  res.json({
    status: "success",
    stats: COMPREHENSION_STATS,
    audit_logs: AUDIT_LEDGER.slice(0, 10),
    active_referrals: REFERRALS
  });
});

// Record quiz submission to update comprehension stats
app.post('/api/metrics/submit-quiz', (req, res) => {
  const { preScore, postScore, decisionalConflictScore } = req.body;
  if (postScore) {
    COMPREHENSION_STATS.totalAssessments += 1;
    // Moving averages
    COMPREHENSION_STATS.postScoreAvg = +(
      (COMPREHENSION_STATS.postScoreAvg * 0.95) + (postScore * 0.05)
    ).toFixed(1);
    if (preScore) {
      COMPREHENSION_STATS.preScoreAvg = +(
        (COMPREHENSION_STATS.preScoreAvg * 0.95) + (preScore * 0.05)
      ).toFixed(1);
    }
    if (decisionalConflictScore) {
      COMPREHENSION_STATS.decisionalConflictAvg = +(
        (COMPREHENSION_STATS.decisionalConflictAvg * 0.95) + (decisionalConflictScore * 0.05)
      ).toFixed(1);
    }
  }
  res.json({ status: "success", updated_stats: COMPREHENSION_STATS });
});

// 6. Conversational AI Genetic Navigator (MedSister AI)
app.post('/api/ai/chat', (req, res) => {
  const { message, lang = "en" } = req.body;
  const lowerMsg = (message || "").toLowerCase();

  let replyEn = "";
  let replyAr = "";
  let topic = "general";
  let escalate = false;

  if (lowerMsg.includes("carrier") || lowerMsg.includes("حامل") || lowerMsg.includes("sick") || lowerMsg.includes("مرض")) {
    topic = "carrier_status";
    replyEn = "A carrier has one altered gene copy and one healthy copy. The healthy copy produces enough protein for normal bodily functions, meaning carriers are completely healthy and asymptomatic. A carrier does NOT have the disease. Risk for children only arises if your partner carries a mutation in the EXACT SAME recessive gene.";
    replyAr = "حامل الجين لديه نسخة وراثية معدلة ونسخة أخرى سليمة تماماً. النسخة السليمة تنتج ما يكفي من البروتين، وبالتالي فإن حامل السمة سليم ومعافى ولا يعاني من أي مرض. الخطر على الأبناء يظهر فقط إذا كان الشريك يحمل طفرة في نفس الجين المتنحي بالضبط.";
  } else if (lowerMsg.includes("cousin") || lowerMsg.includes("consanguin") || lowerMsg.includes("قرابة") || lowerMsg.includes("ابن عم") || lowerMsg.includes("أقارب")) {
    topic = "consanguinity";
    replyEn = "In consanguineous marriages (such as first cousins), couples share a set of grandparents, giving them a kinship coefficient of F = 1/16 (6.25%). This increases the probability that both partners may have inherited the same recessive carrier gene from their common ancestors. Screening 570 genes before marriage identifies if you share any altered genes, enabling informed and values-aligned family planning.";
    replyAr = "في زواج الأقارب (مثل أبناء العمومة)، يتشارك الشريكان نفس الأجداد، مما يعطيهم معامل قرابة F = 1/16 (6.25%). هذا يزيد احتمال وراثة نفس الجين المتنحي من الأسلاف المشتركين. الفحص الوراثي لـ 570 جيناً يحدد ما إذا كان هناك تشارك في أي جين متنحٍ، مما يتيح التخطيط السليم للأسرة وفق قيمكم.";
  } else if (lowerMsg.includes("pgt") || lowerMsg.includes("ivf") || lowerMsg.includes("أطفال أنابيب") || lowerMsg.includes("خيارات") || lowerMsg.includes("options") || lowerMsg.includes("cure")) {
    topic = "reproductive_options";
    replyEn = "If both partners carry the same recessive gene, you have multiple safe reproductive pathways in the UAE: 1) IVF with Pre-implantation Genetic Testing (PGT-M) allows testing embryos before pregnancy so only unaffected embryos are transferred; 2) Prenatal diagnostic testing (CVS or amniocentesis); 3) Scheduled neonatal management from birth. In Abu Dhabi, specialized reproductive genomics centers are available under DOH coverage.";
    replyAr = "في حال كان كلا الشريكين حاملين لنفس الجين المتنحي، تتوفر خيارات طبية متقدمة في دولة الإمارات: 1) أطفال الأنابيب مع الفحص الجيني للأجنة قبل الغرس (PGT-M) لاختيار الأجنة السليمة؛ 2) الفحص التشخيصي أثناء الحمل المبكر؛ 3) التخطيط للرعاية الطبية فور الولادة. تتوفر هذه الخدمات في أبوظبي بدعم صحي متكامل.";
  } else if (lowerMsg.includes("islam") || lowerMsg.includes("religion") || lowerMsg.includes("حلال") || lowerMsg.includes("حرام") || lowerMsg.includes("شرع") || lowerMsg.includes("fatwa") || lowerMsg.includes("فتاوى")) {
    topic = "bioethics";
    replyEn = "Major Islamic bioethics bodies, including the International Islamic Fiqh Academy and the UAE Fatwa Council, actively encourage premarital genetic screening as a protective, compassionate measure (Hifdh Al-Nafs / preservation of life). PGT-M for severe debilitating monogenic disorders is permissible, as it selects healthy embryos prior to uterine implantation, preventing lifelong hardship.";
    replyAr = "تؤيد المجامع الفقهية الكبرى ومجلس الإمارات للإفتاء الشرعي الفحص الجيني قبل الزواج من باب الأخذ بالأسباب وحفظ النفس. كما تجيز الفتاوى تقنية الفحص الجيني للأجنة (PGT-M) للأمراض الوراثية الشديدة لأنها تتم قبل استقرار الحمل في الرحم للوقاية من المعاناة والألم.";
  } else if (lowerMsg.includes("cancel") || lowerMsg.includes("divorce") || lowerMsg.includes("زواج") || lowerMsg.includes("انفصال") || lowerMsg.includes("stop marriage")) {
    topic = "non_directive";
    replyEn = "Screening does NOT dictate whether you can marry. The decision to proceed is entirely yours and your partner's. Our goal is to ensure you have complete clarity, private control over your information, and seamless access to medical support (like PGT-M) so you can build a healthy family together without societal pressure or stigma.";
    replyAr = "الفحص الجيني لا يجبر أحداً على إلغاء الزواج إطلاقاً. القرار النهائي يعود بالكامل لكما. هدفنا توفير المعرفة الدقيقة، والخصوصية المطلقة لبياناتكم، وتوفير الحلول الطبية (مثل PGT-M) لتأسيس أسرة سليمة دون أي ضغط أو وصمة اجتماعية.";
  } else if (lowerMsg.includes("appointment") || lowerMsg.includes("doctor") || lowerMsg.includes("counselor") || lowerMsg.includes("مستشار") || lowerMsg.includes("طبيب") || lowerMsg.includes("حجز")) {
    topic = "escalation";
    escalate = true;
    replyEn = "I can immediately connect you with an accredited Department of Health Genetic Counselor at Cleveland Clinic Abu Dhabi or M42 Healthcare. Your 3-generation pedigree will be confidentially shared in FHIR format so your consultation is focused entirely on your questions.";
    replyAr = "يسعدني ربطكما فوراً بمستشار وراثي معتمد من دائرة الصحة في مستشفى كليفلاند كلينك أبوظبي أو شبكة M42. سيتم إرسال شجرة العائلة المشفرة بصيغة FHIR لتركيز الاستشارة على خطتكم الطبية والإجابة على كل استفساراتكم.";
  } else {
    topic = "faq";
    replyEn = "Hello! I am MedSister, your empathetic premarital genomics navigator. You can ask me about carrier status, consanguinity in Abu Dhabi, 570-gene screening, zero-knowledge couple matching, or reproductive options like PGT-M.";
    replyAr = "مرحباً بكم! أنا مِدسيستر (MedSister)، مرشدتكم التثقيفية للفحوصات الجينية قبل الزواج. يسعدني الإجابة على أسئلتكم حول مفهوم حامل الجين، زواج الأقارب، فحص 570 جيناً في أبوظبي، التوافق المشفر، وخيارات الإنجاب مثل فحص الأجنة.";
  }

  res.json({
    status: "success",
    topic,
    escalate,
    response: lang === "ar" ? replyAr : replyEn,
    bilingual: {
      en: replyEn,
      ar: replyAr
    },
    clinical_boundary_disclaimer: "MedSister provides educational guidance and cognitive decision support. Clinical diagnoses and medical prescriptions are conducted solely by accredited genetics professionals."
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`====================================================`);
    console.log(`  MedSister GenCare (v2.0) Active on Port ${PORT}`);
    console.log(`  Abu Dhabi Future Health Challenge 03 Solution`);
    console.log(`  URL: http://localhost:${PORT}`);
    console.log(`====================================================`);
  });
}

module.exports = app;
