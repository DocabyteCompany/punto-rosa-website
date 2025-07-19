import React, { useState, useEffect } from 'react';
import PressurePointModal from './PressurePointModal';

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
      x: '35%',
      y: '15%',
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
      x: '65%',
      y: '15%',
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
      x: '25%',
      y: '35%',
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
      x: '75%',
      y: '35%',
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
      x: '50%',
      y: '45%',
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
      x: '30%',
      y: '65%',
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
      x: '70%',
      y: '65%',
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

  return (
    <section 
      id="pressure-points" 
      className="h-screen bg-gradient-to-b from-spa-soft-50 to-neutral-warm-50 overflow-hidden"
    >
      <div className="h-full flex items-center justify-center">
        <div className="relative max-w-2xl h-full flex items-center">
          {/* Background image with fade-in animation */}
          <img 
            src="/lovable-uploads/9145e19f-ccc7-404d-aef7-f9184eaaba5c.png"
            alt="Puntos de tensión en espalda"
            className={`w-full h-auto object-contain transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          />
          
          {/* Interactive pressure points with advanced animations */}
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
              onMouseEnter={() => setHoveredPoint(point.id)}
              onMouseLeave={() => setHoveredPoint(null)}
            >
              {/* Main pressure point with breathing animation */}
              <div 
                className={`relative w-4 h-4 bg-punto-rosa-500 rounded-full border-2 border-white shadow-lg
                  transition-all duration-500 ease-out cursor-pointer
                  ${isVisible ? 'animate-pulse' : ''}
                  ${hoveredPoint === point.id 
                    ? 'scale-150 bg-punto-rosa-400 shadow-punto-rosa-300/50 shadow-2xl' 
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
                    ${hoveredPoint === point.id ? 'animate-ping' : 'animate-pulse'}
                  `}
                ></div>
                
                {/* Secondary ripple for depth */}
                {hoveredPoint === point.id && (
                  <div className="absolute inset-0 rounded-full bg-punto-rosa-400 opacity-20 animate-ping animation-delay-300"></div>
                )}
                
                {/* Breathing glow effect */}
                <div 
                  className={`absolute inset-0 rounded-full bg-gradient-radial from-punto-rosa-300/40 to-transparent
                    transition-all duration-1000 
                    ${hoveredPoint === point.id ? 'scale-300 opacity-60' : 'scale-200 opacity-30'}
                  `}
                ></div>
              </div>
              
              {/* Enhanced tooltip with slide animation */}
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
            </div>
          ))}
          
          {/* Floating instruction text */}
          {isVisible && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
              text-center text-neutral-warm-600 animate-fade-in animation-delay-1000">
              <p className="text-sm font-medium mb-1">
                {currentLanguage === 'es' 
                  ? 'Explora los puntos de tensión' 
                  : 'Explore tension points'
                }
              </p>
              <p className="text-xs opacity-75">
                {currentLanguage === 'es' 
                  ? 'Haz click en cualquier punto para obtener información detallada' 
                  : 'Click on any point for detailed information'
                }
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced modal with advanced animations */}
      <PressurePointModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        point={selectedPoint}
        currentLanguage={currentLanguage}
      />
    </section>
  );
};

export default PressurePointsSection;
