
import React from 'react';
import { useInView } from 'react-intersection-observer';
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
}

const StepCard: React.FC<StepCardProps> = ({ step, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col md:flex-row items-center bg-beige-50 rounded-2xl overflow-hidden shadow-sm transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95",
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="p-8 md:p-12 md:w-1/2">
        <div className="flex items-center mb-4">
          {step.icon}
          <h3 className="text-2xl font-serif text-sage-700 ml-4">
            {step.title}
          </h3>
        </div>
        <p className="text-sage-600">
          {step.description}
        </p>
      </div>
      <div className="md:w-1/2 w-full h-64 md:h-auto self-stretch">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${step.image})`,
            clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' 
          }}
        ></div>
      </div>
    </div>
  );
};

export default StepCard;
