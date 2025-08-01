import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ServicesCarousel from '../components/ServicesCarousel';
import TestimonialsSection from '../components/TestimonialsSection';
import PackagesSection from '../components/PackagesSection';
import CTASection from '../components/CTASection';
import PressurePointsSection from '../components/PressurePointsSection';
import InstagramGallery from '../components/InstagramGallery';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

interface Service {
  id: number;
  name: { en: string; es: string };
  price: number;
  duration: { en: string; es: string };
  image: string;
  category: string;
  description: { en: string; es: string };
  benefits: { en: string[]; es: string[] };
}

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState('es');
  const [activeSection, setActiveSection] = useState('home');

  // Definición de todos los servicios basados en las imágenes
  const services: Service[] = [
    {
      id: 1,
      name: { en: 'Harmony Massage', es: 'Masaje Harmony' },
      price: 500,
      duration: { en: '60 minutes', es: '60 minutos' },
      image: '/lovable-uploads/31349569-7ca5-4ae3-8fcd-c3c058516f41.png',
      category: 'massage',
      description: { 
        en: 'Therapeutic massage, soft and deep technique that reduces tension and renews body and mind.',
        es: 'Masaje terapéutico, técnica suave y profunda que reduce la tensión y renueva cuerpo y mente.'
      },
      benefits: {
        en: ['Reduces tension', 'Renews body and mind', 'Deep relaxation'],
        es: ['Reduce la tensión', 'Renueva cuerpo y mente', 'Relajación profunda']
      }
    },
    {
      id: 2,
      name: { en: 'Myofascial Release Massage', es: 'Masaje de liberación miofascial' },
      price: 500,
      duration: { en: '60 minutes', es: '60 minutos' },
      image: '/lovable-uploads/9145e19f-ccc7-404d-aef7-f9184eaaba5c.png',
      category: 'massage',
      description: { 
        en: 'Technique that relieves deep muscular tensions.',
        es: 'Técnica que alivia tensiones musculares profundas.'
      },
      benefits: {
        en: ['Relieves deep muscle tension', 'Improves flexibility', 'Reduces pain'],
        es: ['Alivia tensiones musculares profundas', 'Mejora la flexibilidad', 'Reduce el dolor']
      }
    },
    {
      id: 3,
      name: { en: 'Mixed Massage', es: 'Masaje mixto' },
      price: 550,
      duration: { en: '60 minutes', es: '60 minutos' },
      image: '/lovable-uploads/c5d32113-4b94-4ad8-98ee-08abbd8435d1.png',
      category: 'massage',
      description: { 
        en: 'Integral massage with relaxing and decontracting techniques.',
        es: 'Masaje integral con técnicas relajantes y descontracturante.'
      },
      benefits: {
        en: ['Relaxing techniques', 'Decontracting', 'Complete body treatment'],
        es: ['Técnicas relajantes', 'Descontracturante', 'Tratamiento corporal completo']
      }
    },
    {
      id: 4,
      name: { en: 'Manual Lymphatic Drainage', es: 'Drenaje linfático manual' },
      price: 500,
      duration: { en: '60 minutes', es: '60 minutos' },
      image: '/lovable-uploads/bc42af10-a390-4a2c-917b-6c68e37b0d6b.png',
      category: 'massage',
      description: { 
        en: 'Professional technique for toxin elimination, reduces edema and improves circulation.',
        es: 'Técnica profesional para la eliminación de toxinas, reduce edemas y mejora la circulación.'
      },
      benefits: {
        en: ['Eliminates toxins', 'Reduces edema', 'Improves circulation'],
        es: ['Elimina toxinas', 'Reduce edemas', 'Mejora la circulación']
      }
    },
    {
      id: 5,
      name: { en: 'Sports Massage', es: 'Masaje deportivo' },
      price: 500,
      duration: { en: '60 minutes', es: '60 minutos' },
      image: '/lovable-uploads/a4db14b6-4bb8-4695-8ca1-98b52ca444d8.png',
      category: 'massage',
      description: { 
        en: 'Relieves muscle tension, improving flexibility and circulation.',
        es: 'Alivia la tensión muscular, mejorando la flexibilidad y circulación.'
      },
      benefits: {
        en: ['Relieves muscle tension', 'Improves flexibility', 'Enhances circulation'],
        es: ['Alivia la tensión muscular', 'Mejora la flexibilidad', 'Mejora la circulación']
      }
    },
    {
      id: 6,
      name: { en: 'Pressotherapy', es: 'Presoterapia' },
      price: 550,
      duration: { en: '45 minutes', es: '45 minutos' },
      image: '/lovable-uploads/31349569-7ca5-4ae3-8fcd-c3c058516f41.png',
      category: 'therapy',
      description: { 
        en: 'Pressotherapy is a comprehensive therapy that optimizes circulation, drains liquids, and accelerates muscle recovery.',
        es: 'La presoterapia es una terapia comprensiva que optimiza la circulación, drena líquidos y acelera la recuperación muscular.'
      },
      benefits: {
        en: ['Optimizes circulation', 'Drains liquids', 'Accelerates muscle recovery'],
        es: ['Optimiza la circulación', 'Drena líquidos', 'Acelera la recuperación muscular']
      }
    },
    {
      id: 7,
      name: { en: 'Passive Gymnastics', es: 'Gimnasia pasiva' },
      price: 550,
      duration: { en: '30 minutes', es: '30 minutos' },
      image: '/lovable-uploads/9145e19f-ccc7-404d-aef7-f9184eaaba5c.png',
      category: 'therapy',
      description: { 
        en: 'Passive gymnastics is a technique that uses electrical impulses to stimulate muscles and generate contractions without physical effort.',
        es: 'La gimnasia pasiva es una técnica que utiliza impulsos eléctricos para estimular los músculos y generar contracciones sin esfuerzo físico.'
      },
      benefits: {
        en: ['Tones without physical impact', 'Suitable for recovery', 'Aesthetic complement'],
        es: ['Tonifica sin impacto físico', 'Ideal para recuperación', 'Complemento estético']
      }
    },
    {
      id: 8,
      name: { en: 'Cavitation', es: 'Cavitación' },
      price: 400,
      duration: { en: '30 minutes', es: '30 minutos' },
      image: '/lovable-uploads/c5d32113-4b94-4ad8-98ee-08abbd8435d1.png',
      category: 'aesthetic',
      description: { 
        en: 'Non-invasive aesthetic treatment to reduce body measurements.',
        es: 'Tratamiento estético no invasivo para reducir medidas corporales.'
      },
      benefits: {
        en: ['Non-invasive treatment', 'Reduces body measurements', 'Aesthetic improvement'],
        es: ['Tratamiento no invasivo', 'Reduce medidas corporales', 'Mejora estética']
      }
    },
    {
      id: 9,
      name: { en: 'Vitamin Serum', es: 'Suero vitaminado' },
      price: 1200,
      duration: { en: '60 minutes', es: '60 minutos' },
      image: '/lovable-uploads/bc42af10-a390-4a2c-917b-6c68e37b0d6b.png',
      category: 'wellness',
      description: { 
        en: 'Vitamin serum treatment for health and wellness.',
        es: 'Tratamiento de suero vitaminado para la salud y bienestar.'
      },
      benefits: {
        en: ['Vitamin boost', 'Health improvement', 'Wellness enhancement'],
        es: ['Refuerzo vitamínico', 'Mejora de la salud', 'Mejora del bienestar']
      }
    }
  ];

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
  };

  const handleBookService = (service: any) => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookPackage = (packageId: number) => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Smooth scroll to sections
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'testimonials', 'packages', 'cta', 'pressure-points', 'contact'];
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
          <ServicesCarousel 
            currentLanguage={currentLanguage}
            onBookService={handleBookService}
            onViewDetails={() => {}}
            services={services}
          />
        </section>

        <section id="testimonials">
          <TestimonialsSection currentLanguage={currentLanguage} />
        </section>

        <section id="packages">
          <PackagesSection 
            currentLanguage={currentLanguage}
            onBookPackage={handleBookPackage}
          />
        </section>

        <section id="cta">
          <CTASection 
            currentLanguage={currentLanguage}
            onBookService={handleBookService}
          />
        </section>

        <section id="pressure-points">
          <PressurePointsSection currentLanguage={currentLanguage} />
        </section>

        <InstagramGallery currentLanguage={currentLanguage} />

        <ContactSection currentLanguage={currentLanguage} />
      </main>

      <Footer currentLanguage={currentLanguage} />

      <Chatbot currentLanguage={currentLanguage} />
    </div>
  );
};

export default Index;
