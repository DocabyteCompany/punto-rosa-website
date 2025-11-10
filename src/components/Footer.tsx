
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
    <footer className="bg-text-deep-900 text-text-deep-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img 
              src="/imgs/nuevo_logo_toque.webp"
              alt="Punto Rosa"
              className="h-32 sm:h-40 w-auto mb-4"
            />
            <p className="text-text-deep-300 mb-6 max-w-md">
              {content[currentLanguage as keyof typeof content].tagline}
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/masajes_toque_rosa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-text-deep-800 hover:bg-text-deep-700 rounded-full transition-colors hover:scale-105 text-white"
                title="Seguir en Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/CentraldeEnfermeria.93?mibextid=wwXIfr&rdid=LXFIXAlXmJ7gbhhb&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CUeKS2d8y%2F%3Fmibextid%3DwwXIfr#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-text-deep-800 hover:bg-text-deep-700 rounded-full transition-colors hover:scale-105 text-punto-rosa-300 hover:text-punto-rosa-200"
                title="Seguir en Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <button 
                className="p-3 bg-text-deep-800 hover:bg-text-deep-700 rounded-full transition-colors text-white"
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
              <li>
                <a href="#home" aria-label="Ir a inicio" className="text-text-deep-300 hover:text-white transition-colors">{content[currentLanguage as keyof typeof content].links.home}</a>
              </li>
              <li>
                <a href="#services" aria-label="Ir a servicios" className="text-text-deep-300 hover:text-white transition-colors">{content[currentLanguage as keyof typeof content].links.services}</a>
              </li>
              <li>
                <a href="#packages" aria-label="Ir a paquetes" className="text-text-deep-300 hover:text-white transition-colors">{content[currentLanguage as keyof typeof content].links.packages}</a>
              </li>
              <li>
                <a href="#testimonials" aria-label="Ir a testimonios" className="text-text-deep-300 hover:text-white transition-colors">{currentLanguage === 'es' ? 'Testimonios' : 'Testimonials'}</a>
              </li>
              <li>
                <a href="#therapeutic-points" aria-label="Ir a puntos terapéuticos" className="text-text-deep-300 hover:text-white transition-colors">{currentLanguage === 'es' ? 'Puntos Terapéuticos' : 'Therapeutic Points'}</a>
              </li>
              <li>
                <a href="#about" aria-label="Ir a sobre mí" className="text-text-deep-300 hover:text-white transition-colors">{content[currentLanguage as keyof typeof content].about}</a>
              </li>
              <li>
                <a href="#contact" aria-label="Ir a contacto" className="text-text-deep-300 hover:text-white transition-colors">{content[currentLanguage as keyof typeof content].contact}</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              {content[currentLanguage as keyof typeof content].support}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#contact" aria-label="Ir a contacto" className="text-text-deep-300 hover:text-white transition-colors">{content[currentLanguage as keyof typeof content].contact}</a>
              </li>
              <li>
                <a href="#services" aria-label="Ir a servicios" className="text-text-deep-300 hover:text-white transition-colors">{content[currentLanguage as keyof typeof content].services}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-top border-t border-text-deep-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-text-deep-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+52 554 918 6534</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Cocoyoc, Morelos</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-text-deep-400">
              <a href="/privacy" aria-label="Ver política de privacidad" className="hover:text-text-deep-200 transition-colors">
                {content[currentLanguage as keyof typeof content].privacy}
              </a>
              <a href="/terms" aria-label="Ver términos de servicio" className="hover:text-text-deep-200 transition-colors">
                {content[currentLanguage as keyof typeof content].terms}
              </a>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-text-deep-800">
            <p className="text-text-deep-400 text-sm">
              {content[currentLanguage as keyof typeof content].copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
