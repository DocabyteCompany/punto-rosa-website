import React, { useState, useRef, useLayoutEffect, useMemo } from 'react';
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

  // Configuración unificada y responsiva para ondas y punto
  const layoutConfig = useMemo(() => {
    // Redondea a par para evitar subpíxeles y desfases en translate(-50%, -50%)
    const toEven = (n: number): number => 2 * Math.round(n / 2);

    if (isMobile) {
      const outerRaw = 32; // diámetro px
      const middleRaw = 22; // diámetro px
      const dotScale = 0.5; // proporción del punto respecto a middle
      const outerSize = toEven(outerRaw);
      const middleSize = toEven(middleRaw);
      let dotDiameter = toEven(middleSize * dotScale);
      if (dotDiameter >= middleSize) dotDiameter = middleSize - 4; // garantizar punto < onda interna
      return { outerSize, middleSize, dotDiameter };
    }

    // Desktop: hacer el conjunto un poco más grande
    const outerRaw = 64;
    const middleRaw = 44;
    const dotScale = 0.5;
    const outerSize = toEven(outerRaw);
    const middleSize = toEven(middleRaw);
    let dotDiameter = toEven(middleSize * dotScale);
    if (dotDiameter >= middleSize) dotDiameter = middleSize - 4;
    return { outerSize, middleSize, dotDiameter };
  }, [isMobile]);

  const pressurePoints: PressurePoint[] = [
    {
      id: 1,
      x: '38.5%',
      y: '44.5%',
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
      x: '51.5%',
      y: '44.5%',
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
      x: '28%',
      y: '50.5%',
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
      x: '62%',
      y: '50.5%',
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
      x: '45%',
      y: '66.5%',
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
      x: '35%',
      y: '77.5%',
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
      x: '55%',
      y: '77.5%',
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

  useLayoutEffect(() => {
    const calculateOverlayDimensions = () => {
      if (!containerRef.current || !imageRef.current) return;

      const container = containerRef.current;
      const image = imageRef.current;
      
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      const { naturalWidth, naturalHeight } = image;
      if (naturalWidth === 0 || naturalHeight === 0) return;

      const containerAspectRatio = containerWidth / containerHeight;
      const imageAspectRatio = naturalWidth / naturalHeight;

      let renderedWidth: number;
      let renderedHeight: number;
      let offsetX: number;
      let offsetY: number;

      if (containerAspectRatio > imageAspectRatio) {
        renderedHeight = containerHeight;
        renderedWidth = renderedHeight * imageAspectRatio;
        offsetX = (containerWidth - renderedWidth) / 2;
        offsetY = 0;
      } else {
        renderedWidth = containerWidth;
        renderedHeight = renderedWidth / imageAspectRatio;
        offsetX = 0;
        offsetY = (containerHeight - renderedHeight) / 2;
      }

      setOverlayStyle({
        position: 'absolute',
        top: `${offsetY}px`,
        left: `${offsetX}px`,
        width: `${renderedWidth}px`,
        height: `${renderedHeight}px`
      });
    };

    const imageElement = imageRef.current;
    if (!imageElement) return;

    const resizeObserver = new ResizeObserver(calculateOverlayDimensions);

    if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
    }

    if (imageElement.complete) {
      calculateOverlayDimensions();
    } else {
      imageElement.addEventListener('load', calculateOverlayDimensions);
    }

    return () => {
      resizeObserver.disconnect();
      imageElement.removeEventListener('load', calculateOverlayDimensions);
    };
  }, []);

  const handlePointClick = (point: PressurePoint) => {
    setSelectedPoint(point);
    setIsModalOpen(true);
    setTouchedPoint(null);
  };

  const handlePointTouch = (pointId: number) => {
    setTouchedPoint(pointId);
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
      <img
        ref={imageRef}
        src="/imgs/body_pressure_points.webp"
        alt={currentLanguage === 'es' ? 'Puntos de presión terapéuticos' : 'Therapeutic pressure points'}
        className="w-full h-full object-contain"
      />

      <div style={overlayStyle}>
        {pressurePoints.map((point) => {
          const isHovered = hoveredPoint === point.id;
          const isTouched = touchedPoint === point.id;
          
          return (
            // Ancla absoluto: tamaño cero, centrado exacto en (x,y)
            <div
              key={point.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: point.x, top: point.y, width: 0, height: 0 }}
            >
              {/* Wrapper relativo que define el tamaño total (diámetro = outerSize) */}
              <div
                className="relative grid place-items-center"
                style={{ width: `${layoutConfig.outerSize}px`, height: `${layoutConfig.outerSize}px` }}
              >
                {/* Onda externa ocupa todo el wrapper */}
                <div
                  className={`absolute inset-0 rounded-full border-2 border-punto-rosa-300/60 ${
                    !isHovered && !isTouched ? 'animate-pulse-outer' : 'hidden'
                  }`}
                />
                {/* Onda media centrada */}
                <div
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-punto-rosa-400/80 ${
                    !isHovered && !isTouched ? 'animate-pulse-middle' : 'hidden'
                  }`}
                  style={{
                    width: `${layoutConfig.middleSize}px`,
                    height: `${layoutConfig.middleSize}px`,
                  }}
                />

                {/* Punto principal - tamaño derivado de la onda pequeña (diámetro) */}
                <button
                  className={`
                    relative z-10
                    box-border border border-white sm:border-2
                    transition-all duration-300 ease-in-out
                    ${isHovered || isTouched
                      ? 'bg-punto-rosa-500 scale-125 shadow-lg shadow-punto-rosa-500/50'
                      : 'bg-punto-rosa-400 hover:bg-punto-rosa-500 hover:scale-110'}
                    rounded-full cursor-pointer
                    focus:outline-none focus:ring-2 focus:ring-punto-rosa-300 focus:ring-offset-2
                    active:scale-95
                    ${isMobile ? 'touch-manipulation' : ''}
                  `}
                  style={{ width: `${layoutConfig.dotDiameter}px`, height: `${layoutConfig.dotDiameter}px` }}
                  onClick={() => handlePointClick(point)}
                  onMouseEnter={() => !isMobile && setHoveredPoint(point.id)}
                  onMouseLeave={() => !isMobile && setHoveredPoint(null)}
                  onTouchStart={() => isMobile && handlePointTouch(point.id)}
                  aria-label={`${point.name} - ${point.description}`}
                  title={isMobile ? undefined : point.name}
                >
                  <span className="sr-only">{point.name}</span>
                </button>
              </div>
            </div>
          );
        })}

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

      {selectedPoint && (
        <PressurePointModal
          isOpen={isModalOpen}
          onClose={closeModal}
          point={selectedPoint}
          currentLanguage={currentLanguage}
          isMobile={isMobile}
        />
      )}
      
    </div>
  );
};

export default TherapeuticPointsDynamic;