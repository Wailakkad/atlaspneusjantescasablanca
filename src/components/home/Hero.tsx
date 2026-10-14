import React from 'react';
import { useApp } from '../../context/AppContext';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { ArrowRight, ChevronRight, Shield, Award, Wrench, MessageSquare } from 'lucide-react';

export const Hero: React.FC = () => {
  const { lang, t, setActivePage } = useApp();

  const handleAdviseClick = () => {
    const url = buildWhatsAppUrl(
      lang === 'ar'
        ? `السلام عليكم، أحتاج إلى استشارة فنية لتحديد الإطارات والجنوط المناسبة لسيارتي.`
        : `Bonjour, j'ai besoin d'un conseil personnalisé pour choisir les pneus ou jantes adaptés à mon véhicule.`
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative overflow-hidden bg-[#111318] pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-[#20252C]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-[#D62828]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-[#20252C]/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D62828]">
              <span className="w-2 h-2 rounded-full bg-[#D62828]"></span>
              <span>{t.hero.eyebrow}</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
              {t.hero.headline}
            </h1>

            {/* Supporting Prose */}
            <p className="text-base sm:text-lg text-[#AAB1BA] max-w-2xl leading-relaxed">
              {t.hero.subhead}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  const finder = document.getElementById('smart-finder');
                  if (finder) {
                    finder.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    setActivePage('tires');
                  }
                }}
                className="px-6 py-3.5 bg-[#D62828] hover:bg-[#B71C1C] text-white text-sm font-bold rounded-lg shadow-lg shadow-[#D62828]/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{t.hero.ctaTires}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>

              <button
                onClick={() => setActivePage('rims')}
                className="px-6 py-3.5 bg-[#20252C] hover:bg-[#2A313C] text-[#F5F6F7] hover:text-white text-sm font-semibold rounded-lg border border-[#323A46] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>{t.hero.ctaRims}</span>
                <ChevronRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>

            {/* Advisory link */}
            <div className="pt-2">
              <button
                onClick={handleAdviseClick}
                className="inline-flex items-center gap-2 text-xs font-medium text-[#AAB1BA] hover:text-white transition-colors cursor-pointer group"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366] group-hover:scale-110 transition-transform" />
                <span className="underline underline-offset-4 decoration-[#323A46] group-hover:decoration-white">
                  {t.hero.ctaAdvise}
                </span>
              </button>
            </div>

            {/* Trust check points */}
            <div className="pt-4 border-t border-[#20252C]/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#AAB1BA]">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#D62828] shrink-0" />
                <span>Pneus neufs certifiés</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#D62828] shrink-0" />
                <span>Montage sans rayure</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D62828] shrink-0" />
                <span>Casablanca & région</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Studio Shot */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#262D38] bg-[#161920] shadow-2xl group">
              <img
                src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1792005728/Tire_and_wheel_rolling_forward_2K_20261014182157.jpg"
                alt="Roue haute performance pneu et jante aluminium Atlas Pneus"
                className="w-full h-auto group-hover:scale-102 transition-transform duration-700"
                loading="eager"
              />
              
              {/* Subtle gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111318]/90 via-transparent to-transparent pointer-events-none" />

              {/* Bottom badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#111318]/85 backdrop-blur-md border border-[#20252C] flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-white">Technologie de pointe & équilibrage laser</p>
                  <p className="text-[11px] text-[#AAB1BA]">Grandes marques en stock : Michelin, Continental, Pirelli...</p>
                </div>
                <div className="shrink-0 pl-2">
                  <span className="text-[11px] font-bold text-[#D62828] uppercase tracking-wider">
                    ATELIER PRO
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
