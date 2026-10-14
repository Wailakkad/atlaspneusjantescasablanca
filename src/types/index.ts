export type Language = 'fr' | 'ar';

export type ProductType = 'tire' | 'rim';

export interface TireProduct {
  id: string;
  slug: string;
  brand: string;
  model: string;
  image: string;
  width: number;       // e.g. 205
  aspectRatio: number; // e.g. 55
  diameter: number;    // e.g. 16
  loadIndex: number;   // e.g. 91
  speedRating: string; // e.g. "V"
  season: 'Ete' | '4Saisons' | 'Hiver';
  runflat: boolean;
  reinforced: boolean; // XL
  priceMAD: number;
  inStock: boolean;
  stockCount: number;
  featured?: boolean;
  description: {
    fr: string;
    ar: string;
  };
  features: {
    fr: string[];
    ar: string[];
  };
}

export interface RimProduct {
  id: string;
  slug: string;
  brand: string;
  model: string;
  image: string;
  diameter: number; // e.g. 17, 18, 19
  width: number;    // e.g. 7.5, 8.0, 8.5
  pcd: string;      // Bolt pattern e.g. "5x112", "5x120", "5x108", "4x100"
  offsetET: number; // e.g. 45
  centerBore: number; // e.g. 66.6, 57.1
  finish: 'Noir Satin' | 'Anthracite' | 'Argent Brossé' | 'Bicolore Diamanté';
  finishSlug: 'black' | 'anthracite' | 'silver' | 'twotone';
  pricePerUnitMAD: number;
  priceSetOfFourMAD: number;
  inStock: boolean;
  featured?: boolean;
  loadRatingKg: number;
  description: {
    fr: string;
    ar: string;
  };
  compatibleVehicles: string[]; // List of vehicle model IDs verified for fitment
}

export interface VehicleMake {
  id: string;
  name: string;
  logoText: string;
}

export interface VehicleModel {
  id: string;
  makeId: string;
  name: string;
  yearRange: string;
  versions: string[];
  factoryTireSizes: string[]; // e.g. ["205/55 R16", "225/45 R17"]
  rimPcd: string;             // e.g. "5x112"
  rimOffsetRange: string;     // e.g. "ET40 - ET50"
  centerBore: number;
}

export interface WorkshopService {
  id: string;
  title: {
    fr: string;
    ar: string;
  };
  shortDescription: {
    fr: string;
    ar: string;
  };
  fullDescription: {
    fr: string;
    ar: string;
  };
  estimatedDuration: string;
  indicativePriceMAD: number | null; // null if on quote
  priceDisplay: {
    fr: string;
    ar: string;
  };
  iconName: string;
  includedInFittingPackage?: boolean;
}

export interface CartItem {
  id: string;
  productType: ProductType;
  productId: string;
  name: string;
  brand: string;
  spec: string;
  image: string;
  unitPriceMAD: number;
  quantity: number;
  withFitting: boolean;
  withBalancing: boolean;
}

export interface CustomerReview {
  id: string;
  author: string;
  city: string;
  vehicle: string;
  rating: number;
  date: string;
  text: {
    fr: string;
    ar: string;
  };
  servicePurchased: {
    fr: string;
    ar: string;
  };
}

export interface GuideArticle {
  id: string;
  slug: string;
  title: {
    fr: string;
    ar: string;
  };
  summary: {
    fr: string;
    ar: string;
  };
  readingTime: string;
  publishedDate: string;
  content: {
    fr: string;
    ar: string;
  };
  bulletPoints: {
    fr: string[];
    ar: string[];
  };
}

export interface FaqItem {
  id: string;
  question: {
    fr: string;
    ar: string;
  };
  answer: {
    fr: string;
    ar: string;
  };
}
