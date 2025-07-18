
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

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
      {/* 2. Contenedor con Márgenes Horizontales */}
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

        {/* 3. Contenedor de 2 Columnas */}
        <div className="relative grid grid-cols-2 gap-8 min-h-screen">
          
          {/* Columna Izquierda - Puntos del lado izquierdo */}
          <div className="flex flex-col justify-center space-y-12 pr-8">
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
                  <div className="text-right">
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

          {/* Columna Derecha - Puntos del lado derecho */}
          <div className="flex flex-col justify-center space-y-12 pl-8">
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

          {/* 4. Contenedor de Imagen (Posición Absoluta) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <div className="relative w-80 h-screen">
              {/* Back Silhouette */}
              <div className="relative w-full h-full z-0">
                {/* Main back silhouette image */}
                <img 
                  src="/lovable-uploads/c5d32113-4b94-4ad8-98ee-08abbd8435d1.png"
                  alt="Back silhouette"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressurePointsSection;
