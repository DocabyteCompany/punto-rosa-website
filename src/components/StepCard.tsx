
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
  isActive: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ step, isActive }) => {
  return (
    <div
      className={cn(
        "bg-beige-50 rounded-2xl overflow-hidden shadow-sm transition-all duration-500 ease-in-out p-8"
      )}
    >
      <div className="flex items-center">
        {step.icon}
        <h3 className="text-2xl font-serif text-sage-700 ml-4">
          {step.title}
        </h3>
      </div>
      
      <div 
        style={{ maxHeight: isActive ? '500px' : '0px' }} 
        className="transition-[max-height] duration-700 ease-in-out overflow-hidden"
      >
        <div className="pt-6 flex flex-col md:flex-row items-center gap-8">
            <p className="text-sage-600 md:w-1/2">
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
