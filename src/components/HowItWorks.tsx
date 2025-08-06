import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Sparkles, Heart } from 'lucide-react';
import StepCard from './StepCard';

interface HowItWorksProps {
  currentLanguage: string;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ currentLanguage }) => {
  const content = {
    en: {
      title: 'How to Book Your Appointment',
      subtitle: 'A simple and peaceful journey to your moment of relaxation.',
      steps: [
        {
          icon: <Sparkles className="w-8 h-8 text-punto-rosa-500" />,
          title: '1. Choose Your Service',
          description: 'Explore our massage services and wellness packages. Select the perfect treatment for your needs and well-being.',
          image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&h=500&fit=crop&q=80'
        },
        {
          icon: <Calendar className="w-8 h-8 text-punto-rosa-500" />,
          title: '2. Schedule Your Appointment',
          description: 'Choose your preferred date and time. Our booking system makes it easy to find the perfect slot for your session.',
          image: 'https://images.unsplash.com/photo-1591019479261-1a103efb15fc?w=500&h=500&fit=crop&q=80'
        },
        {
          icon: <Heart className="w-8 h-8 text-punto-rosa-500" />,
          title: '3. Enjoy Your Moment',
          description: 'Arrive at our spa and let our professional therapists take care of you. Relax and enjoy your moment of peace.',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop&q=80'
        }
      ]
    },
    es: {
      title: 'Cómo Reservar tu Cita',
      subtitle: 'Un viaje simple y tranquilo hacia tu momento de relajación.',
      steps: [
        {
          icon: <Sparkles className="w-8 h-8 text-punto-rosa-500" />,
          title: '1. Elige tu Servicio',
          description: 'Explora mis servicios de masajes y paquetes de bienestar. Selecciona el tratamiento perfecto para tus necesidades.',
          image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&h=500&fit=crop&q=80'
        },
        {
          icon: <Calendar className="w-8 h-8 text-punto-rosa-500" />,
          title: '2. Agenda tu Cita',
          description: 'Elige tu fecha y hora preferida. Mi sistema de reservas facilita encontrar el horario perfecto para tu sesión.',
          image: 'https://images.unsplash.com/photo-1591019479261-1a103efb15fc?w=500&h=500&fit=crop&q=80'
        },
        {
          icon: <Heart className="w-8 h-8 text-punto-rosa-500" />,
          title: '3. Disfruta tu Momento',
          description: 'Llega a mi spa y deja que te cuide profesionalmente. Relájate y disfruta tu momento de paz.',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop&q=80'
        }
      ]
    }
  };

  const selectedContent = content[currentLanguage as keyof typeof content];
  const numSteps = selectedContent.steps.length;
  
  const [progressValues, setProgressValues] = useState<number[]>(
    Array(numSteps).fill(0)
  );

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = rect.height - window.innerHeight;
      
      if (scrollableHeight <= 0) return;

      const totalProgress = Math.max(0, Math.min(1, -rect.top / scrollableHeight));
      const scaledTotalProgress = totalProgress * numSteps;

      const newProgressValues = selectedContent.steps.map((_, index) => {
        const center = index + 0.5;
        const distance = Math.abs(scaledTotalProgress - center);

        // This logic creates a "plateau" where the card stays fully visible.
        const plateauWidth = 0.4; // Card is fully visible for 40% of its scroll time.
        const plateauRadius = plateauWidth / 2;
        const maxDistance = 0.5; // Card is fully faded out at this distance from its center.

        if (distance <= plateauRadius) {
          return 1; // Inside plateau: full visibility.
        }
        if (distance > maxDistance) {
          return 0; // Outside active zone: fully invisible.
        }

        // In the fade zone
        const fadeZoneWidth = maxDistance - plateauRadius;
        const distanceIntoFade = distance - plateauRadius;
        const fadeProgress = 1 - (distanceIntoFade / fadeZoneWidth);

        return Math.max(0, Math.min(1, fadeProgress));
      });
      
      setProgressValues(newProgressValues);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [numSteps]);


  return (
    <section ref={sectionRef} style={{ height: `${225 * numSteps}vh` }} className="relative bg-white">
      <div className="sticky top-0 h-screen flex flex-col justify-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-text-deep-800 mb-4">
              {selectedContent.title}
            </h2>
            <p className="text-xl text-text-deep-600 max-w-3xl mx-auto">
              {selectedContent.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative" style={{ height: '380px' }}>
            {selectedContent.steps.map((step, index) => (
              <div key={index} className="absolute inset-0">
                <StepCard
                  step={step}
                  index={index}
                  progress={progressValues[index]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
