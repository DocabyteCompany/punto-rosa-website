import React from 'react';

interface AboutSectionProps {
  currentLanguage: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ currentLanguage }) => {
  const content = {
    en: {
      title: 'About Punto Rosa',
      subtitle: 'Your wellness journey begins with me',
      story: {
        title: 'My Story',
        description: 'Founded with a passion for wellness and relaxation, Punto Rosa has been providing exceptional massage therapy and wellness services to my clients. I believe in the power of therapeutic touch to heal, relax, and rejuvenate.'
      },
      mission: {
        title: 'My Mission',
        description: 'To provide personalized, professional wellness services that promote physical and mental well-being, helping my clients achieve balance and harmony in their daily lives.'
      },

    },
    es: {
      title: 'Sobre Punto Rosa',
      subtitle: 'Tu viaje de bienestar comienza conmigo',
      story: {
        title: 'Mi Historia',
        description: 'Fundado con pasión por el bienestar y la relajación, Punto Rosa ha estado proporcionando servicios excepcionales de terapia de masajes y bienestar a mis clientes. Creo en el poder del toque terapéutico para sanar, relajar y rejuvenecer.'
      },
      mission: {
        title: 'Mi Misión',
        description: 'Proporcionar servicios de bienestar personalizados y profesionales que promuevan el bienestar físico y mental, ayudando a mis clientes a lograr equilibrio y armonía en su vida diaria.'
      },

    }
  };

  const currentContent = content[currentLanguage as keyof typeof content];

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-white to-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-punto-rosa-400 to-spa-green-400 mx-auto mb-6 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-sage-800 mb-4">
              {currentContent.story.title}
            </h3>
            <p className="text-sage-600 leading-relaxed">
              {currentContent.story.description}
            </p>
          </div>

          {/* Mission */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-sage-800 mb-4">
              {currentContent.mission.title}
            </h3>
            <p className="text-sage-600 leading-relaxed">
              {currentContent.mission.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 