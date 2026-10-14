import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { BUSINESS_CONFIG } from '../../config/business';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  Car, 
  MessageSquare, 
  Phone, 
  Search,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export const Header: React.FC = () => {
  const { 
    lang, 
    setLang, 
    t, 
    activePage, 
    setActivePage, 
    cartCount, 
    setIsCartOpen,
    selectedVehicle,
    setSelectedVehicle
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(lang === 'fr' ? 'ar' : 'fr');
  };

  const handleNavClick = (page: any) => {
    setActivePage(page);
    setMobileMenuOpen(false);
  };

  const generalWhatsAppUrl = buildWhatsAppUrl(
    lang === 'ar'
      ? `السلام عليكم، أود الاستفسار عن توفر وأسعار الإطارات والجنوط لديكم في الدار البيضاء.`
      : `Bonjour Atlas Pneus, je souhaite me renseigner sur vos pneus et jantes disponibles à Casablanca.`
  );

  return (
    <header className="sticky top-0 z-40 bg-[#111318]/95 backdrop-blur-md border-b border-[#20252C] transition-colors">
      {/* Top micro bar for city & workshop quick status */}
      <div className="hidden lg:block bg-[#161920] border-b border-[#20252C]/60 py-1.5 px-6 text-xs text-[#AAB1BA]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-white/90">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D62828]"></span>
              <span className="font-medium">{BUSINESS_CONFIG.location.city}</span> : {BUSINESS_CONFIG.location.neighborhood}
            </span>
            <span className="text-[#AAB1BA]/60">·</span>
            <span>{BUSINESS_CONFIG.openingHours.weekdays}</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D62828]" />
              <span className="tabular-nums font-medium">{BUSINESS_CONFIG.phoneDisplay}</span>
            </a>
            <span className="text-[#AAB1BA]/60">·</span>
            <span className="text-[#AAB1BA] text-[11px]">
              {lang === 'ar' ? 'عرض سعر فوري وتأكيد التوافر عبر واتساب' : 'Conseils techniques & devis immédiat'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: 3 zones separated by gap-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left rtl:text-right group flex items-center gap-2 shrink-0 cursor-pointer"
          aria-label={BUSINESS_CONFIG.name}
        >
          <div className="w-9 h-9 rounded-lg bg-[#D62828] flex items-center justify-center font-black text-white text-base shadow-sm group-hover:bg-[#B71C1C] transition-colors">
            A
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white whitespace-nowrap">
              ATLAS <span className="text-[#D62828]">PNEUS</span> & JANTES
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#AAB1BA] -mt-1 hidden sm:block">
              Casablanca · Maroc
            </span>
          </div>
        </button>

        {/* Zone 2: Clean single-line text nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#F5F6F7]/85">
          <button
            onClick={() => handleNavClick('tires')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
              activePage === 'tires'
                ? 'text-[#D62828] border-[#D62828]'
                : 'border-transparent hover:text-white hover:border-[#AAB1BA]/40'
            }`}
          >
            {t.nav.tires}
          </button>

          <button
            onClick={() => handleNavClick('rims')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
              activePage === 'rims'
                ? 'text-[#D62828] border-[#D62828]'
                : 'border-transparent hover:text-white hover:border-[#AAB1BA]/40'
            }`}
          >
            {t.nav.rims}
          </button>

          <button
            onClick={() => handleNavClick('configurator')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
              activePage === 'configurator'
                ? 'text-[#D62828] border-[#D62828]'
                : 'border-transparent hover:text-white hover:border-[#AAB1BA]/40'
            }`}
          >
            {t.nav.configurator}
          </button>

          <button
            onClick={() => handleNavClick('services')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
              activePage === 'services'
                ? 'text-[#D62828] border-[#D62828]'
                : 'border-transparent hover:text-white hover:border-[#AAB1BA]/40'
            }`}
          >
            {t.nav.services}
          </button>

          <button
            onClick={() => handleNavClick('guides')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
              activePage === 'guides'
                ? 'text-[#D62828] border-[#D62828]'
                : 'border-transparent hover:text-white hover:border-[#AAB1BA]/40'
            }`}
          >
            {t.nav.guides}
          </button>

          <button
            onClick={() => handleNavClick('workshop')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
              activePage === 'workshop'
                ? 'text-[#D62828] border-[#D62828]'
                : 'border-transparent hover:text-white hover:border-[#AAB1BA]/40'
            }`}
          >
            {t.nav.workshops}
          </button>
        </nav>

        {/* Zone 3: Actions (Vehicle indicator, Cart, Lang, Primary WhatsApp CTA) */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Active vehicle indicator if set */}
          {selectedVehicle && (
            <button
              onClick={() => handleNavClick('configurator')}
              className="hidden xl:flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-[#20252C] hover:bg-[#2A313C] text-xs text-[#F5F6F7] transition-colors border border-[#323A46]"
              title={selectedVehicle.name}
            >
              <Car className="w-3.5 h-3.5 text-[#D62828]" />
              <span className="truncate max-w-[130px] font-medium">{selectedVehicle.name}</span>
            </button>
          )}

          {/* Cart / Quote summary trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 rounded-lg bg-[#20252C] text-[#F5F6F7] hover:bg-[#2A313C] transition-colors cursor-pointer border border-[#20252C]"
            aria-label="Voir le devis en cours"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#D62828] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center tabular-nums shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1.5 text-xs font-semibold rounded-md border border-[#323A46] text-[#F5F6F7] hover:border-[#D62828] hover:text-white transition-colors cursor-pointer"
            aria-label="Changer de langue"
          >
            {lang === 'fr' ? 'العربية' : 'FR'}
          </button>

          {/* Primary CTA Button: WhatsApp Quote */}
          <a
            href={generalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#D62828] hover:bg-[#B71C1C] rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.nav.quoteBtn}</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#20252C] text-[#F5F6F7] hover:bg-[#2A313C] transition-colors cursor-pointer"
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#161920] border-b border-[#20252C] px-6 py-5 animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-3 text-base font-medium">
            <button
              onClick={() => handleNavClick('tires')}
              className={`text-left rtl:text-right py-2 border-b border-[#20252C] ${
                activePage === 'tires' ? 'text-[#D62828] font-bold' : 'text-[#F5F6F7]'
              }`}
            >
              {t.nav.tires}
            </button>
            <button
              onClick={() => handleNavClick('rims')}
              className={`text-left rtl:text-right py-2 border-b border-[#20252C] ${
                activePage === 'rims' ? 'text-[#D62828] font-bold' : 'text-[#F5F6F7]'
              }`}
            >
              {t.nav.rims}
            </button>
            <button
              onClick={() => handleNavClick('configurator')}
              className={`text-left rtl:text-right py-2 border-b border-[#20252C] ${
                activePage === 'configurator' ? 'text-[#D62828] font-bold' : 'text-[#F5F6F7]'
              }`}
            >
              {t.nav.configurator}
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`text-left rtl:text-right py-2 border-b border-[#20252C] ${
                activePage === 'services' ? 'text-[#D62828] font-bold' : 'text-[#F5F6F7]'
              }`}
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => handleNavClick('guides')}
              className={`text-left rtl:text-right py-2 border-b border-[#20252C] ${
                activePage === 'guides' ? 'text-[#D62828] font-bold' : 'text-[#F5F6F7]'
              }`}
            >
              {t.nav.guides}
            </button>
            <button
              onClick={() => handleNavClick('workshop')}
              className={`text-left rtl:text-right py-2 border-b border-[#20252C] ${
                activePage === 'workshop' ? 'text-[#D62828] font-bold' : 'text-[#F5F6F7]'
              }`}
            >
              {t.nav.workshops}
            </button>

            {/* Mobile Actions */}
            <div className="pt-3 flex flex-col gap-3">
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#D62828] text-white font-semibold text-sm rounded-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.nav.quoteBtn}</span>
              </a>

              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#20252C] text-[#F5F6F7] text-sm font-medium rounded-lg"
              >
                <Phone className="w-4 h-4 text-[#D62828]" />
                <span className="tabular-nums">{BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
