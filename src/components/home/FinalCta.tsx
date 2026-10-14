import React from 'react';
import { useApp } from '../../context/AppContext';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

export const FinalCta: React.FC = () => {
  const { lang, t, setActivePage, setIsCartOpen } = useApp();

  const handleWhatsAppClick = () => {
    const msg =
      lang === 'ar'
        ? `السلام عليكم، أود الحصول على عرض سعر سريع لإطارات وجنوط سيارتي بالدار البيضاء.`
        : `Bonjour Atlas Pneus, je souhaite obtenir un devis rapide pour équiper mon véhicule à Casablanca.`;
    const url = buildWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-[#161920] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D62828]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight text-balance">
          {t.finalCta.headline}
        </h2>

        <p className="text-sm sm:text-base text-[#AAB1BA] max-w-xl mx-auto leading-relaxed">
          {t.finalCta.subhead}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => {
              const finder = document.getElementById('smart-finder');
              if (finder) {
                finder.scrollIntoView({ behavior: 'smooth' });
              } else {
                setActivePage('tires');
              }
            }}
            className="px-6 py-3.5 bg-[#D62828] hover:bg-[#B71C1C] text-white text-sm font-bold rounded-xl shadow-lg shadow-[#D62828]/25 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>{t.finalCta.btnQuote}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>

          <button
            onClick={handleWhatsAppClick}
            className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20BA5A] text-slate-950 text-sm font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>{t.finalCta.btnWhatsApp}</span>
          </button>
        </div>

        <div className="pt-4 flex items-center justify-center gap-6 text-xs text-[#AAB1BA]">
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#D62828]" />
            <span className="tabular-nums font-medium">{BUSINESS_CONFIG.phoneDisplay}</span>
          </span>
          <span className="text-[#AAB1BA]/40">·</span>
          <span>Atelier : Roches Noires / Ain Sebaâ, Casablanca</span>
        </div>
      </div>
    </section>
  );
};
