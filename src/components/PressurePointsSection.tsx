
import React from 'react';

interface PressurePointsSectionProps {
  currentLanguage: string;
}

const PressurePointsSection: React.FC<PressurePointsSectionProps> = ({ currentLanguage }) => {
  const pressurePoints = [
    { id: 1, x: '35%', y: '15%', name: currentLanguage === 'es' ? 'Cuello superior' : 'Upper neck' },
    { id: 2, x: '65%', y: '15%', name: currentLanguage === 'es' ? 'Cuello superior' : 'Upper neck' },
    { id: 3, x: '25%', y: '35%', name: currentLanguage === 'es' ? 'Hombros' : 'Shoulders' },
    { id: 4, x: '75%', y: '35%', name: currentLanguage === 'es' ? 'Hombros' : 'Shoulders' },
    { id: 5, x: '50%', y: '45%', name: currentLanguage === 'es' ? 'Espalda media' : 'Mid back' },
    { id: 6, x: '30%', y: '65%', name: currentLanguage === 'es' ? 'Espalda baja' : 'Lower back' },
    { id: 7, x: '70%', y: '65%', name: currentLanguage === 'es' ? 'Espalda baja' : 'Lower back' },
  ];

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
            >
              {/* Círculo principal del punto */}
              <div className="w-4 h-4 bg-punto-rosa-500 rounded-full border-2 border-white shadow-lg animate-pulse hover:animate-none transition-all duration-300 hover:scale-150 hover:bg-punto-rosa-400">
                {/* Efecto de onda */}
                <div className="absolute inset-0 rounded-full bg-punto-rosa-500 opacity-30 animate-ping"></div>
              </div>
              
              {/* Tooltip con información */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-neutral-warm-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {point.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-warm-900"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressurePointsSection;
