
import React, { useState } from 'react';
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
    <section className="h-screen bg-gradient-to-b from-spa-soft-50 to-neutral-warm-50">
      <div className="h-full flex items-center justify-center">
        <div className="relative max-w-2xl h-full flex items-center">
          <img 
            src="/lovable-uploads/9145e19f-ccc7-404d-aef7-f9184eaaba5c.png"
            alt="Puntos de tensión en espalda"
            className="w-full h-auto object-contain"
          />
          
          {/* Puntos de presión interactivos */}
          {pressurePoints.map((point) => (
            <div
              key={point.id}
              className="absolute group cursor-pointer"
              style={{ left: point.x, top: point.y, transform: 'translate(-50%, -50%)' }}
              onClick={() => handlePointClick(point)}
            >
              {/* Círculo principal del punto */}
              <div className="w-4 h-4 bg-punto-rosa-500 rounded-full border-2 border-white shadow-lg animate-pulse hover:animate-none transition-all duration-300 hover:scale-150 hover:bg-punto-rosa-400">
                {/* Efecto de onda */}
                <div className="absolute inset-0 rounded-full bg-punto-rosa-500 opacity-30 animate-ping"></div>
              </div>
              
              {/* Tooltip con información */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-neutral-warm-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {point.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-warm-900"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de información del punto de presión */}
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
