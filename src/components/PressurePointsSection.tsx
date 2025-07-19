
import React, { useState, useEffect } from 'react';
import PressurePointModal from './PressurePointModal';
import { useIsMobile } from '../hooks/use-mobile';

interface PressurePointsSectionProps {
  currentLanguage: string;
}

interface PressurePoint {
  id: number;
  x: string;
  y: string;
  name: string;
  description: string;
  techniques: string[];
  benefits: string[];
  duration: string;
}

const PressurePointsSection: React.FC<PressurePointsSectionProps> = ({ currentLanguage }) => {
  const [selectedPoint, setSelectedPoint] = useState<PressurePoint | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [touchedPoint, setTouchedPoint] = useState<number | null>(null);
  const isMobile = useIsMobile();

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

    const section = document.getElementById('pressure-points');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const pressurePoints: PressurePoint[] = [
    {
      id: 1,
      x: '40.5%',
      y: '48%',
      name: currentLanguage === 'es' ? 'Cuello superior' : 'Upper neck',
      description: currentLanguage === 'es' 
        ? 'Zona de alta tensión donde se acumulan contracturas por estrés y malas posturas.'
        : 'High tension area where contractures accumulate due to stress and poor posture.',
      techniques: currentLanguage === 'es'
        ? ['Presión circular suave', 'Movimientos ascendentes', 'Estiramiento lateral']
        : ['Gentle circular pressure', 'Upward movements', 'Lateral stretching'],
      benefits: currentLanguage === 'es'
        ? ['Reduce dolores de cabeza', 'Mejora la movilidad cervical', 'Alivia la rigidez']
        : ['Reduces headaches', 'Improves cervical mobility', 'Relieves stiffness'],
      duration: currentLanguage === 'es' ? '3-5 minutos por lado' : '3-5 minutes per side'
    },
    {
      id: 2,
      x: '56.5%',
      y: '48%',
      name: currentLanguage === 'es' ? 'Cuello superior' : 'Upper neck',
      description: currentLanguage === 'es' 
        ? 'Zona de alta tensión donde se acumulan contracturas por estrés y malas posturas.'
        : 'High tension area where contractures accumulate due to stress and poor posture.',
      techniques: currentLanguage === 'es'
        ? ['Presión circular suave', 'Movimientos ascendentes', 'Estiramiento lateral']
        : ['Gentle circular pressure', 'Upward movements', 'Lateral stretching'],
      benefits: currentLanguage === 'es'
        ? ['Reduce dolores de cabeza', 'Mejora la movilidad cervical', 'Alivia la rigidez']
        : ['Reduces headaches', 'Improves cervical mobility', 'Relieves stiffness'],
      duration: currentLanguage === 'es' ? '3-5 minutos por lado' : '3-5 minutes per side'
    },
    {
      id: 3,
      x: '30.5%',
      y: '60%',
      name: currentLanguage === 'es' ? 'Hombros' : 'Shoulders',
      description: currentLanguage === 'es'
        ? 'Área que soporta gran tensión por el peso de los brazos y estrés laboral.'
        : 'Area that supports great tension from the weight of arms and work stress.',
      techniques: currentLanguage === 'es'
        ? ['Amasamiento profundo', 'Presión con nudillos', 'Movimientos circulares amplios']
        : ['Deep kneading', 'Knuckle pressure', 'Wide circular movements'],
      benefits: currentLanguage === 'es'
        ? ['Libera tensión muscular', 'Mejora la postura', 'Reduce el estrés']
        : ['Releases muscle tension', 'Improves posture', 'Reduces stress'],
      duration: currentLanguage === 'es' ? '5-8 minutos por hombro' : '5-8 minutes per shoulder'
    },
    {
      id: 4,
      x: '66.5%',
      y: '60%',
      name: currentLanguage === 'es' ? 'Hombros' : 'Shoulders',
      description: currentLanguage === 'es'
        ? 'Área que soporta gran tensión por el peso de los brazos y estrés laboral.'
        : 'Area that supports great tension from the weight of arms and work stress.',
      techniques: currentLanguage === 'es'
        ? ['Amasamiento profundo', 'Presión con nudillos', 'Movimientos circulares amplios']
        : ['Deep kneading', 'Knuckle pressure', 'Wide circular movements'],
      benefits: currentLanguage === 'es'
        ? ['Libera tensión muscular', 'Mejora la postura', 'Reduce el estrés']
        : ['Releases muscle tension', 'Improves posture', 'Reduces stress'],
      duration: currentLanguage === 'es' ? '5-8 minutos por hombro' : '5-8 minutes per shoulder'
    },
    {
      id: 5,
      x: '48.5%',
      y: '70%',
      name: currentLanguage === 'es' ? 'Espalda media' : 'Mid back',
      description: currentLanguage === 'es'
        ? 'Centro de la espalda donde convergen múltiples grupos musculares.'
        : 'Center of the back where multiple muscle groups converge.',
      techniques: currentLanguage === 'es'
        ? ['Presión palmar', 'Movimientos en espiral', 'Estiramiento vertebral']
        : ['Palm pressure', 'Spiral movements', 'Vertebral stretching'],
      benefits: currentLanguage === 'es'
        ? ['Mejora la flexibilidad', 'Reduce contracturas', 'Estimula la circulación']
        : ['Improves flexibility', 'Reduces contractures', 'Stimulates circulation'],
      duration: currentLanguage === 'es' ? '8-10 minutos' : '8-10 minutes'
    },
    {
      id: 6,
      x: '38.5%',
      y: '86%',
      name: currentLanguage === 'es' ? 'Espalda baja' : 'Lower back',
      description: currentLanguage === 'es'
        ? 'Zona lumbar que soporta el peso corporal y es propensa a contracturas.'
        : 'Lumbar area that supports body weight and is prone to contractures.',
      techniques: currentLanguage === 'es'
        ? ['Presión gradual', 'Movimientos longitudinales', 'Calor terapéutico']
        : ['Gradual pressure', 'Longitudinal movements', 'Therapeutic heat'],
      benefits: currentLanguage === 'es'
        ? ['Alivia dolor lumbar', 'Mejora la postura', 'Reduce la inflamación']
        : ['Relieves lumbar pain', 'Improves posture', 'Reduces inflammation'],
      duration: currentLanguage === 'es' ? '10-15 minutos' : '10-15 minutes'
    },
    {
      id: 7,
      x: '58.5%',
      y: '86%',
      name: currentLanguage === 'es' ? 'Espalda baja' : 'Lower back',
      description: currentLanguage === 'es'
        ? 'Zona lumbar que soporta el peso corporal y es propensa a contracturas.'
        : 'Lumbar area that supports body weight and is prone to contractures.',
      techniques: currentLanguage === 'es'
        ? ['Presión gradual', 'Movimientos longitudinales', 'Calor terapéutico']
        : ['Gradual pressure', 'Longitudinal movements', 'Therapeutic heat'],
      benefits: currentLanguage === 'es'
        ? ['Alivia dolor lumbar', 'Mejora la postura', 'Reduce la inflamación']
        : ['Relieves lumbar pain', 'Improves posture', 'Reduces inflammation'],
      duration: currentLanguage === 'es' ? '10-15 minutos' : '10-15 minutes'
    }
  ];

  const handlePointClick = (point: PressurePoint) => {
    setSelectedPoint(point);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPoint(null);
  };

  const handleTouchStart = (pointId: number) => {
    if (isMobile) {
      setTouchedPoint(pointId);
    }
  };

  const handleTouchEnd = () => {
    if (isMobile) {
      setTouchedPoint(null);
    }
  };

  return (
    <section 
      id="pressure-points" 
      className="min-h-screen py-16 bg-gradient-to-b from-spa-soft-50 to-neutral-warm-50 relative"
    >
      {/* Título de la sección - ahora con posición absoluta */}
      <div className="absolute top-0 left-0 right-0 z-40 pt-16 pb-8 text-center">
        <h2 className={`font-playfair text-neutral-warm-900 mb-2 font-bold ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        } ${isMobile ? 'text-3xl' : 'text-4xl'}`}>
          {currentLanguage === 'es' ? 'Puntos Terapéuticos' : 'Therapeutic Points'}
        </h2>
        <div className={`w-24 h-1 bg-gradient-to-r from-punto-rosa-400 to-punto-rosa-600 mx-auto rounded-full ${
          isVisible ? 'animate-scale-in animation-delay-300' : 'opacity-0'
        }`}></div>
      </div>

      {/* Contenedor de la imagen con puntos */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative max-w-2xl h-full flex items-center">
          {/* Background image with fade-in animation */}
          <img 
            src="/lovable-uploads/9145e19f-ccc7-404d-aef7-f9184eaaba5c.png"
            alt="Puntos de tensión en espalda"
            className={`w-full h-auto object-contain transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          />
          
          {/* Interactive pressure points with mobile optimization */}
          {pressurePoints.map((point, index) => (
            <div
              key={point.id}
              className="absolute group cursor-pointer"
              style={{ 
                left: point.x, 
                top: point.y, 
                transform: 'translate(-50%, -50%)',
                animationDelay: `${index * 200}ms`
              }}
              onClick={() => handlePointClick(point)}
              onMouseEnter={() => !isMobile && setHoveredPoint(point.id)}
              onMouseLeave={() => !isMobile && setHoveredPoint(null)}
              onTouchStart={() => handleTouchStart(point.id)}
              onTouchEnd={handleTouchEnd}
            >
              {/* Larger touch area for mobile */}
              <div className={`absolute inset-0 ${isMobile ? 'w-11 h-11 -m-3.5' : 'w-8 h-8 -m-2'} rounded-full`} />
              
              {/* Main pressure point with mobile-optimized size */}
              <div 
                className={`relative rounded-full border-2 border-white shadow-lg
                  transition-all duration-500 ease-out cursor-pointer
                  ${isMobile 
                    ? 'w-6 h-6 bg-punto-rosa-500' 
                    : 'w-4 h-4 bg-punto-rosa-500'
                  }
                  ${isVisible ? 'animate-pulse' : ''}
                  ${isMobile && touchedPoint === point.id
                    ? 'scale-150 bg-punto-rosa-400 shadow-punto-rosa-300/50 shadow-2xl' 
                    : !isMobile && hoveredPoint === point.id 
                      ? 'scale-150 bg-punto-rosa-400 shadow-punto-rosa-300/50 shadow-2xl' 
                      : isMobile 
                        ? 'hover:scale-125' 
                        : 'hover:scale-125'
                  }
                  ${isVisible ? `animate-fade-in` : 'opacity-0'}
                `}
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Primary ripple effect */}
                <div 
                  className={`absolute inset-0 rounded-full bg-punto-rosa-500 opacity-30 
                    ${(isMobile && touchedPoint === point.id) || (!isMobile && hoveredPoint === point.id) 
                      ? 'animate-ping' 
                      : 'animate-pulse'
                    }
                  `}
                ></div>
                
                {/* Secondary ripple for depth */}
                {((isMobile && touchedPoint === point.id) || (!isMobile && hoveredPoint === point.id)) && (
                  <div className="absolute inset-0 rounded-full bg-punto-rosa-400 opacity-20 animate-ping animation-delay-300"></div>
                )}
                
                {/* Breathing glow effect */}
                <div 
                  className={`absolute inset-0 rounded-full bg-gradient-radial from-punto-rosa-300/40 to-transparent
                    transition-all duration-1000 
                    ${(isMobile && touchedPoint === point.id) || (!isMobile && hoveredPoint === point.id)
                      ? 'scale-300 opacity-60' 
                      : 'scale-200 opacity-30'
                    }
                  `}
                ></div>
              </div>
              
              {/* Desktop-only tooltip */}
              {!isMobile && (
                <div 
                  className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-2 
                    bg-gradient-to-r from-neutral-warm-900 to-neutral-warm-800 text-white text-sm rounded-xl 
                    shadow-xl border border-neutral-warm-700
                    transition-all duration-300 ease-out pointer-events-none
                    ${hoveredPoint === point.id 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-2 scale-95'
                    }
                    whitespace-nowrap backdrop-blur-sm
                  `}
                >
                  <div className="font-medium">{point.name}</div>
                  <div className="text-xs text-neutral-warm-300 mt-1">
                    {currentLanguage === 'es' ? 'Click para más info' : 'Click for more info'}
                  </div>
                  
                  {/* Tooltip arrow with gradient */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 
                    border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-warm-800">
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile-optimized modal */}
      <PressurePointModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        point={selectedPoint}
        currentLanguage={currentLanguage}
        isMobile={isMobile}
      />
    </section>
  );
};

export default PressurePointsSection;
