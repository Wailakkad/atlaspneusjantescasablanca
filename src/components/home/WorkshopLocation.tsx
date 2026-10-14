import React from 'react';
import { useApp } from '../../context/AppContext';
import { BUSINESS_CONFIG } from '../../config/business';
import { WORKSHOP_SERVICES } from '../../data/services';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { MapPin, Clock, Phone, MessageSquare, ArrowUpRight, Calendar, Check, AlertCircle } from 'lucide-react';

export const WorkshopLocation: React.FC = () => {
  const { lang, t, setSelectedServiceForAppointment } = useApp();

  const handleGeneralAppointment = () => {
    setSelectedServiceForAppointment(WORKSHOP_SERVICES[0]);
  };

  const handleWhatsAppContact = () => {
    const msg =
      lang === 'ar'
        ? `السلام عليكم، أود معرفة موقع ورشتكم بالدار البيضاء والمواعيد المتاحة لتركيب الإطارات.`
        : `Bonjour, je souhaite connaître l'emplacement exact de votre atelier à Casablanca et les disponibilités pour un montage.`;
    const url = buildWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="workshop" className="py-16 bg-[#111318] border-b border-[#20252C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Header */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#D62828]">
            {t.workshop.tag}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            {t.workshop.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#AAB1BA] max-w-2xl mt-1">
            {t.workshop.subtitle}
          </p>
        </div>

        {/* Workshop Card Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Practical Info */}
          <div className="lg:col-span-7 bg-[#181D25] border border-[#262D38] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* Address with demo notice */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#20252C] text-[#D62828] flex items-center justify-center shrink-0 border border-[#2F3745]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white">{t.workshop.addressTitle}</h4>
                  <p className="text-xs text-[#F5F6F7]">{BUSINESS_CONFIG.location.address}</p>
                  <p className="text-xs text-[#AAB1BA]">{BUSINESS_CONFIG.location.city} — Zone Roches Noires / Ain Sebaâ</p>
                  
                  <div className="flex items-center gap-1.5 text-[11px] text-amber-400/90 pt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{t.workshop.pendingAddress}</span>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#20252C] text-[#D62828] flex items-center justify-center shrink-0 border border-[#2F3745]">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-xs">
                  <h4 className="text-sm font-bold text-white">{t.workshop.hoursTitle}</h4>
                  <p className="text-[#AAB1BA]">
                    Lundi – Vendredi : <strong className="text-white font-mono">{BUSINESS_CONFIG.openingHours.weekdays}</strong>
                  </p>
                  <p className="text-[#AAB1BA]">
                    Samedi : <strong className="text-white font-mono">{BUSINESS_CONFIG.openingHours.saturday}</strong>
                  </p>
                  <p className="text-[#AAB1BA]/70">
                    Dimanche : {BUSINESS_CONFIG.openingHours.sunday}
                  </p>
                </div>
              </div>

              {/* Direct Phone & WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#20252C] text-[#25D366] flex items-center justify-center shrink-0 border border-[#2F3745]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-xs">
                  <h4 className="text-sm font-bold text-white">{t.workshop.whatsappTitle}</h4>
                  <p className="text-[#AAB1BA]">
                    Contact direct : <strong className="text-white font-mono">{BUSINESS_CONFIG.whatsappDisplay}</strong>
                  </p>
                  <p className="text-[#AAB1BA]">
                    Téléphone fixe atelier : <strong className="text-white font-mono">{BUSINESS_CONFIG.phoneDisplay}</strong>
                  </p>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-[#262D38] flex flex-wrap items-center gap-4">
              <button
                onClick={handleGeneralAppointment}
                className="px-5 py-2.5 bg-[#D62828] hover:bg-[#B71C1C] text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.workshop.bookBtn}</span>
              </button>

              <button
                onClick={handleWhatsAppContact}
                className="px-5 py-2.5 bg-[#20252C] hover:bg-[#2A313C] text-[#F5F6F7] hover:text-white text-xs font-semibold rounded-xl border border-[#323A46] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Contacter l'atelier sur WhatsApp</span>
              </button>

              <a
                href={BUSINESS_CONFIG.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#AAB1BA] hover:text-white inline-flex items-center gap-1 transition-colors"
              >
                <span>{t.workshop.directionsBtn}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Atelier Equipment Showcase & Waiting Lounge */}
          <div className="lg:col-span-5 bg-[#181D25] border border-[#262D38] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-base font-bold text-white mb-2">
                Équipement d'atelier certifié
              </h3>
              <p className="text-xs text-[#AAB1BA] leading-relaxed">
                Notre centre de montage à Casablanca est équipé pour intervenir sur les véhicules les plus récents :
              </p>

              <ul className="mt-4 space-y-2.5 text-xs text-[#F5F6F7]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Démonte-pneus semi-automatique avec bras d'appui basse pression</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Banc d'équilibrage dynamique 3D à visée laser</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Clé dynamométrique étalonnée pour un serrage au couple constructeur</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Outil de programmation et réinitialisation de valves TPMS</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Salon d'attente climatisé avec Wi-Fi pour les clients</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#111318] border border-[#262D38] text-xs text-[#AAB1BA] space-y-1">
              <span className="font-bold text-white block">Accès facile & Parking réservé</span>
              <p>Possibilité de dépose sans rendez-vous préalable selon l'affluence du jour.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
