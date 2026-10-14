import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { formatMAD } from '../../lib/currency';
import { buildTireQuoteMessage, buildRimQuoteMessage, buildWhatsAppUrl } from '../../lib/whatsapp';
import { X, Check, ShieldCheck, Wrench, MessageSquare, Plus, Minus, Info } from 'lucide-react';
import { TireProduct, RimProduct } from '../../types';

export const ProductDetailModal: React.FC = () => {
  const {
    lang,
    t,
    selectedTireForModal,
    setSelectedTireForModal,
    selectedRimForModal,
    setSelectedRimForModal,
    addToCart,
    selectedVehicle,
  } = useApp();

  const [quantity, setQuantity] = useState(4);
  const [withFitting, setWithFitting] = useState(true);

  const product = selectedTireForModal || selectedRimForModal;
  if (!product) return null;

  const isTire = 'aspectRatio' in product;
  const tire = isTire ? (product as TireProduct) : null;
  const rim = !isTire ? (product as RimProduct) : null;

  const handleClose = () => {
    setSelectedTireForModal(null);
    setSelectedRimForModal(null);
    setQuantity(4);
  };

  const handleWhatsAppQuote = () => {
    let msg = '';
    if (tire) {
      msg = buildTireQuoteMessage(tire, quantity, withFitting, lang);
    } else if (rim) {
      msg = buildRimQuoteMessage(rim, selectedVehicle ? selectedVehicle.name : '', quantity, lang);
    }
    const url = buildWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, withFitting);
    handleClose();
  };

  const unitPrice = tire ? tire.priceMAD : rim ? rim.pricePerUnitMAD : 0;
  const totalPrice = unitPrice * quantity;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#181D25] border border-[#262D38] rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-20 p-2 rounded-lg bg-[#111318]/80 text-[#AAB1BA] hover:text-white hover:bg-[#20252C] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          
          {/* Left Column: Image */}
          <div className="md:col-span-5 flex flex-col items-center justify-center bg-[#111318] rounded-xl p-4 border border-[#20252C]">
            <img
              src={product.image}
              alt={`${product.brand} ${product.model}`}
              className="w-full h-56 object-contain"
            />
            <div className="mt-3 text-center">
              <span className="text-xs text-[#AAB1BA]">
                {product.inStock ? (
                  <span className="text-emerald-400 font-medium">● En stock atelier</span>
                ) : (
                  <span className="text-amber-400 font-medium">● Sur commande 24-48h</span>
                )}
              </span>
            </div>
          </div>

          {/* Right Column: Information & Actions */}
          <div className="md:col-span-7 space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D62828]">
                {product.brand}
              </span>
              <h3 className="text-xl font-extrabold text-white leading-tight">
                {product.model}
              </h3>
              
              {tire && (
                <p className="text-sm font-bold text-white font-mono mt-1">
                  {tire.width}/{tire.aspectRatio} R{tire.diameter} {tire.loadIndex}{tire.speedRating}
                  {tire.reinforced && <span className="text-[#AAB1BA] ml-1">XL</span>}
                </p>
              )}

              {rim && (
                <p className="text-sm font-bold text-white font-mono mt-1">
                  {rim.diameter}" · PCD {rim.pcd} · ET{rim.offsetET} ({rim.finish})
                </p>
              )}
            </div>

            <p className="text-xs text-[#AAB1BA] leading-relaxed">
              {product.description[lang]}
            </p>

            {/* Technical Specifications Grid */}
            <div className="p-3 bg-[#111318] rounded-xl border border-[#262D38] grid grid-cols-2 gap-2 text-xs font-mono">
              {tire && (
                <>
                  <div>
                    <span className="text-[#AAB1BA] block text-[10px]">LARGEUR / PROFIL</span>
                    <span className="text-white font-bold">{tire.width} / {tire.aspectRatio}</span>
                  </div>
                  <div>
                    <span className="text-[#AAB1BA] block text-[10px]">DIAMÈTRE JANTE</span>
                    <span className="text-white font-bold">R{tire.diameter} pouces</span>
                  </div>
                  <div>
                    <span className="text-[#AAB1BA] block text-[10px]">INDICE CHARGE / VITESSE</span>
                    <span className="text-white font-bold">{tire.loadIndex}{tire.speedRating}</span>
                  </div>
                  <div>
                    <span className="text-[#AAB1BA] block text-[10px]">SAISON</span>
                    <span className="text-white font-bold">{tire.season}</span>
                  </div>
                </>
              )}

              {rim && (
                <>
                  <div>
                    <span className="text-[#AAB1BA] block text-[10px]">ENTRAXE (PCD)</span>
                    <span className="text-white font-bold">{rim.pcd}</span>
                  </div>
                  <div>
                    <span className="text-[#AAB1BA] block text-[10px]">LARGEUR & DÉPORT</span>
                    <span className="text-white font-bold">{rim.width}J · ET{rim.offsetET}</span>
                  </div>
                  <div>
                    <span className="text-[#AAB1BA] block text-[10px]">ALÉSAGE CENTRAL</span>
                    <span className="text-white font-bold">{rim.centerBore} mm</span>
                  </div>
                  <div>
                    <span className="text-[#AAB1BA] block text-[10px]">FINITION</span>
                    <span className="text-white font-bold">{rim.finish}</span>
                  </div>
                </>
              )}
            </div>

            {/* Price & Quantity Calculation */}
            <div className="pt-2 border-t border-[#262D38] space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#AAB1BA]">Prix unitaire indicatif</span>
                  <p className="text-lg font-bold text-white tabular-nums">
                    {formatMAD(unitPrice, lang)}
                  </p>
                </div>

                {/* Quantity Stepper */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#AAB1BA]">Quantité :</span>
                  <div className="flex items-center border border-[#323A46] rounded-md bg-[#111318]">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-1 text-[#AAB1BA] hover:text-white"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-bold text-white tabular-nums">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-1 text-[#AAB1BA] hover:text-white"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Total estimation */}
              <div className="flex items-center justify-between text-xs font-semibold text-white bg-[#20252C] px-3 py-2 rounded-lg">
                <span>Total estimé ({quantity} {isTire ? 'pneus' : 'jantes'}) :</span>
                <span className="text-[#D62828] text-sm tabular-nums">
                  {formatMAD(totalPrice, lang)}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="py-3 px-4 bg-[#20252C] hover:bg-[#2A313C] text-[#F5F6F7] hover:text-white text-xs font-semibold rounded-xl border border-[#323A46] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>{t.tiresSection.addToCart}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppQuote}
                  className="py-3 px-4 bg-[#25D366] hover:bg-[#20BA5A] text-slate-950 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Devis sur WhatsApp</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
