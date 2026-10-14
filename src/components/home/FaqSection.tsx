import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { FAQ_DATA } from '../../data/faq';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { buildWhatsAppUrl } from '../../lib/whatsapp';

export const FaqSection: React.FC = () => {
  const { lang, t } = useApp();
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const handleWhatsAppHelp = () => {
    const msg =
      lang === 'ar'
        ? `السلام عليكم، لدي استفسار إضافي حول خدمات ومنتجات أطلس للإطارات.`
        : `Bonjour, j'ai une question spécifique concernant vos pneus ou votre atelier.`;
    const url = buildWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-[#111318] border-b border-[#20252C]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D62828]">
            {t.faq.tag}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {t.faq.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#AAB1BA]">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-xl bg-[#181D25] border border-[#262D38] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-5 text-left rtl:text-right flex items-center justify-between gap-4 cursor-pointer hover:bg-[#1D222A] transition-colors"
                >
                  <span className="text-sm font-bold text-white leading-snug">
                    {item.question[lang]}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#AAB1BA] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#D62828]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-[#AAB1BA] leading-relaxed border-t border-[#262D38]/60 pt-3">
                    {item.answer[lang]}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct question button */}
        <div className="text-center pt-2">
          <button
            onClick={handleWhatsAppHelp}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#AAB1BA] hover:text-white transition-colors cursor-pointer group"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
            <span className="underline underline-offset-4 decoration-[#323A46] group-hover:decoration-white">
              Une autre question ? Posez-la directement à notre technicien sur WhatsApp
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};
