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
      subtitle: 'Specialized treatments designed for your wellness and relaxation'
    },
    es: {
      featured: 'Nuestros Servicios',
      wellness: 'Terapia de Masajes Profesional',
      subtitle: 'Tratamientos especializados diseñados para tu bienestar y relajación'
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-spa-soft-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-text-deep-800 mb-4">
            {content[currentLanguage as keyof typeof content].featured}
          </h2>
          <p className="text-xl text-text-deep-600 max-w-2xl mx-auto">
            {content[currentLanguage as keyof typeof content].subtitle}
          </p>
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