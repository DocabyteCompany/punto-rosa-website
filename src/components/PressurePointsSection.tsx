
import React from 'react';

interface PressurePointsSectionProps {
  currentLanguage: string;
}

const PressurePointsSection: React.FC<PressurePointsSectionProps> = ({ currentLanguage }) => {
  return (
    <section className="h-screen bg-gradient-to-b from-spa-soft-50 to-neutral-warm-50">
      <div className="h-full flex items-center justify-center">
        <img 
          src="/lovable-uploads/c5d32113-4b94-4ad8-98ee-08abbd8435d1.png"
          alt="Back silhouette"
          className="max-w-2xl h-full object-contain"
        />
      </div>
    </section>
  );
};

export default PressurePointsSection;
