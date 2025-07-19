
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
}

const PressurePointModal: React.FC<PressurePointModalProps> = ({ 
  isOpen, 
  onClose, 
  point, 
  currentLanguage 
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
      <DialogContent className="max-w-md mx-4 bg-spa-soft-50 border-punto-rosa-200">
        <DialogHeader>
          <DialogTitle className="text-xl font-playfair text-neutral-warm-900 mb-2">
            {point.name}
          </DialogTitle>
          <DialogDescription className="text-neutral-warm-700 text-sm leading-relaxed">
            {point.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          {/* Técnicas */}
          <div>
            <h4 className="font-semibold text-punto-rosa-700 mb-2 text-sm">
              {t.techniques}
            </h4>
            <ul className="space-y-1">
              {point.techniques.map((technique, index) => (
                <li key={index} className="text-neutral-warm-700 text-sm flex items-start">
                  <span className="w-1.5 h-1.5 bg-punto-rosa-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {technique}
                </li>
              ))}
            </ul>
          </div>

          {/* Beneficios */}
          <div>
            <h4 className="font-semibold text-punto-rosa-700 mb-2 text-sm">
              {t.benefits}
            </h4>
            <ul className="space-y-1">
              {point.benefits.map((benefit, index) => (
                <li key={index} className="text-neutral-warm-700 text-sm flex items-start">
                  <span className="w-1.5 h-1.5 bg-spa-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Duración */}
          <div className="bg-punto-rosa-50 p-3 rounded-lg border border-punto-rosa-100">
            <h4 className="font-semibold text-punto-rosa-700 mb-1 text-sm">
              {t.duration}
            </h4>
            <p className="text-neutral-warm-700 text-sm">{point.duration}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PressurePointModal;
