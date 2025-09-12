import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

interface InstagramGalleryProps {
  currentLanguage: string;
}

const InstagramGallery: React.FC<InstagramGalleryProps> = ({ currentLanguage }) => {
  const content = {
    en: {
      title: "See My Work",
      subtitle: "Real results from my massage therapies and wellness treatments - updated automatically from my social media",
      followButton: "Follow @masajes_toque_rosa",
      imageAlt: "Professional massage therapy session",
      viewMore: "View More Results"
    },
    es: {
      title: "Mira Mi Trabajo",
      subtitle: "Resultados reales de mis terapias de masajes y tratamientos de bienestar - actualizados automáticamente desde mis redes sociales",
      followButton: "Seguir @masajes_toque_rosa",
      imageAlt: "Sesión profesional de terapia de masajes",
      viewMore: "Ver Más Resultados"
    }
  };

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

        <div className="text-center">
          <a
            href="https://www.instagram.com/masajes_toque_rosa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 hover-scale"
            style={{
              backgroundColor: '#e399a3'
            }}
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