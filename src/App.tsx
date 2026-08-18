import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutFirm } from './components/AboutFirm';
import { Services } from './components/Services';
import { RepresentativeCases } from './components/RepresentativeCases';
import { BlogSection } from './components/BlogSection';
import { OurTeam } from './components/OurTeam';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LegalLayout } from './components/legal/LegalLayout';
import { getCurrentLegalDoc, onLegalNavigate } from './utils/legalNavigation';
import { LegalDocType } from './config/legalConfig';

export default function App() {
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType | null>(() => getCurrentLegalDoc());

  useEffect(() => {
    // Listen for custom and popstate navigation events
    const unsubscribe = onLegalNavigate((docId) => {
      setActiveLegalDoc(docId);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // When returning to home page, reset main title and meta description
  useEffect(() => {
    if (!activeLegalDoc) {
      document.title = 'Serna Estate | Firma Legal Inmobiliaria';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Seguridad legal para tus decisiones inmobiliarias. Asesoría legal especializada para proteger tus operaciones y proyectos en Perú.'
        );
      }
    }
  }, [activeLegalDoc]);

  // If a legal document is requested via query param ?legal=...
  if (activeLegalDoc) {
    return <LegalLayout currentDocId={activeLegalDoc} />;
  }

  // Standard Main Landing View
  return (
    <div className="min-h-screen bg-white text-[#14201C] flex flex-col font-body antialiased relative">
      <Header />
      <main id="main-content" className="flex-grow">
        <Hero />
        <WhyChooseUs />
        <AboutFirm />
        <Services />
        <RepresentativeCases />
        <BlogSection />
        <OurTeam />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

