import React from 'react';
import { useApp } from '../../context/AppContext';

export const BrandsShowcase: React.FC = () => {
  const { t, setPrefillTireFilter, setActivePage } = useApp();

  const brands = [
    { name: "Michelin", country: "France", desc: "Performance & Sécurité n°1" },
    { name: "Continental", country: "Allemagne", desc: "Technologie de freinage" },
    { name: "Pirelli", country: "Italie", desc: "Prestige & Supercars" },
    { name: "Bridgestone", country: "Japon", desc: "Longévité & Efficacité" },
    { name: "Goodyear", country: "USA", desc: "Innovation technologique" },
    { name: "Hankook", country: "Corée", desc: "Rapport qualité/prix" },
    { name: "Dunlop", country: "UK", desc: "Précision de conduite" },
  ];

  const handleBrandClick = (brandName: string) => {
    setPrefillTireFilter({ brand: brandName });
    setActivePage('tires');
  };

  return (
    <section className="py-14 bg-[#111318] border-b border-[#20252C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D62828]">
            {t.brands.tag}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {t.brands.title}
          </h2>
          <p className="text-xs text-[#AAB1BA]">
            {t.brands.subtitle}
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {brands.map((b) => (
            <button
              key={b.name}
              type="button"
              onClick={() => handleBrandClick(b.name)}
              className="group p-4 rounded-xl bg-[#181D25] border border-[#262D38] hover:border-[#D62828]/60 hover:bg-[#1D222A] transition-all text-center flex flex-col items-center justify-center cursor-pointer shadow-xs"
            >
              <span className="text-base font-extrabold text-white group-hover:text-[#D62828] transition-colors tracking-tight">
                {b.name}
              </span>
              <span className="text-[10px] text-[#AAB1BA] mt-1 font-mono">
                {b.country}
              </span>
            </button>
          ))}
        </div>

        {/* Brand ownership note */}
        <p className="text-[11px] text-[#AAB1BA]/60 text-center">
          {t.brands.disclaimer}
        </p>

      </div>
    </section>
  );
};
