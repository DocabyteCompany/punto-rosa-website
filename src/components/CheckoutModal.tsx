
import React, { useState } from 'react';
import { X, CreditCard, Smartphone } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: string;
  total: number;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  currentLanguage,
  total
}) => {
  const [selectedPayment, setSelectedPayment] = useState('stripe');

  if (!isOpen) return null;

  const content = {
    en: {
      title: 'Secure Checkout',
      paymentMethod: 'Payment Method',
      orderTotal: 'Order Total',
      completeOrder: 'Complete Order',
      processing: 'Processing...'
    },
    es: {
      title: 'Pago Seguro',
      paymentMethod: 'Método de Pago',
      orderTotal: 'Total del Pedido',
      completeOrder: 'Completar Pedido',
      processing: 'Procesando...'
    }
  };

  const paymentMethods = [
    { id: 'stripe', name: 'Stripe', icon: CreditCard, color: 'bg-blue-600' },
    { id: 'paypal', name: 'PayPal', icon: CreditCard, color: 'bg-blue-500' },
    { id: 'mercadopago', name: 'MercadoPago', icon: Smartphone, color: 'bg-cyan-500' }
  ];

  const handleCompleteOrder = () => {
    // Simulate order processing
    setTimeout(() => {
      alert(currentLanguage === 'en' ? 'Order completed successfully!' : '¡Pedido completado exitosamente!');
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full animate-scale-in">
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

        <div className="p-6 space-y-6">
          {/* Payment Methods */}
          <div>
            <h3 className="font-semibold text-sage-800 mb-4">
              {content[currentLanguage as keyof typeof content].paymentMethod}
            </h3>
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedPayment(method.id)}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center space-x-3 ${
                    selectedPayment === method.id
                      ? 'border-sage-600 bg-sage-50'
                      : 'border-sage-200 hover:border-sage-300'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${method.color}`}>
                    <method.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-sage-800">{method.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-sage-50 p-4 rounded-xl">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span className="text-sage-800">
                {content[currentLanguage as keyof typeof content].orderTotal}:
              </span>
              <span className="text-sage-800">${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Complete Order Button */}
          <button
            onClick={handleCompleteOrder}
            className="w-full bg-sage-600 hover:bg-sage-700 text-white py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105"
          >
            {content[currentLanguage as keyof typeof content].completeOrder}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
