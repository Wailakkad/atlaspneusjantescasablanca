import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { TrustStrip } from './components/home/TrustStrip';
import { SmartProductFinder } from './components/search/SmartProductFinder';
import { FeaturedTires } from './components/home/FeaturedTires';
import { FeaturedRims } from './components/home/FeaturedRims';
import { VehicleRimConfigurator } from './components/configurator/VehicleRimConfigurator';
import { BrandsShowcase } from './components/home/BrandsShowcase';
import { ServicesSection } from './components/home/ServicesSection';
import { WhyChooseUs } from './components/home/WhyChooseUs';
import { CustomerFeedback } from './components/home/CustomerFeedback';
import { WorkshopLocation } from './components/home/WorkshopLocation';
import { EducationalGuides } from './components/home/EducationalGuides';
import { FaqSection } from './components/home/FaqSection';
import { FinalCta } from './components/home/FinalCta';
import { CartDrawer } from './components/quote/CartDrawer';
import { ProductDetailModal } from './components/modals/ProductDetailModal';
import { AppointmentModal } from './components/modals/AppointmentModal';
import { DimensionHelperModal } from './components/modals/DimensionHelperModal';
import { GuideDetailModal } from './components/modals/GuideDetailModal';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';
import { TiresCatalogPage } from './components/pages/TiresCatalogPage';
import { RimsCatalogPage } from './components/pages/RimsCatalogPage';
import { LegalPage } from './components/pages/LegalPage';

const MainContent: React.FC = () => {
  const { activePage } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-[#111318] text-[#F5F6F7]">
      <Header />

      <main className="flex-1">
        {activePage === 'home' && (
          <>
            <Hero />
            <TrustStrip />
            <SmartProductFinder />
            <FeaturedTires />
            <FeaturedRims />
            <VehicleRimConfigurator />
            <BrandsShowcase />
            <ServicesSection />
            <WhyChooseUs />
            <CustomerFeedback />
            <WorkshopLocation />
            <EducationalGuides />
            <FaqSection />
            <FinalCta />
          </>
        )}

        {activePage === 'tires' && <TiresCatalogPage />}

        {activePage === 'rims' && <RimsCatalogPage />}

        {activePage === 'configurator' && (
          <div className="py-6">
            <VehicleRimConfigurator />
          </div>
        )}

        {activePage === 'services' && (
          <div className="py-6">
            <ServicesSection />
            <WorkshopLocation />
          </div>
        )}

        {activePage === 'guides' && (
          <div className="py-6">
            <EducationalGuides />
            <FaqSection />
          </div>
        )}

        {activePage === 'workshop' && (
          <div className="py-6">
            <WorkshopLocation />
            <ServicesSection />
          </div>
        )}

        {activePage === 'legal' && <LegalPage type="legal" />}
        {activePage === 'privacy' && <LegalPage type="privacy" />}
        {activePage === 'terms' && <LegalPage type="terms" />}
      </main>

      <Footer />

      {/* Global Modals & Drawers */}
      <CartDrawer />
      <ProductDetailModal />
      <AppointmentModal />
      <DimensionHelperModal />
      <GuideDetailModal />
      <FloatingWhatsApp />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
