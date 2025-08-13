import React, { useState, useEffect } from 'react';
import TherapeuticPointsDynamic from './TherapeuticPointsDynamic';

interface TherapeuticPointsSectionProps {
  currentLanguage: string;
}

const TherapeuticPointsSection: React.FC<TherapeuticPointsSectionProps> = ({ currentLanguage }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Animation trigger when component enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('therapeutic-points');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const content = {
    en: {
      title: 'Therapeutic Points',
      subtitle: 'Discover the key points for muscle relief and wellness',
      description: 'Click on the pressure points to learn about specific techniques, benefits, and recommended duration for each area.',
      instruction: 'Interactive Guide'
    },
    es: {
      title: 'Puntos Terapéuticos',
      subtitle: 'Descubre los puntos clave para el alivio muscular y bienestar',
      description: 'Haz clic en los puntos de presión para conocer las técnicas específicas, beneficios y duración recomendada para cada área.',
      instruction: 'Guía Interactiva'
    }
  };

  const currentContent = content[currentLanguage as keyof typeof content];

  return (
    <section 
      id="therapeutic-points" 
      className="min-h-fit sm:min-h-screen bg-gradient-to-r from-spa-soft-50 to-neutral-warm-50 relative overflow-hidden"
    >
      {/* Título de la sección */}
      <div className="absolute top-0 left-0 right-0 z-40 text-center mt-20">
        <h2 className={`font-playfair text-neutral-warm-900 mb-2 font-bold ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl block">
            {currentContent.title}
          </span>
        </h2>
        
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${
          isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-warm-700 mb-2 sm:mb-4 font-light">
            {currentContent.subtitle}
          </p>
          <p className="text-sm sm:text-base md:text-lg text-neutral-warm-600 mb-1 sm:mb-2">
            {currentContent.description}
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-punto-rosa-100 text-punto-rosa-700 rounded-full text-sm font-medium">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            {currentContent.instruction}
          </div>
        </div>
      </div>

      {/* Contenedor principal para el componente dinámico */}
      <div className="relative w-full h-auto sm:h-full pt-[260px] sm:pt-44 md:pt-52 lg:pt-60 px-4 sm:px-6 lg:px-8 z-30">
        <div className="max-w-6xl mx-auto">
          {/* Contenedor con aspect ratio fijo para la imagen */}
          <div className="relative w-full" style={{ aspectRatio: '4/5' }}>
            <div className={`w-full h-full transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <TherapeuticPointsDynamic currentLanguage={currentLanguage} />
            </div>
          </div>
        </div>
      </div>

      {/* Efectos decorativos de fondo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Círculos decorativos animados */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-punto-rosa-200/20 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-spa-green-200/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-neutral-warm-200/10 rounded-full animate-pulse"></div>
        
        {/* Líneas decorativas sutiles */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-punto-rosa-200/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-spa-green-200/30 to-transparent"></div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.3s forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
};

export default TherapeuticPointsSection;