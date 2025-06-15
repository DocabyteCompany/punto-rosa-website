import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Package, CreditCard } from 'lucide-react';
import StepCard from './StepCard';

interface HowItWorksProps {
  currentLanguage: string;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ currentLanguage }) => {
  const content = {
    en: {
      title: 'How It Works',
      subtitle: 'A simple and mindful journey from our space to yours.',
      steps: [
        {
          icon: <ShoppingCart className="w-8 h-8 text-sage-500" />,
          title: '1. Choose Your Rituals',
          description: 'Explore our curated collection of wellness products. Add your favorite items to the cart to begin your journey.',
          image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=500&fit=crop&q=80'
        },
        {
          icon: <CreditCard className="w-8 h-8 text-sage-500" />,
          title: '2. Secure Checkout',
          description: 'Proceed to our secure checkout. We accept various payment methods for a seamless and safe transaction.',
          image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=500&h=500&fit=crop&q=80'
        },
        {
          icon: <Package className="w-8 h-8 text-sage-500" />,
          title: '3. Mindful Delivery',
          description: 'Your sacred items are mindfully packaged and shipped. Track your order until it arrives at your sanctuary.',
          image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=500&fit=crop&q=80'
        }
      ]
    },
    es: {
      title: 'Cómo Funciona',
      subtitle: 'Un viaje simple y consciente desde nuestro espacio hasta el tuyo.',
      steps: [
        {
          icon: <ShoppingCart className="w-8 h-8 text-sage-500" />,
          title: '1. Elige Tus Rituales',
          description: 'Explora nuestra colección de productos de bienestar. Agrega tus artículos favoritos al carrito para comenzar tu viaje.',
          image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=500&fit=crop&q=80'
        },
        {
          icon: <CreditCard className="w-8 h-8 text-sage-500" />,
          title: '2. Pago Seguro',
          description: 'Procede a nuestro pago seguro. Aceptamos varios métodos de pago para una transacción fluida y segura.',
          image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=500&h=500&fit=crop&q=80'
        },
        {
          icon: <Package className="w-8 h-8 text-sage-500" />,
          title: '3. Entrega Consciente',
          description: 'Tus artículos sagrados se empaquetan y envían con cuidado. Sigue tu pedido hasta que llegue a tu santuario.',
          image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=500&fit=crop&q=80'
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
            <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-4">
              {selectedContent.title}
            </h2>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto">
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
