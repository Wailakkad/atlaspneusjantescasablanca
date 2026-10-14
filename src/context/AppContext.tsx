import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, CartItem, TireProduct, RimProduct, VehicleModel, GuideArticle, WorkshopService } from '../types';
import { BUSINESS_CONFIG } from '../config/business';
import { TRANSLATIONS } from '../data/translations';

export type ActivePage = 
  | 'home' 
  | 'tires' 
  | 'rims' 
  | 'configurator' 
  | 'services' 
  | 'guides' 
  | 'workshop' 
  | 'legal' 
  | 'privacy' 
  | 'terms';

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof TRANSLATIONS.fr;
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  // Cart
  cart: CartItem[];
  addToCart: (product: TireProduct | RimProduct, quantity?: number, withFitting?: boolean) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, qty: number) => void;
  toggleFitting: (itemId: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  cartCount: number;
  cartSubtotal: number;
  cartFittingTotal: number;
  // Selected Vehicle
  selectedVehicle: VehicleModel | null;
  setSelectedVehicle: (vehicle: VehicleModel | null) => void;
  // Modal states
  selectedTireForModal: TireProduct | null;
  setSelectedTireForModal: (tire: TireProduct | null) => void;
  selectedRimForModal: RimProduct | null;
  setSelectedRimForModal: (rim: RimProduct | null) => void;
  selectedGuideForModal: GuideArticle | null;
  setSelectedGuideForModal: (guide: GuideArticle | null) => void;
  selectedServiceForAppointment: WorkshopService | null;
  setSelectedServiceForAppointment: (service: WorkshopService | null) => void;
  isDimensionHelperOpen: boolean;
  setIsDimensionHelperOpen: (open: boolean) => void;
  // Search prefill state
  prefillTireFilter: {
    width?: number;
    aspectRatio?: number;
    diameter?: number;
    brand?: string;
  } | null;
  setPrefillTireFilter: (filter: { width?: number; aspectRatio?: number; diameter?: number; brand?: string; } | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Safe localStorage reading
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('atlas_lang') as Language;
      return saved === 'ar' || saved === 'fr' ? saved : BUSINESS_CONFIG.defaultLanguage;
    } catch {
      return BUSINESS_CONFIG.defaultLanguage;
    }
  });

  const [activePage, setActivePageState] = useState<ActivePage>('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicleState] = useState<VehicleModel | null>(() => {
    try {
      const saved = localStorage.getItem('atlas_vehicle');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('atlas_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modals
  const [selectedTireForModal, setSelectedTireForModal] = useState<TireProduct | null>(null);
  const [selectedRimForModal, setSelectedRimForModal] = useState<RimProduct | null>(null);
  const [selectedGuideForModal, setSelectedGuideForModal] = useState<GuideArticle | null>(null);
  const [selectedServiceForAppointment, setSelectedServiceForAppointment] = useState<WorkshopService | null>(null);
  const [isDimensionHelperOpen, setIsDimensionHelperOpen] = useState(false);
  const [prefillTireFilter, setPrefillTireFilter] = useState<{ width?: number; aspectRatio?: number; diameter?: number; brand?: string; } | null>(null);

  // Sync lang to HTML dir and lang attributes
  useEffect(() => {
    try {
      localStorage.setItem('atlas_lang', lang);
    } catch {
      // safe fallback
    }
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('atlas_cart', JSON.stringify(cart));
    } catch {
      // safe fallback
    }
  }, [cart]);

  // Sync vehicle to localStorage
  useEffect(() => {
    try {
      if (selectedVehicle) {
        localStorage.setItem('atlas_vehicle', JSON.stringify(selectedVehicle));
      } else {
        localStorage.removeItem('atlas_vehicle');
      }
    } catch {
      // safe fallback
    }
  }, [selectedVehicle]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  const setSelectedVehicle = (vehicle: VehicleModel | null) => {
    setSelectedVehicleState(vehicle);
  };

  const setActivePage = (page: ActivePage) => {
    setActivePageState(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (product: TireProduct | RimProduct, quantity = 4, withFitting = true) => {
    const isTire = 'aspectRatio' in product;
    const cartItemId = `${product.id}-${withFitting ? 'fit' : 'nofit'}`;
    const name = `${product.brand} ${product.model}`;
    const spec = isTire
      ? `${(product as TireProduct).width}/${(product as TireProduct).aspectRatio} R${(product as TireProduct).diameter} ${(product as TireProduct).loadIndex}${(product as TireProduct).speedRating}`
      : `${(product as RimProduct).diameter}" ${(product as RimProduct).finish} (${(product as RimProduct).pcd})`;
    const unitPrice = isTire ? (product as TireProduct).priceMAD : (product as RimProduct).pricePerUnitMAD;

    setCart((prev) => {
      const existing = prev.find((item) => item.id === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.id === cartItemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      const newItem: CartItem = {
        id: cartItemId,
        productType: isTire ? 'tire' : 'rim',
        productId: product.id,
        name,
        brand: product.brand,
        spec,
        image: product.image,
        unitPriceMAD: unitPrice,
        quantity,
        withFitting,
        withBalancing: withFitting,
      };
      return [...prev, newItem];
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity: qty } : item))
    );
  };

  const toggleFitting = (itemId: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, withFitting: !item.withFitting } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cart.reduce((acc, item) => acc + item.unitPriceMAD * item.quantity, 0);
  const cartFittingTotal = cart.reduce(
    (acc, item) => acc + (item.withFitting ? item.quantity * 60 : 0),
    0
  );

  const t = TRANSLATIONS[lang];

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        t,
        activePage,
        setActivePage,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleFitting,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        cartCount,
        cartSubtotal,
        cartFittingTotal,
        selectedVehicle,
        setSelectedVehicle,
        selectedTireForModal,
        setSelectedTireForModal,
        selectedRimForModal,
        setSelectedRimForModal,
        selectedGuideForModal,
        setSelectedGuideForModal,
        selectedServiceForAppointment,
        setSelectedServiceForAppointment,
        isDimensionHelperOpen,
        setIsDimensionHelperOpen,
        prefillTireFilter,
        setPrefillTireFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
