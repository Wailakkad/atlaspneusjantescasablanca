import { WorkshopService } from '../types';

export const WORKSHOP_SERVICES: WorkshopService[] = [
  {
    id: "service-montage",
    title: {
      fr: "Montage & Remplacement de pneus",
      ar: "تركيب وتبديل الإطارات"
    },
    shortDescription: {
      fr: "Démontage soigné et pose sur jantes tôle ou alu sans rayure grâce à notre bras robotisé.",
      ar: "فك وتركيب فائق العناية على جنوط الألمنيوم والحديد بدون أي خدوش بواسطة أذرع تركيب هوائية متطورة."
    },
    fullDescription: {
      fr: "Nos techniciens utilisent des démonte-pneus automatiques haut de gamme munis de mors plastifiés pour préserver la peinture et la matière de vos jantes aluminium, même sur profil taille basse.",
      ar: "يستخدم فنيونا أجهزة فك وتركيب آلية حديثة مزودة بحماية بلاستيكية خاصة للحفاظ التام على لمعان الجنوط حتى مع الإطارات منخفضة المظهر."
    },
    estimatedDuration: "20 à 30 min (pour 2 à 4 pneus)",
    indicativePriceMAD: 40,
    priceDisplay: {
      fr: "À partir de 40 DH / pneu",
      ar: "ابتداءً من 40 درهم / إطار"
    },
    iconName: "Disc",
    includedInFittingPackage: true
  },
  {
    id: "service-equilibrage",
    title: {
      fr: "Équilibrage dynamique de roues",
      ar: "الموازنة الديناميكية الدقيقة للعجلات"
    },
    shortDescription: {
      fr: "Suppression des vibrations au volant et dans l'habitacle sur banc d'équilibrage laser 3D.",
      ar: "القضاء التام على الاهتزازات والرجة في عجلة القيادة بواسطة أجهزة موازنة ليزرية ثلاثية الأبعاد."
    },
    fullDescription: {
      fr: "Un équilibrage au gramme près évite l'usure prématurée des rotules, roulements et amortisseurs, tout en assurant un confort de conduite velouté sur voie rapide.",
      ar: "الموازنة بدقة الغرام تحمي نظام التعليق والمساعدات ومحامل العجلات من التلف وتمنح هدوءاً وثباتاً ممتازاً عند السرعات العالية."
    },
    estimatedDuration: "15 min (pour 4 roues)",
    indicativePriceMAD: 25,
    priceDisplay: {
      fr: "25 DH / roue",
      ar: "25 درهم / عجلة"
    },
    iconName: "Scale",
    includedInFittingPackage: true
  },
  {
    id: "service-geometrie",
    title: {
      fr: "Géométrie & Parallélisme 3D",
      ar: "ضبط زوايا العجلات والمحاذاة 3D"
    },
    shortDescription: {
      fr: "Réglage au laser de l'alignement des trains avant et arrière pour éviter l'usure en biseau.",
      ar: "معايرة دقيقة بالليزر لزوايا العجلات الأمامية والخلفية لمنع التآكل غير المتساوي لإطارات السيارة."
    },
    fullDescription: {
      fr: "Contrôle informatique complet de la géométrie selon les données constructeur. Indispensable après choc sur nid-de-poule ou remplacement d'éléments de suspension.",
      ar: "فحص شامل عبر الكمبيوتر لزوايا المحاور وفق بيانات المصنع، ضروري بعد الاصطدام بالحفر أو استبدال قطع نظام التوجيه."
    },
    estimatedDuration: "30 à 45 min",
    indicativePriceMAD: 200,
    priceDisplay: {
      fr: "Dès 200 DH (train avant)",
      ar: "ابتداءً من 200 درهم (المحور الأمامي)"
    },
    iconName: "Compass",
    includedInFittingPackage: false
  },
  {
    id: "service-reparation",
    title: {
      fr: "Réparation crevaison par champignon",
      ar: "إصلاح الثقوب الداخلية بتقنية الفطر"
    },
    shortDescription: {
      fr: "Réparation professionnelle par l'intérieur (norme PRP) pour une étanchéité définitive et sécurisée.",
      ar: "إصلاح مهني معتمد من الداخل لضمان إحكام الإغلاق واستعادة سلامة الإطار دون إتلاف أسلاك التسليح."
    },
    fullDescription: {
      fr: "Contrairement aux simples mèches d'urgence qui fragilisent les ceintures métalliques, la pose d'une pièce champignon vulcanisée à froid garantit la conformité et la sécurité sur autoroute.",
      ar: "على عكس الخوابير الخارجية المؤقتة، فإن تقنية الفطر المعالج على البارد تغلق الثقب وتعيد للإطار تماسكه الأصلي عند السرعات العالية."
    },
    estimatedDuration: "15 min",
    indicativePriceMAD: 50,
    priceDisplay: {
      fr: "50 DH / pneu",
      ar: "50 درهم / إطار"
    },
    iconName: "ShieldAlert",
    includedInFittingPackage: false
  },
  {
    id: "service-valves",
    title: {
      fr: "Remplacement valves & Capteurs TPMS",
      ar: "استبدال الصمامات وحساسات ضغط الهواء"
    },
    shortDescription: {
      fr: "Pose systématique de valves neuves ou reprogrammation de capteurs électroniques TPMS.",
      ar: "تركيب صمامات هواء جديدة وإعادة برمجة وضبط حساسات ضغط الإطارات الإلكترونية TPMS."
    },
    fullDescription: {
      fr: "Une valve subit des forces centrifuges énormes. Remplacer la valve à chaque changement de pneu évite les pertes lentes de pression et les risques d'échauffement.",
      ar: "تتعرض صمامات الهواء لضغوط دوران هائلة. استبدالها مع كل تغيير للإطارات يمنع تسرب الهواء البطيء وتلف الإطار."
    },
    estimatedDuration: "Inclus dans le montage",
    indicativePriceMAD: 15,
    priceDisplay: {
      fr: "15 DH standard (TPMS sur devis)",
      ar: "15 درهم للصمام العادي (TPMS حسب الطراز)"
    },
    iconName: "Activity",
    includedInFittingPackage: true
  },
  {
    id: "service-diagnostic",
    title: {
      fr: "Contrôle d'usure & Sécurité gratuit",
      ar: "فحص مجاني لمستوى التآكل وحالة الإطارات"
    },
    shortDescription: {
      fr: "Mesure de profondeur des sculptures, contrôle des déformations et pression azote.",
      ar: "قياس عمق النقشة، فحص أي تشوهات أو انتفاخات جانبية وضبط ضغط الإطارات بشكل سليم."
    },
    fullDescription: {
      fr: "Passez à l'atelier sans engagement pour un contrôle visuel et technique de vos 4 pneus. Nos experts vous indiqueront l'état réel d'usure et la date de fabrication (DOT).",
      ar: "تفضل بزيارة المركز دون التزام لإجراء فحص بصري وتقني شامل لإطاراتك والتأكد من تاريخ الصنع (DOT) وسلامة المداس."
    },
    estimatedDuration: "10 min",
    indicativePriceMAD: 0,
    priceDisplay: {
      fr: "Gratuit en atelier",
      ar: "مجاني بالورشة"
    },
    iconName: "CheckCircle2",
    includedInFittingPackage: false
  }
];
