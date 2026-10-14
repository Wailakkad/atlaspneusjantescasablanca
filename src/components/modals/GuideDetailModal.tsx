import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Clock, BookOpen, CheckCircle2, MessageSquare } from 'lucide-react';
import { buildWhatsAppUrl } from '../../lib/whatsapp';

export const GuideDetailModal: React.FC = () => {
  const { lang, selectedGuideForModal, setSelectedGuideForModal } = useApp();

  if (!selectedGuideForModal) return null;

  const handleClose = () => {
    setSelectedGuideForModal(null);
  };

  const handleAskAdvice = () => {
    const msg =
      lang === 'ar'
        ? `السلام عليكم، قرأت مقالكم الفني حول "${selectedGuideForModal.title.ar}" وأود استشارتكم حول سيارتي.`
        : `Bonjour, j'ai lu votre guide technique "${selectedGuideForModal.title.fr}" et je souhaite un conseil pour mon véhicule.`;
    const url = buildWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-2xl bg-[#181D25] border border-[#262D38] rounded-2xl shadow-2xl p-6 sm:p-8 z-10 space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-[#AAB1BA]">
              <span className="font-bold uppercase tracking-wider text-[#D62828]">Guide Atelier</span>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{selectedGuideForModal.readingTime}</span>
              </div>
            </div>
            <h3 className="text-xl font-extrabold text-white leading-tight">
              {selectedGuideForModal.title[lang]}
            </h3>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-[#AAB1BA] hover:text-white hover:bg-[#20252C] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="text-xs sm:text-sm text-[#F5F6F7]/90 leading-relaxed whitespace-pre-line space-y-4">
          {selectedGuideForModal.content[lang]}
        </div>

        {/* Key takeaways bullet points */}
        <div className="p-4 rounded-xl bg-[#111318] border border-[#262D38] space-y-2">
          <span className="text-xs font-bold text-white block uppercase tracking-wider">
            Points clés à retenir :
          </span>
          <ul className="space-y-2 text-xs text-[#AAB1BA]">
            {selectedGuideForModal.bulletPoints[lang].map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAskAdvice}
            className="flex-1 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-slate-950 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Poser une question sur ce sujet via WhatsApp</span>
          </button>

          <button
            onClick={handleClose}
            className="px-5 py-3 bg-[#20252C] hover:bg-[#2A313C] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
          >
            Fermer l'article
          </button>
        </div>

      </div>
    </div>
  );
};
