import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { formatMAD } from '../../lib/currency';
import { buildCartQuoteMessage, buildWhatsAppUrl } from '../../lib/whatsapp';
import { X, Trash2, Plus, Minus, MessageSquare, Wrench, ShieldAlert } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    lang,
    t,
    cart,
    removeFromCart,
    updateQuantity,
    toggleFitting,
    clearCart,
    isCartOpen,
    setIsCartOpen,
    cartCount,
    cartSubtotal,
    cartFittingTotal,
    setActivePage,
  } = useApp();

  const [notes, setNotes] = useState('');

  if (!isCartOpen) return null;

  const total = cartSubtotal + cartFittingTotal;

  const handleWhatsAppSend = () => {
    const message = buildCartQuoteMessage(cart, cartSubtotal, cartFittingTotal, notes, lang);
    const url = buildWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 rtl:right-auto rtl:left-0 max-w-full flex pl-10 rtl:pl-0 rtl:pr-10">
        <div className="w-screen max-w-md bg-[#161920] border-l rtl:border-l-0 rtl:border-r border-[#20252C] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#20252C] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-white">{t.cart.title}</h2>
              {cartCount > 0 && (
                <span className="text-xs bg-[#20252C] text-[#AAB1BA] px-2 py-0.5 rounded-full tabular-nums">
                  {cartCount} {t.common.pieces}
                </span>
              )}
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-lg text-[#AAB1BA] hover:text-white hover:bg-[#20252C] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items list */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {cart.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#20252C] text-[#AAB1BA] flex items-center justify-center mx-auto">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <p className="text-sm text-[#AAB1BA]">{t.cart.emptyMessage}</p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setActivePage('tires');
                  }}
                  className="px-4 py-2 bg-[#D62828] text-white text-xs font-semibold rounded-lg hover:bg-[#B71C1C] transition-colors cursor-pointer"
                >
                  {t.cart.emptyCta}
                </button>
              </div>
            ) : (
              <>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl bg-[#1D222A] border border-[#262D38] space-y-3"
                  >
                    <div className="flex items-start gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover bg-black/40 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-semibold text-white truncate">{item.name}</h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-[#AAB1BA] hover:text-[#D62828] transition-colors p-1"
                            title="Supprimer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-[#AAB1BA] truncate">{item.spec}</p>
                        <p className="text-sm font-bold text-white tabular-nums mt-1">
                          {formatMAD(item.unitPriceMAD, lang)}
                        </p>
                      </div>
                    </div>

                    {/* Quantity & Fitting control */}
                    <div className="pt-2 border-t border-[#262D38] flex items-center justify-between text-xs">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#323A46] rounded-md bg-[#161920]">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-[#AAB1BA] hover:text-white transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 font-semibold text-white tabular-nums text-xs">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-[#AAB1BA] hover:text-white transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Fitting toggle */}
                      <button
                        onClick={() => toggleFitting(item.id)}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer border ${
                          item.withFitting
                            ? 'bg-[#D62828]/15 border-[#D62828]/40 text-[#F5F6F7]'
                            : 'bg-[#161920] border-[#323A46] text-[#AAB1BA]'
                        }`}
                      >
                        <Wrench className="w-3 h-3 text-[#D62828]" />
                        <span>{item.withFitting ? 'Montage inclus' : 'Sans montage'}</span>
                      </button>
                    </div>
                  </div>
                ))}

                {/* Customer Notes */}
                <div className="pt-2">
                  <label className="block text-xs font-medium text-[#AAB1BA] mb-1.5">
                    {lang === 'ar' ? 'ملاحظات إضافية (اختياري)' : 'Précisions sur votre véhicule (optionnel)'}
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={t.cart.notesPlaceholder}
                    rows={2}
                    className="w-full px-3 py-2 bg-[#1A1F27] border border-[#2C3440] rounded-lg text-xs text-white placeholder-[#AAB1BA]/60 focus:outline-none focus:border-[#D62828]"
                  />
                </div>
              </>
            )}
          </div>

          {/* Footer summary & WhatsApp CTA */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#20252C] bg-[#12151B] space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#AAB1BA]">
                  <span>{t.cart.subtotal}</span>
                  <span className="tabular-nums font-medium text-white">{formatMAD(cartSubtotal, lang)}</span>
                </div>
                {cartFittingTotal > 0 && (
                  <div className="flex justify-between text-[#AAB1BA]">
                    <span>Atelier (montage & équilibrage)</span>
                    <span className="tabular-nums font-medium text-white">{formatMAD(cartFittingTotal, lang)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-[#20252C]">
                  <span>{t.cart.totalEstimated}</span>
                  <span className="text-[#D62828] tabular-nums">{formatMAD(total, lang)}</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-[11px] text-[#AAB1BA]/80">
                <ShieldAlert className="w-3.5 h-3.5 text-[#D62828] shrink-0 mt-0.5" />
                <span>{t.cart.disclaimer}</span>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-slate-950 font-bold text-sm rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>{t.cart.generateWhatsApp}</span>
                </button>

                <div className="flex justify-between items-center text-xs pt-1">
                  <button
                    onClick={clearCart}
                    className="text-[#AAB1BA] hover:text-white transition-colors cursor-pointer"
                  >
                    {t.cart.clearCart}
                  </button>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-[#AAB1BA] hover:text-white transition-colors cursor-pointer"
                  >
                    {t.common.close}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
