import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Treatments } from './components/Treatments';
import { Clinic } from './components/Clinic';
import { LocationHours } from './components/LocationHours';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isHeroOut, setIsHeroOut] = useState(false);

  useEffect(() => {
    const heroElement = document.getElementById('inicio');
    if (!heroElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When hero is NOT intersecting, it is out of view
        setIsHeroOut(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1, // Trigger when less than 10% of hero is in view
      }
    );

    observer.observe(heroElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-surface text-ink font-sans antialiased selection:bg-secondary selection:text-ink">
      {/* Sticky Header */}
      <Header />

      {/* Main Content: 5 Sections */}
      <main>
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Tratamientos */}
        <Treatments />

        {/* Section 3: La clínica */}
        <Clinic />

        {/* Section 4: Cómo llegar y horarios */}
        <LocationHours />

        {/* Section 5: Contacto */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <MobileActionBar isVisible={isHeroOut} />

      {/* Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp hasBottomBar={isHeroOut} />
    </div>
  );
}
