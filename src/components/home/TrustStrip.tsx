import React from 'react';
import { useApp } from '../../context/AppContext';
import { MessageSquare, Wrench, ShieldCheck, Sparkles } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const { t } = useApp();

  const items = [
    {
      title: t.trust.item1Title,
      desc: t.trust.item1Desc,
      icon: Sparkles,
    },
    {
      title: t.trust.item2Title,
      desc: t.trust.item2Desc,
      icon: Wrench,
    },
    {
      title: t.trust.item3Title,
      desc: t.trust.item3Desc,
      icon: ShieldCheck,
    },
    {
      title: t.trust.item4Title,
      desc: t.trust.item4Desc,
      icon: MessageSquare,
    },
  ];

  return (
    <section className="bg-[#161920] border-b border-[#20252C] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-[#1D222A] transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-[#20252C] text-[#D62828] shrink-0 border border-[#2B333F]">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#AAB1BA] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
