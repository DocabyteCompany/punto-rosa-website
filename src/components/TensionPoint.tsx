
import React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

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

interface TensionPointProps {
  point: TensionPointData;
  isMobile: boolean;
}

const TensionPoint: React.FC<TensionPointProps> = ({ point, isMobile }) => {
  const PointIndicator = () => (
    <div className="w-4 h-4 bg-punto-rosa-500 rounded-full animate-pulse cursor-pointer hover:bg-punto-rosa-600 hover:scale-110 transition-all duration-200 border-2 border-white shadow-lg">
      <div className="w-full h-full bg-punto-rosa-400 rounded-full animate-ping opacity-75"></div>
    </div>
  );

  const ContentBody = () => (
    <div className="space-y-3 max-w-sm">
      <div>
        <h4 className="font-semibold text-punto-rosa-700 mb-1">¿Dónde lo sientes?</h4>
        <p className="text-sm text-text-deep-700">{point.content.location}</p>
      </div>
      <div>
        <h4 className="font-semibold text-punto-rosa-700 mb-1">¿Por qué sucede?</h4>
        <p className="text-sm text-text-deep-700">{point.content.causes}</p>
      </div>
      <div>
        <h4 className="font-semibold text-punto-rosa-700 mb-1">¿Cómo te podemos ayudar?</h4>
        <p className="text-sm text-text-deep-700">{point.content.solution}</p>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <button 
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ 
              left: `${point.position.x}%`, 
              top: `${point.position.y}%`,
              minWidth: '44px',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <PointIndicator />
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-sm mx-4">
          <DialogHeader>
            <DialogTitle className="text-punto-rosa-700 text-lg font-bold">
              {point.title}
            </DialogTitle>
          </DialogHeader>
          <ContentBody />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button 
          className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ 
            left: `${point.position.x}%`, 
            top: `${point.position.y}%`
          }}
        >
          <PointIndicator />
        </button>
      </TooltipTrigger>
      <TooltipContent side="right" className="max-w-xs p-4 bg-white/95 backdrop-blur-sm border-punto-rosa-200">
        <h3 className="font-bold text-punto-rosa-700 mb-2">{point.title}</h3>
        <ContentBody />
      </TooltipContent>
    </Tooltip>
  );
};

export default TensionPoint;
