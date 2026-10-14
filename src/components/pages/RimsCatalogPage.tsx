import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { RIMS_DATA } from '../../data/rims';
import { RimCard } from '../products/RimCard';
import { RotateCcw, Car, Sparkles, ArrowRight } from 'lucide-react';

export const RimsCatalogPage: React.FC = () => {
  const { lang, t, setActivePage, selectedVehicle } = useApp();

  const [selectedDiameter, setSelectedDiameter] = useState<string>('all');
  const [selectedFinish, setSelectedFinish] = useState<string>('all');
  const [selectedPcd, setSelectedPcd] = useState<string>('all');
  const [onlyCompatible, setOnlyCompatible] = useState<boolean>(false);

  const diameters = [16, 17, 18, 19, 20];
  const pcds = ['5x112', '5x120', '5x108', '4x100', '5x114.3'];

  const filteredRims = useMemo(() => {
    return RIMS_DATA.filter((rim) => {
      const matchDiameter = selectedDiameter === 'all' || rim.diameter.toString() === selectedDiameter;
      const matchFinish = selectedFinish === 'all' || rim.finishSlug === selectedFinish;
      const matchPcd = selectedPcd === 'all' || rim.pcd === selectedPcd;
      const matchVehicle = !onlyCompatible || !selectedVehicle
        ? true
        : rim.compatibleVehicles.includes(selectedVehicle.id) || rim.pcd === selectedVehicle.rimPcd;

      return matchDiameter && matchFinish && matchPcd && matchVehicle;
    });
  }, [selectedDiameter, selectedFinish, selectedPcd, onlyCompatible, selectedVehicle]);

  const handleReset = () => {
    setSelectedDiameter('all');
    setSelectedFinish('all');
    setSelectedPcd('all');
    setOnlyCompatible(false);
  };

  return (
    <div className="py-10 bg-[#111318] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header with Configurator Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D62828]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.rimsSection.tag}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.rimsSection.title}
            </h1>
            <p className="text-sm text-[#AAB1BA] max-w-2xl">
              {t.rimsSection.subtitle}
            </p>
          </div>

          <button
            onClick={() => setActivePage('configurator')}
            className="px-5 py-3 bg-[#D62828] hover:bg-[#B71C1C] text-white text-xs font-bold rounded-xl shadow-md transition-colors flex items-center gap-2 cursor-pointer self-start md:self-auto"
          >
            <Car className="w-4 h-4" />
            <span>{t.rimsSection.openConfigurator}</span>
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </button>
        </div>

        {/* Filters */}
        <div className="p-5 rounded-2xl bg-[#181D25] border border-[#262D38] shadow-sm space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 text-xs">
            
            {/* Diameter */}
            <div>
              <label className="block text-[#AAB1BA] font-bold uppercase text-[10px] mb-1.5">
                {t.rimsSection.filterDiameter}
              </label>
              <select
                value={selectedDiameter}
                onChange={(e) => setSelectedDiameter(e.target.value)}
                className="w-full px-2.5 py-2 bg-[#111318] border border-[#2D3542] rounded-lg text-white font-medium focus:outline-none focus:border-[#D62828]"
              >
                <option value="all">Tous diamètres</option>
                {diameters.map((d) => (
                  <option key={d} value={d}>{d} pouces</option>
                ))}
              </select>
            </div>

            {/* Finish */}
            <div>
              <label className="block text-[#AAB1BA] font-bold uppercase text-[10px] mb-1.5">
                {t.rimsSection.filterFinish}
              </label>
              <select
                value={selectedFinish}
                onChange={(e) => setSelectedFinish(e.target.value)}
                className="w-full px-2.5 py-2 bg-[#111318] border border-[#2D3542] rounded-lg text-white font-medium focus:outline-none focus:border-[#D62828]"
              >
                <option value="all">{t.rimsSection.allFinishes}</option>
                <option value="black">Noir Satin</option>
                <option value="anthracite">Anthracite Mat</option>
                <option value="silver">Argent Brossé</option>
                <option value="twotone">Bicolore Diamanté</option>
              </select>
            </div>

            {/* PCD Entraxe */}
            <div>
              <label className="block text-[#AAB1BA] font-bold uppercase text-[10px] mb-1.5">
                {t.rimsSection.filterPcd}
              </label>
              <select
                value={selectedPcd}
                onChange={(e) => setSelectedPcd(e.target.value)}
                className="w-full px-2.5 py-2 bg-[#111318] border border-[#2D3542] rounded-lg text-white font-medium focus:outline-none focus:border-[#D62828]"
              >
                <option value="all">Tous entraxes</option>
                {pcds.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            {/* Vehicle compatibility toggle if vehicle active */}
            <div className="flex flex-col justify-end">
              {selectedVehicle ? (
                <label className="flex items-center gap-2 cursor-pointer text-xs text-[#AAB1BA] hover:text-white select-none py-2">
                  <input
                    type="checkbox"
                    checked={onlyCompatible}
                    onChange={(e) => setOnlyCompatible(e.target.checked)}
                    className="rounded border-[#2D3542] text-[#D62828] focus:ring-0"
                  />
                  <span>Pour {selectedVehicle.name}</span>
                </label>
              ) : (
                <button
                  type="button"
                  onClick={() => setActivePage('configurator')}
                  className="py-2 text-[11px] text-[#D62828] hover:underline text-left rtl:text-right"
                >
                  + Filtrer par véhicule
                </button>
              )}
            </div>

            {/* Reset */}
            <div className="flex flex-col justify-end">
              <button
                type="button"
                onClick={handleReset}
                className="w-full py-2 px-2 bg-[#20252C] hover:bg-[#2A313C] text-[#AAB1BA] hover:text-white text-[11px] rounded transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{t.finder.resetAction}</span>
              </button>
            </div>

          </div>
        </div>

        {/* Rims Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-[#AAB1BA]">
            <span>
              <strong className="text-white tabular-nums">{filteredRims.length}</strong> modèles de jantes aluminium
            </span>
            <span className="text-[11px]">Tarifs à la pièce ou en pack de 4 jantes</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredRims.map((rim) => (
              <RimCard key={rim.id} rim={rim} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
