
import React from 'react';
import { ShoppingCart, Package, CreditCard } from 'lucide-react';

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

        <div className="space-y-12">
          {selectedContent.steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-beige-50 rounded-2xl overflow-hidden shadow-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
