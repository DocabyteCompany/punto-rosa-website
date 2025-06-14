
import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLanguage, onLanguageChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-sage-600" />
      <div className="flex bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
        <button
          onClick={() => onLanguageChange('en')}
          className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${
            currentLanguage === 'en'
              ? 'bg-white text-sage-700 shadow-sm'
              : 'text-sage-600 hover:text-sage-700'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => onLanguageChange('es')}
          className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${
            currentLanguage === 'es'
              ? 'bg-white text-sage-700 shadow-sm'
              : 'text-sage-600 hover:text-sage-700'
          }`}
        >
          ES
        </button>
      </div>
    </div>
  );
};

export default LanguageToggle;
