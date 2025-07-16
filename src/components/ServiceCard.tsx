import React from 'react';
import { Clock, Calendar } from 'lucide-react';

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
      from: 'From'
    },
    es: {
      book: 'Reservar',
      details: 'Ver Detalles',
      from: 'Desde'
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-neutral-warm-200">
      <div className="relative overflow-hidden">
        <img
          src={service.image}
          alt={service.name[currentLanguage as keyof typeof service.name]}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-punto-rosa-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 w-3 h-3 bg-spa-green-400 rounded-full shadow-lg"></div>
      </div>
      
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-xl font-semibold text-text-deep-800 mb-2">
            {service.name[currentLanguage as keyof typeof service.name]}
          </h3>
          <div className="flex items-center justify-between text-sm text-text-deep-600">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {service.duration[currentLanguage as keyof typeof service.duration]}
            </div>
            <div className="text-punto-rosa-600 font-semibold">
              {content[currentLanguage as keyof typeof content].from} ${service.price}
            </div>
          </div>
        </div>
        
        <p className="text-text-deep-600 text-sm mb-4 line-clamp-2">
          {service.description[currentLanguage as keyof typeof service.description]}
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => onBookService(service)}
            className="flex-1 bg-punto-rosa-500 hover:bg-punto-rosa-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center"
          >
            <Calendar className="w-4 h-4 mr-2" />
            {content[currentLanguage as keyof typeof content].book}
          </button>
          <button
            onClick={() => onViewDetails(service)}
            className="px-4 py-2 border border-punto-rosa-300 text-punto-rosa-600 rounded-lg text-sm font-medium hover:bg-punto-rosa-50 transition-colors duration-200"
          >
            {content[currentLanguage as keyof typeof content].details}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;