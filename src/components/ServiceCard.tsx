import React from 'react';
import { Clock, Calendar, Star } from 'lucide-react';

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

interface ServiceCardProps {
  service: Service;
  currentLanguage: string;
  onBookService: (service: Service) => void;
  onViewDetails: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  currentLanguage,
  onBookService,
  onViewDetails
}) => {
  const content = {
    en: {
      book: 'Book Now',
      details: 'View Details',
      from: 'From',
      for: 'For'
    },
    es: {
      book: 'Agendar',
      details: 'Ver Detalles',
      from: 'Desde',
      for: 'Para'
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-neutral-warm-200 h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={service.image}
          alt={service.name[currentLanguage as keyof typeof service.name]}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-punto-rosa-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 bg-punto-rosa-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
          ${service.price}
        </div>
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-text-deep-800 px-3 py-1 rounded-full text-xs font-medium">
          <Clock className="w-3 h-3 inline mr-1" />
          {service.duration[currentLanguage as keyof typeof service.duration]}
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-text-deep-800 mb-2 line-clamp-2">
            {service.name[currentLanguage as keyof typeof service.name]}
          </h3>
        </div>
        
        <p className="text-text-deep-600 text-sm mb-4 line-clamp-3 flex-1">
          {service.description[currentLanguage as keyof typeof service.description]}
        </p>

        {/* Beneficios del servicio */}
        <div className="mb-4">
          <h4 className="text-xs font-medium text-text-deep-700 mb-2 flex items-center">
            <Star className="w-3 h-3 mr-1 text-punto-rosa-500" />
            {content[currentLanguage as keyof typeof content].for}:
          </h4>
          <ul className="text-xs text-text-deep-600 space-y-1">
            {service.benefits[currentLanguage as keyof typeof service.benefits].slice(0, 2).map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="w-1 h-1 bg-punto-rosa-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span className="line-clamp-1">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Botón principal de agendar */}
        <button
          onClick={() => onBookService(service)}
          className="w-full bg-gradient-to-r from-punto-rosa-500 to-punto-rosa-600 hover:from-punto-rosa-600 hover:to-punto-rosa-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 mt-auto"
        >
          <Calendar className="w-4 h-4 mr-2" />
          {content[currentLanguage as keyof typeof content].book}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;