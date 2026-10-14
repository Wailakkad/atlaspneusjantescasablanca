import React from 'react';
import { RimProduct } from '../../types';
import { useApp } from '../../context/AppContext';
import { formatMAD } from '../../lib/currency';
import { buildRimQuoteMessage, buildWhatsAppUrl } from '../../lib/whatsapp';
import { MessageSquare, Plus, CheckCircle, ShieldAlert } from 'lucide-react';

interface RimCardProps {
  rim: RimProduct;
}

export const RimCard: React.FC<RimCardProps> = ({ rim }) => {
  const { lang, t, addToCart, setSelectedRimForModal, selectedVehicle } = useApp();

  const isVehicleCompatible = selectedVehicle
    ? rim.compatibleVehicles.includes(selectedVehicle.id)
    : null;

  const handleWhatsAppQuote = (e: React.MouseEvent) => {
    e.stopPropagation();
    const vehicleText = selectedVehicle ? selectedVehicle.name : '';
    const msg = buildRimQuoteMessage(rim, vehicleText, 4, lang);
    const url = buildWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(rim, 4, true);
  };

  return (
    <div
      onClick={() => setSelectedRimForModal(rim)}
      className="group relative bg-[#181D25] border border-[#262D38] hover:border-[#D62828]/50 rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 flex flex-col cursor-pointer shadow-sm hover:shadow-xl"
    >
      {/* Product Image */}
      <div className="relative aspect-[4/3] bg-[#111318] overflow-hidden flex items-center justify-center p-4">
        <img
          src={rim.image}
          alt={`${rim.brand} ${rim.model} ${rim.diameter} pouces`}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Compatibility indicator if vehicle selected */}
        {selectedVehicle && (
          <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 flex items-center gap-1.5 text-[11px] font-medium px-2 py-1 rounded-md bg-[#111318]/90 backdrop-blur-xs">
            {isVehicleCompatible ? (
              <>
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">{t.rimsSection.verifiedFitment}</span>
              </>
            ) : (
              <>
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-amber-300">{t.rimsSection.toConfirm}</span>
              </>
            )}
          </div>
        )}

        {/* Finish label quiet text */}
        <div className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 text-[11px] font-medium text-[#AAB1BA] bg-[#111318]/80 backdrop-blur-xs px-2 py-0.5 rounded">
          {rim.finish}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-[#AAB1BA]">
            <span className="font-bold uppercase tracking-wider text-white/90">{rim.brand}</span>
            <span className="font-mono text-white/90 font-bold">{rim.diameter} pouces</span>
          </div>

          <h3 className="text-base font-bold text-white group-hover:text-[#D62828] transition-colors leading-snug">
            {rim.model}
          </h3>

          {/* Technical Specs: PCD, Width, ET */}
          <div className="flex items-center gap-2 text-xs text-[#AAB1BA] font-mono pt-1">
            <span>PCD {rim.pcd}</span>
            <span aria-hidden="true">·</span>
            <span>{rim.width}J</span>
            <span aria-hidden="true">·</span>
            <span>ET{rim.offsetET}</span>
          </div>
        </div>

        {/* Pricing & CTA Controls */}
        <div className="pt-3 border-t border-[#262D38] space-y-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-xs text-[#AAB1BA]">{t.rimsSection.unitPrice}</span>
              <p className="text-lg font-bold text-white tabular-nums">
                {formatMAD(rim.pricePerUnitMAD, lang)}
              </p>
            </div>

            <div className="text-right">
              <span className="text-xs text-[#AAB1BA]">{t.rimsSection.setOfFour}</span>
              <p className="text-sm font-bold text-[#D62828] tabular-nums">
                {formatMAD(rim.priceSetOfFourMAD, lang)}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              type="button"
              onClick={handleAddToCart}
              className="py-2.5 px-3 bg-[#20252C] hover:bg-[#2A313C] text-[#F5F6F7] hover:text-white text-xs font-semibold rounded-lg border border-[#323A46] transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'طلب طقم' : 'Pack 4 jantes'}</span>
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
