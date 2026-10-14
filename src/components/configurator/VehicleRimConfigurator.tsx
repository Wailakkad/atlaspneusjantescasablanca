import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { VEHICLE_MAKES, VEHICLE_MODELS } from '../../data/vehicles';
import { RIMS_DATA } from '../../data/rims';
import { RimCard } from '../products/RimCard';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { Car, CheckCircle2, RotateCcw, MessageSquare, ShieldAlert, Sparkles, Filter } from 'lucide-react';

export const VehicleRimConfigurator: React.FC = () => {
  const { lang, t, selectedVehicle, setSelectedVehicle } = useApp();

  const [selectedMake, setSelectedMake] = useState<string>(
    selectedVehicle ? selectedVehicle.makeId : 'volkswagen'
  );
  const [selectedModelId, setSelectedModelId] = useState<string>(
    selectedVehicle ? selectedVehicle.id : 'vw-golf-7'
  );
  const [selectedFinish, setSelectedFinish] = useState<string>('all');
  const [selectedDiameter, setSelectedDiameter] = useState<string>('all');

  const filteredModels = VEHICLE_MODELS.filter((m) => m.makeId === selectedMake);
  const currentModel = VEHICLE_MODELS.find((m) => m.id === selectedModelId) || filteredModels[0];

  // Match rims based on explicit compatibility or PCD
  const matchingRims = RIMS_DATA.filter((rim) => {
    // Check if explicitly marked compatible OR matching bolt pattern PCD
    const matchesVehicle = currentModel
      ? rim.compatibleVehicles.includes(currentModel.id) || rim.pcd === currentModel.rimPcd
      : true;

    const matchesFinish = selectedFinish === 'all' || rim.finishSlug === selectedFinish;
    const matchesDiameter = selectedDiameter === 'all' || rim.diameter.toString() === selectedDiameter;

    return matchesVehicle && matchesFinish && matchesDiameter;
  });

  const handleApplyVehicle = (model: any) => {
    setSelectedVehicle(model);
  };

  const handleResetVehicle = () => {
    setSelectedVehicle(null);
    setSelectedFinish('all');
    setSelectedDiameter('all');
  };

  const handleAskWhatsAppValidation = () => {
    const vName = currentModel ? currentModel.name : 'Véhicule';
    const msg =
      lang === 'ar'
        ? `السلام عليكم، أود التأكد من توافق أطقم الجنوط الألومنيوم المتوفرة لديكم مع سيارتي: ${vName}. يرجى تزويدي بالخيارات والأسعار المتاحة.`
        : `Bonjour Atlas Pneus, je souhaite vérifier les modèles de jantes aluminium compatibles avec ma ${vName}. Merci de me conseiller.`;
    const url = buildWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-12 bg-[#141820] border-b border-[#20252C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D62828] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.configurator.tag}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.configurator.title}
            </h2>
            <p className="text-sm text-[#AAB1BA] max-w-2xl mt-1">
              {t.configurator.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {selectedVehicle && (
              <button
                onClick={handleResetVehicle}
                className="px-3 py-2 bg-[#20252C] hover:bg-[#2A313C] text-[#AAB1BA] hover:text-white text-xs font-medium rounded-lg border border-[#323A46] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.configurator.reset}</span>
              </button>
            )}

            <button
              onClick={handleAskWhatsAppValidation}
              className="px-4 py-2 bg-[#25D366] hover:bg-[#20BA5A] text-slate-950 text-xs font-bold rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>{t.configurator.confirmWhatsApp}</span>
            </button>
          </div>
        </div>

        {/* 5-Step Configurator Bar */}
        <div className="p-6 bg-[#181D25] rounded-2xl border border-[#262D38] shadow-md space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Step 1: Make */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB1BA] mb-2">
                {t.configurator.step1}
              </label>
              <select
                value={selectedMake}
                onChange={(e) => {
                  const newMake = e.target.value;
                  setSelectedMake(newMake);
                  const matching = VEHICLE_MODELS.filter((m) => m.makeId === newMake);
                  if (matching.length > 0) {
                    setSelectedModelId(matching[0].id);
                    handleApplyVehicle(matching[0]);
                  }
                }}
                className="w-full px-3 py-2.5 bg-[#111318] border border-[#2D3542] rounded-xl text-xs font-semibold text-white focus:outline-none focus:border-[#D62828]"
              >
                {VEHICLE_MAKES.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Model */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB1BA] mb-2">
                {t.configurator.step2}
              </label>
              <select
                value={selectedModelId}
                onChange={(e) => {
                  setSelectedModelId(e.target.value);
                  const m = VEHICLE_MODELS.find((mod) => mod.id === e.target.value);
                  if (m) handleApplyVehicle(m);
                }}
                className="w-full px-3 py-2.5 bg-[#111318] border border-[#2D3542] rounded-xl text-xs font-semibold text-white focus:outline-none focus:border-[#D62828]"
              >
                {filteredModels.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Diameter Filter */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB1BA] mb-2">
                Diamètre souhaité
              </label>
              <select
                value={selectedDiameter}
                onChange={(e) => setSelectedDiameter(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#111318] border border-[#2D3542] rounded-xl text-xs font-semibold text-white focus:outline-none focus:border-[#D62828]"
              >
                <option value="all">Tous les diamètres</option>
                <option value="16">16 pouces</option>
                <option value="17">17 pouces</option>
                <option value="18">18 pouces</option>
                <option value="19">19 pouces</option>
                <option value="20">20 pouces</option>
              </select>
            </div>

            {/* Step 4: Finish Style */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB1BA] mb-2">
                Finition & Style
              </label>
              <select
                value={selectedFinish}
                onChange={(e) => setSelectedFinish(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#111318] border border-[#2D3542] rounded-xl text-xs font-semibold text-white focus:outline-none focus:border-[#D62828]"
              >
                <option value="all">{t.rimsSection.allFinishes}</option>
                <option value="black">Noir Satin</option>
                <option value="anthracite">Anthracite Mat</option>
                <option value="silver">Argent Brossé</option>
                <option value="twotone">Bicolore Diamanté</option>
              </select>
            </div>

          </div>

          {/* Current vehicle technical specs summary */}
          {currentModel && (
            <div className="p-4 rounded-xl bg-[#111318] border border-[#262D38] flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <Car className="w-4 h-4 text-[#D62828]" />
                <span className="font-bold text-white">{currentModel.name}</span>
                <span className="text-[#AAB1BA]/60">·</span>
                <span className="text-[#AAB1BA]">
                  Entraxe officiel : <strong className="text-white font-mono">{currentModel.rimPcd}</strong>
                </span>
                <span className="text-[#AAB1BA]/60">·</span>
                <span className="text-[#AAB1BA]">
                  Plage déport : <strong className="text-white font-mono">{currentModel.rimOffsetRange}</strong>
                </span>
                <span className="text-[#AAB1BA]/60">·</span>
                <span className="text-[#AAB1BA]">
                  Alésage : <strong className="text-white font-mono">{currentModel.centerBore} mm</strong>
                </span>
              </div>

              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>{matchingRims.length} modèles compatibles filtrés</span>
              </div>
            </div>
          )}
        </div>

        {/* Results Grid */}
        <div>
          {matchingRims.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-[#181D25] border border-[#262D38] space-y-3">
              <ShieldAlert className="w-10 h-10 text-amber-400 mx-auto" />
              <h3 className="text-base font-bold text-white">
                Aucune jante ne correspond à ce filtre strict
              </h3>
              <p className="text-xs text-[#AAB1BA] max-w-md mx-auto">
                Des jantes sur-mesure ou bagues de centrage spécifiques sont disponibles sur commande atelier.
              </p>
              <button
                onClick={handleAskWhatsAppValidation}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#D62828] text-white text-xs font-semibold rounded-lg hover:bg-[#B71C1C] transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Demander les options atelier sur WhatsApp</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {matchingRims.map((rim) => (
                <RimCard key={rim.id} rim={rim} />
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
