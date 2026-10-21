/* CREASTRA — lightweight, dependency-free site interactions. */
(() => {
  "use strict";

  // Add the real inbox here before publishing. The contact form uses the visitor's email app (no server needed).
  const CONTACT_EMAIL = "";
  const LANG_KEY = "creastra-language";
  const translations = {
    fr: {
      skip: "Aller au contenu", topline: "L’atelier où les idées deviennent visibles.", toplineRight: "Design · Impression · Signalétique",
      navServices: "Services", navWork: "Réalisations", navApproach: "Notre approche", navFaq: "FAQ", navCta: "Parlons projet",
      heroEyebrow: "STUDIO CRÉATIF · PRINT & BRANDING", heroTitleA: "Les idées prennent", heroTitleB: "forme.", heroTitleC: "Votre marque prend", heroTitleD: "sa place.",
      heroDesc: "De l’identité visuelle au support imprimé, nous transformons les bonnes idées en créations précises, cohérentes et impossibles à ignorer.", heroPrimary: "Découvrir nos réalisations", heroSecondary: "Explorer les services", heroFootTitle: "Créativité, jusque dans les détails.", heroFootText: "Pensé avec intention. Produit avec précision.", heroArtLabel: "Du concept au concret", artMainTitle: "Identité & supports", artCardsTitle: "Cartes de visite", artStoreTitle: "Habillage de vitrine", heroNote: "Un univers. Mille façons de le faire exister.", scrollCue: "DÉFILER POUR DÉCOUVRIR",
      marqueeA: "IDENTITÉ VISUELLE", marqueeB: "IMPRESSION", marqueeC: "GRAND FORMAT", marqueeD: "SIGNALÉTIQUE", marqueeE: "HABILLAGE DE VITRINE",
      servicesEyebrow: "CE QUE NOUS FAISONS", servicesTitle: "De belles idées.<br><span class=\"heading-muted\">Des réalisations qui comptent.</span>", servicesIntro: "Une approche globale pour donner à votre marque une image claire, des supports soignés et une présence qui se remarque.",
      service1Title: "Identité visuelle", service1Desc: "Des logos et systèmes graphiques cohérents, conçus pour rendre votre marque reconnaissable et mémorable.", service1Tag1: "Logo", service1Tag2: "Charte graphique", service1Tag3: "Branding",
      service2Title: "Print & papeterie", service2Desc: "Cartes, flyers, brochures et documents professionnels, avec une attention particulière aux finitions.", service2Tag1: "Cartes", service2Tag2: "Flyers", service2Tag3: "Brochures",
      service3Title: "Impression grand format", service3Desc: "Des visuels à grande échelle pour vos espaces, vos campagnes et votre communication terrain.", service3Tag1: "Affiches", service3Tag2: "Panneaux", service3Tag3: "Formats XL",
      service4Title: "Signalétique", service4Desc: "Des supports qui guident, informent et structurent vos espaces avec une vraie cohérence visuelle.", service4Tag1: "Panneaux", service4Tag2: "Orientation", service4Tag3: "Affichage",
      service5Title: "Habillage de vitrines", service5Desc: "Transformez votre façade en un point de contact fort, visible de loin et fidèle à votre univers.", service5Tag1: "Vitrines", service5Tag2: "Covering", service5Tag3: "Façades",
      service6Title: "Supports de communication", service6Desc: "Des créations adaptées à vos lancements, événements et opérations commerciales.", service6Tag1: "Campagnes", service6Tag2: "Événementiel", service6Tag3: "PLV",
      serviceBottomNote: "Un besoin particulier ? Nous adaptons le format, la matière et la finition à votre projet.", serviceBottomLink: "Parlons-en",
      portfolioEyebrow: "UNE SÉLECTION DE PROJETS", portfolioTitle: "Le travail parle.<br><span class=\"heading-muted\">À vous de découvrir.</span>", portfolioIntro: "Quelques univers et supports réalisés pour illustrer notre terrain de jeu : l’identité, le print et la présence dans l’espace.",
      filterAll: "Tout voir", filterIdentity: "Identité", filterPrint: "Print", filterLarge: "Grand format", filterSignage: "Signalétique", filterStorefront: "Vitrines", projectsLabel: "projets sélectionnés",
      projectCatIdentity: "Identité visuelle", projectCatPrint: "Print & papeterie", projectCatLarge: "Impression grand format", projectCatSignage: "Signalétique", projectCatStore: "Habillage de vitrine",
      project1Title: "Univers de marque", project1Desc: "Cohérence visuelle, des brochures aux supports de marque.", project2Title: "Cartes de visite", project2Desc: "La précision dans le détail et la finition.", project3Title: "Campagne grand format", project3Desc: "Des visuels à l’échelle de vos ambitions.", project4Title: "Affichage & signalétique", project4Desc: "Une présence claire, même à grande distance.", project5Title: "Vitrine commerciale", project5Desc: "Faire de la façade un véritable média.", project6Title: "Façade gaming", project6Desc: "Un univers qui se remarque instantanément.", project7Title: "Flyer automobile", project7Desc: "Informer avec une composition claire et impactante.", project8Title: "Communication sécurité", project8Desc: "L’information essentielle, mise en scène avec précision.",
      portfolioFooter: "Chaque projet commence par une idée claire et une bonne conversation.", portfolioCta: "Créons quelque chose ensemble",
      approachEyebrow: "NOTRE FAÇON DE FAIRE", approachSide: "Pas de décor gratuit. Chaque détail doit servir l’idée.", approachTitle: "Le beau attire.<br><span>Le bien pensé reste.</span>", approachDesc: "Nous pensons le design et l’impression comme deux parties d’une même expérience. Le résultat doit être beau à l’écran, juste sur le papier et efficace dans la vraie vie.",
      approachPoint1Title: "Une vision d’ensemble", approachPoint1Desc: "Un langage visuel cohérent, du premier croquis au support final.", approachPoint2Title: "Le détail compte", approachPoint2Desc: "Hiérarchie, lisibilité, matière et finition : rien n’est laissé au hasard.", approachPoint3Title: "Le résultat d’abord", approachPoint3Desc: "Des choix créatifs qui servent votre message, votre public et votre objectif.",
      processEyebrow: "SIMPLE, DU DÉBUT À LA FIN", processTitle: "De votre idée<br><span class=\"heading-muted\">à sa vraie vie.</span>", processIntro: "Un processus clair pour avancer sereinement, du premier échange à la livraison des supports.", step1Title: "On échange", step1Desc: "Vos besoins, vos objectifs, votre public et vos contraintes.", step2Title: "On conçoit", step2Desc: "Une proposition créative pensée autour de votre message.", step3Title: "On prépare", step3Desc: "Les fichiers, les dimensions et les finitions sont vérifiés.", step4Title: "Ça prend vie", step4Desc: "Vos créations deviennent des supports prêts à être vus.",
      contactEyebrow: "LE PROCHAIN PROJET POURRAIT ÊTRE LE VÔTRE", contactTitle: "Vous avez une idée.<br><span>On lui donne forme.</span>", contactDesc: "Expliquez-nous ce que vous imaginez. Nous vous aiderons à trouver le bon format, le bon rendu et la bonne façon de le réaliser.", contactSmall: "Un brief même imparfait est un excellent point de départ.", formEyebrow: "RACONTEZ-NOUS", formRequired: "* Champs obligatoires", formName: "Votre nom *", formEmail: "Votre e-mail *", formProject: "Quel est votre besoin ? *", formChoose: "Choisir un service", optIdentity: "Identité visuelle / Branding", optPrint: "Cartes, flyers, brochures", optLarge: "Impression grand format", optSignage: "Signalétique / Panneaux", optStorefront: "Habillage de vitrine", optOther: "Autre besoin", formMessage: "Parlez-nous de votre idée *", formSubmit: "Préparer ma demande", formPrivacy: "Votre brief servira uniquement à préparer votre demande de contact.",
      formConfigMissing: "Le formulaire est prêt. Ajoutez votre adresse e-mail dans script.js (CONTACT_EMAIL) pour activer l’envoi.", formMailOpened: "Votre application e-mail devrait s’ouvrir avec votre demande préremplie.", formConfigError: "L’adresse e-mail de réception n’est pas encore configurée dans script.js.",
      faqEyebrow: "BON À SAVOIR", faqTitle: "Quelques réponses.<br><span class=\"heading-muted\">Avant de se lancer.</span>", faqIntro: "Votre projet a ses particularités. Voici les premières questions utiles pour commencer.", faq1Q: "Puis-je demander uniquement l’impression ?", faq1A: "Oui. Vous pouvez venir avec un fichier prêt à imprimer ou demander un accompagnement sur la création et la préparation des fichiers.", faq2Q: "Quels éléments faut-il pour obtenir un devis ?", faq2A: "Idéalement : le type de support, les dimensions, la quantité, la finition souhaitée et votre délai. Une référence visuelle aide aussi à bien cerner le rendu attendu.", faq3Q: "Pouvez-vous adapter les créations en arabe et en français ?", faq3A: "Oui. La hiérarchie, le sens de lecture et les choix typographiques sont adaptés à chaque langue afin de garder une mise en page lisible et équilibrée.", faq4Q: "Comment démarre un projet personnalisé ?", faq4A: "Décrivez simplement votre besoin via le formulaire. Nous pourrons préciser le périmètre, les formats, les délais et les prochaines étapes ensemble.",
      footerTagline: "Where Ideas Shine.<br><span>Les idées méritent de prendre forme.</span>", backTop: "Retour en haut", footerMade: "Conçu avec intention. Pensé pour durer.", footerContact: "Contact", seeProject: "Voir le projet", closePreview: "Fermer l’aperçu", closeMenu: "Fermer le menu", openMenu: "Ouvrir le menu", mainNav: "Navigation principale", filterGroup: "Filtrer les réalisations", skipLabel: "Aller au contenu"
    },
    ar: {
      skip: "الانتقال إلى المحتوى", topline: "مساحة إبداعية تحوّل الأفكار إلى واقع مرئي.", toplineRight: "تصميم · طباعة · لافتات",
      navServices: "خدماتنا", navWork: "أعمالنا", navApproach: "منهجيتنا", navFaq: "الأسئلة الشائعة", navCta: "لنتحدث عن مشروعك",
      heroEyebrow: "استوديو إبداعي · تصميم وهوية بصرية", heroTitleA: "أفكارك تتحول إلى", heroTitleB: "واقع.", heroTitleC: "وعلامتك التجارية", heroTitleD: "تتألق.",
      heroDesc: "من الهوية البصرية إلى المطبوعات، نحول الأفكار الجيدة إلى تصاميم دقيقة ومتناسقة يصعب تجاهلها.", heroPrimary: "اكتشف أعمالنا", heroSecondary: "تعرّف على خدماتنا", heroFootTitle: "الإبداع يسكن التفاصيل.", heroFootText: "فكرة مدروسة. تنفيذ متقن.", heroArtLabel: "من الفكرة إلى الواقع", artMainTitle: "الهوية والمطبوعات", artCardsTitle: "بطاقات الأعمال", artStoreTitle: "تزيين الواجهة", heroNote: "هوية واحدة. طرق لا حصر لها لتجسيدها.", scrollCue: "مرّر لاكتشاف المزيد",
      marqueeA: "الهوية البصرية", marqueeB: "الطباعة", marqueeC: "الطباعة كبيرة الحجم", marqueeD: "اللافتات والتوجيه", marqueeE: "تزيين الواجهات",
      servicesEyebrow: "ما الذي نقدمه", servicesTitle: "أفكار جميلة.<br><span class=\"heading-muted\">وأعمال تصنع الفرق.</span>", servicesIntro: "منهجية متكاملة تمنح علامتك صورة واضحة ومطبوعات متقنة وحضوراً يلفت الانتباه.",
      service1Title: "الهوية البصرية", service1Desc: "شعارات وأنظمة بصرية متناسقة تجعل علامتك مميزة وسهلة التذكّر.", service1Tag1: "الشعار", service1Tag2: "الدليل البصري", service1Tag3: "بناء العلامة",
      service2Title: "المطبوعات والقرطاسية", service2Desc: "بطاقات ومطويات وكتيبات ووثائق مهنية مع عناية خاصة بالتشطيبات.", service2Tag1: "بطاقات", service2Tag2: "مطويات", service2Tag3: "كتيبات",
      service3Title: "الطباعة كبيرة الحجم", service3Desc: "تصاميم كبيرة المساحة لمساحاتك وحملاتك ووسائل تواصلك الميدانية.", service3Tag1: "ملصقات", service3Tag2: "لوحات", service3Tag3: "مقاسات كبيرة",
      service4Title: "اللافتات والتوجيه", service4Desc: "وسائل تساعد على الإرشاد وتقديم المعلومات وتنظيم الفضاءات بتناسق بصري واضح.", service4Tag1: "لوحات", service4Tag2: "توجيه", service4Tag3: "إعلانات",
      service5Title: "تزيين الواجهات", service5Desc: "حوّل واجهة متجرك إلى نقطة جذب واضحة تعكس هويتك وتلفت النظر من بعيد.", service5Tag1: "واجهات", service5Tag2: "تغليف", service5Tag3: "واجهات خارجية",
      service6Title: "وسائل التواصل التجاري", service6Desc: "تصاميم تناسب إطلاق المنتجات والفعاليات والحملات التجارية.", service6Tag1: "حملات", service6Tag2: "فعاليات", service6Tag3: "مواد ترويجية",
      serviceBottomNote: "لديك طلب خاص؟ نختار المقاس والخامة والتشطيب بما يناسب مشروعك.", serviceBottomLink: "لنتحدث عنه",
      portfolioEyebrow: "مجموعة مختارة من المشاريع", portfolioTitle: "الأعمال تتحدث.<br><span class=\"heading-muted\">اكتشفها بنفسك.</span>", portfolioIntro: "نماذج من الهويات والمطبوعات والتصاميم التي تمنح العلامات التجارية حضوراً ملموساً في الفضاء.",
      filterAll: "عرض الكل", filterIdentity: "الهوية", filterPrint: "المطبوعات", filterLarge: "طباعة كبيرة", filterSignage: "اللافتات", filterStorefront: "الواجهات", projectsLabel: "مشاريع مختارة",
      projectCatIdentity: "الهوية البصرية", projectCatPrint: "المطبوعات والقرطاسية", projectCatLarge: "الطباعة كبيرة الحجم", projectCatSignage: "اللافتات والتوجيه", projectCatStore: "تزيين الواجهات",
      project1Title: "هوية متكاملة", project1Desc: "انسجام بصري من الكتيبات إلى مختلف وسائل العلامة التجارية.", project2Title: "بطاقات الأعمال", project2Desc: "دقة في التفاصيل وجودة في التشطيب.", project3Title: "حملة طباعة كبيرة", project3Desc: "تصاميم بحجم طموحاتك.", project4Title: "الإعلانات واللافتات", project4Desc: "حضور واضح حتى من مسافة بعيدة.", project5Title: "واجهة تجارية", project5Desc: "حوّل واجهتك إلى وسيلة تواصل فعالة.", project6Title: "واجهة متجر ألعاب", project6Desc: "عالم بصري يجذب الانتباه فوراً.", project7Title: "مطوية لقطاع السيارات", project7Desc: "رسالة واضحة وتكوين بصري مؤثر.", project8Title: "مطبوعات قطاع الأمن", project8Desc: "عرض المعلومات الأساسية بدقة ووضوح.",
      portfolioFooter: "يبدأ كل مشروع بفكرة واضحة وحوار جيد.", portfolioCta: "لنبتكر شيئاً معاً",
      approachEyebrow: "كيف نعمل", approachSide: "لا مكان للتفاصيل الزائدة. كل عنصر يجب أن يخدم الفكرة.", approachTitle: "الجمال يجذب.<br><span>والفكرة المتقنة تبقى.</span>", approachDesc: "نرى التصميم والطباعة جزأين من تجربة واحدة. يجب أن يكون الناتج جميلاً على الشاشة، متقناً على الورق وفعالاً في الواقع.",
      approachPoint1Title: "رؤية متكاملة", approachPoint1Desc: "لغة بصرية متناسقة من أول رسم إلى المنتج النهائي.", approachPoint2Title: "التفاصيل تصنع الفرق", approachPoint2Desc: "التسلسل والوضوح والخامة والتشطيب؛ لا شيء يُترك للصدفة.", approachPoint3Title: "النتيجة أولاً", approachPoint3Desc: "اختيارات إبداعية تخدم رسالتك وجمهورك وهدفك.",
      processEyebrow: "خطوات واضحة من البداية إلى النهاية", processTitle: "من فكرتك<br><span class=\"heading-muted\">إلى واقع ملموس.</span>", processIntro: "مسار واضح يساعدك على التقدم بثقة من أول نقاش إلى تسليم المطبوعات.", step1Title: "نتبادل الأفكار", step1Desc: "نفهم احتياجاتك وأهدافك وجمهورك والقيود المطلوبة.", step2Title: "نصمّم", step2Desc: "نقترح معالجة إبداعية مبنية على رسالتك.", step3Title: "نجهّز", step3Desc: "نتحقق من الملفات والمقاسات والتشطيبات.", step4Title: "نحوّلها إلى واقع", step4Desc: "تصبح تصاميمك مطبوعات جاهزة للظهور.",
      contactEyebrow: "قد يكون مشروعك هو القادم", contactTitle: "لديك فكرة.<br><span>دعنا نمنحها شكلاً.</span>", contactDesc: "اشرح لنا ما تتخيله، وسنساعدك على اختيار المقاس والتشطيب والطريقة الأنسب لتنفيذه.", contactSmall: "حتى الفكرة غير المكتملة بداية ممتازة.", formEyebrow: "أخبرنا عن مشروعك", formRequired: "* حقول إلزامية", formName: "الاسم الكامل *", formEmail: "البريد الإلكتروني *", formProject: "ما الخدمة التي تحتاجها؟ *", formChoose: "اختر الخدمة", optIdentity: "الهوية البصرية وبناء العلامة", optPrint: "بطاقات ومطويات وكتيبات", optLarge: "الطباعة كبيرة الحجم", optSignage: "اللافتات واللوحات", optStorefront: "تزيين الواجهات", optOther: "طلب آخر", formMessage: "أخبرنا عن فكرتك *", formSubmit: "تجهيز الطلب", formPrivacy: "سنستخدم تفاصيل مشروعك فقط لتجهيز طلب التواصل.",
      formConfigMissing: "النموذج جاهز. أضف بريدك الإلكتروني داخل ملف script.js في المتغير CONTACT_EMAIL لتفعيل الإرسال.", formMailOpened: "من المفترض أن يفتح تطبيق البريد الإلكتروني طلبك بعد تعبئته.", formConfigError: "لم يتم إعداد بريد الاستقبال بعد في ملف script.js.",
      faqEyebrow: "معلومات مفيدة", faqTitle: "بعض الإجابات.<br><span class=\"heading-muted\">قبل الانطلاق.</span>", faqIntro: "لكل مشروع خصوصيته. إليك بعض الأسئلة المفيدة للبدء.", faq1Q: "هل يمكنني طلب الطباعة فقط؟", faq1A: "نعم. يمكنك إرسال ملف جاهز للطباعة، أو طلب المساعدة في التصميم وتجهيز الملفات للطباعة.", faq2Q: "ما المعلومات اللازمة للحصول على عرض سعر؟", faq2A: "يفضل تحديد نوع المطبوع والمقاسات والكمية والتشطيب المطلوب والأجل. كما تساعدنا صورة مرجعية على فهم النتيجة التي تتوقعها.", faq3Q: "هل يمكن تكييف التصاميم باللغتين العربية والفرنسية؟", faq3A: "نعم. نكيّف التسلسل البصري واتجاه القراءة واختيار الخطوط لكل لغة للحفاظ على تصميم واضح ومتوازن.", faq4Q: "كيف يبدأ المشروع المخصص؟", faq4A: "صف حاجتك عبر النموذج، ثم نحدد معاً نطاق العمل والمقاسات والآجال والخطوات التالية.",
      footerTagline: "Where Ideas Shine.<br><span>كل فكرة تستحق أن ترى النور.</span>", backTop: "العودة إلى الأعلى", footerMade: "تصميم مقصود. جودة تدوم.", footerContact: "تواصل معنا", seeProject: "عرض المشروع", closePreview: "إغلاق المعاينة", closeMenu: "إغلاق القائمة", openMenu: "فتح القائمة", mainNav: "التنقل الرئيسي", filterGroup: "تصفية الأعمال", skipLabel: "الانتقال إلى المحتوى"
    }
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  let currentLang = "fr";
  let previouslyFocused = null;

  function getSavedLanguage() {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      return saved === "ar" || saved === "fr" ? saved : "fr";
    } catch (_) { return "fr"; }
  }

  function applyLanguage(lang) {
    currentLang = lang === "ar" ? "ar" : "fr";
    const rtl = currentLang === "ar";
    document.documentElement.lang = currentLang;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    document.title = rtl ? "CREASTRA — أفكارك تتحول إلى واقع" : "CREASTRA — Les idées prennent forme";
    const metaDescription = $("meta[name=\"description\"]");
    const ogTitle = $("meta[property=\"og:title\"]");
    const ogDescription = $("meta[property=\"og:description\"]");
    if (metaDescription) metaDescription.content = rtl ? "CREASTRA — الهوية البصرية والطباعة كبيرة الحجم واللافتات وتزيين الواجهات في المغرب." : "CREASTRA — identité visuelle, impression professionnelle, grand format, signalétique et habillage de vitrines au Maroc.";
    if (ogTitle) ogTitle.content = rtl ? "CREASTRA — أفكارك تتحول إلى واقع" : "CREASTRA — Les idées prennent forme";
    if (ogDescription) ogDescription.content = rtl ? "تصميم متقن. طباعة دقيقة. حضور لا يُنسى." : "Design soigné. Impression maîtrisée. Présence mémorable.";

    $$('[data-i18n]').forEach((node) => {
      const value = translations[currentLang][node.dataset.i18n];
      if (typeof value === "string") node.innerHTML = value;
    });

    $$('[data-placeholder-fr], [data-placeholder-ar]').forEach((node) => {
      const value = node.getAttribute(`data-placeholder-${currentLang}`);
      if (value !== null) node.setAttribute("placeholder", value);
    });
    $$('select[name="project"] option[data-i18n]').forEach((option) => {
      option.value = option.dataset.i18n === "formChoose" ? "" : translations[currentLang][option.dataset.i18n];
    });

    $$('.lang-option').forEach((node) => node.classList.toggle("is-active", node.dataset.langLabel === currentLang));
    const languageButton = $("#languageSwitch");
    languageButton.setAttribute("aria-label", rtl ? "Switch to French" : "Passer en arabe");
    $("#menuToggle").setAttribute("aria-label", translations[currentLang][$("#menuToggle").getAttribute("aria-expanded") === "true" ? "closeMenu" : "openMenu"]);
    $(".nav-shell").setAttribute("aria-label", translations[currentLang].mainNav);
    $(".filter-list").setAttribute("aria-label", translations[currentLang].filterGroup);
    $$('[data-close-lightbox]').forEach((node) => node.setAttribute("aria-label", translations[currentLang].closePreview));

    $$(".project-card").forEach((card) => {
      const title = card.getAttribute(`data-title-${currentLang}`) || "";
      card.setAttribute("aria-label", `${translations[currentLang].seeProject} : ${title}`);
      const image = $("img", card);
      if (image) image.alt = title;
    });

    try { localStorage.setItem(LANG_KEY, currentLang); } catch (_) { /* Storage can be disabled; switching still works. */ }
    updateProjectCount();
    refreshLightboxLanguage();
  }

  $("#languageSwitch").addEventListener("click", () => applyLanguage(currentLang === "fr" ? "ar" : "fr"));

  const menuToggle = $("#menuToggle");
  const navLinks = $("#navLinks");
  function closeMenu() {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", translations[currentLang].openMenu);
  }
  menuToggle.addEventListener("click", () => {
    const opening = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(opening));
    navLinks.classList.toggle("is-open", opening);
    menuToggle.setAttribute("aria-label", translations[currentLang][opening ? "closeMenu" : "openMenu"]);
  });
  $$("#navLinks a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target) && navLinks.classList.contains("is-open")) closeMenu();
  });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
  window.addEventListener("resize", () => { if (window.innerWidth > 850) closeMenu(); });

  // Project filtering uses the category on each card, so it stays fast on phones too.
  const filterButtons = $$(".filter-button");
  const projectCards = $$(".project-card");
  function updateProjectCount() {
    const visibleCount = projectCards.filter((card) => !card.hidden).length;
    $("#projectCount").textContent = String(visibleCount).padStart(2, "0");
  }
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      projectCards.forEach((card) => {
        card.hidden = filter !== "all" && card.dataset.category !== filter;
        if (!card.hidden) {
          card.style.animation = "none";
          void card.offsetWidth;
          card.style.animation = "";
        }
      });
      updateProjectCount();
    });
  });

  // Accessible project preview / lightbox.
  const lightbox = $("#lightbox");
  const lightboxImage = $("#lightboxImage");
  let activeProject = null;
  function refreshLightboxLanguage() {
    if (!lightbox.classList.contains("is-open") || !activeProject) return;
    $("#lightboxTitle").textContent = activeProject.getAttribute(`data-title-${currentLang}`) || "";
    $("#lightboxCategory").textContent = activeProject.getAttribute(`data-cat-${currentLang}`) || "";
    $("#lightboxDescription").textContent = activeProject.getAttribute(`data-desc-${currentLang}`) || "";
    lightboxImage.alt = $("#lightboxTitle").textContent;
  }
  function openLightbox(card) {
    activeProject = card;
    previouslyFocused = document.activeElement;
    const img = $("img", card);
    lightboxImage.src = img.currentSrc || img.src;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    refreshLightboxLanguage();
    $(".lightbox-close").focus();
  }
  function closeLightbox() {
    if (!lightbox.classList.contains("is-open")) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    lightboxImage.src = "";
    activeProject = null;
    if (previouslyFocused && typeof previouslyFocused.focus === "function") previouslyFocused.focus();
  }
  projectCards.forEach((card) => card.addEventListener("click", () => openLightbox(card)));
  $$('[data-close-lightbox]').forEach((button) => button.addEventListener("click", closeLightbox));
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeLightbox(); });
  lightbox.addEventListener("click", (event) => { if (event.target === lightbox) closeLightbox(); });

  // Static-host contact form: opens a prefilled email draft once the owner configures the inbox above.
  const contactForm = $("#contactForm");
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = $("#formStatus");
    status.textContent = "";
    if (!CONTACT_EMAIL || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CONTACT_EMAIL)) {
      status.textContent = translations[currentLang].formConfigMissing;
      return;
    }
    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const project = String(formData.get("project") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const subject = currentLang === "ar" ? `طلب عرض سعر من ${name} — ${project}` : `Demande de devis — ${project} — ${name}`;
    const body = currentLang === "ar"
      ? `الاسم: ${name}\nالبريد الإلكتروني: ${email}\nنوع المشروع: ${project}\n\nتفاصيل الطلب:\n${message}`
      : `Nom : ${name}\nE-mail : ${email}\nProjet : ${project}\n\nDétails du brief :\n${message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = translations[currentLang].formMailOpened;
  });

  // Keep the year current and give the sticky nav a little depth after scrolling.
  $("#year").textContent = String(new Date().getFullYear());
  const header = $("#siteHeader");
  const updateHeader = () => header.classList.toggle("has-scrolled", window.scrollY > 12);
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  applyLanguage(getSavedLanguage());
})();
