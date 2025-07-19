import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

interface InstagramGalleryProps {
  currentLanguage: string;
}

const InstagramGallery: React.FC<InstagramGalleryProps> = ({ currentLanguage }) => {
  const content = {
    en: {
      title: "See Our Work",
      subtitle: "Real results from our massage therapies and wellness treatments - updated automatically from our social media",
      followButton: "Follow @PuntoRosa",
      imageAlt: "Professional massage therapy session",
      viewMore: "View More Results"
    },
    es: {
      title: "Mira Nuestro Trabajo",
      subtitle: "Resultados reales de nuestras terapias de masajes y tratamientos de bienestar - actualizados automáticamente desde nuestras redes sociales",
      followButton: "Seguir @PuntoRosa",
      imageAlt: "Sesión profesional de terapia de masajes",
      viewMore: "Ver Más Resultados"
    }
  };

  const serviceImages = [
    {
      url: "https://images.unsplash.com/photo-1544717440-fe3444dc3cd0?w=300&h=300&fit=crop",
      alt: "Relaxing back massage therapy session"
    },
    {
      url: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=300&h=300&fit=crop", 
      alt: "Professional therapeutic massage treatment"
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
      alt: "Spa environment with hot stones therapy"
    },
    {
      url: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=300&h=300&fit=crop",
      alt: "Wellness and relaxation treatment setup"
    },
    {
      url: "https://images.unsplash.com/photo-1591343395082-e120087004b4?w=300&h=300&fit=crop",
      alt: "Client receiving pressure point therapy"
    },
    {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
      alt: "Peaceful massage therapy environment"
    },
    {
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=300&h=300&fit=crop",
      alt: "Professional massage therapist at work"
    },
    {
      url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop",
      alt: "Couples massage therapy session"
    }
  ];

  const currentContent = content[currentLanguage as keyof typeof content];

  return (
    <section className="py-16 bg-gradient-to-br from-punto-rosa-primary/5 to-spa-soft-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="w-8 h-8 text-punto-rosa-primary" />
            <h2 className="text-3xl md:text-4xl font-serif text-text-deep-primary">
              {currentContent.title}
            </h2>
          </div>
          <p className="text-lg text-text-deep-secondary max-w-2xl mx-auto mb-8">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-8">
          {serviceImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square group relative overflow-hidden rounded-lg shadow-md hover-scale cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
              <div className="absolute bottom-2 left-2 right-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="bg-black/50 rounded px-2 py-1 text-center">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <p className="text-sm text-text-deep-secondary max-w-xl mx-auto">
            {currentLanguage === 'en' 
              ? "These images are automatically updated from our Instagram and Facebook to show our latest work and client results."
              : "Estas imágenes se actualizan automáticamente desde nuestro Instagram y Facebook para mostrar nuestro trabajo más reciente y resultados de clientes."
            }
          </p>
        </div>

        <div className="text-center">
          <a
            href="https://instagram.com/puntorosamassage"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-punto-rosa-primary to-punto-rosa-accent text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 hover-scale"
          >
            <Instagram className="w-5 h-5" />
            {currentContent.followButton}
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;