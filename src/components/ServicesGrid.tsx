import React from 'react';
import ServiceCard from './ServiceCard';

interface Service {
  id: number;
  name: { en: string; es: string };
  price: number;
  duration: { en: string; es: string };
  image: string;
  category: string;
  description: { en: string; es: string };
  benefits: { en: string[]; es: string[] };
}

interface ServicesGridProps {
  currentLanguage: string;
  onBookService: (service: Service) => void;
  onViewDetails: (service: Service) => void;
  services: Service[];
}

const ServicesGrid: React.FC<ServicesGridProps> = ({
  currentLanguage,
  onBookService,
  onViewDetails,
  services
}) => {
  const content = {
    en: {
      featured: 'Our Services',
      wellness: 'Professional Massage Therapy',
      subtitle: 'Specialized treatments designed for your wellness and relaxation',
      description: 'Discover our comprehensive range of therapeutic and wellness services, each designed to provide you with the ultimate relaxation and health benefits.',
      contact: 'Contact us to schedule your appointment',
      phone: '(55) 49186534'
    },
    es: {
      featured: 'Nuestros Servicios',
      wellness: 'Terapia de Masajes Profesional',
      subtitle: 'Tratamientos especializados diseñados para tu bienestar y relajación',
      description: 'Descubre nuestra amplia gama de servicios terapéuticos y de bienestar, cada uno diseñado para brindarte la máxima relajación y beneficios para la salud.',
      contact: 'Contáctanos para agendar tu cita',
      phone: '(55) 49186534'
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-spa-soft-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-punto-rosa-400 to-spa-green-400 mx-auto mb-6 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-serif text-text-deep-800 mb-4">
            {content[currentLanguage as keyof typeof content].featured}
          </h2>
          <p className="text-xl text-text-deep-600 max-w-3xl mx-auto mb-6">
            {content[currentLanguage as keyof typeof content].subtitle}
          </p>
          <p className="text-lg text-text-deep-500 max-w-4xl mx-auto mb-8">
            {content[currentLanguage as keyof typeof content].description}
          </p>
          
          {/* Información de contacto */}
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto border border-neutral-warm-200">
            <h3 className="text-lg font-semibold text-text-deep-800 mb-2">
              {content[currentLanguage as keyof typeof content].contact}
            </h3>
            <p className="text-punto-rosa-600 font-medium text-lg">
              {content[currentLanguage as keyof typeof content].phone}
            </p>
            <p className="text-sm text-text-deep-600 mt-2">
              {currentLanguage === 'es' ? 'Otros servicios: sueros vitaminados a domicilio o en cabina.' : 'Other services: vitamin serums at home or in clinic.'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard
                service={service}
                currentLanguage={currentLanguage}
                onBookService={onBookService}
                onViewDetails={onViewDetails}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;