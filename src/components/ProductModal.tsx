
import React from 'react';
import { X, ShoppingBag, Heart, Star } from 'lucide-react';

interface Product {
  id: number;
  name: { en: string; es: string };
  price: number;
  image: string;
  category: string;
  description: { en: string; es: string };
  inWishlist?: boolean;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: string;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: number) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
  currentLanguage,
  onAddToCart,
  onToggleWishlist
}) => {
  if (!isOpen || !product) return null;

  const content = {
    en: {
      addToCart: 'Add to Cart',
      description: 'Description',
      rating: 'Customer Rating',
      reviews: 'reviews'
    },
    es: {
      addToCart: 'Agregar al Carrito',
      description: 'Descripción',
      rating: 'Calificación',
      reviews: 'reseñas'
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full transition-all duration-200"
          >
            <X className="w-6 h-6 text-sage-700" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="aspect-square bg-sage-50 rounded-2xl overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name[currentLanguage as keyof typeof product.name]}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <p className="text-sage-600 text-sm uppercase tracking-wide mb-2">{product.category}</p>
                <h2 className="text-3xl font-serif text-sage-800">
                  {product.name[currentLanguage as keyof typeof product.name]}
                </h2>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sage-600 text-sm">(4.8) 124 {content[currentLanguage as keyof typeof content].reviews}</span>
              </div>

              {/* Price */}
              <div className="text-4xl font-bold text-sage-800">${product.price}</div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-sage-800 mb-3">
                  {content[currentLanguage as keyof typeof content].description}
                </h3>
                <p className="text-sage-600 leading-relaxed">
                  {product.description[currentLanguage as keyof typeof product.description]}
                </p>
              </div>

              {/* Actions */}
              <div className="flex space-x-4 pt-4">
                <button
                  onClick={() => onAddToCart(product)}
                  className="flex-1 bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>{content[currentLanguage as keyof typeof content].addToCart}</span>
                </button>
                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className="p-4 bg-sage-100 hover:bg-sage-200 rounded-full transition-all duration-200 hover:scale-105"
                >
                  <Heart 
                    className={`w-6 h-6 ${
                      product.inWishlist ? 'fill-red-500 text-red-500' : 'text-sage-600'
                    }`} 
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
