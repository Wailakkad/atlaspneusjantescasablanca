import React from 'react';
import { useApp } from '../../context/AppContext';
import { Check, Shield, Wrench, Headphones, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const { t } = useApp();

  const points = [
    {
      title: t.whyUs.point1Title,
      desc: t.whyUs.point1Desc,
      icon: Shield,
    },
    {
      title: t.whyUs.point2Title,
      desc: t.whyUs.point2Desc,
      icon: Sparkles,
    },
    {
      title: t.whyUs.point3Title,
      desc: t.whyUs.point3Desc,
      icon: Wrench,
    },
    {
      title: t.whyUs.point4Title,
      desc: t.whyUs.point4Desc,
      icon: Headphones,
    },
  ];

  return (
    <section className="py-16 bg-[#111318] border-b border-[#20252C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D62828]">
              {t.whyUs.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight text-balance">
              {t.whyUs.title}
            </h2>
            <p className="text-sm text-[#AAB1BA] leading-relaxed">
              {t.whyUs.subtitle}
            </p>

            <div className="pt-4 border-t border-[#20252C] space-y-2 text-xs text-[#AAB1BA]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Vérification systématique avant toute intervention</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Devis transparent en Dirhams sans frais cachés</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Validation rapide par un technicien sur WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Right Grid of 4 Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#181D25] border border-[#262D38] space-y-2.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#20252C] text-[#D62828] flex items-center justify-center border border-[#2B333F]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-[#AAB1BA] leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
