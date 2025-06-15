
import React from 'react';

interface LanguageToggleProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLanguage, onLanguageChange }) => {
  const isSpanish = currentLanguage === 'es';
  const id = React.useId();

  return (
    <div className="flex items-center space-x-1.5">
      <span className={`text-sm font-medium transition-colors ${!isSpanish ? 'text-sage-800' : 'text-sage-500'}`}>EN</span>
      <div className="custom-language-switch">
        <input 
          id={id} 
          type="checkbox" 
          checked={isSpanish} 
          onChange={(e) => onLanguageChange(e.target.checked ? 'es' : 'en')}
          className="sr-only peer"
        />
        <label 
          htmlFor={id} 
          className="w-[2.83em] h-[1.13em] cursor-pointer relative inline-flex rounded-full bg-sage-200 peer-checked:bg-sage-600 transition-all duration-500 ease-out shadow-[0_0_0_0.25em] shadow-sage-200 peer-checked:shadow-sage-600"
        >
          <svg viewBox="0 0 212.4992 84.4688" className="h-full text-sage-700 peer-checked:text-white transition-colors duration-500 ease-out" overflow="visible">
            <path 
              pathLength={360}
              fill="none" 
              stroke="currentColor" 
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="path-anim"
              d="M 42.2496 0 A 42.24 42.24 90 0 0 0 42.2496 A 42.24 42.24 90 0 0 42.2496 84.4688 A 42.24 42.24 90 0 0 84.4992 42.2496 A 42.24 42.24 90 0 0 42.2496 0 A 42.24 42.24 90 0 0 0 42.2496 A 42.24 42.24 90 0 0 42.2496 84.4688 L 170.2496 84.4688 A 42.24 42.24 90 0 0 212.4992 42.2496 A 42.24 42.24 90 0 0 170.2496 0 A 42.24 42.24 90 0 0 128 42.2496 A 42.24 42.24 90 0 0 170.2496 84.4688 A 42.24 42.24 90 0 0 212.4992 42.2496 A 42.24 42.24 90 0 0 170.2496 0 L 42.2496 0" 
            />
          </svg>
        </label>
      </div>
      <span className={`text-sm font-medium transition-colors ${isSpanish ? 'text-sage-800' : 'text-sage-500'}`}>ES</span>
    </div>
  );
};

export default LanguageToggle;
