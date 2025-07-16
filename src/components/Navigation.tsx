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

  const navItems = {
    en: [
      { id: 'home', label: 'Home' },
      { id: 'services', label: 'Services' },
      { id: 'packages', label: 'Packages' },
      { id: 'booking', label: 'Book Now' },
      { id: 'blog', label: 'Blog' },
      { id: 'about', label: 'About' }
    ],
    es: [
      { id: 'home', label: 'Inicio' },
      { id: 'services', label: 'Servicios' },
      { id: 'packages', label: 'Paquetes' },
      { id: 'booking', label: 'Reservar' },
      { id: 'blog', label: 'Blog' },
      { id: 'about', label: 'Nosotros' }
    ]
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-sage-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 
              className="text-2xl font-serif text-sage-800 cursor-pointer"
              onClick={() => onSectionChange('home')}
            >
              Punto Rosa
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems[currentLanguage as keyof typeof navItems].map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-sage-800 border-b-2 border-sage-600'
                    : 'text-sage-600 hover:text-sage-800'
                }`}
              >
                {item.label}
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
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-sage-800 bg-sage-50'
                      : 'text-sage-600 hover:text-sage-800 hover:bg-sage-50'
                  }`}
                >
                  {item.label}
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
