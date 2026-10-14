import { TireProduct } from '../types';

export const TIRES_DATA: TireProduct[] = [
  {
    id: "tire-michelin-ps5-225-45-17",
    slug: "michelin-pilot-sport-5-225-45-r17-94y",
    brand: "Michelin",
    model: "Pilot Sport 5",
    image: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1792004285/Summer_car_tire_standing_upright_2K_20261014174956.jpg",
    width: 225,
    aspectRatio: 45,
    diameter: 17,
    loadIndex: 94,
    speedRating: "Y",
    season: "Ete",
    runflat: false,
    reinforced: true,
    priceMAD: 1450,
    inStock: true,
    stockCount: 16,
    featured: true,
    description: {
      fr: "Pneu été ultra haute performance offrant une précision de conduite maximale et une remarquable longévité kilométrique.",
      ar: "إطار صيفي فائق الأداء يمنح دقة استثنائية في التوجيه مع عمر افتراضي طويل وثبات ممتاز عند السرعات العالية."
    },
    features: {
      fr: [
        "Technologie Dual Sport Tread Design pour une excellente adhérence sur sol sec et mouillé",
        "Structure MaxTouch Construction pour une répartition homogène des forces",
        "Finition Premium Touch au niveau des flancs effet velours"
      ],
      ar: [
        "تصميم مزدوج لسطح الإطار يضمن التماسك على الطرق الجافة والمبتلة",
        "توزيع متوازن للضغط لتقليل معدل تآكل الإطار",
        "مظهر جانبي أنيق مع لمسة مخملية فاخرة"
      ]
    }
  },
  {
    id: "tire-michelin-primacy4-205-55-16",
    slug: "michelin-primacy-4-plus-205-55-r16-91v",
    brand: "Michelin",
    model: "Primacy 4+",
    image: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1792004274/Summer_car_tire_on_pedestal_2K_20261014175258.jpg",
    width: 205,
    aspectRatio: 55,
    diameter: 16,
    loadIndex: 91,
    speedRating: "V",
    season: "Ete",
    runflat: false,
    reinforced: false,
    priceMAD: 1080,
    inStock: true,
    stockCount: 24,
    featured: true,
    description: {
      fr: "La référence incontournable de sécurité et de confort pour berlines et compactes au Maroc.",
      ar: "المعيار الرائد للسلامة والراحة للسيارات المدمجة والعائلية على الطرق المغربية."
    },
    features: {
      fr: [
        "Performances de freinage exceptionnelles jusqu'au témoin d'usure légal",
        "Composé de gomme EverGrip de dernière génération",
        "Très faible résistance au roulement pour économiser le carburant"
      ],
      ar: [
        "كبح فائق وموثوق حتى آخر مليمتر من عمق النقشة",
        "مركب مطاطي متطور لمقاومة الانزلاق المائي",
        "مقاومة منخفضة للدوران لتقليل استهلاك الوقود"
      ]
    }
  },
  {
    id: "tire-conti-ecocontact6-195-65-15",
    slug: "continental-ecocontact-6-195-65-r15-91h",
    brand: "Continental",
    model: "EcoContact 6",
    image: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1792004271/Car_tire_on_pedestal_2K_20261014175031.jpg",
    width: 195,
    aspectRatio: 65,
    diameter: 15,
    loadIndex: 91,
    speedRating: "H",
    season: "Ete",
    runflat: false,
    reinforced: false,
    priceMAD: 780,
    inStock: true,
    stockCount: 32,
    featured: true,
    description: {
      fr: "Efficacité énergétique optimale, idéal pour les trajets quotidiens et les véhicules citadins.",
      ar: "كفاءة عالية في استهلاك الوقود، مثالي للتنقلات اليومية وسيارات المدينة."
    },
    features: {
      fr: [
        "Composé Green Chili 2.0 adaptatif",
        "Longévité kilométrique supérieure de 20%",
        "Freinage court et comportement prévisible"
      ],
      ar: [
        "مركب مطاطي متكيف للحد من استهلاك الطاقة",
        "عمر أطول بنسبة 20% مقارنة بالجيل السابق",
        "مسافة كبح قصيرة وتحكم دقيق"
      ]
    }
  },
  {
    id: "tire-conti-premium7-225-40-18",
    slug: "continental-premiumcontact-7-225-40-r18-92y",
    brand: "Continental",
    model: "PremiumContact 7",
    image: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1792004269/Touring_car_tire_on_pedestal_2K_20261014175311.jpg",
    width: 225,
    aspectRatio: 40,
    diameter: 18,
    loadIndex: 92,
    speedRating: "Y",
    season: "Ete",
    runflat: false,
    reinforced: true,
    priceMAD: 1390,
    inStock: true,
    stockCount: 12,
    featured: true,
    description: {
      fr: "Le sommet de la sécurité et du dynamisme de conduite allemande pour berlines sportives.",
      ar: "قمة الأمان والديناميكية الألمانية المصممة للسيارات الرياضية الفاخرة."
    },
    features: {
      fr: [
        "Bande de roulement adaptative aux styles de conduite",
        "Excellente adhérence sur asphalte chaud",
        "Précision millimétrée dans les courbes"
      ],
      ar: [
        "سطح مداس متكيف مع أسلوب القيادة الرياضي",
        "تماسك ممتاز على الأسفلت الساخن",
        "استقرار فائق عند المنعطفات السريعة"
      ]
    }
  },
  {
    id: "tire-pirelli-pzero-245-45-18",
    slug: "pirelli-p-zero-pz4-245-45-r18-100y",
    brand: "Pirelli",
    model: "P Zero (PZ4)",
    image: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1792004269/Touring_car_tire_on_pedestal_2K_20261014175247.jpg",
    width: 245,
    aspectRatio: 45,
    diameter: 18,
    loadIndex: 100,
    speedRating: "Y",
    season: "Ete",
    runflat: false,
    reinforced: true,
    priceMAD: 1690,
    inStock: true,
    stockCount: 8,
    featured: false,
    description: {
      fr: "Homologué par les constructeurs de prestige pour un agrément de pilotage hors normes.",
      ar: "معتمد من كبرى شركات تصنيع السيارات الرياضية لتوفير متعة قيادة لا تضاهى."
    },
    features: {
      fr: [
        "Bande de roulement asymétrique pour un appui maximal",
        "Réponse instantanée à la direction",
        "Stabilité extrême à haute vitesse sur autoroute"
      ],
      ar: [
        "نقشة غير متماثلة لزيادة ثبات المركبة",
        "استجابة فورية لعجلة القيادة",
        "استقرار عالي على الطرق السريعة"
      ]
    }
  },
  {
    id: "tire-bridgestone-turanza6-205-55-16",
    slug: "bridgestone-turanza-6-205-55-r16-91v",
    brand: "Bridgestone",
    model: "Turanza 6",
    image: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1792004267/Car_tire_on_pedestal_2K_20261014175309.jpg",
    width: 205,
    aspectRatio: 55,
    diameter: 16,
    loadIndex: 91,
    speedRating: "V",
    season: "Ete",
    runflat: false,
    reinforced: false,
    priceMAD: 990,
    inStock: true,
    stockCount: 20,
    featured: false,
    description: {
      fr: "Maîtrise parfaite sous la pluie et confort de roulement silencieux pour les longs trajets.",
      ar: "تحكم مثالي عند هطول الأمطار وقيادة هادئة ومريحة أثناء السفر لمسافات طويلة."
    },
    features: {
      fr: [
        "Technologie Enliten respectueuse de l'environnement",
        "Meilleure adhérence sur sol mouillé de sa catégorie",
        "Confort acoustique feutré"
      ],
      ar: [
        "تقنية Enliten الصديقة للبيئة وخفيفة الوزن",
        "أعلى درجات الكبح في الأجواء الرطبة",
        "عزل صوتي ممتاز لتقليل ضجيج الطريق"
      ]
    }
  },
  {
    id: "tire-goodyear-eagle-f1-225-45-17",
    slug: "goodyear-eagle-f1-asymmetric-6-225-45-r17-94y",
    brand: "Goodyear",
    model: "Eagle F1 Asymmetric 6",
    image: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1792004264/Summer_tire_standing_upright_2K_20261014175311.jpg",
    width: 225,
    aspectRatio: 45,
    diameter: 17,
    loadIndex: 94,
    speedRating: "Y",
    season: "Ete",
    runflat: false,
    reinforced: true,
    priceMAD: 1250,
    inStock: true,
    stockCount: 14,
    featured: false,
    description: {
      fr: "Prêt pour toutes les conditions routières avec une empreinte au sol qui s'élargit en virage.",
      ar: "جاهز لكافة ظروف الطريق مع مساحة تماس تزداد اتساعاً عند الانعطاف الحاد."
    },
    features: {
      fr: [
        "Technologie Dry Contact Plus pour une précision nette",
        "Compatible véhicules thermiques et électriques",
        "Longévité accrue"
      ],
      ar: [
        "تقنية Dry Contact Plus لثبات استثنائي",
        "متوافق مع السيارات الهجينة والكهربائية",
        "متانة إضافية ومقاومة للتآكل"
      ]
    }
  },
  {
    id: "tire-hankook-ventus-215-55-17",
    slug: "hankook-ventus-prime-4-215-55-r17-98w",
    brand: "Hankook",
    model: "Ventus Prime 4",
    image: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1792004264/Touring_car_tire_on_pedestal_2K_20261014175315.jpg",
    width: 215,
    aspectRatio: 55,
    diameter: 17,
    loadIndex: 98,
    speedRating: "W",
    season: "Ete",
    runflat: false,
    reinforced: true,
    priceMAD: 1040,
    inStock: true,
    stockCount: 18,
    featured: false,
    description: {
      fr: "L'équilibre parfait entre prix avantageux, confort de roulement et tenue de route sereine.",
      ar: "التوازن المثالي بين السعر الاقتصادي والراحة الفائقة والثبات المحكم."
    },
    features: {
      fr: [
        "Rainures biseautées pour une évacuation rapide de l'eau",
        "Polymères de silice hautement raffinés",
        "Excellent rapport qualité / prix au Maroc"
      ],
      ar: [
        "أخاديد مائلة لتصريف سريع لمياه الأمطار",
        "مركبات سيليكا عالية الجودة لتطويل العمر الافتراضي",
        "أفضل قيمة مقابل السعر في السوق المغربي"
      ]
    }
  },
  {
    id: "tire-michelin-latitude-235-55-19",
    slug: "michelin-latitude-sport-3-235-55-r19-105v",
    brand: "Michelin",
    model: "Latitude Sport 3",
    image: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1792004285/Summer_car_tire_standing_upright_2K_20261014174956.jpg",
    width: 235,
    aspectRatio: 55,
    diameter: 19,
    loadIndex: 105,
    speedRating: "V",
    season: "Ete",
    runflat: false,
    reinforced: true,
    priceMAD: 2150,
    inStock: true,
    stockCount: 8,
    featured: true,
    description: {
      fr: "Spécialement développé pour les SUV modernes et crossovers exigeants, offrant motricité et sécurité renforcée.",
      ar: "مصمم خصيصاً لسيارات الدفع الرباعي والـ SUV الحديثة لتوفير قوة دفع وأمان مضاعف."
    },
    features: {
      fr: [
        "Double nappe carcasse pour encaisser le poids des SUV",
        "Nervure centrale continue pour un maintien direct de cap",
        "Composé innovant pour une usure uniforme"
      ],
      ar: [
        "هيكل معزز بطبقتين لتحمل وزن سيارات الدفع الرباعي",
        "حزام مركزي مستمر للحفاظ على المسار بدقة",
        "مركب مطاطي مبتكر لضمان التآكل المتساوي"
      ]
    }
  },
  {
    id: "tire-dunlop-sportmaxx-225-45-17",
    slug: "dunlop-sport-maxx-rt2-225-45-r17-91y",
    brand: "Dunlop",
    model: "Sport Maxx RT 2",
    image: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1792004264/Summer_tire_standing_upright_2K_20261014175311.jpg",
    width: 225,
    aspectRatio: 45,
    diameter: 17,
    loadIndex: 91,
    speedRating: "Y",
    season: "Ete",
    runflat: false,
    reinforced: false,
    priceMAD: 1120,
    inStock: false,
    stockCount: 0,
    featured: false,
    description: {
      fr: "Pneu inspiré de la compétition automobile avec un retour d'information direct au volant.",
      ar: "إطار مستوحى من سباقات السيارات يمنح شعوراً مباشراً بالطريق واستجابة رياضية سريعة."
    },
    features: {
      fr: [
        "Blocs d'épaulement renforcés pour un grip en appui",
        "Cordon de talon plus rigide pour une précision accrue",
        "Sur commande sous 24 à 48 heures"
      ],
      ar: [
        "كتل أكتف معززة للالتصاق بالمسار عند المنعطفات",
        "حافة صلبة تزيد من دقة استجابة المقود",
        "متوفر عند الطلب خلال 24 إلى 48 ساعة"
      ]
    }
  }
];
