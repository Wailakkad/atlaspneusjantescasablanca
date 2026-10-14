/**
 * ATLAS PNEUS & JANTES - Central Business Configuration
 * 
 * Edit this single file to change:
 * - Brand Name & Tagline
 * - Phone numbers & WhatsApp numbers
 * - Physical workshop address, city, & hours
 * - Default currency & formatting
 * - Language options
 */

export interface BusinessConfig {
  name: string;
  shortName: string;
  tagline: {
    fr: string;
    ar: string;
  };
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string; // International format with country code without + or spaces (e.g. 212600000000)
  whatsappDisplay: string;
  email: string;
  location: {
    city: string;
    neighborhood: string;
    address: string;
    googleMapsUrl: string;
    isConfirmedAddress: boolean;
  };
  openingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  currency: {
    code: string;
    symbol: string;
    nameFr: string;
    nameAr: string;
  };
  defaultLanguage: 'fr' | 'ar';
  demoNotice: {
    fr: string;
    ar: string;
  };
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: "ATLAS PNEUS & JANTES",
  shortName: "ATLAS PNEUS",
  tagline: {
    fr: "Vente de pneus neufs, jantes aluminium et service de montage professionnel à Casablanca",
    ar: "بيع الإطارات والجنوط الألومنيوم وخدمات التركيب الاحترافية بالدار البيضاء"
  },
  phone: "+212522000000",
  phoneDisplay: "+212 522 00 00 00",
  // Demo WhatsApp number - easily customizable by client
  whatsappNumber: "212661000000",
  whatsappDisplay: "+212 661 00 00 00",
  email: "contact@atlaspneus-demo.ma",
  location: {
    city: "Casablanca",
    neighborhood: "Ain Sebaâ / Boulevard Zerktouni",
    address: "Boulevard Ba Hmad, Roches Noires (Adresse à confirmer avec le client)",
    googleMapsUrl: "https://maps.google.com/?q=Casablanca+Morocco",
    isConfirmedAddress: false,
  },
  openingHours: {
    weekdays: "08:30 – 19:30",
    saturday: "08:30 – 19:00",
    sunday: "Fermé (ou sur rendez-vous)",
  },
  currency: {
    code: "MAD",
    symbol: "DH",
    nameFr: "Dirham Marocain",
    nameAr: "درهم مغربي",
  },
  defaultLanguage: "fr",
  demoNotice: {
    fr: "Démonstration commerciale — Tous les prix, stocks et caractéristiques sont présentés à titre indicatif et personnalisables selon l'offre réelle du centre.",
    ar: "نسخة تجريبية للعرض التجاري — جميع الأسعار والمخزون والمواصفات استرشادية وقابلة للتخصيص حسب نشاط المركز الفعلي."
  }
};
