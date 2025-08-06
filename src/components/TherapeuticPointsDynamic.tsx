import React, { useState, useRef, useLayoutEffect } from 'react';
import PressurePointModal from './PressurePointModal';
import { useIsMobile } from '../hooks/use-mobile';

interface TherapeuticPointsDynamicProps {
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

interface OverlayStyle {
  position: 'absolute';
  top: string;
  left: string;
  width: string;
  height: string;
}

const TherapeuticPointsDynamic: React.FC<TherapeuticPointsDynamicProps> = ({ currentLanguage }) => {
  const [selectedPoint, setSelectedPoint] = useState<PressurePoint | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [touchedPoint, setTouchedPoint] = useState<number | null>(null);
  const [overlayStyle, setOverlayStyle] = useState<OverlayStyle>({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%'
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const isMobile = useIsMobile();

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
      y: '53%',
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
      y: '53%',
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
      y: '81%',
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
      y: '81%',
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

  // Lógica de medición dinámica con ResizeObserver
  useLayoutEffect(() => {
    const calculateOverlayDimensions = () => {
      if (!containerRef.current || !imageRef.current) return;

      const container = containerRef.current;
      const image = imageRef.current;

      // Obtener dimensiones del contenedor
      const containerRect = container.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const containerHeight = containerRect.height;

      // Obtener dimensiones intrínsecas de la imagen
      const naturalWidth = image.naturalWidth;
      const naturalHeight = image.naturalHeight;

      if (naturalWidth === 0 || naturalHeight === 0) return; // Imagen aún no cargada

      // Calcular relaciones de aspecto
      const containerAspectRatio = containerWidth / containerHeight;
      const imageAspectRatio = naturalWidth / naturalHeight;

      let renderedWidth: number;
      let renderedHeight: number;
      let offsetX: number;
      let offsetY: number;

      // Lógica de object-contain: determinar limitación por ancho o alto
      if (containerAspectRatio > imageAspectRatio) {
        // Limitado por altura: la imagen ocupa toda la altura del contenedor
        renderedHeight = containerHeight;
        renderedWidth = renderedHeight * imageAspectRatio;
        offsetX = (containerWidth - renderedWidth) / 2;
        offsetY = 0;
      } else {
        // Limitado por ancho: la imagen ocupa todo el ancho del contenedor
        renderedWidth = containerWidth;
        renderedHeight = renderedWidth / imageAspectRatio;
        offsetX = 0;
        offsetY = (containerHeight - renderedHeight) / 2;
      }

      // Actualizar el estilo del overlay
      setOverlayStyle({
        position: 'absolute',
        top: `${offsetY}px`,
        left: `${offsetX}px`,
        width: `${renderedWidth}px`,
        height: `${renderedHeight}px`
      });
    };

    // Crear ResizeObserver para monitorear cambios de tamaño
    const resizeObserver = new ResizeObserver(() => {
      calculateOverlayDimensions();
    });

    // Observar el contenedor
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // También calcular cuando la imagen se carga
    const image = imageRef.current;
    if (image) {
      if (image.complete) {
        calculateOverlayDimensions();
      } else {
        image.addEventListener('load', calculateOverlayDimensions);
      }
    }

    // Limpieza
    return () => {
      resizeObserver.disconnect();
      if (image) {
        image.removeEventListener('load', calculateOverlayDimensions);
      }
    };
  }, []);

  const handlePointClick = (point: PressurePoint) => {
    setSelectedPoint(point);
    setIsModalOpen(true);
    setTouchedPoint(null); // Reset touch state
  };

  const handlePointTouch = (pointId: number) => {
    setTouchedPoint(pointId);
    // Auto-dismiss touch feedback after 2 seconds
    setTimeout(() => {
      setTouchedPoint(null);
    }, 2000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPoint(null);
  };

  return (
    <div className="w-full h-full relative" ref={containerRef}>
      {/* Imagen principal con object-contain */}
      <img
        ref={imageRef}
        src="/imgs/body_pressure_points.png"
        alt={currentLanguage === 'es' ? 'Puntos de presión terapéuticos' : 'Therapeutic pressure points'}
        className="w-full h-full object-contain"
      />

      {/* Overlay dinámico para puntos */}
      <div style={overlayStyle}>
        {pressurePoints.map((point) => (
          <button
            key={point.id}
            className={`
              absolute transform -translate-x-1/2 -translate-y-1/2 
              w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7
              border border-white sm:border-2
              transition-all duration-300 ease-in-out
              ${hoveredPoint === point.id || touchedPoint === point.id
                ? 'bg-punto-rosa-500 scale-125 shadow-lg shadow-punto-rosa-500/50'
                : 'bg-punto-rosa-400 hover:bg-punto-rosa-500 hover:scale-110'
              }
              rounded-full cursor-pointer
              animate-pulse hover:animate-none
              focus:outline-none focus:ring-2 focus:ring-punto-rosa-300 focus:ring-offset-2
              active:scale-95
              ${isMobile ? 'touch-manipulation' : ''}
            `}
            style={{
              left: point.x,
              top: point.y,
            }}
            onClick={() => handlePointClick(point)}
            onMouseEnter={() => !isMobile && setHoveredPoint(point.id)}
            onMouseLeave={() => !isMobile && setHoveredPoint(null)}
            onTouchStart={() => isMobile && handlePointTouch(point.id)}
            aria-label={`${point.name} - ${point.description}`}
            title={isMobile ? undefined : point.name}
          >
            <span className="sr-only">{point.name}</span>
          </button>
        ))}

        {/* Etiquetas flotantes para hover (solo desktop) */}
        {!isMobile && hoveredPoint && (
          <div
            className="absolute z-50 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-neutral-warm-200 pointer-events-none"
            style={{
              left: pressurePoints.find(p => p.id === hoveredPoint)?.x,
              top: pressurePoints.find(p => p.id === hoveredPoint)?.y,
              transform: 'translate(-50%, -120%)',
            }}
          >
            <div className="text-sm font-semibold text-text-deep-800">
              {pressurePoints.find(p => p.id === hoveredPoint)?.name}
            </div>
            <div className="text-xs text-text-deep-600 mt-1 max-w-48">
              {pressurePoints.find(p => p.id === hoveredPoint)?.description}
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/95"></div>
            </div>
          </div>
        )}

        {/* Indicador de toque para móviles */}
        {isMobile && touchedPoint && (
          <div
            className="absolute z-50 bg-punto-rosa-500/90 text-white rounded-full px-3 py-1 text-xs font-medium pointer-events-none"
            style={{
              left: pressurePoints.find(p => p.id === touchedPoint)?.x,
              top: pressurePoints.find(p => p.id === touchedPoint)?.y,
              transform: 'translate(-50%, -120%)',
            }}
          >
            {pressurePoints.find(p => p.id === touchedPoint)?.name}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedPoint && (
        <PressurePointModal
          isOpen={isModalOpen}
          onClose={closeModal}
          point={selectedPoint}
          currentLanguage={currentLanguage}
        />
      )}
    </div>
  );
};

export default TherapeuticPointsDynamic;