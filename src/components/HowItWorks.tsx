
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
  
  const [progressValues, setProgressValues] = useState<number[]>(
    Array(selectedContent.steps.length).fill(0)
  );

  const stepRefs = useRef<React.RefObject<HTMLDivElement>[]>(
    selectedContent.steps.map(() => React.createRef())
  );

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const newProgressValues = stepRefs.current.map(ref => {
        if (!ref.current) return 0;

        const rect = ref.current.getBoundingClientRect();
        
        // The animation happens as the card travels from the bottom of the screen to 40% from the top.
        const startPoint = viewportHeight;
        const endPoint = viewportHeight * 0.4;
        const animationDistance = startPoint - endPoint;

        const rawProgress = (startPoint - rect.top) / animationDistance;
        const progress = Math.max(0, Math.min(1, rawProgress));

        return progress;
      });
      
      setProgressValues(newProgressValues);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedContent.steps.length]);


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-4">
            {selectedContent.title}
          </h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto">
            {selectedContent.subtitle}
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {selectedContent.steps.map((step, index) => (
            <div key={index} ref={stepRefs.current[index]}>
              <StepCard
                step={step}
                index={index}
                progress={progressValues[index]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
