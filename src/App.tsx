import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutFirm } from './components/AboutFirm';
import { Services } from './components/Services';
import { RepresentativeCases } from './components/RepresentativeCases';
import { BlogSection } from './components/BlogSection';
import { OurTeam } from './components/OurTeam';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
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
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
