import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import backSilhouette from '@/assets/back-silhouette-custom.png';

interface PressurePoint {
  id: number;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  position: 'left' | 'right';
  yPosition: number; // Porcentaje de altura donde aparece el punto
}

interface PressurePointsSectionProps {
  currentLanguage: string;
}

const pressurePoints: PressurePoint[] = [
  {
    id: 1,
    title: {
      es: "Punto Cervical",
      en: "Cervical Point"
    },
    description: {
      es: "Alivia la tensión del cuello y mejora la circulación en la zona cervical, reduciendo dolores de cabeza.",
      en: "Relieves neck tension and improves circulation in the cervical area, reducing headaches."
    },
    position: 'left',
    yPosition: 15
  },
  {
    id: 2,
    title: {
      es: "Punto Dorsal Alto",
      en: "Upper Dorsal Point"
    },
    description: {
      es: "Relaja los músculos superiores de la espalda, ideal para quienes pasan mucho tiempo sentados.",
      en: "Relaxes upper back muscles, ideal for those who spend long hours sitting."
    },
    position: 'right',
    yPosition: 30
  },
  {
    id: 3,
    title: {
      es: "Punto Medio Espinal",
      en: "Mid Spinal Point"
    },
    description: {
      es: "Equilibra la energía del cuerpo y mejora la postura corporal general.",
      en: "Balances body energy and improves overall body posture."
    },
    position: 'left',
    yPosition: 50
  },
  {
    id: 4,
    title: {
      es: "Punto Lumbar",
      en: "Lumbar Point"
    },
    description: {
      es: "Fortalece la zona lumbar y alivia dolores de espalda baja causados por estrés.",
      en: "Strengthens the lumbar area and relieves lower back pain caused by stress."
    },
    position: 'right',
    yPosition: 70
  },
  {
    id: 5,
    title: {
      es: "Punto Sacro",
      en: "Sacral Point"
    },
    description: {
      es: "Estimula la base energética del cuerpo y mejora la estabilidad postural.",
      en: "Stimulates the body's energy base and improves postural stability."
    },
    position: 'left',
    yPosition: 85
  }
];

const PressurePointsSection: React.FC<PressurePointsSectionProps> = ({ currentLanguage }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visiblePoints, setVisiblePoints] = useState<Set<number>>(new Set());
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!inView) return;
      
      const element = document.getElementById('pressure-points-section');
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementHeight = rect.height;
      const elementTop = rect.top;
      const windowHeight = window.innerHeight;
      
      // Calcular progreso basado en la posición del scroll
      const progress = Math.max(0, Math.min(1, 
        (windowHeight - elementTop) / (elementHeight + windowHeight)
      ));
      
      setScrollProgress(progress);

      // Determinar qué puntos deben ser visibles
      const newVisiblePoints = new Set<number>();
      pressurePoints.forEach(point => {
        const pointThreshold = point.yPosition / 100;
        if (progress >= pointThreshold) {
          newVisiblePoints.add(point.id);
        }
      });
      setVisiblePoints(newVisiblePoints);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [inView]);

  const content = {
    es: {
      title: "Puntos de Presión Terapéuticos",
      subtitle: "Descubre cómo cada punto de tu espalda puede transformar tu bienestar"
    },
    en: {
      title: "Therapeutic Pressure Points",
      subtitle: "Discover how each point on your back can transform your wellbeing"
    }
  };

  const selectedContent = content[currentLanguage as keyof typeof content];

  return (
    <section 
      ref={ref}
      id="pressure-points-section"
      className="relative min-h-screen py-20 bg-gradient-to-b from-spa-soft-50 to-neutral-warm-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-spa-green-400 to-punto-rosa-400 mx-auto mb-6 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-serif text-text-deep-800 mb-4">
            {selectedContent.title}
          </h2>
          <p className="text-lg text-text-deep-600 max-w-2xl mx-auto">
            {selectedContent.subtitle}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-[80vh]">
          
          {/* Left Column - Points */}
          <div className="flex flex-col justify-center space-y-12">
            {pressurePoints
              .filter(point => point.position === 'left')
              .map(point => (
                <div
                  key={point.id}
                  className={`transform transition-all duration-700 ${
                    visiblePoints.has(point.id)
                      ? 'translate-x-0 opacity-100'
                      : '-translate-x-10 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${point.id * 150}ms`
                  }}
                >
                  <div className="text-right lg:text-left">
                    <h3 className="text-2xl font-serif text-text-deep-800 mb-3">
                      {point.title[currentLanguage as keyof typeof point.title]}
                    </h3>
                    <p className="text-text-deep-600 leading-relaxed">
                      {point.description[currentLanguage as keyof typeof point.description]}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* Center Column - Back Image with Progress Bar */}
          <div className="relative flex items-center justify-center">
            {/* Progress Bar Background (Transparent) */}
            <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-2 bg-transparent border border-neutral-warm-300 rounded-full z-20">
              {/* Colored Progress Fill */}
              <div
                className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-spa-green-500 to-punto-rosa-500 rounded-full transition-all duration-300 ease-out z-10"
                style={{
                  height: `${scrollProgress * 100}%`
                }}
              />
            </div>

            {/* Back Silhouette with Transparent Center */}
            <div className="relative w-64 h-96 z-0">
              {/* Main back silhouette image */}
              <img 
                src={backSilhouette}
                alt="Back silhouette"
                className="w-full h-full object-contain opacity-60 filter brightness-50"
              />
              
              {/* Transparent center stripe overlay - creates the spine gap */}
              <div 
                className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-6 z-10"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.9) 30%, rgba(255,255,255,0.9) 70%, transparent 100%)'
                }}
              />
              
              {/* Pressure points indicators */}
              {pressurePoints.map(point => (
                <div
                  key={point.id}
                  className={`absolute w-4 h-4 rounded-full border-2 border-white shadow-lg transform transition-all duration-500 z-30 ${
                    visiblePoints.has(point.id)
                      ? 'bg-punto-rosa-500 scale-100 opacity-100 pulse'
                      : 'bg-transparent scale-0 opacity-0'
                  }`}
                  style={{
                    top: `${point.yPosition}%`,
                    left: point.position === 'left' ? '30%' : '70%',
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Points */}
          <div className="flex flex-col justify-center space-y-12">
            {pressurePoints
              .filter(point => point.position === 'right')
              .map(point => (
                <div
                  key={point.id}
                  className={`transform transition-all duration-700 ${
                    visiblePoints.has(point.id)
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-10 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${point.id * 150}ms`
                  }}
                >
                  <div className="text-left">
                    <h3 className="text-2xl font-serif text-text-deep-800 mb-3">
                      {point.title[currentLanguage as keyof typeof point.title]}
                    </h3>
                    <p className="text-text-deep-600 leading-relaxed">
                      {point.description[currentLanguage as keyof typeof point.description]}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressurePointsSection;