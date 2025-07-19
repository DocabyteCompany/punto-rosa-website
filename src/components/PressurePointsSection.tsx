
import React from 'react';

interface PressurePointsSectionProps {
  currentLanguage: string;
}

const PressurePointsSection: React.FC<PressurePointsSectionProps> = ({ currentLanguage }) => {
  return (
    <section className="h-screen bg-gradient-to-b from-spa-soft-50 to-neutral-warm-50">
      <div className="h-full flex items-center justify-center">
        <img 
          src="/lovable-uploads/9145e19f-ccc7-404d-aef7-f9184eaaba5c.png"
          alt="Puntos de tensión en espalda"
          className="max-w-2xl h-full object-contain"
        />
      </div>
    </section>
  );
};

export default PressurePointsSection;
