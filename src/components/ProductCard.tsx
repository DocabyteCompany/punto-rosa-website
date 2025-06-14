
import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye } from 'lucide-react';

interface Product {
  id: number;
  name: { en: string; es: string };
  price: number;
  image: string;
  category: string;
  inWishlist?: boolean;
}

interface ProductCardProps {
  product: Product;
  currentLanguage: string;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: number) => void;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  currentLanguage, 
  onAddToCart, 
  onToggleWishlist,
  onViewDetails 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden animate-fade-in hover-scale"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name[currentLanguage as keyof typeof product.name]}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay actions */}
        <div className={`absolute inset-0 bg-black/20 flex items-center justify-center space-x-3 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={() => onViewDetails(product)}
            className="p-3 bg-white/90 hover:bg-white rounded-full transition-all duration-200 hover:scale-110"
          >
            <Eye className="w-5 h-5 text-sage-700" />
          </button>
          <button
            onClick={() => onAddToCart(product)}
            className="p-3 bg-sage-600 hover:bg-sage-700 rounded-full transition-all duration-200 hover:scale-110"
          >
            <ShoppingBag className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Wishlist button */}
        <button
          onClick={() => onToggleWishlist(product.id)}
          className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full transition-all duration-200 hover:scale-110"
        >
          <Heart 
            className={`w-5 h-5 transition-colors duration-200 ${
              product.inWishlist ? 'fill-red-500 text-red-500' : 'text-sage-600'
            }`} 
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-sage-800 mb-2">
          {product.name[currentLanguage as keyof typeof product.name]}
        </h3>
        <p className="text-sage-600 text-sm mb-4 capitalize">{product.category}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-sage-800">${product.price}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-sage-100 hover:bg-sage-200 text-sage-700 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
          >
            {currentLanguage === 'en' ? 'Add to Cart' : 'Agregar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
