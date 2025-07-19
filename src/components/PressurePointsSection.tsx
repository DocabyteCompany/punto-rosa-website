
import React from 'react';

interface PressurePointsSectionProps {
  currentLanguage: string;
}

const PressurePointsSection: React.FC<PressurePointsSectionProps> = ({ currentLanguage }) => {
  return (
    <section className="h-screen bg-gradient-to-b from-spa-soft-50 to-neutral-warm-50">
      <div className="h-full flex items-center justify-center">
        <img 
          src="/lovable-uploads/449cbf1e-4a1c-4c81-b7a3-9b6d20e88cb5.webp"
          alt="Puntos de tensión en espalda"
          className="max-w-2xl h-full object-contain"
        />
      </div>
    </section>
  );
};

export default PressurePointsSection;
