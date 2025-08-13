
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { X } from 'lucide-react';

interface PressurePoint {
  id: number;
  name: string;
  description: string;
  techniques: string[];
  benefits: string[];
  duration: string;
}

interface PressurePointModalProps {
  isOpen: boolean;
  onClose: () => void;
  point: PressurePoint | null;
  currentLanguage: string;
  isMobile?: boolean;
}

const PressurePointModal: React.FC<PressurePointModalProps> = ({ 
  isOpen, 
  onClose, 
  point, 
  currentLanguage,
  isMobile = false
}) => {
  if (!point) return null;

  const content = {
    es: {
      techniques: 'Técnicas recomendadas',
      benefits: 'Beneficios',
      duration: 'Duración recomendada',
      close: 'Cerrar'
    },
    en: {
      techniques: 'Recommended techniques',
      benefits: 'Benefits',
      duration: 'Recommended duration',
      close: 'Close'
    }
  };

  const t = content[currentLanguage as keyof typeof content];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`
        bg-spa-soft-50 border-punto-rosa-200
        ${isMobile 
          ? 'max-w-[90vw] max-h-[85vh] mx-auto my-2 overflow-y-auto rounded-2xl p-4 sm:p-6' 
          : 'max-w-md mx-4'
        }
      `}>
        <DialogHeader>
          <DialogTitle className={`
            font-playfair text-neutral-warm-900 mb-2
            ${isMobile ? 'text-2xl' : 'text-xl'}
          `}>
            {point.name}
          </DialogTitle>
          <DialogDescription className={`
            text-neutral-warm-700 leading-relaxed
            ${isMobile ? 'text-base' : 'text-sm'}
          `}>
            {point.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className={`space-y-4 mt-4 ${isMobile ? 'space-y-6' : ''}`}>
          {/* Técnicas */}
          <div>
            <h4 className={`
              font-semibold text-punto-rosa-700 mb-2
              ${isMobile ? 'text-base' : 'text-sm'}
            `}>
              {t.techniques}
            </h4>
            <ul className={`space-y-1 ${isMobile ? 'space-y-2' : ''}`}>
              {point.techniques.map((technique, index) => (
                <li key={index} className={`
                  text-neutral-warm-700 flex items-start
                  ${isMobile ? 'text-base' : 'text-sm'}
                `}>
                  <span className={`
                    bg-punto-rosa-400 rounded-full mt-2 mr-2 flex-shrink-0
                    ${isMobile ? 'w-2 h-2' : 'w-1.5 h-1.5'}
                  `}></span>
                  {technique}
                </li>
              ))}
            </ul>
          </div>

          {/* Beneficios */}
          <div>
            <h4 className={`
              font-semibold text-punto-rosa-700 mb-2
              ${isMobile ? 'text-base' : 'text-sm'}
            `}>
              {t.benefits}
            </h4>
            <ul className={`space-y-1 ${isMobile ? 'space-y-2' : ''}`}>
              {point.benefits.map((benefit, index) => (
                <li key={index} className={`
                  text-neutral-warm-700 flex items-start
                  ${isMobile ? 'text-base' : 'text-sm'}
                `}>
                  <span className={`
                    bg-spa-green-400 rounded-full mt-2 mr-2 flex-shrink-0
                    ${isMobile ? 'w-2 h-2' : 'w-1.5 h-1.5'}
                  `}></span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Duración */}
          <div className={`
            bg-punto-rosa-50 rounded-lg border border-punto-rosa-100
            ${isMobile ? 'p-4' : 'p-3'}
          `}>
            <h4 className={`
              font-semibold text-punto-rosa-700 mb-1
              ${isMobile ? 'text-base' : 'text-sm'}
            `}>
              {t.duration}
            </h4>
            <p className={`
              text-neutral-warm-700
              ${isMobile ? 'text-base' : 'text-sm'}
            `}>
              {point.duration}
            </p>
          </div>
        </div>


      </DialogContent>
    </Dialog>
  );
};

export default PressurePointModal;
