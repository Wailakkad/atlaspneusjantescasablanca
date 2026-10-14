import React from 'react';
import { useApp } from '../../context/AppContext';
import { BUSINESS_CONFIG } from '../../config/business';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  type: 'legal' | 'privacy' | 'terms';
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const { lang, t, setActivePage } = useApp();

  const titles = {
    legal: t.legal.legalNotice,
    privacy: t.legal.privacyPolicy,
    terms: t.legal.termsOfService,
  };

  return (
    <div className="py-12 bg-[#111318] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Back Link */}
        <button
          onClick={() => setActivePage('home')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#AAB1BA] hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
          <span>{t.common.back} à l'accueil</span>
        </button>

        {/* Title */}
        <div className="space-y-2 border-b border-[#20252C] pb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D62828]">
            Informations Légales & Conformité
          </span>
          <h1 className="text-3xl font-extrabold text-white">
            {titles[type]}
          </h1>
          <div className="flex items-center gap-2 text-xs text-amber-400/90 pt-1">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>Document de présentation commerciale — À adapter selon les statuts réels du client lors de la mise en production.</span>
          </div>
        </div>

        {/* Content Body based on type */}
        <div className="prose prose-invert max-w-none text-xs sm:text-sm text-[#AAB1BA] leading-relaxed space-y-6">
          {type === 'legal' && (
            <>
              <section className="space-y-2">
                <h2 className="text-base font-bold text-white">1. Éditeur de la plateforme</h2>
                <p>
                  Le présent site est un prototype de démonstration commerciale pour la marque <strong>{BUSINESS_CONFIG.name}</strong>, spécialisée dans la distribution de pneumatiques et jantes aluminium à Casablanca, Maroc.
                </p>
                <p>
                  <strong>Forme juridique :</strong> Société à Responsabilité Limitée (SARL) — Données d'immatriculation (RC, IF, CNSS, ICE) à compléter lors de l'intégration définitive avec le client.
                </p>
                <p>
                  <strong>Siège / Atelier :</strong> {BUSINESS_CONFIG.location.address}, {BUSINESS_CONFIG.location.city}.
                </p>
                <p>
                  <strong>Contact :</strong> Téléphone : {BUSINESS_CONFIG.phoneDisplay} · Email : {BUSINESS_CONFIG.email}
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-white">2. Propriété intellectuelle</h2>
                <p>
                  Les marques de manufacturiers pneumatiques citées (Michelin, Continental, Pirelli, Bridgestone, Goodyear, Hankook, Dunlop, etc.) ainsi que les logos constructeurs automobiles sont la propriété exclusive de leurs détenteurs respectifs. Leur mention sur ce prototype a pour seul objet d'illustrer la compatibilité dimensionnelle et l'offre commerciale envisagée.
                </p>
              </section>
            </>
          )}

          {type === 'privacy' && (
            <>
              <section className="space-y-2">
                <h2 className="text-base font-bold text-white">1. Collecte des données personnelles</h2>
                <p>
                  La protection de vos données personnelles est une priorité pour {BUSINESS_CONFIG.name}. Ce prototype ne stocke aucune coordonnée bancaire et n'effectue aucun prélèvement en ligne.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-white">2. Échanges via WhatsApp</h2>
                <p>
                  Les demandes de devis et prises de rendez-vous s'effectuent par redirection vers l'application WhatsApp. Les informations transmises (modèle de véhicule, dimensions souhaitées, nom) sont uniquement destinées au traitement technique de votre demande par notre atelier de Casablanca.
                </p>
                <p>
                  Conformément à la loi marocaine n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, vous disposez d'un droit d'accès, de rectification et d'opposition.
                </p>
              </section>
            </>
          )}

          {type === 'terms' && (
            <>
              <section className="space-y-2">
                <h2 className="text-base font-bold text-white">1. Devis et tarification indicative</h2>
                <p>
                  Tous les tarifs affichés sur le site sont exprimés en Dirhams marocains (MAD / DH). Ils sont présentés à titre indicatif et sont soumis à confirmation formelle par nos techniciens au moment de l'édition du devis WhatsApp en fonction des arrivages usine.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-white">2. Prestations de montage et garantie</h2>
                <p>
                  Le montage, l'équilibrage dynamique et le changement de valve sont exécutés dans nos ateliers partenaires de Casablanca selon les règles de l'art. Tous les pneumatiques neufs vendus sont couverts par la garantie d'usine du manufacturier contre tout vice de fabrication.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-white">3. Modalités de règlement</h2>
                <p>
                  Le paiement s'effectue sur place à l'atelier lors de la livraison et de la pose des pneumatiques (espèces en Dirhams ou carte bancaire nationale CMI).
                </p>
              </section>
            </>
          )}
        </div>

      </div>
    </div>
  );
};
