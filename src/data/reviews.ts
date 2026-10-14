import { CustomerReview } from '../types';

export const REVIEWS_DATA: CustomerReview[] = [
  {
    id: "rev-1",
    author: "Mehdi B.",
    city: "Casablanca (Maârif)",
    vehicle: "Volkswagen Golf 7 GTD",
    rating: 5,
    date: "Il y a 2 semaines",
    servicePurchased: {
      fr: "4 pneus Michelin Pilot Sport 5 + Équilibrage",
      ar: "4 إطارات ميشلان بايلوت سبورت 5 + موازنة"
    },
    text: {
      fr: "Excellente réactivité sur WhatsApp pour confirmer le stock en 225/45 R17. Montage rapide à l'atelier sans la moindre rayure sur mes jantes.",
      ar: "تجاوب سريع جداً عبر واتساب لتأكيد توفر مقاس 225/45 R17. تركيب احترافي بالورشة بدون أي خدش على جنوط سيارتي."
    }
  },
  {
    id: "rev-2",
    author: "Karim E.",
    city: "Casablanca (Ain Sebaâ)",
    vehicle: "Peugeot 3008 GT",
    rating: 5,
    date: "Il y a 1 mois",
    servicePurchased: {
      fr: "Pack 4 jantes 18 pouces + Géométrie 3D",
      ar: "طقم 4 جنوط ألومنيوم 18 بوصة + ضبط زوايا 3D"
    },
    text: {
      fr: "Conseil très pro sur l'entraxe 5x108 et le déport ET. Le rendu sur la voiture est superbe et la tenue de route est impeccable.",
      ar: "استشارة فنية ممتازة بخصوص قياسات التثبيت 5x108 والبروز. مظهر السيارة رائع وثبات الطريق تحسن بشكل ملموس."
    }
  },
  {
    id: "rev-3",
    author: "Yasmine T.",
    city: "Casablanca (Gauthier)",
    vehicle: "Renault Clio 5",
    rating: 5,
    date: "Il y a 3 semaines",
    servicePurchased: {
      fr: "2 pneus Continental EcoContact 6 + Valves",
      ar: "إطارين كونتيننتال إيكو كونتاكت 6 + صمامات جديدة"
    },
    text: {
      fr: "Devis clair, prix respecté au centime près et personnel très accueillant dans la zone d'attente.",
      ar: "تسعيرة واضحة والتزام بالموعد المحدد وموظفون ودودون للغاية بصالة الانتظار."
    }
  }
];
