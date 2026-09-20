import { useState, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustAndWarranty } from './components/TrustAndWarranty';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ServicesSection } from './components/ServicesSection';
import { SkinAnalysisQuiz } from './components/SkinAnalysisQuiz';
import { PriceCalculator } from './components/PriceCalculator';
import { PackagesSection } from './components/PackagesSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileFloatingBar } from './components/MobileFloatingBar';
import { AdminModal } from './components/AdminModal';
import {
  initialBusinessConfig,
  initialPackages,
  initialBeforeAfter,
  initialFaqs,
  initialGallery,
  initialLeads,
} from './data/initialData';
import { BusinessConfig, ServicePackage, AppointmentLead } from './types';

export function App() {
  const [business, setBusiness] = useState<BusinessConfig>(() => {
    const saved = localStorage.getItem('ahuten_business_config');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return initialBusinessConfig;
  });

  const [packages, setPackages] = useState<ServicePackage[]>(() => {
    const saved = localStorage.getItem('ahuten_packages');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return initialPackages;
  });

  const [leads, setLeads] = useState<AppointmentLead[]>(() => {
    const saved = localStorage.getItem('ahuten_leads');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return initialLeads;
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('ahuten_business_config', JSON.stringify(business));
  }, [business]);

  useEffect(() => {
    localStorage.setItem('ahuten_packages', JSON.stringify(packages));
  }, [packages]);

  useEffect(() => {
    localStorage.setItem('ahuten_leads', JSON.stringify(leads));
  }, [leads]);

  const handleUpdateBusiness = (newConfig: BusinessConfig) => {
    setBusiness(newConfig);
  };

  const handleUpdatePackages = (newPackages: ServicePackage[]) => {
    setPackages(newPackages);
  };

  const handleUpdateLeadStatus = (
    leadId: string,
    status: 'bekliyor' | 'onaylandi' | 'tamamlandi'
  ) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === leadId ? { ...lead, status } : lead))
    );
  };

  const handleAddLead = (newLeadData: {
    name: string;
    phone: string;
    service: string;
    note: string;
  }) => {
    const newLead: AppointmentLead = {
      id: `lead-${Date.now()}`,
      customerName: newLeadData.name,
      phone: newLeadData.phone,
      serviceRequested: newLeadData.service || 'HydraFacial Cilt Bakımı',
      sessionType: 'Web Başvurusu',
      preferredDate: 'En Kısa Zamanda',
      estimatedPrice: 0,
      status: 'bekliyor',
      createdAt: new Date().toLocaleString('tr-TR', {
        dateStyle: 'short',
        timeStyle: 'short',
      }),
      notes: newLeadData.note,
    };
    setLeads((prev) => [newLead, ...prev]);
  };

  const handleResetToDefaults = () => {
    localStorage.removeItem('ahuten_business_config');
    localStorage.removeItem('ahuten_packages');
    localStorage.removeItem('ahuten_leads');
    setBusiness(initialBusinessConfig);
    setPackages(initialPackages);
    setLeads(initialLeads);
  };

  return (
    <div className="min-h-screen bg-[#0c0a09] text-zinc-100 selection:bg-rose-400 selection:text-white font-sans antialiased pb-16 sm:pb-0">
      {/* Top flash campaign announcement bar */}
      <AnnouncementBar business={business} />

      {/* Top sticky navbar with admin trigger */}
      <Navbar business={business} onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Main Page Flow */}
      <main>
        <Hero business={business} />
        <TrustAndWarranty />
        <BeforeAfterSlider items={initialBeforeAfter} />
        <ServicesSection />
        <SkinAnalysisQuiz business={business} />
        <PriceCalculator packages={packages} business={business} />
        <PackagesSection packages={packages} business={business} />
        <GallerySection items={initialGallery} />
        <ReviewsSection business={business} />
        <FaqSection faqs={initialFaqs} business={business} />
        <ContactSection business={business} onAddLead={handleAddLead} />
      </main>

      {/* Footer */}
      <Footer business={business} onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Mobile Sticky Floating Action Bar */}
      <MobileFloatingBar business={business} />

      {/* Interactive Admin Panel Modal */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        business={business}
        onUpdateBusiness={handleUpdateBusiness}
        packages={packages}
        onUpdatePackages={handleUpdatePackages}
        leads={leads}
        onUpdateLeadStatus={handleUpdateLeadStatus}
        onResetToDefaults={handleResetToDefaults}
      />
    </div>
  );
}

export default App;
