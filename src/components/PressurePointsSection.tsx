
import React from 'react';
import { TooltipProvider } from './ui/tooltip';
import TensionPoint from './TensionPoint';
import { useIsMobile } from '../hooks/use-mobile';

interface PressurePointsSectionProps {
  currentLanguage: string;
}

interface TensionPointData {
  id: string;
  title: string;
  position: { x: number; y: number };
  content: {
    location: string;
    causes: string;
    solution: string;
  };
}

const tensionPoints: TensionPointData[] = [
  {
    id: 'neck-shoulders',
    title: 'Tensión Cervical y Hombros Cargados',
    position: { x: 50, y: 20 },
    content: {
      location: 'Base de la nuca y parte superior de hombros; dolor que puede subir a la cabeza.',
      causes: 'Estrés, largas horas frente a pantallas (postura "cuello de texto"), o dormir en posiciones incómodas.',
      solution: 'Masajes para liberar "nudos", reducir rigidez y aliviar dolores de cabeza. Complementamos con calor y electroterapia.'
    }
  },
  {
    id: 'shoulder-blades',
    title: 'Rigidez Dorsal y Puntos de Tensión',
    position: { x: 50, y: 40 },
    content: {
      location: 'Opresión, ardor o dolor punzante entre tus omóplatos.',
      causes: 'Mala postura al sentarse (encorvamiento), mucho tiempo frente al escritorio sin pausas, o cargas repetitivas (mochila pesada).',
      solution: 'Masajes profundos para relajar músculos, mejorar movilidad dorsal y disolver "nudos". Ultrasonido para desinflamar.'
    }
  },
  {
    id: 'lower-back',
    title: 'Molestias en la Zona Lumbar',
    position: { x: 50, y: 65 },
    content: {
      location: 'Dolor sordo o agudo en la parte baja de la espalda, que empeora al estar de pie, sentado o levantar objetos.',
      causes: 'Largos periodos sentado sin buen soporte, levantar objetos incorrectamente, debilidad de abdominales (core), o estrés.',
      solution: 'Masajes para relajar espasmos y reducir tensión, mejorando tu movimiento. Complementamos con calor y TENS.'
    }
  },
  {
    id: 'hips-glutes',
    title: 'Molestias en Caderas y Glúteos',
    position: { x: 50, y: 85 },
    content: {
      location: 'Dolor en las nalgas que puede irradiarse hacia el muslo, o en la parte inferior de la espalda cerca del sacro.',
      causes: 'Sedentarismo prolongado, ejercicio intenso sin estiramientos, desequilibrios posturales o irritación del nervio ciático (síndrome del piriforme).',
      solution: 'Masajes profundos en glúteos y liberación del piriforme para aliviar compresión nerviosa y restaurar flexibilidad.'
    }
  }
];

const PressurePointsSection: React.FC<PressurePointsSectionProps> = ({ currentLanguage }) => {
  const isMobile = useIsMobile();

  return (
    <section className="h-screen bg-gradient-to-b from-spa-soft-50 to-neutral-warm-50">
      <TooltipProvider>
        <div className="h-full flex items-center justify-center relative">
          <img 
            src="/lovable-uploads/c5d32113-4b94-4ad8-98ee-08abbd8435d1.png"
            alt="Puntos de tensión en la espalda - Descubre dónde podemos ayudarte"
            className="max-w-2xl h-full object-contain"
          />
          {tensionPoints.map(point => (
            <TensionPoint 
              key={point.id} 
              point={point} 
              isMobile={isMobile}
            />
          ))}
        </div>
      </TooltipProvider>
    </section>
  );
};

export default PressurePointsSection;
