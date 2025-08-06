
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-spa-soft-50 to-punto-rosa-50">
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
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-text-deep-800 mb-4 sm:mb-6 animate-fade-in leading-tight">
          {content[currentLanguage as keyof typeof content].title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-text-deep-600 mb-8 sm:mb-12 font-light animate-fade-in px-2 sm:px-0" 
           style={{ animationDelay: '0.3s' }}>
          {content[currentLanguage as keyof typeof content].subtitle}
        </p>
        <button className="text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in shadow-punto-rosa-200 touch-manipulation"
                style={{ 
                  animationDelay: '0.6s',
                  background: 'linear-gradient(90deg, hsla(0, 87%, 79%, 1) 0%, hsla(6, 77%, 85%, 1) 100%)',
                  filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#F89999", endColorstr="#F6C0BA", GradientType=1 )'
                }}>
          {content[currentLanguage as keyof typeof content].cta}
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-punto-rosa-600" />
      </div>
    </section>
  );
};

export default Hero;
