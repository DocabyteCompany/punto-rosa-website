import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  service: { en: string; es: string };
  rating: number;
  comment: { en: string; es: string };
  image: string;
  date: string;
}

interface TestimonialsSectionProps {
  currentLanguage: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ currentLanguage }) => {
  const content = {
    en: {
      title: 'What Our Clients Say',
      subtitle: 'Real experiences from people who have transformed their wellness with us',
      serviceLabel: 'Service:'
    },
    es: {
      title: 'Lo Que Dicen Nuestros Clientes',
      subtitle: 'Experiencias reales de personas que han transformado su bienestar con nosotros',
      serviceLabel: 'Servicio:'
    }
  };

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'María González',
      service: {
        en: 'Relaxing Massage',
        es: 'Masaje Relajante'
      },
      rating: 5,
      comment: {
        en: 'Incredible experience! The pressure point therapy completely relieved my back pain. I feel renewed and relaxed. Highly recommend Punto Rosa!',
        es: 'Experiencia increíble! La terapia de puntos de presión alivió completamente mi dolor de espalda. Me siento renovada y relajada. ¡Recomiendo totalmente Punto Rosa!'
      },
      image: 'https://images.unsplash.com/photo-1544717440-fe3444dc3cd0?w=100&h=100&fit=crop&crop=face',
      date: '2024-06-15'
    },
    {
      id: 2,
      name: 'Carlos Ramírez',
      service: {
        en: 'Deep Tissue Massage',
        es: 'Masaje de Tejido Profundo'
      },
      rating: 5,
      comment: {
        en: 'Outstanding service! The professional was very knowledgeable and made me feel comfortable throughout the session. The results are amazing.',
        es: 'Servicio excepcional! La profesional era muy conocedora y me hizo sentir cómodo durante toda la sesión. Los resultados son increíbles.'
      },
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      date: '2024-06-10'
    },
    {
      id: 3,
      name: 'Ana Martínez',
      service: {
        en: 'Therapeutic Massage',
        es: 'Masaje Terapéutico'
      },
      rating: 5,
      comment: {
        en: 'Perfect for stress relief! The environment is very peaceful and the technique is excellent. I always leave feeling like a new person.',
        es: 'Perfecto para aliviar el estrés! El ambiente es muy tranquilo y la técnica es excelente. Siempre salgo sintiéndome como una nueva persona.'
      },
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      date: '2024-06-08'
    },
    {
      id: 4,
      name: 'Luis Fernández',
      service: {
        en: 'Couples Massage',
        es: 'Masaje en Pareja'
      },
      rating: 5,
      comment: {
        en: 'My partner and I had an amazing experience. Very professional service and a relaxing atmosphere. We will definitely be back!',
        es: 'Mi pareja y yo tuvimos una experiencia increíble. Servicio muy profesional y un ambiente relajante. ¡Definitivamente volveremos!'
      },
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      date: '2024-06-05'
    },
    {
      id: 5,
      name: 'Patricia Silva',
      service: {
        en: 'Hot Stone Therapy',
        es: 'Terapia con Piedras Calientes'
      },
      rating: 5,
      comment: {
        en: 'The hot stone therapy was exactly what I needed. The warmth and pressure were perfect. I felt so relaxed and my muscles feel great.',
        es: 'La terapia con piedras calientes fue exactamente lo que necesitaba. El calor y la presión fueron perfectos. Me sentí muy relajada y mis músculos se sienten geniales.'
      },
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      date: '2024-06-03'
    },
    {
      id: 6,
      name: 'Roberto Herrera',
      service: {
        en: 'Sports Massage',
        es: 'Masaje Deportivo'
      },
      rating: 5,
      comment: {
        en: 'As an athlete, I need quality massage therapy. This exceeded my expectations. Great technique and very professional approach.',
        es: 'Como atleta, necesito terapia de masajes de calidad. Esto superó mis expectativas. Gran técnica y enfoque muy profesional.'
      },
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      date: '2024-06-01'
    }
  ];

  const currentContent = content[currentLanguage as keyof typeof content];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-spa-soft-50 to-neutral-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-text-deep-primary mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-text-deep-secondary max-w-2xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 p-6 animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-4">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-punto-rosa-primary/20" />
                <p className="text-text-deep-secondary leading-relaxed italic pl-6">
                  "{testimonial.comment[currentLanguage as keyof typeof testimonial.comment]}"
                </p>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
                <span className="text-sm text-text-deep-tertiary">
                  {new Date(testimonial.date).toLocaleDateString()}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-text-deep-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-punto-rosa-primary">
                    {currentContent.serviceLabel} {testimonial.service[currentLanguage as keyof typeof testimonial.service]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;