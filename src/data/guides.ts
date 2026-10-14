import { GuideArticle } from '../types';

export const GUIDES_DATA: GuideArticle[] = [
  {
    id: "guide-lire-dimension-pneu",
    slug: "comment-lire-la-dimension-d-un-pneu",
    title: {
      fr: "Comment lire la dimension d'un pneu ?",
      ar: "كيف تقرأ رموز ومقاسات إطارات سيارتك؟"
    },
    summary: {
      fr: "Décryptage complet des chiffres inscrits sur le flanc : largeur, série, diamètre, indice de charge et lettre de vitesse.",
      ar: "شرح شامل ومبسط للأرقام المكتوبة على جدار الإطار: العرض، نسبة الارتفاع، القطر، مؤشر الحمولة ورمز السرعة القصوى."
    },
    readingTime: "3 min",
    publishedDate: "2026-10-10",
    content: {
      fr: `Prenons l'exemple le plus répandu au Maroc : 205/55 R16 91V.
      
1. 205 : La largeur du pneu en millimètres d'un flanc à l'autre.
2. 55 : La hauteur du flanc, exprimée en pourcentage de la largeur (ici 55% de 205 mm = 112,75 mm).
3. R : Indique la structure Radiale de la carcasse métallique (standard moderne).
4. 16 : Le diamètre intérieur du pneu correspondant au diamètre de la jante en pouces.
5. 91 : L'indice de charge (91 équivaut à 615 kg supportés par pneu).
6. V : L'indice de vitesse maximale homologuée (V = jusqu'à 240 km/h).

Attention : Il est interdit et dangereux de monter un indice de charge ou de vitesse inférieur aux spécifications homologuées par le constructeur de votre véhicule.`,
      ar: `لنأخذ المقاس الأكثر شيوعاً في المغرب كنموذج عملي: 205/55 R16 91V.

1. 205: عرض الإطار بالمليمتر من الجدار إلى الجدار المقابل.
2. 55: ارتفاع المظهر الجانبي للإطار، كنسبة مئوية من العرض (55% من 205 ملم = 112.75 ملم).
3. R: يرمز إلى البنية الهيكلية الشعاعية (Radial) المعتمدة في كافة السيارات الحديثة.
4. 16: القطر الداخلي للإطار والمطابق لقطر الجنط بالبوصة.
5. 91: مؤشر الحمولة القصوى (91 تعني تحمل 615 كجم لكل إطار).
6. V: رمز السرعة القصوى المعتمدة للإطار (حرف V يعني سرعة حتى 240 كم/ساعة).

تنبيه هام: يُحظر تماماً تركيب إطارات بمؤشر حمولة أو رمز سرعة أقل من توصيات الشركة المصنعة لسيارتك حفاظاً على سلامتك وسلامة الركاب.`
    },
    bulletPoints: {
      fr: [
        "Vérifiez l'étiquette située dans la feuillure de portière conducteur ou la trappe à carburant",
        "Ne montez jamais des indices de charge inférieurs à la préconisation d'origine",
        "Surveillez également le code DOT (4 chiffres indiquant la semaine et l'année de fabrication)"
      ],
      ar: [
        "تأكد من المقاس الأصلي عبر الملصق المعدني على حافة باب السائق أو غطاء خزان الوقود",
        "تجنب نهائياً استخدام إطارات بحمولة أقل من المنصوص عليها في دليل السيارة",
        "افحص دائماً رمز DOT الرباعي الذي يبين أسبوع وسنة صنع الإطار"
      ]
    }
  },
  {
    id: "guide-choisir-jantes-aluminium",
    slug: "comment-choisir-ses-jantes-aluminium",
    title: {
      fr: "Comment bien choisir ses jantes aluminium ?",
      ar: "كيف تختار الجنوط الألومنيوم المناسبة لسيارتك؟"
    },
    summary: {
      fr: "Entraxe (PCD), déport technique (ET), alésage central : tout ce qu'il faut vérifier avant d'acheter un jeu de jantes.",
      ar: "المسافة بين البراغي (PCD)، الإزاحة البروز (ET)، وقطر السرة المركزية: كل ما يجب فحصه لضمان التوافق التام."
    },
    readingTime: "4 min",
    publishedDate: "2026-10-08",
    content: {
      fr: `Changer ses jantes transforme l'allure d'une voiture, mais la compatibilité mécanique est primordiale :

1. L'Entraxe (PCD) : Nombre de trous et diamètre du cercle de fixation (ex: 5x112 pour le groupe VAG/Mercedes, 5x120 pour les anciennes BMW, 4x100 pour Dacia/Renault).
2. Le Déport (ET / Offset) : La distance en millimètres entre le plan de fixation et le milieu de la jante. Un ET inadapté risque de faire frotter la roue contre l'étrier de frein ou contre l'aile intérieure.
3. L'Alésage central (Center Bore) : Le trou central qui repose sur le moyeu. Des bagues de centrage sont requises si l'alésage est supérieur au moyeu du véhicule.

Chez Atlas Pneus, nous vérifions systématiquement chaque fiche véhicule avant de valider la compatibilité d'un pack de jantes.`,
      ar: `يمنح تغيير الجنوط مظهراً رياضياً مبهراً للسيارة، لكن التوافق الميكانيكي هو الأساس لتفادي أي احتكاك أو أضرار:

1. المسافة بين البراغي (PCD): عدد الثقوب وقطر دائرة التثبيت (مثل 5x112 لسيارات فولكس فاجن ومرسيدس، 5x120 لسيارات بي إم دبليو، و 4x100 لداسيا ورينو).
2. البروز والإزاحة (ET / Offset): المسافة بالمليمتر بين سطح التثبيت ومنتصف الجنط. المقاس غير المتوافق قد يؤدي لاحتكاك الجنط بملاقط الفرامل أو الهيكل الداخلي.
3. الفتحة المركزية (Center Bore): قطر الفتحة الوسطى المستقرة على صرة العجلة. في حال كانت أوسع من صرة السيارة يتم استخدام حلقات تمركز دقيقة لمنع أي اهتزاز.

يقوم خبراؤنا بالتحقق الفني المسبق من كل هذه المعايير قبل اعتماد أي طقم لسيارتك.`
    },
    bulletPoints: {
      fr: [
        "Ne choisissez jamais une jante uniquement sur son design esthétique",
        "Respectez la tolérance d'équivalence circonférentielle (-2% à +1.5%) pour le compteur de vitesse",
        "Assurez-vous que la jante dégage convenablement les étriers de frein"
      ],
      ar: [
        "لا تعتمد في اختيار الجنط على الشكل الجمالي فقط دون التأكد من الأبعاد التقنية",
        "احرص على مطابقة محيط الدوران حتى لا تتأثر قراءة عداد السرعة وأنظمة ABS",
        "تأكد من وجود مسافة أمان كافية بين أضلاع الجنط وملاقط أقراص الفرامل"
      ]
    }
  },
  {
    id: "guide-quand-remplacer-pneus",
    slug: "quand-faut-il-remplacer-ses-pneus",
    title: {
      fr: "Quand faut-il remplacer ses pneus au Maroc ?",
      ar: "متى يجب عليك استبدال إطارات سيارتك بالمغرب؟"
    },
    summary: {
      fr: "Témoin d'usure légal à 1,6 mm, vieillissement de la gomme sous la chaleur, hernies et vibrations.",
      ar: "مؤشر التآكل القانوني 1.6 ملم، جفاف وتشقق المطاط بفعل حرارة الصيف، وظهور الانتفاخات الجانبية."
    },
    readingTime: "3 min",
    publishedDate: "2026-10-04",
    content: {
      fr: `Au Maroc, les conditions climatiques chaudes et l'état varié des routes accélèrent le vieillissement du caoutchouc :

1. La limite légale d'usure : La profondeur minimale des sculptures est fixée à 1,6 mm. Des témoins d'usure (TWI) sont moulés dans les rainures principales.
2. L'âge du pneu : Même si la sculpture semble intacte, une gomme de plus de 5 ans durcit, perd son élasticité et rallonge dramatiquement les distances de freinage.
3. Hernies ou déformations : Un choc sur trottoir ou nid-de-poule peut rompre la nappe de carcasse métallique, provoquant une cloque sur le flanc. Danger d'éclatement immédiat sur autoroute !
4. Craquelures de surface : Exposition prolongée aux UV et à la chaleur estivale.`,
      ar: `في المغرب، تؤدي درجات الحرارة المرتفعة وطبيعة الطرق المتنوعة إلى تسريع شيخوخة المطاط وتصلبه:

1. الحد الأدنى القانوني للنقشة: يجب ألا يقل عمق أخاديد الإطار عن 1.6 ملم، وتوجد مؤشرات صغيرة داخل القنوات تدل على بلوغ الحد الأقصى.
2. عمر الإطار وصلاحية المطاط: حتى لو بقيت النقشة بارزة، فإن المطاط يفقد مرونته بعد مرور 5 سنوات من الاستخدام مما يضاعف مسافة التوقف عند الكبح المفاجئ.
3. الانتفاخات الجانبية (Hernie): الاصطدام بحواف الأرصفة أو الحفر يمزق الأسلاك الداخلية للجدار الجانبي، مما يشكل خطراً كبيراً لانفجار الإطار على الطرق السريعة.
4. التشققات السطحية: التعرض الطويل لأشعة الشمس الحارقة صيفاً يجفف مادة السيليكا ويستدعي المعاينة الفورية.`
    },
    bulletPoints: {
      fr: [
        "Contrôlez la pression à froid au moins une fois par mois",
        "Remplacez impérativement un pneu présentant une cloque ou une coupure sur le flanc",
        "Permutez vos trains roulants tous les 10 000 km pour une usure uniforme"
      ],
      ar: [
        "افحص ضغط هواء الإطارات وهي باردة مرة واحدة على الأقل شهرياً",
        "استبدل فوراً أي إطار يظهر عليه انتفاخ أو تمزق في الجدار الجانبي",
        "قم بتدوير العجلات الأمامية والخلفية كل 10,000 كم لضمان تآكل متوازن"
      ]
    }
  }
];
