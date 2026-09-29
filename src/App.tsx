/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { ScrollVideoHero } from './components/ScrollVideoHero';
import { HeroSection } from './components/HeroSection';
import { ProblemAgitation } from './components/ProblemAgitation';
import { MechanismSection } from './components/MechanismSection';
import { ProofSection } from './components/ProofSection';
import { TrustSection } from './components/TrustSection';
import { OfferPackages } from './components/OfferPackages';
import { OrderForm } from './components/OrderForm';
import { RiskReversal } from './components/RiskReversal';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { StickyMobileCta } from './components/StickyMobileCta';
import { LivePurchaseNotification } from './components/LivePurchaseNotification';
import { InteractiveQuizModal } from './components/InteractiveQuizModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { MerchantDashboardModal } from './components/MerchantDashboardModal';
import { OFFER_PACKAGES } from './data/funnelData';
import { OfferPackage, CodOrder } from './types';

const INITIAL_SAMPLE_ORDERS: CodOrder[] = [
  {
    orderId: 'SBG-COD-918234',
    timestamp: new Date(Date.now() - 1000 * 60 * 25).toISOString(),
    customerName: 'Maria Elena Ramirez',
    phone: '09178234512',
    fullAddress: '#45 Delgado St., Brgy. San Rafael, Iloilo City, Iloilo',
    barangay: 'San Rafael',
    city: 'Iloilo City',
    province: 'Iloilo',
    landmark: 'Near Iloilo Doctors Hospital',
    packageId: 'duo-pack',
    packageName: '2 Canisters (Best Value Duo)',
    quantity: 1,
    totalPrice: 1850,
    deliveryNotes: 'Tawagan bago i-deliver',
    paymentMethod: 'COD',
    status: 'Confirmed',
  },
  {
    orderId: 'SBG-COD-849201',
    timestamp: new Date(Date.now() - 1000 * 60 * 80).toISOString(),
    customerName: 'Rodelio Hernandez',
    phone: '09285514930',
    fullAddress: 'Block 12 Lot 4, Villa Remedios, Brgy. Pulung Cacutud, Angeles City, Pampanga',
    barangay: 'Pulung Cacutud',
    city: 'Angeles City',
    province: 'Pampanga',
    landmark: 'Tapat ng mini grocery',
    packageId: 'trial-pack',
    packageName: '1 Canister (Trial Pack)',
    quantity: 1,
    totalPrice: 975,
    paymentMethod: 'COD',
    status: 'In Transit',
  }
];

export default function App() {
  const [headlineIndex, setHeadlineIndex] = useState<number>(0);
  const [selectedPackage, setSelectedPackage] = useState<OfferPackage>(OFFER_PACKAGES[0]);
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  const [completedOrder, setCompletedOrder] = useState<CodOrder | null>(null);
  
  const [orders, setOrders] = useState<CodOrder[]>(() => {
    const saved = localStorage.getItem('sbg_funnel_orders');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return INITIAL_SAMPLE_ORDERS;
  });

  useEffect(() => {
    localStorage.setItem('sbg_funnel_orders', JSON.stringify(orders));
  }, [orders]);

  const scrollToOrder = () => {
    const el = document.getElementById('order-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMechanism = () => {
    const el = document.getElementById('mechanism-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (pkg: OfferPackage) => {
    setSelectedPackage(pkg);
    scrollToOrder();
  };

  const handleOrderSuccess = (newOrder: CodOrder) => {
    setOrders(prev => [newOrder, ...prev]);
    setCompletedOrder(newOrder);
  };

  const handleUpdateOrderStatus = (orderId: string, newStatus: CodOrder['status']) => {
    setOrders(prev =>
      prev.map(o => (o.orderId === orderId ? { ...o, status: newStatus } : o))
    );
  };

  const handleClearOrders = () => {
    if (confirm('Sigurado ka bang nais mong i-clear ang order history?')) {
      setOrders([]);
    }
  };

  const handleAddSampleOrder = () => {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const sampleNames = ['Analyn Santos', 'Vicente Cruz', 'Corazon Mercado', 'Dominador Ramos'];
    const sampleCities = ['Cebu City', 'Davao City', 'Bacolod City', 'Quezon City'];
    const sampleProvinces = ['Cebu', 'Davao del Sur', 'Negros Occidental', 'Metro Manila'];
    const randomIdx = Math.floor(Math.random() * sampleNames.length);

    const testOrder: CodOrder = {
      orderId: `SBG-COD-${randomNum}`,
      timestamp: new Date().toISOString(),
      customerName: sampleNames[randomIdx],
      phone: `09${Math.floor(100000000 + Math.random() * 900000000)}`,
      fullAddress: `Poblacion, ${sampleCities[randomIdx]}, ${sampleProvinces[randomIdx]}`,
      barangay: 'Poblacion',
      city: sampleCities[randomIdx],
      province: sampleProvinces[randomIdx],
      landmark: 'Near Town Plaza',
      packageId: OFFER_PACKAGES[1].id,
      packageName: OFFER_PACKAGES[1].name,
      quantity: 1,
      totalPrice: OFFER_PACKAGES[1].promoPrice,
      paymentMethod: 'COD',
      status: 'Pending Dispatch',
    };

    setOrders(prev => [testOrder, ...prev]);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col selection:bg-emerald-200 selection:text-emerald-950 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Top Banner */}
      <AnnouncementBar />

      {/* Primary Navigation */}
      <Navbar
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
        ordersCount={orders.length}
      />

      {/* Main Funnel Body */}
      <main className="flex-grow">
        
        {/* Top Interactive Scroll-Triggered Video Section */}
        <ScrollVideoHero
          onExploreClick={scrollToMechanism}
          onOrderClick={scrollToOrder}
        />

        {/* 1. Hero Section with 3 A/B testable headlines from the copy document */}
        <HeroSection
          currentHeadlineIndex={headlineIndex}
          onSelectHeadline={setHeadlineIndex}
          onOrderClick={scrollToOrder}
        />

        {/* 2. Problem Agitation Section */}
        <ProblemAgitation
          onLearnMechanism={scrollToMechanism}
        />

        {/* 3. Mechanism Section */}
        <MechanismSection />

        {/* 4. Verified Proof & Reviews Section */}
        <ProofSection />

        {/* 5. Trust & Anti-Counterfeit Section */}
        <TrustSection />

        {/* 6. Offer Packages (Trial, Duo, Trio) */}
        <OfferPackages
          selectedPackageId={selectedPackage.id}
          onSelectPackage={handleSelectPackage}
        />

        {/* 7. Direct Response COD Order Form */}
        <OrderForm
          selectedPackage={selectedPackage}
          onSelectPackage={setSelectedPackage}
          onOrderSuccess={handleOrderSuccess}
        />

        {/* 8. Risk Reversal & Guarantees */}
        <RiskReversal />

        {/* 9. FAQ & Objection Handling */}
        <FaqSection />

        {/* 10. Final Call to Action */}
        <FinalCta
          onOrderClick={scrollToOrder}
        />

      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Elements */}
      <LivePurchaseNotification />

      <StickyMobileCta
        selectedPackage={selectedPackage}
        onOrderClick={scrollToOrder}
      />

      {/* Interactive Modals */}
      <InteractiveQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectRecommended={(pkg) => {
          setSelectedPackage(pkg);
          scrollToOrder();
        }}
      />

      <OrderSuccessModal
        order={completedOrder}
        onClose={() => setCompletedOrder(null)}
      />

      <MerchantDashboardModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        orders={orders}
        onUpdateStatus={handleUpdateOrderStatus}
        onClearOrders={handleClearOrders}
        onAddSampleOrder={handleAddSampleOrder}
      />

    </div>
  );
}
