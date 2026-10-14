import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { RIMS_DATA } from '../../data/rims';
import { RimCard } from '../products/RimCard';
import { Sparkles, Car, ArrowRight } from 'lucide-react';

export const FeaturedRims: React.FC = () => {
  const { lang, t, setActivePage } = useApp();

  const [activeDiameter, setActiveDiameter] = useState<string>('all');
  const [activeFinish, setActiveFinish] = useState<string>('all');

  const diameters = ['all', '17', '18', '19', '20'];
  const finishes = [
    { id: 'all', label: 'Toutes finitions' },
    { id: 'black', label: 'Noir Satin' },
    { id: 'anthracite', label: 'Anthracite' },
    { id: 'silver', label: 'Argent Brossé' },
    { id: 'twotone', label: 'Bicolore' },
  ];

  const displayedRims = RIMS_DATA.filter((rim) => {
    const matchDiameter = activeDiameter === 'all' || rim.diameter.toString() === activeDiameter;
    const matchFinish = activeFinish === 'all' || rim.finishSlug === activeFinish;
    return matchDiameter && matchFinish;
  }).slice(0, 8); // At least 8 items

  return (
    <section className="py-16 bg-[#141820] border-b border-[#20252C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D62828]">
              {t.rimsSection.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.rimsSection.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#AAB1BA] max-w-2xl">
              {t.rimsSection.subtitle}
            </p>
          </div>

          <button
            onClick={() => setActivePage('configurator')}
            className="px-5 py-3 bg-[#D62828] hover:bg-[#B71C1C] text-white text-xs font-bold rounded-xl shadow-md transition-colors flex items-center gap-2 cursor-pointer self-start md:self-auto"
          >
            <Car className="w-4 h-4" />
            <span>{t.rimsSection.openConfigurator}</span>
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </button>
        </div>

        {/* Quick Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-2 bg-[#181D25] rounded-xl border border-[#262D38]">
          {/* Finish selector */}
          <div className="flex flex-wrap items-center gap-1">
            <span className="text-[11px] font-bold uppercase text-[#AAB1BA] px-2 hidden sm:inline">
              Finition :
            </span>
            {finishes.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFinish(f.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeFinish === f.id
                    ? 'bg-[#20252C] text-white border border-[#323A46] shadow-xs'
                    : 'text-[#AAB1BA] hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Diameter selector */}
          <div className="flex items-center gap-1">
            <span className="text-[11px] font-bold uppercase text-[#AAB1BA] px-2 hidden sm:inline">
              Pouces :
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
                {d === 'all' ? 'Tous' : `${d}"`}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedRims.map((rim) => (
            <RimCard key={rim.id} rim={rim} />
          ))}
        </div>

      </div>
    </section>
  );
};
