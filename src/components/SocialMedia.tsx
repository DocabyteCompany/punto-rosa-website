import React from 'react';
import { Facebook, Instagram, MessageCircle, Phone } from 'lucide-react';

interface SocialMediaProps {
  currentLanguage: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ currentLanguage }) => {
  const content = {
    en: {
      title: "Connect With Us",
      subtitle: "Follow us on social media and stay updated with our latest offers",
      whatsapp: "WhatsApp",
      facebook: "Facebook",
      instagram: "Instagram",
      phone: "Call Us"
    },
    es: {
      title: "Conéctate Con Nosotros",
      subtitle: "Síguenos en redes sociales y mantente al día con nuestras últimas ofertas",
      whatsapp: "WhatsApp",
      facebook: "Facebook", 
      instagram: "Instagram",
      phone: "Llámanos"
    }
  };

  const socialLinks = [
    {
      name: content[currentLanguage as keyof typeof content].whatsapp,
      icon: MessageCircle,
      url: "https://wa.me/573001234567",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:shadow-green-500/25"
    },
    {
      name: content[currentLanguage as keyof typeof content].facebook,
      icon: Facebook,
      url: "https://facebook.com/puntorosamassage",
      color: "from-blue-600 to-blue-700", 
      hoverColor: "hover:shadow-blue-600/25"
    },
    {
      name: content[currentLanguage as keyof typeof content].instagram,
      icon: Instagram,
      url: "https://instagram.com/puntorosamassage",
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:shadow-pink-500/25"
    },
    {
      name: content[currentLanguage as keyof typeof content].phone,
      icon: Phone,
      url: "tel:+573001234567",
      color: "from-punto-rosa-primary to-punto-rosa-accent",
      hoverColor: "hover:shadow-punto-rosa-primary/25"
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

        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group flex items-center gap-3 px-6 py-4 
                bg-gradient-to-r ${social.color} text-white
                rounded-full font-medium transition-all duration-300
                hover-scale ${social.hoverColor} hover:shadow-xl
              `}
            >
              <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;