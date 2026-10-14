import { FaqItem } from '../types';

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-dimension",
    question: {
      fr: "Comment trouver la dimension exacte de mes pneus ?",
      ar: "كيف أعرف المقاس الدقيق لإطارات سيارتي؟"
    },
    answer: {
      fr: "La dimension exacte est inscrite directement sur le flanc extérieur de vos pneus actuels (ex: 205/55 R16 91V). Vous pouvez également la vérifier sur l'étiquette constructeur située dans le montant intérieur de la portière conducteur ou dans la trappe à carburant.",
      ar: "المقاس الدقيق مدون مباشرة على الجدار الجانبي لإطارات سيارتك الحالية (مثال: 205/55 R16 91V). كما يمكنك التحقق منه عبر الملصق المعدني على حافة باب السائق أو داخل غطاء فتحة الوقود."
    }
  },
  {
    id: "faq-compatibilite-jantes",
    question: {
      fr: "Comment vous assurez-vous que les jantes sont bien compatibles avec ma voiture ?",
      ar: "كيف تتأكدون من توافق الجنوط الألومنيوم مع سيارتي دون مشاكل؟"
    },
    answer: {
      fr: "Nous vérifions 4 paramètres techniques cruciaux : le diamètre, l'entraxe (PCD, ex: 5x112), le déport technique (ET) et l'alésage central. Si un modèle présente le moindre doute mécanique, notre équipe vous contacte sur WhatsApp pour une double vérification avant toute commande.",
      ar: "يقوم فنيونا بفحص 4 معايير تقنية دقيقة: القطر، مسافة البراغي (PCD)، قيمة البروز (ET)، وقطر السرة المركزية. وفي حال وجود أي شك نتواصل معك مباشرة عبر واتساب لتأكيد المطابقة التامة قبل التثبيت."
    }
  },
  {
    id: "faq-montage-inclus",
    question: {
      fr: "Le montage et l'équilibrage sont-ils inclus dans le prix des pneus ?",
      ar: "هل تكلفة التركيب والموازنة متضمنة في سعر الإطارات؟"
    },
    answer: {
      fr: "Les prix affichés correspondent au pneu seul pour une totale transparence. Le forfait montage, valve neuve et équilibrage dynamique haute précision en atelier est proposé à tarif préférentiel (environ 60 DH par roue), clairement détaillé dans votre devis.",
      ar: "الأسعار المعروضة هي للإطار فقط لضمان أقصى درجات الشفافية. وتتوفر باقة التركيب الشاملة (تركيب + موازنة ديناميكية ليزرية + صمام جديد) بسعر تفضيلي واضح (حوالي 60 درهم للعجلة) يظهر بالتفصيل في عرض السعر."
    }
  },
  {
    id: "faq-whatsapp-devis",
    question: {
      fr: "Comment se déroule la demande de devis sur WhatsApp ?",
      ar: "كيف تتم معالجة طلب عرض السعر عبر تطبيق واتساب؟"
    },
    answer: {
      fr: "En cliquant sur 'Devis WhatsApp' ou en préparant votre liste dans le panier, un message pré-rempli contenant vos dimensions et souhaits est généré. Vous l'envoyez d'un clic et notre conseiller vous confirme la disponibilité physique du stock et vous propose un créneau atelier à Casablanca.",
      ar: "عند الضغط على زر 'عرض سعر عبر واتساب' يتم توليد رسالة منظمة تحتوي على أبعاد ومواصفات طلبك بدقة. ترسلها بضغطة زر واحدة ليقوم مستشارنا الفني بالرد المباشر لتأكيد التوفر واقتراح الموعد المناسب لزيارة الورشة."
    }
  },
  {
    id: "faq-modes-paiement",
    question: {
      fr: "Quels sont les modes de paiement acceptés à l'atelier ?",
      ar: "ما هي طرق الدفع المتاحة لدى المركز بالدار البيضاء؟"
    },
    answer: {
      fr: "Le règlement s'effectue directement sur place au centre après montage et inspection de votre véhicule : espèces en Dirhams (MAD), carte bancaire nationale (CMI) ou virement instantané.",
      ar: "يتم السداد مباشرة بالمركز بعد إتمام عملية التركيب ومعاينة السيارة: نقداً بالدرهم المغربي، بالبطاقة البنكية المغربية (CMI)، أو عبر التحويل البنكي الفوري."
    }
  },
  {
    id: "faq-garantie",
    question: {
      fr: "Quelle est la garantie sur les pneus et jantes neufs ?",
      ar: "ما هي شروط الضمان للإطارات والجنوط الجديدة؟"
    },
    answer: {
      fr: "Tous nos pneus et jantes neufs bénéficient de la garantie constructeur contre tout défaut de fabrication ou de matière. Nous fournissons une facture détaillée et une fiche de contrôle atelier remise à chaque client.",
      ar: "تستفيد جميع المنتجات الجديدة من ضمان المصنع ضد أي عيوب تصنيعية. ونزود العميل بفاتورة مفصلة واستمارة فحص فني بعد إتمام عملية الشد والموازنة."
    }
  }
];
