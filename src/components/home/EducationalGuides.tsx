import React from 'react';
import { useApp } from '../../context/AppContext';
import { GUIDES_DATA } from '../../data/guides';
import { BookOpen, Clock, ArrowRight, HelpCircle } from 'lucide-react';

export const EducationalGuides: React.FC = () => {
  const { lang, t, setSelectedGuideForModal, setIsDimensionHelperOpen } = useApp();

  return (
    <section id="guides" className="py-16 bg-[#141820] border-b border-[#20252C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#D62828]">
              {t.guides.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              {t.guides.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#AAB1BA] max-w-2xl mt-1">
              {t.guides.subtitle}
            </p>
          </div>

          <button
            onClick={() => setIsDimensionHelperOpen(true)}
            className="inline-flex items-center gap-2 px-3 py-2 bg-[#20252C] hover:bg-[#2A313C] text-xs font-semibold text-white rounded-lg border border-[#323A46] transition-colors cursor-pointer self-start md:self-auto"
          >
            <HelpCircle className="w-4 h-4 text-[#D62828]" />
            <span>Schéma interactif : Lire un pneu</span>
          </button>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GUIDES_DATA.map((guide, idx) => (
            <div
              key={guide.id}
              onClick={() => setSelectedGuideForModal(guide)}
              className="group p-6 rounded-2xl bg-[#181D25] border border-[#262D38] hover:border-[#D62828]/50 transition-all flex flex-col justify-between space-y-5 cursor-pointer shadow-xs hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#AAB1BA]">
                  <span className="font-mono text-[#D62828] font-bold">0{idx + 1}. Guide Technique</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{guide.readingTime}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#D62828] transition-colors leading-snug">
                  {guide.title[lang]}
                </h3>

                <p className="text-xs text-[#AAB1BA] leading-relaxed line-clamp-3">
                  {guide.summary[lang]}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-3 border-t border-[#262D38] flex items-center justify-between text-xs text-[#D62828] font-semibold group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                <span>{t.guides.readMore}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </div>
            </div>
          ))}
        </div>

        {/* Quick visual schematic strip for 205/55 R16 */}
        <div className="p-6 rounded-2xl bg-[#111318] border border-[#262D38] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left rtl:lg:text-right">
            <span className="text-xs font-bold uppercase text-[#D62828]">Aide mémoire rapide</span>
            <h4 className="text-sm font-bold text-white">Comprendre l'inscription sur le flanc</h4>
            <p className="text-xs text-[#AAB1BA]">Exemple pour un pneu standard : <span className="font-mono text-white">205/55 R16 91V</span></p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs">
            <div className="p-2.5 rounded-lg bg-[#181D25] border border-[#2B333F] text-center">
              <span className="text-base font-bold text-[#D62828] block">205</span>
              <span className="text-[10px] text-[#AAB1BA]">Largeur (mm)</span>
            </div>
            <span className="text-lg font-bold text-[#AAB1BA]">/</span>
            <div className="p-2.5 rounded-lg bg-[#181D25] border border-[#2B333F] text-center">
              <span className="text-base font-bold text-[#D62828] block">55</span>
              <span className="text-[10px] text-[#AAB1BA]">Série / Profil (%)</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#181D25] border border-[#2B333F] text-center">
              <span className="text-base font-bold text-white block">R</span>
              <span className="text-[10px] text-[#AAB1BA]">Radiale</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#181D25] border border-[#2B333F] text-center">
              <span className="text-base font-bold text-[#D62828] block">16</span>
              <span className="text-[10px] text-[#AAB1BA]">Jante (pouces)</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#181D25] border border-[#2B333F] text-center">
              <span className="text-base font-bold text-white block">91V</span>
              <span className="text-[10px] text-[#AAB1BA]">Charge (615kg) & 240km/h</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
