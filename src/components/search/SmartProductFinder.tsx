import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { VEHICLE_MAKES, VEHICLE_MODELS } from '../../data/vehicles';
import { TIRES_DATA } from '../../data/tires';
import { buildDimensionSearchQuoteMessage, buildWhatsAppUrl } from '../../lib/whatsapp';
import { Search, RotateCcw, HelpCircle, Car, SlidersHorizontal, ArrowRight, MessageSquare } from 'lucide-react';

export const SmartProductFinder: React.FC = () => {
  const {
    lang,
    t,
    setActivePage,
    setSelectedVehicle,
    setIsDimensionHelperOpen,
    setPrefillTireFilter,
  } = useApp();

  const [activeTab, setActiveTab] = useState<'dimension' | 'vehicle'>('dimension');

  // Dimension search state
  const [width, setWidth] = useState<string>('205');
  const [aspectRatio, setAspectRatio] = useState<string>('55');
  const [diameter, setDiameter] = useState<string>('16');
  const [brandFilter, setBrandFilter] = useState<string>('all');
  const [speedIndex, setSpeedIndex] = useState<string>('all');

  // Vehicle search state
  const [selectedMake, setSelectedMake] = useState<string>('volkswagen');
  const [selectedModelId, setSelectedModelId] = useState<string>('vw-golf-7');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [selectedVersion, setSelectedVersion] = useState<string>('');

  // Available options
  const widths = [185, 195, 205, 215, 225, 235, 245, 255];
  const aspectRatios = [40, 45, 50, 55, 60, 65];
  const diameters = [15, 16, 17, 18, 19, 20];
  const brands = ['Michelin', 'Continental', 'Pirelli', 'Bridgestone', 'Goodyear', 'Hankook', 'Dunlop'];

  const filteredModels = VEHICLE_MODELS.filter((m) => m.makeId === selectedMake);
  const currentModel = VEHICLE_MODELS.find((m) => m.id === selectedModelId);

  // Submit dimension search
  const handleDimensionSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPrefillTireFilter({
      width: width ? parseInt(width, 10) : undefined,
      aspectRatio: aspectRatio ? parseInt(aspectRatio, 10) : undefined,
      diameter: diameter ? parseInt(diameter, 10) : undefined,
      brand: brandFilter !== 'all' ? brandFilter : undefined,
    });
    setActivePage('tires');
  };

  // Submit vehicle search
  const handleVehicleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentModel) {
      setSelectedVehicle(currentModel);
      // If factory tire sizes exist, prefill with first tire size
      if (currentModel.factoryTireSizes.length > 0) {
        const firstSize = currentModel.factoryTireSizes[0]; // e.g. "205/55 R16"
        const parts = firstSize.match(/(\d+)\/(\d+)\s*R(\d+)/);
        if (parts) {
          setPrefillTireFilter({
            width: parseInt(parts[1], 10),
            aspectRatio: parseInt(parts[2], 10),
            diameter: parseInt(parts[3], 10),
          });
        }
      }
      setActivePage('tires');
    }
  };

  const handleReset = () => {
    setWidth('205');
    setAspectRatio('55');
    setDiameter('16');
    setBrandFilter('all');
    setSpeedIndex('all');
    setSelectedMake('volkswagen');
    setSelectedModelId('vw-golf-7');
    setSelectedYear('');
    setSelectedVersion('');
  };

  const handleWhatsAppAssistance = () => {
    const msg = buildDimensionSearchQuoteMessage(width, aspectRatio, diameter, '', lang);
    const url = buildWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="smart-finder" className="py-12 bg-[#111318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Finder Container Box */}
        <div className="bg-[#181D25] border border-[#262D38] rounded-2xl p-6 sm:p-8 shadow-xl">
          
          {/* Header & Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#262D38]">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {t.finder.title}
              </h2>
              <p className="text-xs text-[#AAB1BA] mt-1">
                {lang === 'ar'
                  ? 'اختر البحث عبر الأبعاد المدونة على إطاراتك أو بالاعتماد على طراز سيارتك'
                  : 'Recherche par cotes constructeur ou sélection guidée par modèle de véhicule'}
              </p>
            </div>

            {/* Segmented Mode Control */}
            <div className="flex items-center gap-1 p-1 bg-[#111318] rounded-xl border border-[#262D38] self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setActiveTab('dimension')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'dimension'
                    ? 'bg-[#D62828] text-white shadow-sm'
                    : 'text-[#AAB1BA] hover:text-white'
                }`}
              >
                {t.finder.tabDimensions}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('vehicle')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'vehicle'
                    ? 'bg-[#D62828] text-white shadow-sm'
                    : 'text-[#AAB1BA] hover:text-white'
                }`}
              >
                <Car className="w-3.5 h-3.5" />
                <span>{t.finder.tabVehicle}</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Par dimension */}
          {activeTab === 'dimension' && (
            <form onSubmit={handleDimensionSearch} className="pt-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                
                {/* Largeur */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB1BA] mb-2">
                    {t.finder.widthLabel}
                  </label>
                  <select
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="w-full px-3 py-3 bg-[#111318] border border-[#2D3542] rounded-xl text-sm font-semibold text-white focus:outline-none focus:border-[#D62828]"
                  >
                    {widths.map((w) => (
                      <option key={w} value={w}>
                        {w} mm
                      </option>
                    ))}
                  </select>
                </div>

                {/* Hauteur / Série */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB1BA] mb-2">
                    {t.finder.heightLabel}
                  </label>
                  <select
                    value={aspectRatio}
                    onChange={(e) => setAspectRatio(e.target.value)}
                    className="w-full px-3 py-3 bg-[#111318] border border-[#2D3542] rounded-xl text-sm font-semibold text-white focus:outline-none focus:border-[#D62828]"
                  >
                    {aspectRatios.map((ar) => (
                      <option key={ar} value={ar}>
                        {ar} %
                      </option>
                    ))}
                  </select>
                </div>

                {/* Diamètre */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB1BA] mb-2">
                    {t.finder.diameterLabel}
                  </label>
                  <select
                    value={diameter}
                    onChange={(e) => setDiameter(e.target.value)}
                    className="w-full px-3 py-3 bg-[#111318] border border-[#2D3542] rounded-xl text-sm font-semibold text-white focus:outline-none focus:border-[#D62828]"
                  >
                    {diameters.map((d) => (
                      <option key={d} value={d}>
                        R{d} pouces
                      </option>
                    ))}
                  </select>
                </div>

                {/* Marque */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB1BA] mb-2">
                    {t.tiresSection.filterBrand}
                  </label>
                  <select
                    value={brandFilter}
                    onChange={(e) => setBrandFilter(e.target.value)}
                    className="w-full px-3 py-3 bg-[#111318] border border-[#2D3542] rounded-xl text-sm font-semibold text-white focus:outline-none focus:border-[#D62828]"
                  >
                    <option value="all">{t.finder.allBrands}</option>
                    {brands.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Action */}
                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#D62828] hover:bg-[#B71C1C] text-white text-sm font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer h-[46px]"
                  >
                    <Search className="w-4 h-4" />
                    <span>{t.finder.searchAction}</span>
                  </button>
                </div>
              </div>

              {/* Lower Helper Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#262D38] text-xs">
                <button
                  type="button"
                  onClick={() => setIsDimensionHelperOpen(true)}
                  className="inline-flex items-center gap-1.5 text-[#AAB1BA] hover:text-white transition-colors cursor-pointer group"
                >
                  <HelpCircle className="w-4 h-4 text-[#D62828]" />
                  <span className="underline underline-offset-4 decoration-[#323A46] group-hover:decoration-white">
                    {t.finder.sizeHelperLink}
                  </span>
                </button>

                <div className="flex items-center gap-4">
                  <span className="text-[#AAB1BA]/80 hidden sm:inline">
                    Exemple courant : <strong className="text-white">205/55 R16</strong> ou <strong className="text-white">225/45 R17</strong>
                  </span>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1 text-[#AAB1BA] hover:text-white transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{t.finder.resetAction}</span>
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* Tab 2: Par véhicule */}
          {activeTab === 'vehicle' && (
            <form onSubmit={handleVehicleSearch} className="pt-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Marque */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB1BA] mb-2">
                    {t.finder.selectVehicleMake}
                  </label>
                  <select
                    value={selectedMake}
                    onChange={(e) => {
                      const newMake = e.target.value;
                      setSelectedMake(newMake);
                      const matching = VEHICLE_MODELS.filter((m) => m.makeId === newMake);
                      if (matching.length > 0) {
                        setSelectedModelId(matching[0].id);
                      }
                    }}
                    className="w-full px-3 py-3 bg-[#111318] border border-[#2D3542] rounded-xl text-sm font-semibold text-white focus:outline-none focus:border-[#D62828]"
                  >
                    {VEHICLE_MAKES.map((make) => (
                      <option key={make.id} value={make.id}>
                        {make.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Modèle */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB1BA] mb-2">
                    {t.finder.selectVehicleModel}
                  </label>
                  <select
                    value={selectedModelId}
                    onChange={(e) => setSelectedModelId(e.target.value)}
                    className="w-full px-3 py-3 bg-[#111318] border border-[#2D3542] rounded-xl text-sm font-semibold text-white focus:outline-none focus:border-[#D62828]"
                  >
                    {filteredModels.map((model) => (
                      <option key={model.id} value={model.id}>
                        {model.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Motorisation / Version */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB1BA] mb-2">
                    {t.finder.selectVehicleVersion}
                  </label>
                  <select
                    value={selectedVersion}
                    onChange={(e) => setSelectedVersion(e.target.value)}
                    className="w-full px-3 py-3 bg-[#111318] border border-[#2D3542] rounded-xl text-sm font-semibold text-white focus:outline-none focus:border-[#D62828]"
                  >
                    <option value="">Sélectionner motorisation...</option>
                    {currentModel?.versions.map((ver, idx) => (
                      <option key={idx} value={ver}>
                        {ver}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Action */}
                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#D62828] hover:bg-[#B71C1C] text-white text-sm font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer h-[46px]"
                  >
                    <Search className="w-4 h-4" />
                    <span>Voir les dimensions homologuées</span>
                  </button>
                </div>
              </div>

              {/* Verified dimensions preview pill-free */}
              {currentModel && (
                <div className="p-4 rounded-xl bg-[#111318] border border-[#262D38] flex flex-wrap items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-white">{currentModel.name}</span>
                    <span className="text-[#AAB1BA]/60">·</span>
                    <span className="text-[#AAB1BA]">
                      Dimensions d'origine :{' '}
                      <span className="text-white font-medium">
                        {currentModel.factoryTireSizes.join(' · ')}
                      </span>
                    </span>
                    <span className="text-[#AAB1BA]/60">·</span>
                    <span className="text-[#AAB1BA]">
                      Entraxe jante : <span className="text-white font-mono">{currentModel.rimPcd}</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActivePage('configurator')}
                    className="text-[#D62828] hover:text-[#B71C1C] font-semibold inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>{t.rimsSection.openConfigurator}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </button>
                </div>
              )}
            </form>
          )}

        </div>
      </div>
    </section>
  );
};
