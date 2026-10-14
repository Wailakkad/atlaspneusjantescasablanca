import React, { useState, useMemo, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { TIRES_DATA } from '../../data/tires';
import { TireCard } from '../products/TireCard';
import { TireProduct } from '../../types';
import { Filter, RotateCcw, ArrowUpDown, Search, ShieldCheck } from 'lucide-react';

export const TiresCatalogPage: React.FC = () => {
  const { lang, t, prefillTireFilter, setPrefillTireFilter, selectedVehicle } = useApp();

  // Filters
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedDiameter, setSelectedDiameter] = useState<string>('all');
  const [selectedWidth, setSelectedWidth] = useState<string>('all');
  const [selectedSeason, setSelectedSeason] = useState<string>('all');
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc' | 'brand'>('popular');

  // Apply prefill if redirected from homepage search
  useEffect(() => {
    if (prefillTireFilter) {
      if (prefillTireFilter.brand) setSelectedBrand(prefillTireFilter.brand);
      if (prefillTireFilter.diameter) setSelectedDiameter(prefillTireFilter.diameter.toString());
      if (prefillTireFilter.width) setSelectedWidth(prefillTireFilter.width.toString());
    }
  }, [prefillTireFilter]);

  const brands = useMemo(() => {
    return Array.from(new Set(TIRES_DATA.map((t) => t.brand))).sort();
  }, []);

  const diameters = [15, 16, 17, 18, 19, 20];
  const widths = [185, 195, 205, 215, 225, 235, 245];

  const filteredTires = useMemo(() => {
    return TIRES_DATA.filter((tire) => {
      const matchBrand = selectedBrand === 'all' || tire.brand === selectedBrand;
      const matchDiameter = selectedDiameter === 'all' || tire.diameter.toString() === selectedDiameter;
      const matchWidth = selectedWidth === 'all' || tire.width.toString() === selectedWidth;
      const matchSeason = selectedSeason === 'all' || tire.season === selectedSeason;
      const matchStock = !onlyInStock || tire.inStock;
      return matchBrand && matchDiameter && matchWidth && matchSeason && matchStock;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceMAD - b.priceMAD;
      if (sortBy === 'price-desc') return b.priceMAD - a.priceMAD;
      if (sortBy === 'brand') return a.brand.localeCompare(b.brand);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedBrand, selectedDiameter, selectedWidth, selectedSeason, onlyInStock, sortBy]);

  const handleResetFilters = () => {
    setSelectedBrand('all');
    setSelectedDiameter('all');
    setSelectedWidth('all');
    setSelectedSeason('all');
    setOnlyInStock(false);
    setSortBy('popular');
    setPrefillTireFilter(null);
  };

  return (
    <div className="py-10 bg-[#111318] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Page Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D62828]">
            <span>{t.tiresSection.tag}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.tiresSection.title}
          </h1>
          <p className="text-sm text-[#AAB1BA] max-w-2xl">
            {t.tiresSection.subtitle}
          </p>

          {/* Active vehicle badge if any */}
          {selectedVehicle && (
            <div className="pt-2">
              <span className="text-xs text-[#AAB1BA]">
                Véhicule présélectionné : <strong className="text-white">{selectedVehicle.name}</strong> (Dimensions homologuées : {selectedVehicle.factoryTireSizes.join(' · ')})
              </span>
            </div>
          )}
        </div>

        {/* Filter Controls Bar */}
        <div className="p-5 rounded-2xl bg-[#181D25] border border-[#262D38] shadow-sm space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
            
            {/* Brand */}
            <div>
              <label className="block text-[#AAB1BA] font-bold uppercase text-[10px] mb-1.5">
                {t.tiresSection.filterBrand}
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-2.5 py-2 bg-[#111318] border border-[#2D3542] rounded-lg text-white font-medium focus:outline-none focus:border-[#D62828]"
              >
                <option value="all">{t.finder.allBrands}</option>
                {brands.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Diameter */}
            <div>
              <label className="block text-[#AAB1BA] font-bold uppercase text-[10px] mb-1.5">
                {t.tiresSection.filterDiameter}
              </label>
              <select
                value={selectedDiameter}
                onChange={(e) => setSelectedDiameter(e.target.value)}
                className="w-full px-2.5 py-2 bg-[#111318] border border-[#2D3542] rounded-lg text-white font-medium focus:outline-none focus:border-[#D62828]"
              >
                <option value="all">Tous diamètres</option>
                {diameters.map((d) => (
                  <option key={d} value={d}>R{d} pouces</option>
                ))}
              </select>
            </div>

            {/* Width */}
            <div>
              <label className="block text-[#AAB1BA] font-bold uppercase text-[10px] mb-1.5">
                Largeur (mm)
              </label>
              <select
                value={selectedWidth}
                onChange={(e) => setSelectedWidth(e.target.value)}
                className="w-full px-2.5 py-2 bg-[#111318] border border-[#2D3542] rounded-lg text-white font-medium focus:outline-none focus:border-[#D62828]"
              >
                <option value="all">Toutes largeurs</option>
                {widths.map((w) => (
                  <option key={w} value={w}>{w} mm</option>
                ))}
              </select>
            </div>

            {/* Season */}
            <div>
              <label className="block text-[#AAB1BA] font-bold uppercase text-[10px] mb-1.5">
                {t.tiresSection.filterSeason}
              </label>
              <select
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="w-full px-2.5 py-2 bg-[#111318] border border-[#2D3542] rounded-lg text-white font-medium focus:outline-none focus:border-[#D62828]"
              >
                <option value="all">{t.finder.allSeasons}</option>
                <option value="Ete">Été / Standard Maroc</option>
                <option value="4Saisons">4 Saisons</option>
              </select>
            </div>

            {/* Sort by */}
            <div>
              <label className="block text-[#AAB1BA] font-bold uppercase text-[10px] mb-1.5">
                {t.tiresSection.sortLabel}
              </label>
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="w-full px-2.5 py-2 bg-[#111318] border border-[#2D3542] rounded-lg text-white font-medium focus:outline-none focus:border-[#D62828]"
              >
                <option value="popular">{t.tiresSection.sortPopular}</option>
                <option value="price-asc">{t.tiresSection.sortPriceAsc}</option>
                <option value="price-desc">{t.tiresSection.sortPriceDesc}</option>
                <option value="brand">{t.tiresSection.sortBrand}</option>
              </select>
            </div>

            {/* Stock only & Reset */}
            <div className="flex flex-col justify-end gap-2">
              <label className="flex items-center gap-2 cursor-pointer text-xs text-[#AAB1BA] hover:text-white select-none">
                <input
                  type="checkbox"
                  checked={onlyInStock}
                  onChange={(e) => setOnlyInStock(e.target.checked)}
                  className="rounded border-[#2D3542] text-[#D62828] focus:ring-0"
                />
                <span>En stock uniquement</span>
              </label>

              <button
                type="button"
                onClick={handleResetFilters}
                className="w-full py-1.5 px-2 bg-[#20252C] hover:bg-[#2A313C] text-[#AAB1BA] hover:text-white text-[11px] rounded transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{t.finder.resetAction}</span>
              </button>
            </div>

          </div>
        </div>

        {/* Product Count & Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-[#AAB1BA]">
            <span>
              <strong className="text-white tabular-nums">{filteredTires.length}</strong> {t.finder.foundResults}
            </span>
            <span className="text-[11px]">Prix indicatifs TTC en Dirhams Marocains</span>
          </div>

          {filteredTires.length === 0 ? (
            <div className="py-16 text-center rounded-2xl bg-[#181D25] border border-[#262D38] space-y-3">
              <p className="text-sm text-white font-semibold">{t.finder.noResults}</p>
              <p className="text-xs text-[#AAB1BA]">
                Nous pouvons sourcer n'importe quelle dimension spécifique sous 24 à 48 heures.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 bg-[#D62828] text-white text-xs font-semibold rounded-lg hover:bg-[#B71C1C] transition-colors cursor-pointer"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTires.map((tire) => (
                <TireCard key={tire.id} tire={tire} />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
