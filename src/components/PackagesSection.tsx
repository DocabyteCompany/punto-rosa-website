import React from 'react';
import { Gift, Star, Heart, Sparkles } from 'lucide-react';

interface PackagesSectionProps {
  currentLanguage: string;
  onBookPackage: (packageId: number) => void;
}

const PackagesSection: React.FC<PackagesSectionProps> = ({
  currentLanguage,
  onBookPackage
}) => {
  const content = {
    en: {
      title: 'Wellness Packages',
      subtitle: 'Special combinations designed for complete relaxation',
      book: 'Book Package',
      packages: [
        {
          id: 1,
          name: 'Total Relaxation',
          description: 'Complete wellness experience with full body massage, facial treatment, and aromatherapy',
          duration: '3 hours',
          sessions: '3 sessions',
          price: 350,
          originalPrice: 450,
          features: ['Full Body Massage', 'Facial Treatment', 'Aromatherapy', 'Herbal Tea'],
          icon: <Sparkles className="w-8 h-8" />,
          popular: false
        },
        {
          id: 2,
          name: 'Couples Retreat',
          description: 'Romantic experience for two with synchronized massages in our couples suite',
          duration: '2.5 hours',
          sessions: '1 session',
          price: 280,
          originalPrice: 350,
          features: ['Couples Massage', 'Private Suite', 'Champagne', 'Rose Petals'],
          icon: <Heart className="w-8 h-8" />,
          popular: true
        },
        {
          id: 3,
          name: 'Monthly Renewal',
          description: 'Monthly subscription with 4 massage sessions to maintain your wellness routine',
          duration: 'Monthly',
          sessions: '4 sessions/month',
          price: 320,
          originalPrice: 400,
          features: ['4 Monthly Sessions', 'Priority Booking', '15% Discount', 'Wellness Consultation'],
          icon: <Star className="w-8 h-8" />,
          popular: false
        },
        {
          id: 4,
          name: 'Complete Renewal',
          description: 'Intensive wellness program with multiple treatments over one week',
          duration: '1 week',
          sessions: '5 sessions',
          price: 500,
          originalPrice: 650,
          features: ['5 Different Treatments', 'Nutrition Consultation', 'Yoga Session', 'Take-home Kit'],
          icon: <Gift className="w-8 h-8" />,
          popular: false
        }
      ]
    },
    es: {
      title: 'Paquetes de Bienestar',
      subtitle: 'Combinaciones especiales diseñadas para la relajación completa',
      book: 'Reservar Paquete',
      packages: [
        {
          id: 1,
          name: 'Relajación Total',
          description: 'Experiencia completa de bienestar con masaje corporal completo, tratamiento facial y aromaterapia',
          duration: '3 horas',
          sessions: '3 sesiones',
          price: 350,
          originalPrice: 450,
          features: ['Masaje Corporal Completo', 'Tratamiento Facial', 'Aromaterapia', 'Té de Hierbas'],
          icon: <Sparkles className="w-8 h-8" />,
          popular: false
        },
        {
          id: 2,
          name: 'Retiro de Parejas',
          description: 'Experiencia romántica para dos con masajes sincronizados en nuestra suite para parejas',
          duration: '2.5 horas',
          sessions: '1 sesión',
          price: 280,
          originalPrice: 350,
          features: ['Masaje de Parejas', 'Suite Privada', 'Champagne', 'Pétalos de Rosa'],
          icon: <Heart className="w-8 h-8" />,
          popular: true
        },
        {
          id: 3,
          name: 'Renovación Mensual',
          description: 'Suscripción mensual con 4 sesiones de masaje para mantener tu rutina de bienestar',
          duration: 'Mensual',
          sessions: '4 sesiones/mes',
          price: 320,
          originalPrice: 400,
          features: ['4 Sesiones Mensuales', 'Reserva Prioritaria', '15% Descuento', 'Consulta de Bienestar'],
          icon: <Star className="w-8 h-8" />,
          popular: false
        },
        {
          id: 4,
          name: 'Renovación Completa',
          description: 'Programa intensivo de bienestar con múltiples tratamientos durante una semana',
          duration: '1 semana',
          sessions: '5 sesiones',
          price: 500,
          originalPrice: 650,
          features: ['5 Tratamientos Diferentes', 'Consulta Nutricional', 'Sesión de Yoga', 'Kit para Casa'],
          icon: <Gift className="w-8 h-8" />,
          popular: false
        }
      ]
    }
  };

  const selectedContent = content[currentLanguage as keyof typeof content];

  return (
    <section className="py-20 bg-gradient-to-b from-spa-soft-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-text-deep-800 mb-4">
            {selectedContent.title}
          </h2>
          <p className="text-xl text-text-deep-600 max-w-3xl mx-auto">
            {selectedContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {selectedContent.packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                pkg.popular ? 'ring-2 ring-punto-rosa-400 scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-punto-rosa-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                    {currentLanguage === 'es' ? 'Más Popular' : 'Most Popular'}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-punto-rosa-400 to-punto-rosa-600 rounded-2xl flex items-center justify-center text-white mb-4">
                  {pkg.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-deep-800 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-text-deep-600 text-sm">
                  {pkg.description}
                </p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-3xl font-bold text-punto-rosa-600">${pkg.price}</span>
                  <span className="text-lg text-text-deep-400 line-through ml-2">${pkg.originalPrice}</span>
                </div>
                <div className="text-sm text-text-deep-500">
                  {pkg.duration} • {pkg.sessions}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-text-deep-600">
                    <div className="w-2 h-2 bg-punto-rosa-400 rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onBookPackage(pkg.id)}
                className={`w-full py-3 rounded-xl font-medium transition-all duration-200 ${
                  pkg.popular
                    ? 'bg-punto-rosa-500 hover:bg-punto-rosa-600 text-white'
                    : 'bg-punto-rosa-50 hover:bg-punto-rosa-100 text-punto-rosa-600 border border-punto-rosa-200'
                }`}
              >
                {selectedContent.book}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;