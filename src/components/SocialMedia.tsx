import React from 'react';
import { Facebook, Instagram, MessageCircle, Phone } from 'lucide-react';

interface SocialMediaProps {
  currentLanguage: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ currentLanguage }) => {
  const content = {
    en: {
      title: "Contact Me Directly",
      subtitle: "Reach out through WhatsApp for instant booking or follow my social media to see my latest work and results",
      whatsapp: "Book via WhatsApp",
      facebook: "Follow on Facebook",
      instagram: "Follow on Instagram",
      phone: "Call Me",
      whatsappDesc: "Instant booking and consultation",
      facebookDesc: "See my latest treatments",
      instagramDesc: "Client results and tips",
      phoneDesc: "Direct consultation"
    },
    es: {
      title: "Contáctame Directamente",
      subtitle: "Comunícate por WhatsApp para reservas instantáneas o sigue mis redes sociales para ver mi trabajo más reciente y resultados",
      whatsapp: "Reservar por WhatsApp",
      facebook: "Seguir en Facebook", 
      instagram: "Seguir en Instagram",
      phone: "Llámanos",
      whatsappDesc: "Reservas instantáneas y consulta",
      facebookDesc: "Ve mis últimos tratamientos",
      instagramDesc: "Resultados de clientes y consejos",
      phoneDesc: "Consulta directa"
    }
  };

  const socialLinks = [
    {
      name: content[currentLanguage as keyof typeof content].whatsapp,
      icon: MessageCircle,
      url: "https://wa.me/573001234567?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20para%20masajes",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:shadow-green-500/25",
      description: content[currentLanguage as keyof typeof content].whatsappDesc,
      priority: true
    },
    {
      name: content[currentLanguage as keyof typeof content].instagram,
      icon: Instagram,
      url: "https://instagram.com/puntorosamassage",
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:shadow-pink-500/25",
      description: content[currentLanguage as keyof typeof content].instagramDesc,
      priority: true
    },
    {
      name: content[currentLanguage as keyof typeof content].facebook,
      icon: Facebook,
      url: "https://facebook.com/puntorosamassage",
      color: "from-blue-600 to-blue-700", 
      hoverColor: "hover:shadow-blue-600/25",
      description: content[currentLanguage as keyof typeof content].facebookDesc,
      priority: false
    },
    {
      name: content[currentLanguage as keyof typeof content].phone,
      icon: Phone,
      url: "tel:+573001234567",
      color: "from-punto-rosa-primary to-punto-rosa-accent",
      hoverColor: "hover:shadow-punto-rosa-primary/25",
      description: content[currentLanguage as keyof typeof content].phoneDesc,
      priority: false
    }
  ];

  const currentContent = content[currentLanguage as keyof typeof content];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-text-deep-primary mb-4">
            {currentContent.title}
          </h2>
          <p className="text-lg text-text-deep-secondary max-w-2xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group flex flex-col md:flex-row items-center gap-4 p-6 
                bg-gradient-to-r ${social.color} text-white
                rounded-2xl font-medium transition-all duration-300
                hover-scale ${social.hoverColor} hover:shadow-xl
                ${social.priority ? 'ring-2 ring-white/20' : ''}
              `}
            >
              <div className="flex-shrink-0">
                <social.icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold mb-1">{social.name}</h3>
                <p className="text-sm text-white/80">{social.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;