import React from 'react';
import { AnimatedTestimonials } from './ui/animated-testimonials';

interface TestimonialsSectionProps {
  currentLanguage: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ currentLanguage }) => {
  const testimonials = [
    {
      quote: currentLanguage === 'es' 
        ? "El Masaje Harmony fue exactamente lo que necesitaba. La técnica suave y profunda me ayudó a reducir completamente la tensión de mi espalda. Me siento renovada y con mucha más energía."
        : "The Harmony Massage was exactly what I needed. The soft and deep technique helped me completely reduce the tension in my back. I feel renewed and with much more energy.",
      name: "María González",
      designation: currentLanguage === 'es' ? "Masaje Harmony" : "Harmony Massage",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: currentLanguage === 'es'
        ? "El masaje de liberación miofascial alivió mis tensiones musculares profundas como nunca antes. Como deportista, necesitaba algo que realmente llegara a las capas profundas. Excelente técnica."
        : "The myofascial release massage relieved my deep muscle tensions like never before. As an athlete, I needed something that really reached the deep layers. Excellent technique.",
      name: "Ana Rodríguez",
      designation: currentLanguage === 'es' ? "Masaje de Liberación Miofascial" : "Myofascial Release Massage",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: currentLanguage === 'es'
        ? "El masaje mixto combinó perfectamente técnicas relajantes y descontracturantes. Fue un tratamiento completo que me dejó completamente renovada. La combinación de técnicas es increíble."
        : "The mixed massage perfectly combined relaxing and decontracting techniques. It was a complete treatment that left me completely renewed. The combination of techniques is incredible.",
      name: "Carmen López",
      designation: currentLanguage === 'es' ? "Masaje Mixto" : "Mixed Massage",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: currentLanguage === 'es'
        ? "El drenaje linfático manual eliminó completamente la retención de líquidos en mis piernas. Me siento mucho más ligera y la circulación ha mejorado notablemente. Técnica profesional excelente."
        : "The manual lymphatic drainage completely eliminated fluid retention in my legs. I feel much lighter and circulation has improved remarkably. Excellent professional technique.",
      name: "Patricia Kim",
      designation: currentLanguage === 'es' ? "Drenaje Linfático Manual" : "Manual Lymphatic Drainage",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: currentLanguage === 'es'
        ? "Como deportista, el masaje deportivo ha sido fundamental para mi recuperación. Me ayuda a mantener la flexibilidad y mejorar la circulación después de entrenamientos intensos."
        : "As an athlete, the sports massage has been fundamental for my recovery. It helps me maintain flexibility and improve circulation after intense training sessions.",
      name: "Laura Thompson",
      designation: currentLanguage === 'es' ? "Masaje Deportivo" : "Sports Massage",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: currentLanguage === 'es'
        ? "La presoterapia optimizó mi circulación y aceleró mi recuperación muscular de manera increíble. Es perfecta para después del ejercicio. Me siento mucho más energética."
        : "Pressotherapy optimized my circulation and accelerated my muscle recovery incredibly. It's perfect for after exercise. I feel much more energetic.",
      name: "Sofia Martínez",
      designation: currentLanguage === 'es' ? "Presoterapia" : "Pressotherapy",
      src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      quote: currentLanguage === 'es'
        ? "La gimnasia pasiva me ha ayudado a tonificar sin impacto físico. Es ideal para mi recuperación y como complemento estético. Los resultados son visibles desde la primera sesión."
        : "Passive gymnastics has helped me tone without physical impact. It's ideal for my recovery and as an aesthetic complement. The results are visible from the first session.",
      name: "Elena García",
      designation: currentLanguage === 'es' ? "Gimnasia Pasiva" : "Passive Gymnastics",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      quote: currentLanguage === 'es'
        ? "La cavitación me ayudó a reducir medidas corporales de manera no invasiva. Es un tratamiento estético muy efectivo. Los resultados superaron mis expectativas."
        : "Cavitation helped me reduce body measurements in a non-invasive way. It's a very effective aesthetic treatment. The results exceeded my expectations.",
      name: "Claudia Ruiz",
      designation: currentLanguage === 'es' ? "Cavitación" : "Cavitation",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      quote: currentLanguage === 'es'
        ? "El suero vitaminado ha mejorado significativamente mi salud y bienestar. Es un refuerzo vitamínico que me da energía y vitalidad. Lo recomiendo totalmente."
        : "The vitamin serum has significantly improved my health and wellness. It's a vitamin boost that gives me energy and vitality. I totally recommend it.",
      name: "Verónica Silva",
      designation: currentLanguage === 'es' ? "Suero Vitaminado" : "Vitamin Serum",
      src: "https://images.unsplash.com/photo-1544717440-fe3444dc3cd0?w=100&h=100&fit=crop&crop=face",
    }
  ];

  const content = {
    en: {
      title: "What My Clients Say",
      subtitle: "Real experiences from people who have transformed their wellness with my services"
    },
    es: {
      title: "Lo que Dicen Mis Clientes",
      subtitle: "Experiencias reales de personas que han transformado su bienestar con mis servicios"
    }
  };

  const currentContent = content[currentLanguage as keyof typeof content];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-spa-soft-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-punto-rosa-400 to-spa-green-400 mx-auto mb-6 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-serif text-text-deep-800 mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-text-deep-600 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
};

export default TestimonialsSection;