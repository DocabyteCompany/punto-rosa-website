
import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin, Volume2 } from 'lucide-react';

interface FooterProps {
  currentLanguage: string;
}

const Footer: React.FC<FooterProps> = ({ currentLanguage }) => {
  const content = {
    en: {
      tagline: 'A nurturing space where wellness meets intention',
      quickLinks: 'Quick Links',
      support: 'Support',
      connect: 'Connect',
      newsletter: 'Newsletter',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      contact: 'Contact Us',
      about: 'About',
      faq: 'FAQ',
      shipping: 'Shipping',
      returns: 'Returns',
      soundToggle: 'Toggle ambient sounds',
      copyright: '2024 Aumara. All rights reserved.',
      links: {
        home: 'Home',
        products: 'Products',
        ceremonies: 'Ceremonies',
        meditation: 'Meditation',
        blog: 'Journal',
        about: 'About'
      }
    },
    es: {
      tagline: 'Un espacio nutritivo donde el bienestar encuentra la intención',
      quickLinks: 'Enlaces Rápidos',
      support: 'Soporte',
      connect: 'Conectar',
      newsletter: 'Boletín',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      contact: 'Contáctanos',
      about: 'Nosotros',
      faq: 'FAQ',
      shipping: 'Envíos',
      returns: 'Devoluciones',
      soundToggle: 'Alternar sonidos ambientales',
      copyright: '2024 Aumara. Todos los derechos reservados.',
      links: {
        home: 'Inicio',
        products: 'Productos',
        ceremonies: 'Ceremonias',
        meditation: 'Meditación',
        blog: 'Diario',
        about: 'Nosotros'
      }
    }
  };

  return (
    <footer className="bg-sage-800 text-sage-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif text-white mb-4">aumara</h2>
            <p className="text-sage-300 mb-6 max-w-md">
              {content[currentLanguage as keyof typeof content].tagline}
            </p>
            <div className="flex items-center space-x-4">
              <button className="p-3 bg-sage-700 hover:bg-sage-600 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="p-3 bg-sage-700 hover:bg-sage-600 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
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
                  {content[currentLanguage as keyof typeof content].shipping}
                </button>
              </li>
              <li>
                <button className="text-sage-300 hover:text-white transition-colors">
                  {content[currentLanguage as keyof typeof content].returns}
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
                <Mail className="w-4 h-4" />
                <span>hello@aumara.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Los Angeles, CA</span>
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
