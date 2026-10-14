import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { MessageSquare, X } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

export const FloatingWhatsApp: React.FC = () => {
  const { lang } = useApp();
  const [showTooltip, setShowTooltip] = useState(true);

  const directUrl = buildWhatsAppUrl(
    lang === 'ar'
      ? `السلام عليكم، أود الاستفسار عن توفر الإطارات والجنوط وأسعارها بالدار البيضاء.`
      : `Bonjour Atlas Pneus, je souhaite me renseigner sur vos pneus et jantes en stock.`
  );

  return (
    <div className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-40 flex flex-col items-end rtl:items-start pointer-events-auto">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="mb-2 relative bg-[#181D25] text-white text-xs py-2 px-3.5 rounded-xl border border-[#2B333F] shadow-xl max-w-[210px] hidden sm:flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="leading-tight">
            {lang === 'ar' ? 'استشارة فورية وعرض سعر مخصص' : 'Conseil direct & devis rapide WhatsApp'}
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#AAB1BA] hover:text-white p-0.5 ml-1"
            aria-label="Fermer bulle"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={directUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-slate-950 flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
        aria-label="Contacter Atlas Pneus sur WhatsApp"
        title="WhatsApp Atlas Pneus"
      >
        <MessageSquare className="w-6 h-6 fill-current text-white" />
      </a>
    </div>
  );
};
