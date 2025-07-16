import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

interface InstagramGalleryProps {
  currentLanguage: string;
}

const InstagramGallery: React.FC<InstagramGalleryProps> = ({ currentLanguage }) => {
  const content = {
    en: {
      title: "Follow Our Journey",
      subtitle: "Get inspired by our latest massage therapies and client transformations",
      followButton: "Follow @PuntoRosa",
      imageAlt: "Massage therapy session"
    },
    es: {
      title: "Sigue Nuestro Viaje",
      subtitle: "Inspírate con nuestras últimas terapias de masajes y transformaciones de clientes",
      followButton: "Seguir @PuntoRosa",
      imageAlt: "Sesión de terapia de masajes"
    }
  };

  const instagramImages = [
    "https://images.unsplash.com/photo-1544717440-fe3444dc3cd0?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1544717440-fe3444dc3cd0?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=300&h=300&fit=crop"
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {instagramImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square group relative overflow-hidden rounded-lg shadow-md hover-scale cursor-pointer"
            >
              <img
                src={image}
                alt={`${currentContent.imageAlt} ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
            </div>
          ))}
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