
import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';

interface CartItem {
  id: number;
  name: { en: string; es: string };
  price: number;
  image: string;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currentLanguage: string;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({
  isOpen,
  onClose,
  items,
  currentLanguage,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const content = {
    en: {
      title: 'Shopping Cart',
      empty: 'Your cart is empty',
      subtotal: 'Subtotal',
      checkout: 'Proceed to Checkout',
      continueShopping: 'Continue Shopping'
    },
    es: {
      title: 'Carrito de Compras',
      empty: 'Tu carrito está vacío',
      subtotal: 'Subtotal',
      checkout: 'Proceder al Pago',
      continueShopping: 'Continuar Comprando'
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md bg-white shadow-2xl animate-slide-in-right">
        <div className="flex items-center justify-between p-6 border-b border-sage-100">
          <h2 className="text-xl font-semibold text-sage-800">
            {content[currentLanguage as keyof typeof content].title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-sage-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-sage-600" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto max-h-[60vh] p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-sage-600 mb-4">
                {content[currentLanguage as keyof typeof content].empty}
              </p>
              <button
                onClick={onClose}
                className="text-sage-600 hover:text-sage-800 font-medium"
              >
                {content[currentLanguage as keyof typeof content].continueShopping}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 bg-sage-50 rounded-xl">
                  <img 
                    src={item.image} 
                    alt={item.name[currentLanguage as keyof typeof item.name]}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-sage-800">
                      {item.name[currentLanguage as keyof typeof item.name]}
                    </h3>
                    <p className="text-sage-600">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="p-1 hover:bg-sage-200 rounded"
                    >
                      <Minus className="w-4 h-4 text-sage-600" />
                    </button>
                    <span className="w-8 text-center text-sage-800">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-sage-200 rounded"
                    >
                      <Plus className="w-4 h-4 text-sage-600" />
                    </button>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-1 hover:bg-red-100 rounded ml-2"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-sage-100 p-6 space-y-4">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span className="text-sage-800">
                {content[currentLanguage as keyof typeof content].subtotal}:
              </span>
              <span className="text-sage-800">${total.toFixed(2)}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-sage-600 hover:bg-sage-700 text-white py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105"
            >
              {content[currentLanguage as keyof typeof content].checkout}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
