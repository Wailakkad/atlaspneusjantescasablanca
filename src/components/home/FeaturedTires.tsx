import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { TIRES_DATA } from '../../data/tires';
import { TireCard } from '../products/TireCard';
import { ArrowRight, SlidersHorizontal } from 'lucide-react';

export const FeaturedTires: React.FC = () => {
  const { lang, t, setActivePage } = useApp();

  const [activeBrand, setActiveBrand] = useState<string>('all');
  const [activeDiameter, setActiveDiameter] = useState<string>('all');

  const brands = ['all', 'Michelin', 'Continental', 'Pirelli', 'Goodyear', 'Hankook'];
  const diameters = ['all', '16', '17', '18', '19'];

  const displayedTires = TIRES_DATA.filter((tire) => {
    const matchBrand = activeBrand === 'all' || tire.brand === activeBrand;
    const matchDiameter = activeDiameter === 'all' || tire.diameter.toString() === activeDiameter;
    return matchBrand && matchDiameter;
  }).slice(0, 8); // Display at least 8

  return (
    <section className="py-16 bg-[#111318] border-b border-[#20252C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header & Section Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D62828]">
              {t.tiresSection.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.tiresSection.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#AAB1BA] max-w-2xl">
              {t.tiresSection.subtitle}
            </p>
          </div>

          <button
            onClick={() => setActivePage('tires')}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#D62828] hover:text-[#B71C1C] transition-colors cursor-pointer self-start md:self-auto group"
          >
            <span>Voir tout le catalogue pneus (10+ modèles)</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Quick Filter Tabs (Zero-pill discipline, segmented button bar) */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-2 bg-[#181D25] rounded-xl border border-[#262D38]">
          {/* Brand Segment */}
          <div className="flex flex-wrap items-center gap-1">
            <span className="text-[11px] font-bold uppercase text-[#AAB1BA] px-2 hidden sm:inline">
              Marque :
            </span>
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setActiveBrand(b)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeBrand === b
                    ? 'bg-[#20252C] text-white border border-[#323A46] shadow-xs'
                    : 'text-[#AAB1BA] hover:text-white'
                }`}
              >
                {b === 'all' ? 'Toutes' : b}
              </button>
            ))}
          </div>

          {/* Diameter Segment */}
          <div className="flex items-center gap-1">
            <span className="text-[11px] font-bold uppercase text-[#AAB1BA] px-2 hidden lg:inline">
              Jante :
            </span>
            {diameters.map((d) => (
              <button
                key={d}
                onClick={() => setActiveDiameter(d)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeDiameter === d
                    ? 'bg-[#D62828] text-white shadow-xs'
                    : 'text-[#AAB1BA] hover:text-white'
                }`}
              >
                {d === 'all' ? 'Tous' : `R${d}`}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedTires.map((tire) => (
            <TireCard key={tire.id} tire={tire} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-4 rounded-xl bg-[#181D25] border border-[#262D38] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AAB1BA]">
          <span>
            {lang === 'ar'
              ? 'هل تبحث عن مقاس نادر أو إطارات خاصة لسيارات الدفع الرباعي؟ تواصل مع فنيينا مباشرة.'
              : 'Vous cherchez une dimension spécifique ou un profil SUV non listé ? Notre équipe atelier vous renseigne en direct.'}
          </span>
          <button
            onClick={() => setActivePage('tires')}
            className="px-4 py-2 bg-[#20252C] hover:bg-[#2A313C] text-white font-semibold rounded-lg border border-[#323A46] transition-colors whitespace-nowrap cursor-pointer"
          >
            Filtrer par dimension exacte
          </button>
        </div>

      </div>
    </section>
  );
};
