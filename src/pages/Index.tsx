import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import PackagesSection from '../components/PackagesSection';
import PressurePointsSection from '../components/PressurePointsSection';
import InstagramGallery from '../components/InstagramGallery';
import SocialMedia from '../components/SocialMedia';
import BookingSystem from '../components/BookingSystem';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState('es');
  const [activeSection, setActiveSection] = useState('home');

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
  };

  const handleBookService = (service: any) => {
    // Scroll to booking section
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookPackage = (packageId: number) => {
    // Scroll to booking section
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Smooth scroll to sections
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'pressure-points', 'testimonials'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <main>
        <section id="home">
          <Hero currentLanguage={currentLanguage} />
        </section>

        <section id="services">
          <ServicesGrid 
            currentLanguage={currentLanguage}
            onBookService={handleBookService}
            onViewDetails={() => {}}
            services={[]}
          />
        </section>

        <PackagesSection 
          currentLanguage={currentLanguage}
          onBookPackage={handleBookPackage}
        />

        <section id="pressure-points">
          <PressurePointsSection currentLanguage={currentLanguage} />
        </section>

        <InstagramGallery currentLanguage={currentLanguage} />

        <SocialMedia currentLanguage={currentLanguage} />

        <section id="testimonials">
          <TestimonialsSection currentLanguage={currentLanguage} />
        </section>

        <section id="booking">
          <BookingSystem currentLanguage={currentLanguage} />
        </section>
      </main>

      <Footer currentLanguage={currentLanguage} />

      <Chatbot currentLanguage={currentLanguage} />
    </div>
  );
};

export default Index;
