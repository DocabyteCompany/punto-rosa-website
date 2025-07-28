import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import ServiceCard from './ServiceCard';
import { DollarSign } from 'lucide-react';

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

interface ServicesCarouselProps {
  currentLanguage: string;
  onBookService: (service: Service) => void;
  onViewDetails: (service: Service) => void;
  services: Service[];
}

const ServicesCarousel: React.FC<ServicesCarouselProps> = ({
  currentLanguage,
  onBookService,
  onViewDetails,
  services
}) => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  const content = {
    en: {
      featured: 'My Services',
      wellness: 'Professional Massage Therapy',
      subtitle: 'Specialized treatments I design for your wellness and relaxation',
      description: 'I offer a comprehensive range of therapeutic and wellness services, each designed to provide you with the ultimate relaxation and health benefits.',
      otherServices: 'Other Services',
      homeService: 'Home Service',
      extraCost: 'Additional cost',
      vitaminSerums: 'Vitamin Serums',
      atHome: 'At home or in clinic'
    },
    es: {
      featured: 'Mis Servicios',
      wellness: 'Terapia de Masaje Profesional',
      subtitle: 'Tratamientos especializados que diseño para tu bienestar y relajación',
      description: 'Te ofrezco una amplia gama de servicios terapéuticos y de bienestar, cada uno diseñado para brindarte la máxima relajación y beneficios para tu salud.',
      otherServices: 'Otros Servicios',
      homeService: 'Servicio a Domicilio',
      extraCost: 'Costo adicional',
      vitaminSerums: 'Sueros Vitaminados',
      atHome: 'A domicilio o en cabina'
    }
  };

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

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
          <p className="text-lg text-text-deep-500 max-w-4xl mx-auto">
            {content[currentLanguage as keyof typeof content].description}
          </p>
        </div>

        {/* Carrusel de servicios */}
        <div className="relative px-8 md:px-16 mb-16">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={service.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ServiceCard
                      service={service}
                      currentLanguage={currentLanguage}
                      onBookService={onBookService}
                      onViewDetails={onViewDetails}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white border-punto-rosa-300 text-punto-rosa-600 hover:bg-punto-rosa-50 hover:text-punto-rosa-700" />
            <CarouselNext className="bg-white border-punto-rosa-300 text-punto-rosa-600 hover:bg-punto-rosa-50 hover:text-punto-rosa-700" />
          </Carousel>
        </div>

        {/* Indicadores de navegación */}
        <div className="flex justify-center mb-12 space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === current 
                  ? 'bg-punto-rosa-500 scale-125' 
                  : 'bg-punto-rosa-300 hover:bg-punto-rosa-400'
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Información de contacto y otros servicios */}
        <div className="max-w-2xl mx-auto">
          {/* Otros servicios */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-warm-200">
            <h3 className="text-xl font-semibold text-text-deep-800 mb-4">
              {content[currentLanguage as keyof typeof content].otherServices}
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-punto-rosa-400 pl-4">
                <h4 className="font-medium text-text-deep-800 mb-1">
                  {content[currentLanguage as keyof typeof content].homeService}
                </h4>
                <p className="text-sm text-text-deep-600 mb-2">
                  {currentLanguage === 'es' 
                    ? 'Todos nuestros masajes disponibles a domicilio'
                    : 'All our massages available at home'
                  }
                </p>
                <div className="flex items-center text-sm text-punto-rosa-600 font-medium">
                  <DollarSign className="w-4 h-4 mr-1" />
                  {content[currentLanguage as keyof typeof content].extraCost}: $200
                </div>
              </div>
              
              <div className="border-l-4 border-spa-green-400 pl-4">
                <h4 className="font-medium text-text-deep-800 mb-1">
                  {content[currentLanguage as keyof typeof content].vitaminSerums}
                </h4>
                <p className="text-sm text-text-deep-600 mb-2">
                  {content[currentLanguage as keyof typeof content].atHome}
                </p>
                <div className="flex items-center text-sm text-spa-green-600 font-medium">
                  <DollarSign className="w-4 h-4 mr-1" />
                  $1,200
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel; 