
import React from 'react';
import { cn } from '@/lib/utils';

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

interface StepCardProps {
  step: Step;
  index: number;
  progress: number;
}

const StepCard: React.FC<StepCardProps> = ({ step, progress }) => {
  const contentMaxHeight = 500; // The full height of the content area when expanded

  return (
    <div
      className={cn(
        "bg-neutral-warm-50 rounded-2xl overflow-hidden shadow-sm p-8 border border-neutral-warm-200"
      )}
      style={{
        opacity: Math.pow(progress, 2),
        transform: `scale(${0.95 + 0.05 * progress})`,
        zIndex: Math.floor(progress * 10),
      }}
    >
      <div className="flex items-center">
        <div className="p-2 bg-spa-green-100 rounded-lg text-spa-green-600">
          {step.icon}
        </div>
        <h3 className="text-2xl font-serif text-text-deep-800 ml-4">
          {step.title}
        </h3>
      </div>
      
      <div 
        style={{ maxHeight: `${progress * contentMaxHeight}px` }} 
        className="overflow-hidden"
      >
        <div className="pt-6 flex flex-col md:flex-row items-center gap-8">
            <p className="text-text-deep-600 md:w-1/2">
                {step.description}
            </p>
            <div className="md:w-1/2 w-full h-64 self-stretch">
                <div
                    className="w-full h-full bg-cover bg-center rounded-lg"
                    style={{ 
                        backgroundImage: `url(${step.image})`,
                        clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' 
                    }}
                ></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
