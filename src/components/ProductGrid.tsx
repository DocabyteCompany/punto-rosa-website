
import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: { en: string; es: string };
  price: number;
  image: string;
  category: string;
  description: { en: string; es: string };
  inWishlist?: boolean;
}

interface ProductGridProps {
  currentLanguage: string;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: number) => void;
  onViewDetails: (product: Product) => void;
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({
  currentLanguage,
  onAddToCart,
  onToggleWishlist,
  onViewDetails,
  products
}) => {
  const content = {
    en: {
      featured: 'Featured Products',
      wellness: 'Wellness Collection',
      subtitle: 'Curated items for your sacred rituals'
    },
    es: {
      featured: 'Productos Destacados',
      wellness: 'Colección Bienestar',
      subtitle: 'Artículos seleccionados para tus rituales sagrados'
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-white to-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-4">
            {content[currentLanguage as keyof typeof content].featured}
          </h2>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            {content[currentLanguage as keyof typeof content].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard
                product={product}
                currentLanguage={currentLanguage}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                onViewDetails={onViewDetails}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
