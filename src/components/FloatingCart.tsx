
import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface FloatingCartProps {
  itemCount: number;
  onClick: () => void;
}

const FloatingCart: React.FC<FloatingCartProps> = ({ itemCount, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 bg-sage-600 hover:bg-sage-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
    >
      <ShoppingBag className="w-6 h-6" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-lavender-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-semibold animate-pulse">
          {itemCount}
        </span>
      )}
    </button>
  );
};

export default FloatingCart;
