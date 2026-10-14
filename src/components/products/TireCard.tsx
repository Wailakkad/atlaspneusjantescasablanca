import React from 'react';
import { TireProduct } from '../../types';
import { useApp } from '../../context/AppContext';
import { formatMAD } from '../../lib/currency';
import { buildTireQuoteMessage, buildWhatsAppUrl } from '../../lib/whatsapp';
import { Eye, MessageSquare, Plus, Check, CheckCircle2, Clock } from 'lucide-react';

interface TireCardProps {
  tire: TireProduct;
}

export const TireCard: React.FC<TireCardProps> = ({ tire }) => {
  const { lang, t, addToCart, setSelectedTireForModal } = useApp();

  const dimensionStr = `${tire.width}/${tire.aspectRatio} R${tire.diameter}`;
  const loadSpeedStr = `${tire.loadIndex}${tire.speedRating}`;

  const handleWhatsAppQuote = (e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = buildTireQuoteMessage(tire, 4, true, lang);
    const url = buildWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(tire, 4, true);
  };

  return (
    <div
      onClick={() => setSelectedTireForModal(tire)}
      className="group relative bg-[#181D25] border border-[#262D38] hover:border-[#D62828]/50 rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 flex flex-col cursor-pointer shadow-sm hover:shadow-xl"
    >
      {/* Product Image Container */}
      <div className="relative aspect-[4/3] bg-[#111318] overflow-hidden flex items-center justify-center p-4">
        <img
          src={tire.image}
          alt={`${tire.brand} ${tire.model} ${dimensionStr}`}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Quiet availability metadata label */}
        <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 flex items-center gap-1.5 text-[11px] font-medium text-white/90 bg-[#111318]/80 backdrop-blur-xs px-2 py-1 rounded-md">
          {tire.inStock ? (
            <>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>{t.tiresSection.stockAvailable}</span>
            </>
          ) : (
            <>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span>{t.tiresSection.stockOrder}</span>
            </>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        {/* Brand & Dimension Header */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs text-[#AAB1BA]">
            <span className="font-bold uppercase tracking-wider text-white/90">{tire.brand}</span>
            <div className="flex items-center gap-1.5">
              <span>{tire.season === 'Ete' ? 'Pneu Été' : tire.season}</span>
              {tire.reinforced && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>XL</span>
                </>
              )}
            </div>
          </div>

          <h3 className="text-base font-bold text-white group-hover:text-[#D62828] transition-colors leading-snug">
            {tire.model}
          </h3>

          {/* Technical Dimension Callout */}
          <div className="flex items-baseline gap-2 pt-1">
            <span className="text-sm font-bold text-white font-mono tracking-tight">
              {dimensionStr}
            </span>
            <span className="text-xs text-[#AAB1BA] font-mono">
              {loadSpeedStr}
            </span>
          </div>
        </div>

        {/* Pricing & CTA Controls */}
        <div className="pt-3 border-t border-[#262D38] space-y-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-xs text-[#AAB1BA]">{lang === 'ar' ? 'السعر التقديري' : 'Prix unitaire'}</span>
              <p className="text-lg font-bold text-white tabular-nums">
                {formatMAD(tire.priceMAD, lang)}
                <span className="text-xs text-[#AAB1BA] font-normal font-sans ml-1">
                  {t.tiresSection.perTire}
                </span>
              </p>
            </div>

            <span className="text-[11px] text-[#AAB1BA] text-right">
              {formatMAD(tire.priceMAD * 4, lang)} {lang === 'ar' ? 'لطقم 4 إطارات' : 'pour 4 pneus'}
            </span>
          </div>

          {/* Card Actions */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              type="button"
              onClick={handleAddToCart}
              className="py-2.5 px-3 bg-[#20252C] hover:bg-[#2A313C] text-[#F5F6F7] hover:text-white text-xs font-semibold rounded-lg border border-[#323A46] transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{t.tiresSection.addToCart}</span>
            </button>

            <button
              type="button"
              onClick={handleWhatsAppQuote}
              className="py-2.5 px-3 bg-[#D62828] hover:bg-[#B71C1C] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{t.tiresSection.requestQuote}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
