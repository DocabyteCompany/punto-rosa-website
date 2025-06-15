
import React from 'react';
import { Switch } from "@/components/ui/switch";

interface LanguageToggleProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLanguage, onLanguageChange }) => {
  const isSpanish = currentLanguage === 'es';

  const handleToggle = (checked: boolean) => {
    onLanguageChange(checked ? 'es' : 'en');
  };

  return (
    <div className="flex items-center space-x-2">
      <span className={`text-sm font-medium transition-colors ${!isSpanish ? 'text-sage-800' : 'text-sage-500'}`}>EN</span>
      <Switch
        checked={isSpanish}
        onCheckedChange={handleToggle}
        aria-label="Toggle language between English and Spanish"
        className="data-[state=checked]:bg-sage-600 data-[state=unchecked]:bg-sage-200"
      />
      <span className={`text-sm font-medium transition-colors ${isSpanish ? 'text-sage-800' : 'text-sage-500'}`}>ES</span>
    </div>
  );
};

export default LanguageToggle;
