import React from 'react';
import { AnimatedTestimonials } from './ui/animated-testimonials';

interface TestimonialsSectionProps {
  currentLanguage: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ currentLanguage }) => {
  const testimonials = [
    {
      quote: currentLanguage === 'es' 
        ? "Nataly Gama: masajista súper profesional, con excelentes condiciones de limpieza, comodidad al 100%, estoy segura que disfrutarás tu masaje tal cual u como lo requieras ✨"
        : "Nataly Gama: super professional masseuse, with excellent cleanliness conditions, 100% comfort, I'm sure you'll enjoy your massage exactly as you require ✨",
      name: ".",
      designation: currentLanguage === 'es' ? "Cliente Satisfecho" : "Satisfied Client",
      src: "/imgs/testimonies/testimony_1.webp",
    },
    {
      quote: currentLanguage === 'es'
        ? "Nataly excelente servicio de masaje, me encanta que tenga servicio a domicilio, eso lo hace más relajate y se adapta a lo que necesitas en ese momento, seguro que vas a disfrutar mucho de sus masajes"
        : "Nataly excellent massage service, I love that she has home service, that makes it more relaxing and adapts to what you need at that moment, I'm sure you'll really enjoy her massages",
      name: ".",
      designation: currentLanguage === 'es' ? "Cliente Satisfecho" : "Satisfied Client",
      src: "/imgs/testimonies/testimony_2.webp",
    },
    {
      quote: currentLanguage === 'es'
        ? "Como practicante de ejercicio funcional y calistenia, constantemente busco cuidar mi recuperación física. En los masajes de Nat encontré el alivio perfecto para mis dolores y la descarga muscular que necesito después de entrenamientos intensos. Profesionalismo, técnica y resultados que realmente se sienten."
        : "As a functional exercise and calisthenics practitioner, I constantly seek to take care of my physical recovery. In Nat's massages I found the perfect relief for my pains and the muscle release I need after intense training sessions. Professionalism, technique and results that you can really feel.",
      name: ".",
      designation: currentLanguage === 'es' ? "Practicante de Ejercicio" : "Exercise Practitioner",
      src: "/imgs/testimonies/testimony_3.webp",
    },
    {
      quote: currentLanguage === 'es'
        ? "El masaje descontracturante fue justo lo que necesitaba. Noté una gran diferencia en la tensión muscular después de la sesión. ¡Gracias por tu excelente Natt💖! Lo recomiendo mucho."
        : "The decontracting massage was exactly what I needed. I noticed a big difference in muscle tension after the session. Thank you for your excellent work Natt💖! I highly recommend it.",
      name: ".",
      designation: currentLanguage === 'es' ? "Cliente Satisfecho" : "Satisfied Client",
      src: "/imgs/testimonies/testimony_4.webp",
    },
    {
      quote: currentLanguage === 'es'
        ? "El masaje fue increíble. Llegué con mucho estrés laboral y cansancio acumulado, y salí sintiéndome renovado. Me ayudó a liberar tensión por completo ahora me siento mucho mejor, con más energía y tranquilidad."
        : "The massage was incredible. I arrived with a lot of work stress and accumulated fatigue, and left feeling renewed. It helped me release tension completely, now I feel much better, with more energy and tranquility.",
      name: ".",
      designation: currentLanguage === 'es' ? "Cliente Satisfecho" : "Satisfied Client",
      src: "/imgs/testimonies/testimony_5.webp",
    },
    {
      quote: currentLanguage === 'es'
        ? "Fue una experiencia de masaje transformadora. Nat me ayudó a deshacerme del estrés acumulado y del cansancio físico. Salí sintiéndome revitalizada, con una sensación de tranquilidad y una energía renovada."
        : "It was a transformative massage experience. Nat helped me get rid of accumulated stress and physical fatigue. I left feeling revitalized, with a sense of tranquility and renewed energy.",
      name: ".",
      designation: currentLanguage === 'es' ? "Cliente Satisfecho" : "Satisfied Client",
      src: "/imgs/testimonies/testimony_6.webp",
    },
    {
      quote: currentLanguage === 'es'
        ? "Les súper recomiendo los servicios de: \"Masajes toque rosa\" ☺. Cuenta con una amplia cartera de servicios y precios accesibles. Me dedico a dar clases de Indoor Cycling y mis piernas estaban mega contracturadas 😩 pero, con los masajes de descarga y con la presoterapia he sentido mucho alivio. No duden en probar los diferentes servicios que ofrecen."
        : "I super recommend the services of: \"Masajes toque rosa\" ☺. They have a wide portfolio of services and accessible prices. I dedicate myself to teaching Indoor Cycling classes and my legs were mega contracted 😩 but, with the discharge massages and with pressotherapy I have felt much relief. Don't hesitate to try the different services they offer.",
      name: ".",
      designation: currentLanguage === 'es' ? "Instructora de Cycling" : "Cycling Instructor",
      src: "/imgs/testimonies/testimony_7.webp",
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
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-white to-spa-soft-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-punto-rosa-400 to-spa-green-400 mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text-deep-800 mb-3 sm:mb-4">
            {currentContent.title}
          </h2>
          <p className="text-lg sm:text-xl text-text-deep-600 max-w-3xl mx-auto px-2 sm:px-0">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="px-2 sm:px-0">
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;