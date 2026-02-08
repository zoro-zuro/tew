import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import CapabilitiesSection from './components/Services';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import NextStepSection from './components/NextStepSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <AboutSection />
      <CapabilitiesSection />
      <Testimonials />
      <ContactSection />
      <FAQSection />
      <NextStepSection />
      <Footer />
    </main>
  );
};

export default App;
