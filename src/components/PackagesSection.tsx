import React, { useState } from 'react';
import { Calendar, DollarSign, Star } from 'lucide-react';

interface Package {
  id: number;
  name: { en: string; es: string };
  services: string[];
  description: { en: string; es: string };
  detailedDescription: { en: string; es: string };
  regularPrice: number;
  specialPrice: number;
  packagePrice: number;
  savings: number;
  image: string;
}

interface PackagesSectionProps {
  currentLanguage: string;
  onBookPackage: (packageId: number) => void;
}

const PackagesSection: React.FC<PackagesSectionProps> = ({
  currentLanguage,
  onBookPackage
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const content = {
    en: {
      title: 'Transformation Packages',
      subtitle: 'Specialized combinations I create to shape your figure and optimize your physical performance',
      book: 'Book Package',
      tabs: [
        'Package 1',
        'Package 2',
        'Package 3',
        'Package 4'
      ]
    },
    es: {
      title: 'Paquetes de Transformación',
      subtitle: 'Combinaciones especializadas que creo para moldear tu figura y optimizar tu rendimiento físico',
      book: 'Agendar Paquete',
      tabs: [
        'Paquete 1',
        'Paquete 2',
        'Paquete 3',
        'Paquete 4'
      ]
    }
  };

  const packages: Package[] = [
    {
      id: 1,
      name: { en: 'Transform Your Figure', es: 'Transforma tu Figura' },
      services: ['Masaje', 'Cavitación', 'Gimnasia Pasiva', 'Masaje Abdominal'],
      description: { 
        en: 'Transform your figure with this powerful combo',
        es: 'Transforma tu figura con este combo poderoso'
      },
      detailedDescription: {
        en: 'Transform your figure with our most comprehensive package. This combo includes specialized techniques that work in synergy: cavitation reduces localized measurements, abdominal massage activates your metabolism, passive gymnastics tones without effort, and pressotherapy optimizes circulation and drains toxins. Ideal for those seeking visible results from the first session.',
        es: 'Transforma tu figura con nuestro paquete más completo. Este combo incluye técnicas especializadas que trabajan en sinergia: la cavitación reduce medidas localizadas, el masaje abdominal activa tu metabolismo, la gimnasia pasiva tonifica sin esfuerzo, y la presoterapia optimiza la circulación y drena toxinas. Ideal para quienes buscan resultados visibles desde la primera sesión.'
      },
      regularPrice: 1600,
      specialPrice: 1300,
      packagePrice: 9000,
      savings: 7000,
      image: '/lovable-uploads/31349569-7ca5-4ae3-8fcd-c3c058516f41.png'
    },
    {
      id: 2,
      name: { en: 'Recover and Perform Better', es: 'Recupérate y Rinde Más' },
      services: ['Masaje Deportivo', 'Presoterapia'],
      description: {
        en: 'Recover, perform better and feel incredible!',
        es: '¡Recupérate, rinde más y siéntete increíble!'
      },
      detailedDescription: {
        en: 'Perfect for athletes and active people who seek muscle recovery and improved performance. Sports massage relieves muscle tension and improves flexibility, while pressotherapy optimizes circulation, drains liquids, and accelerates muscle recovery. This combination is ideal for those who want to recover faster and maintain optimal physical performance.',
        es: 'Perfecto para deportistas y personas activas que buscan recuperación muscular y mejor rendimiento. El masaje deportivo alivia la tensión muscular y mejora la flexibilidad, mientras que la presoterapia optimiza la circulación, drena líquidos y acelera la recuperación muscular. Esta combinación es ideal para quienes quieren recuperarse más rápido y mantener un rendimiento físico óptimo.'
      },
      regularPrice: 1100,
      specialPrice: 900,
      packagePrice: 7500,
      savings: 3500,
      image: '/lovable-uploads/9145e19f-ccc7-404d-aef7-f9184eaaba5c.png'
    },
    {
      id: 3,
      name: { en: 'Activate Your Body', es: 'Activa tu Cuerpo' },
      services: ['Masaje', 'Gimnasia Pasiva', 'Presoterapia'],
      description: {
        en: 'Activate your body, release tension and improve circulation!',
        es: '¡Activa tu cuerpo, libera tensión y mejora tu circulación!'
      },
      detailedDescription: {
        en: 'Activate your body with this comprehensive combination. The therapeutic massage reduces tension and renews body and mind, passive gymnastics stimulates muscles without physical effort, and pressotherapy optimizes circulation and accelerates recovery. This package is perfect for those who want to activate their metabolism and improve overall body function.',
        es: 'Activa tu cuerpo con esta combinación integral. El masaje terapéutico reduce la tensión y renueva cuerpo y mente, la gimnasia pasiva estimula los músculos sin esfuerzo físico, y la presoterapia optimiza la circulación y acelera la recuperación. Este paquete es perfecto para quienes quieren activar su metabolismo y mejorar la función corporal general.'
      },
      regularPrice: 1650,
      specialPrice: 1300,
      packagePrice: 9990,
      savings: 6510,
      image: '/lovable-uploads/c5d32113-4b94-4ad8-98ee-08abbd8435d1.png'
    },
    {
      id: 4,
      name: { en: 'Total Reductive Combo', es: 'Combo Reductivo Total' },
      services: ['Masaje', 'Cavitación', 'Masaje Abdominal', 'Gimnasia Pasiva', 'Presoterapia'],
      description: {
        en: 'Transform your body and activate your metabolism from the first session.',
        es: 'Transforma tu cuerpo y activa tu metabolismo desde la primera sesión.'
      },
      detailedDescription: {
        en: 'Our most comprehensive transformation package. This total reductive combo combines all our specialized techniques: therapeutic massage for deep relaxation, cavitation for localized fat reduction, abdominal massage to activate metabolism, passive gymnastics for muscle toning without effort, and pressotherapy for optimal circulation and detoxification. The ultimate package for complete body transformation.',
        es: 'Nuestro paquete de transformación más completo. Este combo reductivo total combina todas nuestras técnicas especializadas: masaje terapéutico para relajación profunda, cavitación para reducción localizada de grasa, masaje abdominal para activar el metabolismo, gimnasia pasiva para tonificación muscular sin esfuerzo, y presoterapia para circulación óptima y desintoxicación. El paquete definitivo para transformación corporal completa.'
      },
      regularPrice: 2150,
      specialPrice: 1600,
      packagePrice: 12500,
      savings: 9000,
      image: '/lovable-uploads/bc42af10-a390-4a2c-917b-6c68e37b0d6b.png'
    }
  ];

  const selectedContent = content[currentLanguage as keyof typeof content];
  const currentPackage = packages[activeTab];

  return (
    <section className="py-20 bg-gradient-to-b from-spa-soft-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-spa-green-400 to-punto-rosa-400 mx-auto mb-6 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-serif text-text-deep-800 mb-4">
            {selectedContent.title}
          </h2>
          <p className="text-xl text-text-deep-600 max-w-3xl mx-auto">
            {selectedContent.subtitle}
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 bg-white rounded-2xl p-2 shadow-lg border border-neutral-warm-200">
            {selectedContent.tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === index
                    ? 'bg-punto-rosa-500 text-white shadow-lg'
                    : 'text-text-deep-600 hover:text-punto-rosa-600 hover:bg-punto-rosa-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Package Content - Two Columns */}
        <div className="bg-white rounded-3xl shadow-lg border border-neutral-warm-200 overflow-hidden max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2">
            {/* Left Column - Package Details */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-text-deep-800 mb-4">
                {currentPackage.name[currentLanguage as keyof typeof currentPackage.name]}
              </h3>
              
              <p className="text-text-deep-600 mb-6">
                {currentPackage.description[currentLanguage as keyof typeof currentPackage.description]}
              </p>

              {/* Services List */}
              <div className="mb-6">
                <h4 className="font-semibold text-text-deep-800 mb-3">Servicios incluidos:</h4>
                <div className="space-y-2">
                  {currentPackage.services.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-punto-rosa-400 rounded-full mr-3"></div>
                      <span className="text-text-deep-600">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-text-deep-600">Precio Regular:</span>
                  <span className="text-lg font-semibold text-text-deep-800">${currentPackage.regularPrice}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-deep-600">Promoción Especial:</span>
                  <span className="text-lg font-semibold text-punto-rosa-600">${currentPackage.specialPrice} por sesión</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-deep-600">Paquete de 10 sesiones:</span>
                  <span className="text-xl font-bold text-spa-green-600">${currentPackage.packagePrice}</span>
                </div>
              </div>

              {/* Savings */}
              <div className="bg-gradient-to-r from-punto-rosa-50 to-spa-green-50 rounded-2xl p-4 border border-punto-rosa-200 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-text-deep-700 font-medium">Ahorro total:</span>
                  <span className="text-2xl font-bold text-punto-rosa-600">${currentPackage.savings}</span>
                </div>
              </div>

              {/* Book Button */}
              <button
                onClick={() => onBookPackage(currentPackage.id)}
                className="w-full bg-gradient-to-r from-punto-rosa-500 to-punto-rosa-600 hover:from-punto-rosa-600 hover:to-punto-rosa-700 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {selectedContent.book}
              </button>
            </div>

            {/* Right Column - Image with Gradient and Description */}
            <div className="relative">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${currentPackage.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;