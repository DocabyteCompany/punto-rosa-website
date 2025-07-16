
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  currentLanguage: string;
}

const Hero: React.FC<HeroProps> = ({ currentLanguage }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      title: "Find Your Moment of Peace",
      subtitle: "Renew Your Energy with Professional Massages",
      cta: "Book Appointment"
    },
    es: {
      title: "Encuentra tu Momento de Paz",
      subtitle: "Renueva tu Energía con Masajes Profesionales",
      cta: "Agendar Cita"
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-spa-soft-50 to-punto-rosa-50">
      {/* Background with parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ 
          backgroundImage: `url(https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      
      {/* Breathing animation overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-punto-rosa-100/40 animate-pulse" 
           style={{ animationDuration: '4s' }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-serif text-text-deep-800 mb-6 animate-fade-in">
          {content[currentLanguage as keyof typeof content].title}
        </h1>
        <p className="text-xl md:text-2xl text-text-deep-600 mb-12 font-light animate-fade-in" 
           style={{ animationDelay: '0.3s' }}>
          {content[currentLanguage as keyof typeof content].subtitle}
        </p>
        <button className="bg-punto-rosa-500 hover:bg-punto-rosa-600 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in shadow-punto-rosa-200"
                style={{ animationDelay: '0.6s' }}>
          {content[currentLanguage as keyof typeof content].cta}
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-punto-rosa-600" />
      </div>
    </section>
  );
};

export default Hero;
