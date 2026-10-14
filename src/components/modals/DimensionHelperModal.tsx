import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, HelpCircle, Check, MapPin } from 'lucide-react';

export const DimensionHelperModal: React.FC = () => {
  const { lang, isDimensionHelperOpen, setIsDimensionHelperOpen } = useApp();

  if (!isDimensionHelperOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity"
        onClick={() => setIsDimensionHelperOpen(false)}
      />

      <div className="relative w-full max-w-xl bg-[#181D25] border border-[#262D38] rounded-2xl shadow-2xl p-6 sm:p-8 z-10 space-y-6">
        
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#20252C] text-[#D62828] flex items-center justify-center border border-[#2B333F]">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                {lang === 'ar' ? 'أين تجد مقاس إطارات سيارتك؟' : 'Où trouver la dimension de vos pneus ?'}
              </h3>
              <p className="text-xs text-[#AAB1BA]">
                {lang === 'ar' ? 'دليل عملي سريع لقراءة القياسات الصحيحة' : 'Guide pratique pour ne jamais vous tromper'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsDimensionHelperOpen(false)}
            className="p-1.5 rounded-lg text-[#AAB1BA] hover:text-white hover:bg-[#20252C] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Callout for 205/55 R16 91V */}
        <div className="p-5 rounded-xl bg-[#111318] border border-[#262D38] space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D62828] block text-center">
            Exemple type : 205 / 55 R16 91V
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
            <div className="p-2.5 rounded-lg bg-[#181D25] border border-[#2B333F]">
              <span className="text-base font-bold text-white font-mono block">205</span>
              <span className="text-[10px] text-[#AAB1BA]">Largeur (mm)</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#181D25] border border-[#2B333F]">
              <span className="text-base font-bold text-white font-mono block">55</span>
              <span className="text-[10px] text-[#AAB1BA]">Hauteur (% de larg.)</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#181D25] border border-[#2B333F]">
              <span className="text-base font-bold text-white font-mono block">R16</span>
              <span className="text-[10px] text-[#AAB1BA]">Diamètre jante (pouces)</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#181D25] border border-[#2B333F]">
              <span className="text-base font-bold text-white font-mono block">91V</span>
              <span className="text-[10px] text-[#AAB1BA]">Charge (91) / Vitesse (V)</span>
            </div>
          </div>
        </div>

        {/* 2 Locations on the car */}
        <div className="space-y-3 text-xs">
          <div className="p-3.5 rounded-xl bg-[#1D222A] border border-[#2B333F] flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#111318] text-[#D62828] shrink-0 font-bold font-mono">
              1
            </div>
            <div>
              <strong className="text-white block font-semibold">Sur le flanc de vos pneus actuels</strong>
              <p className="text-[#AAB1BA] mt-0.5">
                Regardez l'inscription moulée en relief sur le bord extérieur en caoutchouc.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#1D222A] border border-[#2B333F] flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#111318] text-[#D62828] shrink-0 font-bold font-mono">
              2
            </div>
            <div>
              <strong className="text-white block font-semibold">Sur l'étiquette constructeur du véhicule</strong>
              <p className="text-[#AAB1BA] mt-0.5">
                Située dans le montant intérieur de la portière conducteur, ou à l'intérieur de la trappe à carburant.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2">
          <button
            onClick={() => setIsDimensionHelperOpen(false)}
            className="w-full py-2.5 bg-[#D62828] hover:bg-[#B71C1C] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
          >
            J'ai compris, revenir à la recherche
          </button>
        </div>

      </div>
    </div>
  );
};
