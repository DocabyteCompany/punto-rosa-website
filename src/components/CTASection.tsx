import React from 'react';
import { Calendar, Star, ArrowRight } from 'lucide-react';

interface CTASectionProps {
  currentLanguage: string;
  onBookService: (service?: any) => void;
}

const CTASection: React.FC<CTASectionProps> = ({
  currentLanguage,
  onBookService
}) => {
  const content = {
    en: {
      title: "Ready for Your Transformation?",
      subtitle: "I'm here to help you achieve your wellness goals with personalized treatments",
      description: "Don't wait to start your journey to better health and relaxation. Book your session today and experience the difference that professional massage therapy can make in your life.",
      ctaButton: "Book Your Session Now",
      benefits: [
        "Personalized treatment plans",
        "Professional expertise",
        "Convenient scheduling",
        "Home service available"
      ]
    },
    es: {
      title: "¿Lista para tu Transformación?",
      subtitle: "Estoy aquí para ayudarte a alcanzar tus objetivos de bienestar con tratamientos personalizados",
      description: "No esperes para comenzar tu camino hacia una mejor salud y relajación. Agenda tu sesión hoy y experimenta la diferencia que la terapia de masaje profesional puede hacer en tu vida.",
      ctaButton: "Agenda tu Sesión Ahora",
      benefits: [
        "Planes de tratamiento personalizados",
        "Experiencia profesional",
        "Agenda flexible",
        "Servicio a domicilio disponible"
      ]
    }
  };

  const currentContent = content[currentLanguage as keyof typeof content];

  return (
    <section className="py-20 bg-gradient-to-br from-punto-rosa-50 via-white to-spa-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-24 h-1 bg-gradient-to-r from-punto-rosa-400 to-spa-green-400 mx-auto mb-6 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-serif text-text-deep-800 mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-text-deep-600 max-w-3xl mx-auto mb-6">
            {currentContent.subtitle}
          </p>
          <p className="text-lg text-text-deep-500 max-w-4xl mx-auto">
            {currentContent.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Benefits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-text-deep-800 mb-6">
              {currentLanguage === 'es' ? 'Por qué elegirme:' : 'Why choose me:'}
            </h3>
            <div className="space-y-4">
              {currentContent.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-punto-rosa-500 to-spa-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Star className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-text-deep-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-neutral-warm-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-punto-rosa-500 to-spa-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-text-deep-800 mb-4">
                {currentLanguage === 'es' ? 'Comienza Hoy' : 'Start Today'}
              </h3>
              <p className="text-text-deep-600 mb-8">
                {currentLanguage === 'es' 
                  ? 'Tu primera sesión está a solo un clic de distancia'
                  : 'Your first session is just one click away'
                }
              </p>
              <button
                onClick={onBookService}
                className="w-full bg-gradient-to-r from-punto-rosa-500 to-spa-green-500 hover:from-punto-rosa-600 hover:to-spa-green-600 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 group"
              >
                <span className="mr-2">{currentContent.ctaButton}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 