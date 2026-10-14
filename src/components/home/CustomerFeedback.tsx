import React from 'react';
import { useApp } from '../../context/AppContext';
import { REVIEWS_DATA } from '../../data/reviews';
import { Star, Info, MessageSquare } from 'lucide-react';

export const CustomerFeedback: React.FC = () => {
  const { lang, t } = useApp();

  return (
    <section className="py-16 bg-[#141820] border-b border-[#20252C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header & Pitch Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#D62828]">
              {t.feedback.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              {t.feedback.title}
            </h2>
          </div>

          {/* Honest pitch indicator */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#20252C] border border-[#2B333F] text-xs text-[#AAB1BA]">
            <Info className="w-3.5 h-3.5 text-[#D62828] shrink-0" />
            <span>{t.feedback.demoBadge}</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-[#181D25] border border-[#262D38] flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Rating stars */}
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#F5F6F7]/90 leading-relaxed italic">
                  "{rev.text[lang]}"
                </p>
              </div>

              {/* Author & Service Meta */}
              <div className="pt-3 border-t border-[#262D38] space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">{rev.author}</span>
                  <span className="text-[11px] text-[#AAB1BA]">{rev.city}</span>
                </div>
                <p className="text-[11px] text-[#AAB1BA] truncate">
                  {rev.vehicle} · {rev.servicePurchased[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
