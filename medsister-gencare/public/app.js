/**
 * MedSister GenCare 2.0 Frontend Application Logic
 * Abu Dhabi Future Health Digital Innovation Challenge 2026
 * Culturally Fluent, Privacy-Preserving Reproductive Genomics Platform
 */

// --- BILINGUAL DICTIONARY (EN / AR) ---
const TRANSLATIONS = {
  en: {
    // Header & Meta
    "subtitle": "Abu Dhabi Future Health Challenge · Inherited Disease Risk Reduction",
    "egp_live": "Emirati Genome Program (EGP) Connected",
    "tab_overview": "Core Features",
    "tab_risk": "Genomic Risk",
    "tab_privacy": "Couple Matcher",
    "tab_decision": "Decision Aid",
    "tab_counselor": "Counselor Hub",
    "tab_metrics": "Audit & Metrics",
    "tab_chat": "AI Navigator",

    // Hero Banner
    "hero_badge": "Abu Dhabi Future Health Digital Innovation Challenge",
    "hero_title": "Empowering Families, Protecting Heritage: Reducing Inherited Disease Risk in Consanguinity",
    "hero_desc": "Transforming premarital screening in Abu Dhabi from an anxiety-inducing test into a respectful, privacy-preserving, values-aligned reproductive health journey. Powered by Zero-Knowledge Private Set Intersection (PSI), clinical genetics guardrails, and culturally fluent education.",
    "stat_genes": "Genes in UAE Recessive Panel",
    "stat_privacy": "Zero-Knowledge Partner Privacy",
    "stat_coercion": "Marriages Coerced or Judged",

    // Problem Alignment
    "problem_title": "Challenge Alignment: Fertility Track 03 (Abu Dhabi)",
    "problem_desc": "Abu Dhabi leads the world in population genomics through the Emirati Genome Program (EGP). However, screening is only clinically transformative when young couples can <strong>understand their carrier status without stigma</strong>, protect their genetic privacy from extended family gossip, and access modern reproductive solutions like <strong>PGT-M with IVF</strong>.",
    "p1_title": "Risk Explanation",
    "p1_desc": "Demythologizes carrier status ($Aa$). Explains 25% probabilistic child risk vs diagnosis in plain Arabic & English.",
    "p2_title": "Values-Sensitive Choice",
    "p2_desc": "Empowers couples with PGT-M, prenatal testing, and early neonatal care without judging consanguineous traditions.",
    "p3_title": "Qualified Human Counseling",
    "p3_desc": "Strict clinical boundary between AI education and DoH/ADPHC accredited genetic counselors via warm FHIR handoff.",
    "p4_title": "Privacy-Preserving Workflows",
    "p4_desc": "Zero-Knowledge Private Set Intersection (PSI). Neither partner sees unshared carrier mutations, stopping cascade stigma.",
    "p5_title": "Safe Linkage to Care",
    "p5_desc": "Seamless referral into Malaffi-connected reproductive genomics centers (e.g. Cleveland Clinic AD, M42).",
    "p6_title": "Measurable Comprehension",
    "p6_desc": "Measures knowledge gain, Decisional Conflict (DCS), and counseling uptake—never canceled marriages.",

    // Core Product Capabilities (Section requested by user)
    "features_architecture_title": "MedSister 2.0: Core Product Capabilities & Integrated Workflow",
    "feat_1_title": "1. Culturally-Fluent Genomic Risk Engine",
    "feat_1_desc": "Translates complex 570-gene recessive screening results into plain Arabic and English. Demystifies carrier status ($Aa$) as healthy and non-sick. Visualizes Mendelian 25% recurrence probabilities per pregnancy and distinguishes pathogenic variants from Variants of Uncertain Significance (VUS).",
    "feat_2_title": "2. Zero-Knowledge Private Set Intersection (PSI)",
    "feat_2_desc": "Cryptographic couple matching protocol. Both partners upload EGP lab data; the algorithm discovers shared recessive risk alleles using blinded HMAC tokens. <strong>Zero leakage of non-shared carrier variants</strong>, eliminating cascade gossip and social stigma in extended families.",
    "feat_3_title": "3. MedSister AI: Empathetic Bilingual Chatbot",
    "feat_3_desc": "24/7 conversational guidance with strict clinical boundary guardrails. Provides cognitive scaffolding, answers questions about consanguinity and Islamic bioethics (UAE Fatwa Council rulings), and defuses premarital anxiety without providing unverified medical diagnoses.",
    "feat_4_title": "4. Non-Directive Values-Sensitive Decision Aid",
    "feat_4_desc": "Equips carrier couples with actionable reproductive pathways: In-Vitro Fertilization (IVF) with Pre-implantation Genetic Testing (PGT-M), prenatal diagnosis, or early neonatal metabolic care. Fully respects marital autonomy and cultural values with zero coercion.",
    "feat_5_title": "5. Automated FHIR Pedigree & Tele-Triage Hub",
    "feat_5_desc": "Automatically generates standard 3-generation pedigrees and clinical handover packages formatted in HL7 FHIR Genomics. Initiates closed-loop tele-triage to DoH-accredited genetic counselors at Cleveland Clinic Abu Dhabi and M42 Healthcare.",
    "feat_6_title": "6. Verifiable Consent & Audit Ledger",
    "feat_6_desc": "Blockchain-anchored verifiable consent management. Tracks explicit partner consent scopes, prevents unauthorized family access, and logs tamper-evident audit trails compliant with UAE Health Data Law and international bioethics standards.",

    // Tab 2: Genomic Risk Visualizer
    "risk_title": "Interactive Genomic Risk & Consanguinity Visualizer",
    "risk_subtitle": "Explore carrier genetics, calculate inbreeding coefficients (F), and see how recessive concordance works in plain language.",
    "punnett_title": "Mendelian Autosomal Recessive Recurrence Simulator",
    "punnett_hint": "Select the genotype for Partner 1 and Partner 2 to see the exact statistical distribution for each pregnancy:",
    "partner1_label": "Partner 1 Genotype:",
    "partner2_label": "Partner 2 Genotype:",
    "unaffected": "Unaffected (25%)",
    "carrier_healthy": "Carrier (25%)",
    "affected_risk": "Affected Risk (25%)",
    "numeracy_title": "Visual Probability in Each Pregnancy:",
    "punnett_explainer": "💡 <strong>Key Takeaway:</strong> A 25% chance applies to <em>each pregnancy independently</em> (like rolling a 4-sided die each time). It does NOT mean that if you have 4 children, exactly 1 will be affected! Furthermore, 75% of children will be completely unaffected.",
    "consang_calc_title": "Consanguinity & Kinship Coefficient ($F$)",
    "consang_desc": "Consanguinity does not create new mutations. It simply increases the chance that both partners share the same ancestral recessive gene (*Identical by Descent*).",
    "union_type_label": "Select Family Relationship:",
    "f_coefficient_label": "Inbreeding Coefficient ($F$):",
    "variant_title": "Understanding Genetic Findings: Certainty vs Uncertainty",
    "tier_p_badge": "Pathogenic (P/LP)",
    "tier_p_desc": "Proven link to disease. If both partners carry this, couple concordance is flagged.",
    "tier_vus_badge": "Variant of Uncertain Significance (VUS)",
    "tier_vus_desc": "DNA change has unknown effect. <strong>Never treated as diagnosis or reason for alarm.</strong> Monitored by counselors.",
    "tier_b_badge": "Benign (B/LB)",
    "tier_b_desc": "Harmless natural human variation. Completely safe.",
    "cultural_reassurance_text": "<strong>Cultural Dignity:</strong> Consanguinity has been a valued pillar of family unity and social stability in Abu Dhabi for generations. MedSister honors this heritage by providing actionable science so you can preserve your family ties with complete health confidence.",

    // Tab 3: PSI Couple Matcher
    "privacy_section_title": "Zero-Knowledge Private Set Intersection (PSI) Couple Matcher",
    "privacy_section_subtitle": "Test the cryptographic privacy engine: Couples verify compatibility against Abu Dhabi's 570-gene recessive panel without either partner revealing non-shared carrier variants.",
    "privacy_guarantee_title": "Zero Leakage Guarantee:",
    "privacy_guarantee_desc": "In close-knit families, learning that Partner A carries a gene creates cascade gossip affecting their brothers and sisters. Our protocol uses blinded HMAC-SHA256 tokens. Only mutually concordant genes are revealed; all other carrier traits remain 100% private.",
    "partner_config_title": "Select Test Couple Screening Profiles",
    "btn_scenario_concordant": "🧪 Load Scenario A: Concordant Pair (Shared Beta-Thalassemia)",
    "btn_scenario_compatible": "✅ Load Scenario B: Compatible Pair (Different Carrier Genes)",
    "partner1_name": "Partner 1: Tariq (UAE National ID: ***9042)",
    "partner2_name": "Partner 2: Fatima (UAE National ID: ***3318)",
    "p1_consent": "Explicit Consent: Granted (Couple-Matching Only)",
    "p2_consent": "Explicit Consent: Granted (Couple-Matching Only)",
    "btn_run_psi": "Run Cryptographic Private Set Intersection (PSI) Match",
    "psi_output_title": "Cryptographic Compatibility & Zero-Leakage Output",
    "psi_empty_prompt": "Click 'Run Cryptographic Match' to evaluate couple compatibility with zero-knowledge data protection.",
    "privacy_proof_heading": "Privacy Preservation Audit Proof:",
    "proof_1_label": "Shared Concordant Gene:",
    "proof_2_label": "Partner 1 Protected Private Genes:",
    "proof_3_label": "Partner 2 Protected Private Genes:",
    "proof_4_label": "Audit Ledger Signature:",
    "next_step_heading": "Next Guided Care Steps:",
    "btn_explore_options": "⚖️ Explore Reproductive Options (PGT-M)",
    "btn_book_counselor_fast": "👨‍⚕️ Book Genetic Counselor (Cleveland Clinic AD)",

    // Tab 4: Values-Sensitive Decision Aid
    "decision_title": "Non-Directive, Values-Sensitive Reproductive Decision Aid",
    "decision_subtitle": "Informed choice without coercion. Discover how modern reproductive medicine empowers carrier couples to build healthy families in full harmony with personal values.",
    "opt1_badge": "High Clinical Efficacy (98%+)",
    "opt1_title": "1. IVF with Pre-implantation Genetic Testing (PGT-M)",
    "opt1_desc": "Carrier couples undergo standard In-Vitro Fertilization (IVF). Embryos are genetically analyzed in the lab before pregnancy occurs. Only embryos free of the specific familial recessive disorder are transferred.",
    "opt1_timing": "Prior to pregnancy",
    "opt1_avail": "Covered in designated UAE fertility centers",
    "opt1_ethics": "Endorsed by UAE Fatwa Council & Fiqh Academy",
    "timing_label": "Timing:",
    "availability_label": "Abu Dhabi Access:",
    "ethics_label": "Bioethical Harmony / Goal:",
    "opt2_badge": "In-Pregnancy Diagnostic",
    "opt2_title": "2. Natural Conception + Prenatal Diagnosis",
    "opt2_desc": "Couples conceive naturally. At weeks 10–13, Chorionic Villus Sampling (CVS) or at weeks 15–20, Amniocentesis is performed to definitively test fetal genetic status, enabling informed medical planning.",
    "opt2_timing": "First or second trimester",
    "opt2_avail": "Maternal-Fetal Medicine centers",
    "opt2_goal": "Early diagnosis & fetal therapy preparation",
    "opt3_badge": "Manageable Disorders",
    "opt3_title": "3. Natural Conception + Early Neonatal Protocol",
    "opt3_desc": "Ideal for metabolic and hormonal conditions (such as PKU, Congenital Adrenal Hyperplasia, or treatable SMA). Specialized medical teams are ready at delivery to start immediate presymptomatic treatment.",
    "opt3_timing": "Immediate post-birth",
    "opt3_avail": "Abu Dhabi Pediatric Endocrinology / Genetics",
    "opt3_outcome": "Prevents permanent cognitive/physical disability",
    "opt4_badge": "Couple Autonomy",
    "opt4_title": "4. Informed Decision & Continued Family Support",
    "opt4_desc": "Couples make their own voluntary choices in consultation with qualified genetic counselors and family elders. MedSister provides unwavering psychosocial support with zero stigmatization.",
    "opt4_timing": "Self-determined",
    "opt4_support": "Confidential counseling & psychological support",
    "opt4_philosophy": "Respect for family values & autonomy",

    // Tab 5: Counselor Hub & Pedigree
    "counselor_section_title": "Qualified Human Counseling & FHIR Pedigree Hub",
    "counselor_section_subtitle": "Ensuring a strict firewall between AI educational support and clinical advice. Auto-generate standard 3-generation pedigrees and initiate warm handoffs to DoH-accredited genetics professionals.",
    "pedigree_title": "3-Generation Family Pedigree (Consanguineous Union)",
    "pedigree_hint": "Interactive clinical pedigree illustrating first-cousin consanguinity (double line) and carrier transmission:",
    "btn_export_fhir": "📋 Export HL7 FHIR Genomics Pedigree (JSON)",
    "booking_title": "Book Accredited Genetic Counselor Consultation",
    "counselor_name": "Dr. Maryam Al-Mansoori, MS, CGC",
    "counselor_role": "Licensed Clinical Genetic Counselor (DoH / ADPHC)",
    "counselor_facility": "Cleveland Clinic Abu Dhabi / M42 Genomics Center",
    "consult_mode_label": "Consultation Mode:",
    "preferred_time_label": "Preferred Date & Time:",
    "warm_handoff_label": "Automated Warm Handover Package:",
    "bundle_fhir_label": "Encrypted FHIR Pedigree Bundle",
    "bundle_concordance_label": "Couple Recessive Concordance Summary (HBB)",
    "bundle_literacy_label": "Pre-test Literacy & Decisional Conflict Score",
    "confirm_booking_btn": "✅ Confirm Confidential Counselor Referral",

    // Tab 6: Audit & Metrics
    "metrics_title": "Measurable Comprehension, Equity & Health System Metrics",
    "metrics_subtitle": "Demonstrating clinical efficacy without treating canceled marriages as a success metric. Measuring knowledge gain, decisional comfort, and audit compliance.",
    "kpi1_title": "Comprehension Lift",
    "kpi1_sub": "Pre-test: 48.2% ➔ Post-test: 89.6%",
    "kpi2_title": "Decisional Conflict (DCS)",
    "kpi2_sub": "Scores <25 indicate high decision implementation",
    "kpi3_title": "Counseling Uptake Rate",
    "kpi3_sub": "Concordant couples attending genetics referral",
    "kpi4_title": "Median Referral Latency",
    "kpi4_sub": "From EGP screening to specialist consult",
    "quiz_title": "Interactive Knowledge & Numeracy Micro-Assessment",
    "quiz_desc": "Take the quick 3-question assessment to measure genetic comprehension and update real-time platform statistics:",
    "quiz_q1_text": "1. If a person is identified as a 'Carrier' for Beta-Thalassemia, what does this mean?",
    "quiz_q1_opt1": "They have severe anemia and require regular blood transfusions.",
    "quiz_q1_opt2": "They are completely healthy and asymptomatic; risk only arises if their partner is also a carrier for the same gene.",
    "quiz_q1_opt3": "They should not get married.",
    "quiz_q2_text": "2. If both parents carry the exact same autosomal recessive gene, what is the risk of an affected child?",
    "quiz_q2_opt1": "100% of children will definitely be sick.",
    "quiz_q2_opt2": "25% (1 in 4 chance) in each pregnancy independently; 75% will be unaffected.",
    "quiz_q2_opt3": "Only male children can inherit it.",
    "quiz_q3_text": "3. Can a carrier couple have biologically healthy children together in Abu Dhabi?",
    "quiz_q3_opt1": "Yes, through IVF with PGT-M, prenatal diagnosis, or early neonatal intervention.",
    "quiz_q3_opt2": "No, there are no medical options available.",
    "quiz_submit_btn": "Submit Assessment",
    "ledger_title": "Cryptographic Consent & Access Audit Ledger",
    "ledger_desc": "Immutable, auditable activity log guaranteeing that no unauthorized family member accessed genetic data:",
        "chat_disclaimer": "🔒 <strong>Clinical Boundary Guardrail:</strong> MedSister AI provides patient education and decision support. It does not provide medical diagnoses or prescriptions. Complex cases are escalated directly to accredited human genetic counselors.",
    "th_txid": "Tx ID",
    "th_action": "Action",
    "th_subject": "Subject ID",
    "th_scope": "Scope",
    "th_status": "Status",

    // Tab 7: AI Chatbot
    "chat_title": "MedSister AI Conversational Genetic Navigator",
    "chat_subtitle": "Empathetic, culturally aware, bilingual assistant. Ask questions in English or Arabic about carrier status, consanguinity, Islamic bioethics, and reproductive options.",
    "chat_welcome": "Marhaban! I am <strong>MedSister</strong>, your premarital genomics navigator. You can ask me about carrier testing, how consanguinity affects recessive genes, Islamic bioethics regarding PGT-M, or how your privacy is protected. How can I help you today?",
    "chat_placeholder": "Type your genetic question in English or Arabic...",
    "send_btn": "Send",

    // Footer
    "footer_text": "<strong>MedSister GenCare 2.0</strong> — Designed for the Abu Dhabi Future Health Digital Innovation Challenge 2026.",
    "footer_standards": "Integrated with Department of Health – Abu Dhabi (DoH) & Emirati Genome Program standards."
  },

  ar: {
    // Header & Meta
    "subtitle": "تحدي صحة المستقبل بأبوظبي · الحد من مخاطر الأمراض الوراثية",
    "egp_live": "متصل ببرنامج الجينوم الإماراتي (EGP)",
    "tab_overview": "المميزات",
    "tab_risk": "المخاطر الوراثية",
    "tab_privacy": "فاحص التوافق",
    "tab_decision": "دعم القرار",
    "tab_counselor": "مركز الاستشارة",
    "tab_metrics": "المؤشرات والتدقيق",
    "tab_chat": "المرشدة الذكية",

    // Hero Banner
    "hero_badge": "تحدي الابتكار الرقمي لصحة المستقبل - أبوظبي",
    "hero_title": "تمكين الأسر وحماية الموروث: الحد من مخاطر الأمراض الوراثية في زواج الأقارب",
    "hero_desc": "تحويل الفحص الجيني قبل الزواج في أبوظبي من تجربة مقلقة إلى رحلة صحية قائمة على الاحترام، والخصوصية المشفرة، والحلول الإنجابية المتقدمة. مدعوم بتقنية التقاطع الآمن للبيانات (PSI) وحواجز الأمان الإكلينيكية.",
    "stat_genes": "جيناً في فحص الأمراض المتنحية بالإمارات",
    "stat_privacy": "خصوصية مشفرة 100% بين الشريكين",
    "stat_coercion": "صفر حالات إكراه أو حكم مجتمعي",

    // Problem Alignment
    "problem_title": "التوافق مع أهداف التحدي: مسار الخصوبة 03 (أبوظبي)",
    "problem_desc": "تقود أبوظبي العالم في علم الجينوم السكاني عبر برنامج الجينوم الإماراتي. لكن الفحص لا يؤتي ثماره إلا عندما يفهم الشباب معنى حامل الجين دون خوف أو وصمة، وحماية خصوصيتهم من التدخلات الأسرية، وتوفير حلول طبية حديثة كفحص الأجنة PGT-M.",
    "p1_title": "شرح المخاطر ببساطة",
    "p1_desc": "توضيح معنى حامل الطفرة ($Aa$) ومفهوم احتمال 25% لكل حمل مقابل التشخيص بلغة عربية واضحة ومطمئنة.",
    "p2_title": "قرارات مبنية على القيم",
    "p2_desc": "إتاحة خيارات أطفال الأنابيب والفحص الجيني للأجنة دون أي إكراه أو مساس بالعادات الأسرية الأصيلة.",
    "p3_title": "استشارات وراثية معتمدة",
    "p3_desc": "حدود إكلينيكية صارمة تفصل التثقيف الذكي عن المشورة الطبية المعتمدة من دائرة الصحة بأبوظبي عبر ملفي.",
    "p4_title": "خصوصية عائلية مشفرة",
    "p4_desc": "تقنية Zero-Knowledge تمنع كشف الجينات غير المشتركة للشريك أو أسرته لتفادي القيل والقال الأسري.",
    "p5_title": "ربط آمن بالرعاية الصحية",
    "p5_desc": "إحالة موثقة عبر ملفي لعيادات الجينوم المتقدمة في كليفلاند كلينك أبوظبي وشبكة M42.",
    "p6_title": "قياس الفهم وجودة القرار",
    "p6_desc": "قياس ارتفاع مستوى الوعي وانخفاض التردد، دون اعتبار إلغاء الزواج معياراً للنجاح مطلقاً.",

    // Core Product Capabilities (Section requested by user)
    "features_architecture_title": "مِدسيستر 2.0: القدرات الأساسية وتكامل سير العمل الطبي",
    "feat_1_title": "١. محرك المخاطر الجينية والتوعية الثقافية",
    "feat_1_desc": "تبسيط نتائج الفحص الجيني المتنحي لـ 570 جيناً إلى لغة عربية واضحة ومطمئنة. إيضاح مفهوم 'حامل الجين' ($Aa$) كشخص سليم ومعافى تماماً. محاكاة احتمالية التكرار الوراثي (25% لكل حمل)، والتفريق الدقيق بين الطفرات الممرضة والمتغيرات غير واضحة المعالم (VUS).",
    "feat_2_title": "٢. فاحص التوافق المشفر بتقنية (Zero-Knowledge PSI)",
    "feat_2_desc": "بروتوكول تشفير متقدم لمقارنة بيانات الشريكين الجينية. تكتشف الخوارزمية الجينات المتنحية المشتركة عبر رموز HMAC المشفرة. <strong>خصوصية مطلقة 100%</strong> تمنع تسريب أي طفرات غير مشتركة، حمايةً للأسر من القيل والقال والوصمة الاجتماعية.",
    "feat_3_title": "٣. مِدسيستر الذكية: مرشدة وراثية ثنائية اللغة",
    "feat_3_desc": "إرشاد حواري على مدار الساعة مع حواجز أمان إكلينيكية صارمة. تقديم الدعم التثقيفي، والإجابة عن استفسارات زواج الأقارب والفتاوى الشرعية (مجلس الإمارات للإفتاء الشرعي)، وإزالة القلق دون إعطاء تشخيصات طبية غير معتمدة.",
    "feat_4_title": "٤. دعم القرار المحايد واحترام القيم الأسرية",
    "feat_4_desc": "تمكين الأزواج الحاملين للطفرة بحلول إنجابية متقدمة: أطفال الأنابيب مع الفحص الجيني للأجنة (PGT-M)، التشخيص أثناء الحمل، أو الرعاية المبكرة فور الولادة. احترام كامل للقرارات الأسرية دون أي إكراه أو توجيه.",
    "feat_5_title": "٥. شجرة العائلة الآلية (FHIR) والإحالة الإكلينيكية",
    "feat_5_desc": "توليد تلقائي لشجرة العائلة لثلاثة أجيال وحزم إكلينيكية معتمدة بصيغة HL7 FHIR Genomics. تيسير الربط المباشر مع استشاريي الوراثة المعتمدين في كليفلاند كلينك أبوظبي وشبكة M42 الصحية عبر ملفي.",
    "feat_6_title": "٦. سجل الموافقات والتدقيق المشفر (Blockchain Ledger)",
    "feat_6_desc": "إدارة الموافقات المستنيرة عبر سجل غير قابل للتلاعب. تتبع نطاقات الموافقة المحددة للشريكين، ومنع أي وصول غير مصرح به من الأقارب، وتوفير سجلات تدقيق متوافقة مع قانون البيانات الصحية الإماراتي.",

    // Tab 2: Genomic Risk Visualizer
    "risk_title": "المحاكي التفاعلي للمخاطر الجينية وزواج الأقارب",
    "risk_subtitle": "استكشف علم الوراثة المتنحية، احسب معامل القرابة (F)، وتعرف على آليات التوافق بلغة علمية ميسرة.",
    "punnett_title": "محاكي مندل للتكرار الوراثي المتنحي",
    "punnett_hint": "حدد النمط الجيني لكل من الشريك 1 والشريك 2 لمشاهدة التوزيع الإحصائي الدقيق لكل حمل:",
    "partner1_label": "النمط الجيني للشريك الأول:",
    "partner2_label": "النمط الجيني للشريك الثاني:",
    "unaffected": "سليم غير حامل (25%)",
    "carrier_healthy": "حامل سليم ومعافى (25%)",
    "affected_risk": "احتمال الإصابة بالمرض (25%)",
    "numeracy_title": "الاحتمال البصري في كل حمل على حدة:",
    "punnett_explainer": "💡 <strong>معلومة محورية:</strong> نسبة الـ 25% تنطبق على <em>كل حمل بشكل مستقل تماماً</em> (مثل رمي نرد رباعي الوجوه في كل مرة). هذا لا يعني إطلاقاً أنه إذا أنجبتما 4 أطفال فسيكون أحدهم مصاباً بالضرورة! بالإضافة إلى ذلك، فإن 75% من الأطفال سيكونون أصحاء تماماً.",
    "consang_calc_title": "معامل قرابة الدم والجينات المشتركة ($F$)",
    "consang_desc": "زواج الأقارب لا يخلق طفرات جينية جديدة إطلاقاً، بل يزيد فقط من احتمالية تشارك نفس الجين المتنحي الموروث من الأجداد المشتركين (Identical by Descent).",
    "union_type_label": "اختر درجة القرابة العائلية:",
    "f_coefficient_label": "معامل القرابة ($F$):",
    "variant_title": "فهم النتائج الجينية: اليقين مقابل الشك",
    "tier_p_badge": "طفرة ممرضة مؤكدة (P/LP)",
    "tier_p_desc": "طفرة مؤكدة التسبب بالمرض. إذا كان كلا الشريكين حاملين لها، يتم توجيههما للاستشارة الطبية.",
    "tier_vus_badge": "تغير غير محدد المعالم (VUS)",
    "tier_vus_desc": "تغير جيني غير محدد التأثير. <strong>لا يعتبر تشخيصاً لمرض ولا يدعو للقلق أبداً.</strong> تتم متابعته طبياً.",
    "tier_b_badge": "تغير جيني طبيعي حميد (B/LB)",
    "tier_b_desc": "اختلاف بشري طبيعي وغير ضار إطلاقاً. آمن تماماً.",
    "cultural_reassurance_text": "<strong>احترام التراث والتقاليد:</strong> كان زواج الأقارب ولا يزال ركيزة أساسية للترابط الأسري والاستقرار المجتمعي في أبوظبي لأجيال. تحترم مِدسيستر هذا الموروث بتقديم العلم كأداة حماية وتمكين لتأسيس أسرة سليمة دون مساس بروابطكم الأسرية.",

    // Tab 3: PSI Couple Matcher
    "privacy_section_title": "فاحص التوافق المشفر بتقنية Zero-Knowledge PSI",
    "privacy_section_subtitle": "اختبر محرك الخصوصية المشفر: يتحقق الشريكان من التوافق ضمن قائمة الـ 570 جيناً دون أن يكشف أي طرف عن طفراته غير المشتركة.",
    "privacy_guarantee_title": "ضمان الخصوصية والسرية المطلقة:",
    "privacy_guarantee_desc": "في العائلات المترابطة، معرفة أن الطرف الأول حامل لجين ما قد يسبب قيل وقال يؤثر على إخوته وأخواته. يستخدم بروتوكولنا رموز HMAC-SHA256 المشفرة، فلا يتم إظهار إلا الجين المشترك فقط، بينما تبقى بقية الطفرات سرية 100%.",
    "partner_config_title": "اختر الملفات الجينية للتجربة",
    "btn_scenario_concordant": "🧪 تجربة سيناريو (أ): زوجان متطابقان في طفرة الثلاسيميا (خطر مشترك)",
    "btn_scenario_compatible": "✅ تجربة سيناريو (ب): توافق آمن (طفرات متنحية غير متطابقة)",
    "partner1_name": "الشريك الأول: طارق (الهوية الإماراتية: ***9042)",
    "partner2_name": "الشريك الثاني: فاطمة (الهوية الإماراتية: ***3318)",
    "p1_consent": "الموافقة الصريحة: ممنوحة (لغرض فحص التوافق فقط)",
    "p2_consent": "الموافقة الصريحة: ممنوحة (لغرض فحص التوافق فقط)",
    "btn_run_psi": "تشغيل فحص التوافق المشفر (Zero-Knowledge PSI)",
    "psi_output_title": "نتيجة التوافق المشفرة دون أي تسريب للبيانات",
    "psi_empty_prompt": "انقر فوق 'تشغيل فحص التوافق المشفر' لتقييم التوافق مع الحماية الكاملة للبيانات الجينية.",
    "privacy_proof_heading": "إثبات تدقيق حماية الخصوصية:",
    "proof_1_label": "الجين المتنحي المشترك:",
    "proof_2_label": "الجينات المحمية الخاصة بالشريك الأول:",
    "proof_3_label": "الجينات المحمية الخاصة بالشريك الثاني:",
    "proof_4_label": "توقيع سجل التدقيق المشفر:",
    "next_step_heading": "الخطوات الطبية الإرشادية التالية:",
    "btn_explore_options": "⚖️ استكشاف الخيارات الإنجابية (PGT-M)",
    "btn_book_counselor_fast": "👨‍⚕️ حجز موعد استشارة وراثية (كليفلاند كلينك)",

    // Tab 4: Values-Sensitive Decision Aid
    "decision_title": "دعم القرار المحايد والمبني على القيم الأسرية",
    "decision_subtitle": "قرار مستنير دون أي إكراه. اكتشف كيف يمكّن الطب الإنجابي الحديث الأزواج الحاملين للطفرات من بناء أسر سليمة في انسجام تام مع قيمهم.",
    "opt1_badge": "كفاءة إكلينيكية فائقة (98%+)",
    "opt1_title": "١. أطفال الأنابيب مع الفحص الجيني للأجنة (PGT-M)",
    "opt1_desc": "يخضع الشريكان لبرنامج الإخصاب المساعد المعتاد (IVF)، وتُفحص الأجنة جينياً في المختبر قبل حدوث الحمل لاختيار الأجنة السليمة فقط من الاضطراب الوراثي المحدد وإعادتها للرحم.",
    "opt1_timing": "قبل حدوث الحمل",
    "opt1_avail": "متاح ومغطى في مراكز الإخصاب المعتمدة بأبوظبي",
    "opt1_ethics": "معتمد ومجاز بفتوى مجلس الإمارات للإفتاء ومجمع الفقه الإسلامي",
    "timing_label": "التوقيت الطبي:",
    "availability_label": "التوفر في أبوظبي:",
    "ethics_label": "الانسجام الشرعي والهدف:",
    "opt2_badge": "تشخيص أثناء الحمل المبكر",
    "opt2_title": "٢. الحمل الطبيعي مع التشخيص الوراثي المبكر للجنين",
    "opt2_desc": "يتم الحمل بصورة طبيعية، وفي الأسابيع 10–13 يُجرى فحص خملات المشيمة (CVS) أو في الأسابيع 15–20 فحص السائل الأمنيوسي للتحقق بدقة من صحة الجين وتجهيز الرعاية الطبية.",
    "opt2_timing": "الثلث الأول أو الثاني من الحمل",
    "opt2_avail": "مراكز طب الأجنة والأمومة المتقدمة",
    "opt2_goal": "التشخيص الدقيق والاستعداد للعلاج المبكر",
    "opt3_badge": "اضطرابات قابلة للعلاج والتحكم",
    "opt3_title": "٣. الحمل الطبيعي مع بروتوكول الرعاية الفورية للمولود",
    "opt3_desc": "مثالي للاضطرابات الاستقلابية والهرمونية (مثل بيلة الفينيل كيتون، تضخم الغدة الكظرية، أو ضمور العضلات SMA). تكون الفرق الطبية جاهزة عند الولادة لبدء العلاج الدوائي الفوري لحماية الطفل.",
    "opt3_timing": "فور الولادة مباشرة",
    "opt3_avail": "أقسام جينات وغدد الأطفال بمستشفيات أبوظبي",
    "opt3_outcome": "الوقاية التامة من الإعاقات الذهنية والجسدية",
    "opt4_badge": "استقلالية الشريكين",
    "opt4_title": "٤. القرار المستنير والدعم الأسري المتواصل",
    "opt4_desc": "يتخذ الشريكان قرارهما الطوعي بكامل الرضا بالتشاور مع المستشار الوراثي. تقدم مِدسيستر الدعم النفسي والإرشادي المتكامل دون أي وصمة أو إكراه.",
    "opt4_timing": "وفق اختيار الشريكين",
    "opt4_support": "مشورة سرية ودعم نفسي متكامل",
    "opt4_philosophy": "احترام تام للاستقلالية والروابط الأسرية",

    // Tab 5: Counselor Hub & Pedigree
    "counselor_section_title": "مركز الاستشارة الوراثية المعتمدة وشجرة العائلة (FHIR)",
    "counselor_section_subtitle": "جدار أمان صارم يفصل التثقيف الذكي عن المشورة الإكلينيكية المعتمدة. توليد شجرة العائلة لثلاثة أجيال والإحالة المباشرة لكوادر الوراثة المعتمدة من دائرة الصحة.",
    "pedigree_title": "شجرة العائلة الإكلينيكية لثلاثة أجيال (زواج أقارب)",
    "pedigree_hint": "مخطط وراثي يوضح قرابة أولاد العمومة (خط مزدوج) وانتقال الصفة الوراثية المتنحية:",
    "btn_export_fhir": "📋 تصدير شجرة العائلة بصيغة FHIR JSON",
    "booking_title": "حجز موعد استشارة مع كوادر الوراثة المعتمدة",
    "counselor_name": "د. مريم المنصوري، ماجستير استشارات وراثية",
    "counselor_role": "مستشارة وراثية إكلينيكية معتمدة (دائرة الصحة - أبوظبي)",
    "counselor_facility": "كليفلاند كلينك أبوظبي / مركز M42 للجينوم",
    "consult_mode_label": "طريقة الاستشارة:",
    "preferred_time_label": "الوقت والتاريخ المفضل:",
    "warm_handoff_label": "حزمة الإحالة الطبية التلقائية المكتملة:",
    "bundle_fhir_label": "ملف شجرة العائلة المشفر بصيغة FHIR",
    "bundle_concordance_label": "ملخص التوافق الجيني المتنحي للشريكين (HBB)",
    "bundle_literacy_label": "مؤشرات الوعي ومستوى الارتياح للقرار",
    "confirm_booking_btn": "✅ تأكيد إحالة الاستشارة الوراثية السرية",

    // Tab 6: Audit & Metrics
    "metrics_title": "مؤشرات الوعي والعدالة وكفاءة المنظومة الصحية",
    "metrics_subtitle": "إثبات الكفاءة الإكلينيكية دون اعتبار إلغاء الزواج معياراً للنجاح مطلقاً. قياس نضج الوعي، والارتياح للقرار، والامتثال للخصوصية.",
    "kpi1_title": "ارتفاع مستوى الفهم الجيني",
    "kpi1_sub": "قبل التثقيف: 48.2% ➔ بعد التثقيف: 89.6%",
    "kpi2_title": "مقياس التردد في اتخاذ القرار (DCS)",
    "kpi2_sub": "الدرجات أقل من 25 تعكس وضوح القرار واستقراره",
    "kpi3_title": "نسبة الإقبال على الاستشارة الوراثية",
    "kpi3_sub": "نسبة الأزواج الحاملين لنفس الجين المراجعين للمشورة",
    "kpi4_title": "متوسط سرعة الإحالة الطبية",
    "kpi4_sub": "المدة الزمنية من نتيجة الفحص حتى الاستشارة المتخصصة",
    "quiz_title": "التقييم التفاعلي المصغر للوعي الجيني والإحصائي",
    "quiz_desc": "أجب عن الأسئلة الثلاثة السريعة لقياس مستوى الفهم الجيني وتحديث مؤشرات المنصة بصورة مباشرة:",
    "quiz_q1_text": "١. إذا تم تصنيف شخص على أنه 'حامل لطفرة الثلاسيميا'، فماذا يعني ذلك طبياً؟",
    "quiz_q1_opt1": "يعاني من فقر دم حاد ويحتاج إلى نقل دم دوري.",
    "quiz_q1_opt2": "سليم ومعافى تماماً ولا تظهر عليه أعراض؛ والخطر ينشأ فقط إذا كان الشريك حاملاً لنفس الجين المتنحي أيضاً.",
    "quiz_q1_opt3": "ينبغي عليه الامتناع عن الزواج تماماً.",
    "quiz_q2_text": "٢. إذا كان كلا الوالدين حاملين لنفس الجين المتنحي المشترك، فما هو احتمال ولادة طفل مصاب؟",
    "quiz_q2_opt1": "100% من الأطفال سيصابون بالمرض حتماً.",
    "quiz_q2_opt2": "25% (احتمال 1 من كل 4) في كل حمل بشكل مستقل؛ و75% سيكونون أصحاء غير مصابين.",
    "quiz_q2_opt3": "الأبناء الذكور فقط هم من يرثون المرض.",
    "quiz_q3_text": "٣. هل يمكن لزوجين حاملين لنفس الجين إنجاب أطفال أصحاء ومعافين في أبوظبي؟",
    "quiz_q3_opt1": "نعم بكل تأكيد، عبر أطفال الأنابيب والفحص الجيني للأجنة (PGT-M)، أو التشخيص أثناء الحمل، أو العلاج المبكر فور الولادة.",
    "quiz_q3_opt2": "لا، لا توجد أي خيارات أو حلول طبية متاحة.",
    "quiz_submit_btn": "إرسال الإجابات وتقييم الوعي",
    "ledger_title": "سجل الموافقات والتدقيق المشفر (Audit Ledger)",
    "ledger_desc": "سجل غير قابل للتعديل يضمن عدم اطلاع أي فرد من العائلة على البيانات الوراثية دون إذن صريح:",
        "chat_disclaimer": "🔒 <strong>حواجز الأمان الإكلينيكية:</strong> تقدم مِدسيستر الذكية التثقيف الصحي ودعم القرار فقط، ولا تقدم تشخيصاً طبياً أو وصفات علاجية. الحالات المعقدة يتم تصعيدها مباشرة لمستشاري الوراثة المعتمدين.",
    "th_txid": "معرف المعاملة",
    "th_action": "الإجراء",
    "th_subject": "معرف المستفيد",
    "th_scope": "نطاق الصلاحية",
    "th_status": "الحالة",

    // Tab 7: AI Chatbot
    "chat_title": "المرشدة الوراثية الذكية مِدسيستر",
    "chat_subtitle": "مساعدة تفاعلية متعاطفة وثنائية اللغة ومراعية للقيم الثقافية. اسأل بالعربية أو الإنجليزية عن صفة حامل الجين، وزواج الأقارب، والفتاوى الشرعية، والخيارات الإنجابية.",
    "chat_welcome": "مرحباً بكم! أنا <strong>مِدسيستر</strong>، مرشدتكم الذكية لفحوصات ما قبل الزواج. يمكنكم سؤالي عن معنى حامل الجين، وتأثير قرابة الدم على الصفات المتنحية، والرأي الشرعي في فحص الأجنة (PGT-M)، أو كيف نضمن خصوصيتكم التامة. كيف يمكنني مساعدتكم اليوم؟",
    "chat_placeholder": "اكتب سؤالك الوراثي باللغة العربية أو الإنجليزية...",
    "send_btn": "إرسال",

    // Footer
    "footer_text": "<strong>مِدسيستر GenCare 2.0</strong> — صُممت لتحدي الابتكار الرقمي لصحة المستقبل في أبوظبي 2026.",
    "footer_standards": "متكاملة مع معايير دائرة الصحة - أبوظبي وبرنامج الجينوم الإماراتي (EGP)."
  }
};

// Global State
let currentLang = "en";
let partner1Carriers = [
  { gene: "HBB", variant: "c.92+1G>A", disease: "Beta-Thalassemia Carrier" },
  { gene: "GJB2", variant: "c.35delG", disease: "Hearing Loss Carrier" }
];
let partner2Carriers = [
  { gene: "HBB", variant: "c.92+1G>A", disease: "Beta-Thalassemia Carrier" },
  { gene: "CFTR", variant: "c.1521_1523delCTT", disease: "Cystic Fibrosis Carrier" }
];

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initLanguageToggle();
  initPunnettSimulator();
  initConsanguinityCalc();
  initPsiMatcher();
  initCounselorBooking();
  initQuiz();
  initChat();
  fetchInitialStats();

  // Restore preferred language if saved in localStorage
  const savedLang = localStorage.getItem('medsister_lang');
  if (savedLang && (savedLang === 'ar' || savedLang === 'en')) {
    setLanguage(savedLang);
  }
});

// --- 1. TABS NAVIGATION ---
function initTabs() {
  const tabs = document.querySelectorAll('.nav-tab');
  const panes = document.querySelectorAll('.tab-pane');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');
      tabs.forEach(t => t.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const activePane = document.getElementById(`tab-${target}`);
      if (activePane) activePane.classList.add('active');
    });
  });

  const btnExplore = document.getElementById('btnExploreOptions');
  if (btnExplore) {
    btnExplore.addEventListener('click', () => {
      const tabDecision = document.querySelector('[data-tab="decision-aid"]');
      if (tabDecision) tabDecision.click();
    });
  }

  const btnBookFast = document.getElementById('btnBookCounselorFast');
  if (btnBookFast) {
    btnBookFast.addEventListener('click', () => {
      const tabCounselor = document.querySelector('[data-tab="counselor-pedigree"]');
      if (tabCounselor) tabCounselor.click();
    });
  }
}

// --- 2. BILINGUAL LOCALIZATION ENGINE ---
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('medsister_lang', currentLang);

  document.documentElement.setAttribute('dir', currentLang === "ar" ? "rtl" : "ltr");
  document.documentElement.setAttribute('lang', currentLang);

  const langText = document.getElementById('currentLangText');
  if (langText) {
    langText.textContent = currentLang === "en" ? "العربية (Arabic)" : "English";
  }

  // Translate all [data-i18n] targets with innerHTML (preserving HTML formatting and math notations)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
      el.innerHTML = TRANSLATIONS[currentLang][key];
    }
  });

  // Translate input placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
      el.setAttribute('placeholder', TRANSLATIONS[currentLang][key]);
    }
  });

  // Dynamic Dropdown Options Translation
  updateDropdownsLanguage(currentLang);

  // SVG Pedigree Translation
  updatePedigreeLanguage(currentLang);

  // Quick Prompt buttons in Chat
  updateChatQuickPrompts(currentLang);

  // Re-run interactive modules so their outputs match the chosen language
  if (typeof window.recalculatePunnett === 'function') {
    window.recalculatePunnett();
  }
  if (typeof window.recalculateConsanguinity === 'function') {
    window.recalculateConsanguinity();
  }
  if (typeof window.recalculatePsiTags === 'function') {
    window.recalculatePsiTags();
  }
}

function initLanguageToggle() {
  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === "en" ? "ar" : "en");
    });
  }
}

function updateDropdownsLanguage(lang) {
  // 1. Genotype Selects
  const p1Sel = document.getElementById('p1Genotype');
  const p2Sel = document.getElementById('p2Genotype');
  [p1Sel, p2Sel].forEach(sel => {
    if (sel) {
      const optCarrier = sel.querySelector('option[value="Aa"]');
      const optNormal = sel.querySelector('option[value="AA"]');
      if (optCarrier) {
        optCarrier.textContent = lang === 'ar' ? "حامل للجين (Aa) - سليم ومعافى" : "Carrier (Aa) - Completely Healthy";
      }
      if (optNormal) {
        optNormal.textContent = lang === 'ar' ? "غير حامل للجين (AA) - سليم" : "Non-Carrier (AA) - Healthy";
      }
    }
  });

  // 2. Consanguinity Select
  const consangSel = document.getElementById('consanguinitySelect');
  if (consangSel) {
    const optF1 = consangSel.querySelector('option[value="0.0625"]');
    const optF2 = consangSel.querySelector('option[value="0.03125"]');
    const optF3 = consangSel.querySelector('option[value="0.015625"]');
    const optF4 = consangSel.querySelector('option[value="0.0"]');

    if (optF1) optF1.textContent = lang === 'ar' ? "أبناء العمومة / الخؤولة — F = 1/16 (6.25%)" : "First Cousins (أبناء العمومة / الخؤولة) — F = 1/16 (6.25%)";
    if (optF2) optF2.textContent = lang === 'ar' ? "أبناء عمومة من الدرجة الثانية — F = 1/32 (3.125%)" : "First Cousins Once Removed — F = 1/32 (3.125%)";
    if (optF3) optF3.textContent = lang === 'ar' ? "أبناء أبناء العمومة — F = 1/64 (1.56%)" : "Second Cousins (أبناء أبناء العمومة) — F = 1/64 (1.56%)";
    if (optF4) optF4.textContent = lang === 'ar' ? "غير أقارب / عامة المجتمع — F = 0" : "Non-Consanguineous / Unrelated — F = 0 (Background Population)";
  }

  // 3. Consultation Mode
  const consultSel = document.getElementById('consultMode');
  if (consultSel) {
    const optTele = consultSel.querySelector('option[value="telehealth"]');
    const optInPerson = consultSel.querySelector('option[value="in_person"]');
    if (optTele) optTele.textContent = lang === 'ar' ? "استشارة مرئية آمنة (عبر بوابة المريض بملفي Malaffi)" : "Secure Video Telehealth (via Malaffi Patient Portal)";
    if (optInPerson) optInPerson.textContent = lang === 'ar' ? "استشارة حضورية (كليفلاند كلينك أبوظبي)" : "In-Person Consultation (Cleveland Clinic Abu Dhabi)";
  }
}

function updatePedigreeLanguage(lang) {
  const genLabels = document.querySelectorAll('.ped-gen-label');
  if (genLabels.length >= 3) {
    genLabels[0].textContent = lang === 'ar' ? "الجيل الأول" : "Gen I";
    genLabels[1].textContent = lang === 'ar' ? "الجيل الثاني" : "Gen II";
    genLabels[2].textContent = lang === 'ar' ? "الجيل الثالث" : "Gen III";
  }

  const grandLabel = document.querySelector('text[x="215"][y="60"]');
  if (grandLabel) grandLabel.textContent = lang === 'ar' ? "الأجداد" : "Grandparents";

  const fatherLabel = document.querySelector('text[x="90"][y="145"]');
  if (fatherLabel) fatherLabel.textContent = lang === 'ar' ? "الأب (حامل للطفرة)" : "Father (Carrier)";

  const motherLabel = document.querySelector('text[x="350"][y="145"]');
  if (motherLabel) motherLabel.textContent = lang === 'ar' ? "الأم (حاملة للطفرة)" : "Mother (Carrier)";

  const alertLabel = document.querySelector('.ped-label-alert');
  if (alertLabel) alertLabel.textContent = lang === 'ar' ? "احتمال الإصابة 25% (aa)" : "25% Recurrence Risk (aa)";
}

function updateChatQuickPrompts(lang) {
  const prompts = [
    {
      enText: "What does being a carrier mean?",
      enQuery: "What does being a carrier mean?",
      arText: "ماذا يعني أن أكون حاملاً للجين؟",
      arQuery: "ماذا يعني أن أكون حاملاً للجين؟"
    },
    {
      enText: "Does marrying my cousin guarantee sick children?",
      enQuery: "Does marrying my cousin guarantee sick children?",
      arText: "هل زواج الأقارب يضمن ولادة أطفال مصابين؟",
      arQuery: "هل زواج الأقارب يضمن ولادة أطفال مرضى؟"
    },
    {
      enText: "What is PGT-M and how does it help?",
      enQuery: "What is PGT-M and how does it help?",
      arText: "ما هو فحص الأجنة الوراثي PGT-M وكيف يساعدنا؟",
      arQuery: "ما هو فحص الأجنة الوراثي PGT-M مع أطفال الأنابيب؟"
    },
    {
      enText: "Does screening force me to cancel marriage?",
      enQuery: "Does screening force me to cancel marriage?",
      arText: "هل الفحص الجيني يجبرنا على إلغاء الزواج؟",
      arQuery: "هل الفحص الجيني يجبرنا على إلغاء الزواج؟"
    }
  ];

  const btns = document.querySelectorAll('.quick-prompt-btn');
  btns.forEach((btn, idx) => {
    if (prompts[idx]) {
      btn.textContent = lang === 'ar' ? prompts[idx].arText : prompts[idx].enText;
      btn.setAttribute('data-query', lang === 'ar' ? prompts[idx].arQuery : prompts[idx].enQuery);
    }
  });
}

// --- 3. MENDELIAN PUNNETT SQUARE SIMULATOR ---
function initPunnettSimulator() {
  const p1Select = document.getElementById('p1Genotype');
  const p2Select = document.getElementById('p2Genotype');

  window.recalculatePunnett = function updatePunnett() {
    const p1 = p1Select.value;
    const p2 = p2Select.value;

    const a1 = p1[0];
    const a2 = p1[1];
    const b1 = p2[0];
    const b2 = p2[1];

    document.getElementById('p1-allele-1').textContent = a1;
    document.getElementById('p1-allele-2').textContent = a2;
    document.getElementById('p2-allele-1').textContent = b1;
    document.getElementById('p2-allele-2').textContent = b2;

    const cell00 = a1 + b1;
    const cell01 = a2 + b1;
    const cell10 = a1 + b2;
    const cell11 = a2 + b2;

    renderCell('cell-00', cell00);
    renderCell('cell-01', cell01);
    renderCell('cell-10', cell10);
    renderCell('cell-11', cell11);

    // Update stick figures
    const figures = document.getElementById('stickFigures');
    const isAr = currentLang === 'ar';

    if (p1 === "Aa" && p2 === "Aa") {
      figures.innerHTML = `
        <div class="figure normal"><span class="fig-icon">👶</span><span class="fig-label">${isAr ? '25% سليم غير حامل' : '25% Unaffected'}</span></div>
        <div class="figure carrier"><span class="fig-icon">👶</span><span class="fig-label">${isAr ? '50% حامل سليم' : '50% Carrier (Healthy)'}</span></div>
        <div class="figure carrier"><span class="fig-icon">👶</span><span class="fig-label">${isAr ? 'سليم معافى' : 'Healthy'}</span></div>
        <div class="figure affected"><span class="fig-icon">👶</span><span class="fig-label">${isAr ? '25% احتمال الإصابة' : '25% Affected Risk'}</span></div>
      `;
    } else if (p1 === "Aa" || p2 === "Aa") {
      figures.innerHTML = `
        <div class="figure normal"><span class="fig-icon">👶</span><span class="fig-label">${isAr ? '50% سليم (AA)' : '50% Unaffected (AA)'}</span></div>
        <div class="figure normal"><span class="fig-icon">👶</span><span class="fig-label">${isAr ? 'سليم تماماً' : 'Unaffected'}</span></div>
        <div class="figure carrier"><span class="fig-icon">👶</span><span class="fig-label">${isAr ? '50% حامل (Aa)' : '50% Carrier (Aa)'}</span></div>
        <div class="figure carrier"><span class="fig-icon">👶</span><span class="fig-label">${isAr ? 'حامل سليم ومعافى' : 'Carrier (Healthy)'}</span></div>
      `;
    } else {
      figures.innerHTML = `
        <div class="figure normal"><span class="fig-icon">👶</span><span class="fig-label">${isAr ? '100% سليم (AA)' : '100% Unaffected (AA)'}</span></div>
        <div class="figure normal"><span class="fig-icon">👶</span><span class="fig-label">${isAr ? 'أطفال أصحاء 100%' : '100% Unaffected'}</span></div>
        <div class="figure normal"><span class="fig-icon">👶</span><span class="fig-label">${isAr ? 'صفر خطر للمرض' : 'Zero Disease Risk'}</span></div>
        <div class="figure normal"><span class="fig-icon">👶</span><span class="fig-label">${isAr ? 'صفر خطر للجين' : 'Zero Carrier Risk'}</span></div>
      `;
    }
  };

  function renderCell(id, genotype) {
    const el = document.getElementById(id);
    const sorted = genotype.split('').sort().join('');
    el.className = "cell offspring-cell";
    const isAr = currentLang === 'ar';

    if (sorted === "AA") {
      el.classList.add("normal");
      el.innerHTML = `<span class="gene-pair">AA</span><span class="gene-desc">${isAr ? 'سليم غير حامل (25%)' : 'Unaffected (25%)'}</span>`;
    } else if (sorted === "Aa") {
      el.classList.add("carrier");
      el.innerHTML = `<span class="gene-pair">Aa</span><span class="gene-desc">${isAr ? 'حامل سليم (25%)' : 'Carrier (Healthy)'}</span>`;
    } else {
      el.classList.add("affected");
      el.innerHTML = `<span class="gene-pair">aa</span><span class="gene-desc">${isAr ? 'احتمال الإصابة (25%)' : 'Affected Risk (25%)'}</span>`;
    }
  }

  p1Select.addEventListener('change', window.recalculatePunnett);
  p2Select.addEventListener('change', window.recalculatePunnett);
}

// --- 4. CONSANGUINITY INBREEDING CALCULATOR ---
function initConsanguinityCalc() {
  const sel = document.getElementById('consanguinitySelect');
  const scoreVal = document.getElementById('fScoreVal');
  const meaningText = document.getElementById('fMeaningText');

  window.recalculateConsanguinity = function updateConsanguinity() {
    const f = parseFloat(sel.value);
    const pct = (f * 100).toFixed(2) + "%";
    scoreVal.textContent = pct;
    const isAr = currentLang === 'ar';

    if (f >= 0.06) {
      meaningText.innerHTML = isAr
        ? `في زواج أبناء العمومة والخؤولة (F = 1/16)، يتشارك الجنين تقريباً <strong>6.25% من جينومه</strong> متماثلاً بالوراثة من الأجداد المشتركين. فحص 570 جيناً في أبوظبي يحمي تلك المناطق الجينية المشتركة بدقة متناهية.`
        : `For first-cousin unions (F = 1/16), approximately <strong>6.25% of the offspring's genome</strong> is homozygous by descent. Premarital screening tests 570 recessive genes to safeguard those specific shared regions.`;
    } else if (f >= 0.03) {
      meaningText.innerHTML = isAr
        ? `في قرابة الدرجة الثانية (F = 1/32)، يتشارك الجنين تقريباً <strong>3.125% من جينومه</strong> من أسلاف مشتركين. احتمال التوافق المتنحي معتدل.`
        : `For first cousins once removed (F = 1/32), approximately <strong>3.125% of the genome</strong> is homozygous by descent. Recessive concordance risk is moderate.`;
    } else if (f >= 0.01) {
      meaningText.innerHTML = isAr
        ? `في قرابة أبناء أبناء العمومة (F = 1/64)، يتشارك الجنين نحو <strong>1.56% فقط</strong> من الجينوم بالوراثة. يقترب الخطر من المعدل العام للسكان.`
        : `For second cousins (F = 1/64), approximately <strong>1.56% of the genome</strong> is homozygous by descent. Recessive risk approaches standard population levels.`;
    } else {
      meaningText.innerHTML = isAr
        ? `لغير الأقارب (F = 0)، يكون معامل القرابة صفراً. الخطر الأساسي لكون أي فرد حاملاً لطفرة وراثية في عامة السكان يتراوح بين 2–3%.`
        : `For unrelated partners (F = 0), inbreeding coefficient is zero. The background population carrier risk is approximately 2–3%.`;
    }
  };

  sel.addEventListener('change', window.recalculateConsanguinity);
}

// --- 5. ZERO-KNOWLEDGE PSI COUPLE MATCHER ---
function initPsiMatcher() {
  const btnRun = document.getElementById('runPsiMatchBtn');
  const btnScenarioA = document.getElementById('loadScenarioConcordant');
  const btnScenarioB = document.getElementById('loadScenarioCompatible');

  const p1Tags = document.getElementById('p1CarrierTags');
  const p2Tags = document.getElementById('p2CarrierTags');

  const emptyState = document.getElementById('psiEmptyState');
  const resultsState = document.getElementById('psiResultsState');
  const banner = document.getElementById('matchBanner');
  const statusText = document.getElementById('matchStatusText');
  const txIdEl = document.getElementById('matchTxId');
  const sharedGeneOutput = document.getElementById('sharedGeneOutput');
  const p1Protected = document.getElementById('p1ProtectedCount');
  const p2Protected = document.getElementById('p2ProtectedCount');
  const actionText = document.getElementById('actionPathwayText');

  let currentScenario = 'A'; // 'A' or 'B'

  window.recalculatePsiTags = function () {
    const isAr = currentLang === 'ar';
    if (currentScenario === 'A') {
      p1Tags.innerHTML = `
        <span class="tag tag-carrier">${isAr ? 'HBB (حامل لطفرة الثلاسيميا)' : 'HBB (Beta-Thalassemia Carrier)'}</span>
        <span class="tag tag-carrier">${isAr ? 'GJB2 (حامل لطفرة ضعف السمع)' : 'GJB2 (Hearing Loss Carrier)'}</span>
      `;
      p2Tags.innerHTML = `
        <span class="tag tag-carrier">${isAr ? 'HBB (حامل لطفرة الثلاسيميا)' : 'HBB (Beta-Thalassemia Carrier)'}</span>
        <span class="tag tag-carrier">${isAr ? 'CFTR (حامل للتليف الكيسي)' : 'CFTR (Cystic Fibrosis Carrier)'}</span>
      `;
    } else {
      p1Tags.innerHTML = `
        <span class="tag tag-carrier">${isAr ? 'GJB2 (حامل لطفرة ضعف السمع)' : 'GJB2 (Hearing Loss Carrier)'}</span>
      `;
      p2Tags.innerHTML = `
        <span class="tag tag-carrier">${isAr ? 'CFTR (حامل للتليف الكيسي)' : 'CFTR (Cystic Fibrosis Carrier)'}</span>
      `;
    }
  };

  btnScenarioA.addEventListener('click', () => {
    currentScenario = 'A';
    partner1Carriers = [
      { gene: "HBB", variant: "c.92+1G>A", disease: "Beta-Thalassemia Carrier" },
      { gene: "GJB2", variant: "c.35delG", disease: "Hearing Loss Carrier" }
    ];
    partner2Carriers = [
      { gene: "HBB", variant: "c.92+1G>A", disease: "Beta-Thalassemia Carrier" },
      { gene: "CFTR", variant: "c.1521_1523delCTT", disease: "Cystic Fibrosis Carrier" }
    ];
    window.recalculatePsiTags();
    emptyState.style.display = 'block';
    resultsState.style.display = 'none';
  });

  btnScenarioB.addEventListener('click', () => {
    currentScenario = 'B';
    partner1Carriers = [
      { gene: "GJB2", variant: "c.35delG", disease: "Hearing Loss Carrier" }
    ];
    partner2Carriers = [
      { gene: "CFTR", variant: "c.1521_1523delCTT", disease: "Cystic Fibrosis Carrier" }
    ];
    window.recalculatePsiTags();
    emptyState.style.display = 'block';
    resultsState.style.display = 'none';
  });

  btnRun.addEventListener('click', async () => {
    btnRun.disabled = true;
    const isAr = currentLang === 'ar';
    btnRun.innerHTML = `<span class="btn-icon">⏳</span> ${isAr ? 'جاري حساب التقاطع المشفر برموز HMAC-SHA256...' : 'Computing Blinded HMAC-SHA256 Intersection...'}`;

    try {
      const resp = await fetch('/api/crypto/match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          partner1_data: partner1Carriers,
          partner2_data: partner2Carriers
        })
      });
      const data = await resp.json();

      emptyState.style.display = 'none';
      resultsState.style.display = 'block';

      txIdEl.textContent = isAr ? `سجل التدقيق المشفر: ${data.txId} · موثق بمفتاح الأمان HSM` : `Audit Ledger: ${data.txId} · Signed by HSM`;

      if (data.concordant) {
        banner.className = "result-banner";
        statusText.textContent = isAr ? "⚠️ تم رصد تطابق وراثي متنحٍ مشترك (خطر محتمل)" : "⚠️ Concordant Recessive Risk Identified";
        sharedGeneOutput.textContent = isAr
          ? "HBB (طفرة بيتا ثلاسيميا المشتركة)"
          : data.concordant_genes.map(g => `${g.gene} (${g.disease_en})`).join(', ');
        p1Protected.textContent = isAr
          ? "طفرة GJB2 الخاصة بالشريك الأول محمية تماماً ومخفية عن الطرف الثاني وعائلته."
          : `GJB2 carrier status kept strictly private from Partner 2 and extended family.`;
        p2Protected.textContent = isAr
          ? "طفرة CFTR الخاصة بالشريك الثاني محمية تماماً ومخفية عن الطرف الأول وعائلته."
          : `CFTR carrier status kept strictly private from Partner 1 and extended family.`;
        actionText.textContent = isAr
          ? "نظراً لأن كلا الشريكين يحملان طفرة في جين HBB، فهناك احتمال 25% لإصابة الطفل في كل حمل. تتوفر في أبوظبي خيارات إنجابية حديثة (مثل أطفال الأنابيب وفحص الأجنة PGT-M) تمكنكما من الزواج وبناء أسرة معافاة بأمان تام."
          : "Because both partners carry an altered copy of HBB, there is a 25% chance of an affected child per pregnancy. Modern reproductive medicine in Abu Dhabi (such as PGT-M with IVF) allows you to marry and have biologically healthy children.";
      } else {
        banner.className = "result-banner compatible";
        statusText.textContent = isAr ? "✅ توافق جيني آمن وخالٍ من الطفرات المتنحية المشتركة" : "✅ Pair Compatible for Screened Recessive Conditions";
        sharedGeneOutput.textContent = isAr ? "صفر طفرات متنحية مشتركة (توافق آمن)" : "Zero Shared Recessive Mutations Detected";
        p1Protected.textContent = isAr ? "كافة الطفرات الفردية للشريك الأول تظل مشفرة وسرية 100%." : `All individual carrier traits remain 100% confidential to Partner 1.`;
        p2Protected.textContent = isAr ? "كافة الطفرات الفردية للشريك الثاني تظل مشفرة وسرية 100%." : `All individual carrier traits remain 100% confidential to Partner 2.`;
        actionText.textContent = isAr
          ? "مبارك! لم يتم رصد أي مخاطر مشتركة للأمراض المتنحية ضمن قائمة الـ 570 جيناً المعتمدة في أبوظبي. يمكنكم المضي قدماً في إتمام شهادة فحص ما قبل الزواج بكل طمأنينة."
          : "Congratulations! No shared recessive risks were identified on the Abu Dhabi 570-gene panel. You can proceed with standard premarital marriage certificate clearance with complete peace of mind.";
      }

      fetchInitialStats();
    } catch (err) {
      console.error(err);
      alert(isAr ? "حدث خطأ أثناء إجراء المطابقة المشفرة" : "Error executing cryptographic match");
    } finally {
      btnRun.disabled = false;
      btnRun.innerHTML = `<span class="btn-icon">⚡</span> <span data-i18n="btn_run_psi">${TRANSLATIONS[currentLang]["btn_run_psi"]}</span>`;
    }
  });
}

// --- 6. COUNSELOR BOOKING & FHIR EXPORT ---
function initCounselorBooking() {
  const btnExport = document.getElementById('btnExportFhir');
  if (btnExport) {
    btnExport.addEventListener('click', async () => {
      try {
        const resp = await fetch('/api/fhir/pedigree', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            couple_id: "COUPLE-AE-948",
            condition: "Carrier of Beta-Thalassemia (HBB)",
            consanguinity_relation: "FCSN"
          })
        });
        const data = await resp.json();
        const jsonStr = JSON.stringify(data.fhir_bundle, null, 2);

        const blob = new Blob([jsonStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "FHIR_Genomics_Pedigree_Bundle.json";
        a.click();
      } catch (err) {
        console.error(err);
      }
    });
  }

  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const preferredTime = document.getElementById('preferredDateTime').value;
      const isAr = currentLang === 'ar';

      try {
        const resp = await fetch('/api/triage/referral', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            pairId: "Tariq & Fatima (#AE-948)",
            preferredDate: preferredTime,
            urgency: "HIGH"
          })
        });
        const data = await resp.json();
        const box = document.getElementById('bookingSuccessBox');
        box.style.display = 'block';
        box.innerHTML = isAr
          ? `🎉 <strong>تم تأكيد الإحالة الطبية بنجاح!</strong> رقم المرجع الطبي الخاص بكم هو <strong id="confirmedRefId">${data.referral.id}</strong>. تم إرسال موعد التقويم ومقطع فيديو تمهيدي إلى بوابتكم الصحية المعتمدة في ملفي.`
          : `🎉 <strong>Referral Confirmed!</strong> Your appointment reference is <strong id="confirmedRefId">${data.referral.id}</strong>. A secure calendar invite and preparatory video have been sent to your verified patient portal.`;
        fetchInitialStats();
      } catch (err) {
        console.error(err);
      }
    });
  }
}

// --- 7. MEASURABLE COMPREHENSION QUIZ ---
function initQuiz() {
  const quizForm = document.getElementById('quizForm');
  if (quizForm) {
    quizForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const q1 = quizForm.elements['q1'] ? quizForm.elements['q1'].value : null;
      const q2 = quizForm.elements['q2'] ? quizForm.elements['q2'].value : null;
      const q3 = quizForm.elements['q3'] ? quizForm.elements['q3'].value : null;

      let score = 0;
      if (q1 === 'correct') score += 33.3;
      if (q2 === 'correct') score += 33.3;
      if (q3 === 'correct') score += 33.4;

      const finalScore = Math.round(score);
      const isAr = currentLang === 'ar';
      const resultBox = document.getElementById('quizResultBox');
      resultBox.style.display = 'block';
      resultBox.innerHTML = isAr
        ? `🎯 <strong>درجة استيعاب الوعي الجيني: <span id="quizScoreText">${finalScore}%</span>!</strong> تم تسجيل فهمك لعلم الوراثة المتنحية والخيارات الإنجابية المستنيرة في مؤشرات المنصة المعتمدة.`
        : `🎯 <strong>Comprehension Score: <span id="quizScoreText">${finalScore}%</span>!</strong> Your understanding of carrier genetics, non-coercive options, and probability has been recorded in the platform metrics.`;

      try {
        await fetch('/api/metrics/submit-quiz', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            preScore: 50,
            postScore: finalScore,
            decisionalConflictScore: 18.5
          })
        });
        fetchInitialStats();
      } catch (err) {
        console.error(err);
      }
    });
  }
}

// --- 8. MEDSISTER AI CONVERSATIONAL NAVIGATOR ---
function initChat() {
  const chatMessages = document.getElementById('chatMessages');
  const chatInput = document.getElementById('chatInput');
  const sendBtn = document.getElementById('sendChatBtn');

  async function handleSend(text) {
    const query = text || chatInput.value.trim();
    if (!query) return;

    // Render User message
    const userMsg = document.createElement('div');
    userMsg.className = 'message user-message';
    userMsg.innerHTML = `
      <div class="msg-avatar">👤</div>
      <div class="msg-content"><p>${escapeHtml(query)}</p></div>
    `;
    chatMessages.appendChild(userMsg);
    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Call AI Backend
    try {
      const resp = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query, lang: currentLang })
      });
      const data = await resp.json();

      const botMsg = document.createElement('div');
      botMsg.className = 'message bot-message';
      const isAr = currentLang === 'ar';
      botMsg.innerHTML = `
        <div class="msg-avatar"><img src="logo.png" alt="MedSister" class="msg-avatar-img"></div>
        <div class="msg-content">
          <p>${escapeHtml(data.response)}</p>
          ${data.escalate ? `
            <div style="margin-top: 8px;">
              <button class="btn btn-primary btn-sm" onclick="document.querySelector('[data-tab=\\'counselor-pedigree\\']').click();">
                📅 ${isAr ? 'حجز موعد استشارة وراثية معتمدة' : 'Book Department of Health Counselor'}
              </button>
            </div>
          ` : ''}
        </div>
      `;
      chatMessages.appendChild(botMsg);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    } catch (err) {
      console.error(err);
    }
  }

  sendBtn.addEventListener('click', () => handleSend());
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
  });

  // Quick Prompt buttons
  document.querySelectorAll('.quick-prompt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const query = btn.getAttribute('data-query');
      handleSend(query);
    });
  });
}

// --- 9. FETCH INITIAL HEALTH SYSTEM STATS & AUDIT LOGS ---
async function fetchInitialStats() {
  try {
    const resp = await fetch('/api/metrics/stats');
    const data = await resp.json();

    if (data.status === "success") {
      const stats = data.stats;
      const kpiComp = document.getElementById('kpiComprehension');
      if (kpiComp) kpiComp.textContent = `+${(stats.postScoreAvg - stats.preScoreAvg).toFixed(1)}%`;

      const kpiDcs = document.getElementById('kpiDCS');
      if (kpiDcs) kpiDcs.textContent = `${stats.decisionalConflictAvg} / 100`;

      const kpiUptake = document.getElementById('kpiUptake');
      if (kpiUptake) kpiUptake.textContent = stats.counselingUptakeRate;

      // Populate audit ledger table
      const tbody = document.getElementById('ledgerTableBody');
      if (tbody && data.audit_logs) {
        tbody.innerHTML = data.audit_logs.map(log => `
          <tr>
            <td><code>${log.id}</code></td>
            <td><strong>${log.action}</strong></td>
            <td>${log.subject_pseudonym}</td>
            <td>${log.scope}</td>
            <td><span class="badge-gencare">${log.status}</span></td>
          </tr>
        `).join('');
      }
    }
  } catch (err) {
    console.error("Failed to load initial stats", err);
  }
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}
