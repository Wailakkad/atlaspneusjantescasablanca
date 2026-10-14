import React from 'react';
import { useApp } from '../../context/AppContext';
import { BUSINESS_CONFIG } from '../../config/business';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { Phone, MessageSquare, MapPin, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { lang, t, setActivePage } = useApp();

  const generalWhatsAppUrl = buildWhatsAppUrl(
    lang === 'ar'
      ? `السلام عليكم، أود الحصول على معلومات إضافية حول خدمات أطلس للإطارات والجنوط.`
      : `Bonjour, je souhaite des informations sur vos disponibilités et services à Casablanca.`
  );

  return (
    <footer className="bg-[#0C0E12] border-t border-[#20252C] text-[#AAB1BA] text-sm">
      {/* Upper footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Presentation */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#D62828] flex items-center justify-center font-bold text-white text-sm">
                A
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                ATLAS <span className="text-[#D62828]">PNEUS</span> & JANTES
              </span>
            </div>
            <p className="text-xs leading-relaxed text-[#AAB1BA]">
              {BUSINESS_CONFIG.tagline[lang]}
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-white hover:text-[#D62828] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp : <strong className="tabular-nums">{BUSINESS_CONFIG.whatsappDisplay}</strong></span>
              </a>
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="inline-flex items-center gap-2 text-xs font-medium text-white hover:text-[#D62828] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D62828]" />
                <span>Fixe : <strong className="tabular-nums">{BUSINESS_CONFIG.phoneDisplay}</strong></span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Products & Rims */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {lang === 'ar' ? 'المنتجات والكتالوج' : 'Catalogue Produits'}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => setActivePage('tires')}
                  className="hover:text-white transition-colors cursor-pointer text-left rtl:text-right"
                >
                  {t.nav.tires} (15", 16", 17", 18", 19", 20")
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('rims')}
                  className="hover:text-white transition-colors cursor-pointer text-left rtl:text-right"
                >
                  {t.nav.rims} (Entraxes 5x112, 5x120, 5x108...)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('configurator')}
                  className="hover:text-white transition-colors cursor-pointer text-left rtl:text-right"
                >
                  {t.nav.configurator}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('guides')}
                  className="hover:text-white transition-colors cursor-pointer text-left rtl:text-right"
                >
                  {t.nav.guides}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Workshop Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {lang === 'ar' ? 'خدمات الورشة' : 'Atelier & Entretien'}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => setActivePage('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left rtl:text-right"
                >
                  {lang === 'ar' ? 'تركيب الإطارات بدون خدوش' : 'Montage pneus sans rayure'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left rtl:text-right"
                >
                  {lang === 'ar' ? 'موازنة ليزرية ديناميكية 3D' : 'Équilibrage dynamique haute précision'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left rtl:text-right"
                >
                  {lang === 'ar' ? 'ضبط زوايا العجلات والمحاذاة' : 'Géométrie et parallélisme 3D'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left rtl:text-right"
                >
                  {lang === 'ar' ? 'إصلاح الثقوب الداخلية المعتمدة' : 'Réparation crevaison sécurisée'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Centre & Opening Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {lang === 'ar' ? 'موقع المركز والمواعيد' : 'Centre Casablanca'}
            </h4>
            <div className="flex items-start gap-2 text-xs">
              <MapPin className="w-4 h-4 text-[#D62828] shrink-0 mt-0.5" />
              <span>{BUSINESS_CONFIG.location.address}</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <Clock className="w-4 h-4 text-[#D62828] shrink-0 mt-0.5" />
              <div>
                <p>Du Lundi au Vendredi : {BUSINESS_CONFIG.openingHours.weekdays}</p>
                <p>Samedi : {BUSINESS_CONFIG.openingHours.saturday}</p>
                <p className="text-[#AAB1BA]/70">Dimanche : {BUSINESS_CONFIG.openingHours.sunday}</p>
              </div>
            </div>
            <a
              href={BUSINESS_CONFIG.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#D62828] hover:text-[#B71C1C] font-semibold pt-1"
            >
              <span>{t.workshop.directionsBtn}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Middle banner: Commercial Demo Notice */}
      <div className="bg-[#141820] border-y border-[#20252C] py-3 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-[#AAB1BA]">
          <ShieldCheck className="w-4 h-4 text-[#D62828] shrink-0" />
          <span>{BUSINESS_CONFIG.demoNotice[lang]}</span>
        </div>
      </div>

      {/* Lower footer copyright & legal links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AAB1BA]/80">
        <div>
          © {new Date().getFullYear()} {BUSINESS_CONFIG.name} · Tous droits réservés.
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={() => setActivePage('legal')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {t.legal.legalNotice}
          </button>
          <button
            onClick={() => setActivePage('privacy')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {t.legal.privacyPolicy}
          </button>
          <button
            onClick={() => setActivePage('terms')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {t.legal.termsOfService}
          </button>
        </div>
      </div>
    </footer>
  );
};
