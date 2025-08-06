import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

interface NavigationProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  currentLanguage, 
  onLanguageChange, 
  activeSection, 
  onSectionChange 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSectionChange = (sectionId: string) => {
    onSectionChange(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = {
    en: [
      { id: 'home', label: 'Home' },
      { id: 'services', label: 'Services' },
      { id: 'packages', label: 'Packages' },
      { id: 'about', label: 'About' },
      { id: 'contact', label: 'Contact' }
    ],
    es: [
      { id: 'home', label: 'Inicio' },
      { id: 'services', label: 'Servicios' },
      { id: 'packages', label: 'Paquetes' },
      { id: 'about', label: 'Sobre Mí' },
      { id: 'contact', label: 'Contacto' }
    ]
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-sage-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/toque-rosa-logo.png"
              alt="Punto Rosa"
              className="h-12 w-auto cursor-pointer transition-transform duration-200 hover:scale-105"
              onClick={() => handleSectionChange('home')}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems[currentLanguage as keyof typeof navItems].map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionChange(item.id)}
                className={`text-sm font-medium transition-all duration-300 relative ${
                  activeSection === item.id
                    ? 'text-punto-rosa-700'
                    : 'text-sage-600 hover:text-punto-rosa-600'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-punto-rosa-500 to-punto-rosa-600 rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-sage-600 hover:text-sage-800"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-sage-100 bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems[currentLanguage as keyof typeof navItems].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSectionChange(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-all duration-300 relative ${
                    activeSection === item.id
                      ? 'text-punto-rosa-700 bg-punto-rosa-50'
                      : 'text-sage-600 hover:text-punto-rosa-600 hover:bg-punto-rosa-25'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-punto-rosa-500 to-punto-rosa-600 rounded-r-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
