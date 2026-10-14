import React from 'react';
import { useApp } from '../../context/AppContext';
import { WORKSHOP_SERVICES } from '../../data/services';
import { WorkshopService } from '../../types';
import { Disc, Scale, Compass, ShieldAlert, Activity, CheckCircle2, Calendar, MessageSquare, Clock } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Disc,
  Scale,
  Compass,
  ShieldAlert,
  Activity,
  CheckCircle2,
};

export const ServicesSection: React.FC = () => {
  const { lang, t, setSelectedServiceForAppointment } = useApp();

  return (
    <section id="services" className="py-16 bg-[#141820] border-b border-[#20252C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#D62828]">
              {t.services.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              {t.services.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#AAB1BA] max-w-2xl mt-1">
              {t.services.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#AAB1BA]">
            <Clock className="w-4 h-4 text-[#D62828]" />
            <span>Atelier Casablanca ouvert du Lundi au Samedi</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKSHOP_SERVICES.map((service) => {
            const Icon = iconMap[service.iconName] || Disc;

            return (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-[#181D25] border border-[#262D38] hover:border-[#D62828]/50 transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#20252C] text-[#D62828] flex items-center justify-center border border-[#2F3745]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-white/90 tabular-nums">
                      {service.priceDisplay[lang]}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white leading-snug">
                    {service.title[lang]}
                  </h3>

                  <p className="text-xs text-[#AAB1BA] leading-relaxed">
                    {service.shortDescription[lang]}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-3 border-t border-[#262D38] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#AAB1BA]/80">
                    {service.estimatedDuration}
                  </span>

                  <button
                    onClick={() => setSelectedServiceForAppointment(service)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#20252C] hover:bg-[#D62828] text-white font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{t.services.bookAppointment}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
