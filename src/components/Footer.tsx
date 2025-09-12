
import React from 'react';
import { Instagram, Facebook, Phone, MapPin, Volume2 } from 'lucide-react';

interface FooterProps {
  currentLanguage: string;
}

const Footer: React.FC<FooterProps> = ({ currentLanguage }) => {
  const content = {
    en: {
      tagline: 'Your relaxation sanctuary in the heart of the city',
      quickLinks: 'Quick Links',
      support: 'Support',
      connect: 'Connect',
      newsletter: 'Newsletter',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      contact: 'Contact Us',
      about: 'About',
      faq: 'FAQ',
      appointments: 'Appointments',
      services: 'Services',
      soundToggle: 'Toggle ambient sounds',
      copyright: '2024 Punto Rosa. All rights reserved.',
      links: {
        home: 'Home',
        services: 'Services',
        packages: 'Packages',
        booking: 'Book Now',
        blog: 'Blog',
        about: 'About'
      }
    },
    es: {
      tagline: 'Tu santuario de relajación en el corazón de la ciudad',
      quickLinks: 'Enlaces Rápidos',
      support: 'Soporte',
      connect: 'Conectar',
      newsletter: 'Boletín',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      contact: 'Contáctame',
      about: 'Sobre Mí',
      faq: 'FAQ',
      appointments: 'Citas',
      services: 'Servicios',
      soundToggle: 'Alternar sonidos ambientales',
      copyright: '2024 Punto Rosa. Todos los derechos reservados.',
      links: {
        home: 'Inicio',
        services: 'Servicios',
        packages: 'Paquetes',
        booking: 'Reservar',
        blog: 'Blog',
        about: 'Sobre Mí'
      }
    }
  };

  return (
    <footer className="bg-sage-800 text-sage-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif text-white mb-4">Punto Rosa</h2>
            <p className="text-sage-300 mb-6 max-w-md">
              {content[currentLanguage as keyof typeof content].tagline}
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/masajes_toque_rosa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-sage-700 hover:bg-sage-600 rounded-full transition-colors hover:scale-105"
                title="Seguir en Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/CentraldeEnfermeria.93?mibextid=wwXIfr&rdid=LXFIXAlXmJ7gbhhb&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CUeKS2d8y%2F%3Fmibextid%3DwwXIfr#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-punto-rosa-primary hover:text-punto-rosa-secondary transition-colors"
                title="Seguir en Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <button 
                className="p-3 bg-sage-700 hover:bg-sage-600 rounded-full transition-colors"
                title={content[currentLanguage as keyof typeof content].soundToggle}
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              {content[currentLanguage as keyof typeof content].quickLinks}
            </h3>
            <ul className="space-y-2">
              {Object.entries(content[currentLanguage as keyof typeof content].links).map(([key, label]) => (
                <li key={key}>
                  <button className="text-sage-300 hover:text-white transition-colors">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              {content[currentLanguage as keyof typeof content].support}
            </h3>
            <ul className="space-y-2">
              <li>
                <button className="text-sage-300 hover:text-white transition-colors">
                  {content[currentLanguage as keyof typeof content].contact}
                </button>
              </li>
              <li>
                <button className="text-sage-300 hover:text-white transition-colors">
                  {content[currentLanguage as keyof typeof content].faq}
                </button>
              </li>
              <li>
                <button className="text-sage-300 hover:text-white transition-colors">
                  {content[currentLanguage as keyof typeof content].appointments}
                </button>
              </li>
              <li>
                <button className="text-sage-300 hover:text-white transition-colors">
                  {content[currentLanguage as keyof typeof content].services}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-sage-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-sage-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+52 554 918 6534</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Cocoyoc, Morelos</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-sage-400">
              <button className="hover:text-sage-300 transition-colors">
                {content[currentLanguage as keyof typeof content].privacy}
              </button>
              <button className="hover:text-sage-300 transition-colors">
                {content[currentLanguage as keyof typeof content].terms}
              </button>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-sage-700">
            <p className="text-sage-400 text-sm">
              {content[currentLanguage as keyof typeof content].copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
