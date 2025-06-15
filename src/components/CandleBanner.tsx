
import React from 'react';
import { Button } from './ui/button';

interface CandleBannerProps {
  currentLanguage: string;
}

const CandleBanner: React.FC<CandleBannerProps> = ({ currentLanguage }) => {
  const content = {
    en: {
      subtitle: 'Artisanal Collection',
      title: 'The Sacred Sage Candle',
      description: 'Experience tranquility with our hand-poured soy wax candle. Infused with natural sage and lavender essential oils, it’s designed to cleanse your space and calm your mind. Perfect for meditation, rituals, or simply unwinding.',
      buttonText: 'Discover the collection'
    },
    es: {
      subtitle: 'Colección Artesanal',
      title: 'La Vela de Salvia Sagrada',
      description: 'Experimenta la tranquilidad con nuestra vela de cera de soja vertida a mano. Infundida con aceites esenciales naturales de salvia y lavanda, está diseñada para limpiar tu espacio y calmar tu mente. Perfecta para meditación, rituales o simplemente para relajarse.',
      buttonText: 'Descubre la colección'
    }
  };

  const selectedContent = content[currentLanguage as keyof typeof content];

  return (
    <section className="relative bg-cover bg-center py-20 md:py-32" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1200&q=80')` }}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="md:order-2 flex justify-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop"
              alt="Sacred Sage Candle"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl shadow-black/50 transform hover:scale-105 transition-transform duration-500"
            />
             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 backdrop-blur-lg rounded-full animate-pulse"></div>
             <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 backdrop-blur-lg rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
        <div className="text-white text-center md:text-left md:order-1">
          <p className="text-lg font-medium text-lavender-300 mb-2">{selectedContent.subtitle}</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">{selectedContent.title}</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-lg mx-auto md:mx-0">{selectedContent.description}</p>
          <Button size="lg" className="bg-white text-sage-800 hover:bg-gray-200">
            {selectedContent.buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CandleBanner;
