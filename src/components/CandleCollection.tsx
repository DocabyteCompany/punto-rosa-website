
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

interface CandleCollectionProps {
  currentLanguage: string;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: number) => void;
  onViewDetails: (product: Product) => void;
  products: Product[];
}

const CandleCollection: React.FC<CandleCollectionProps> = ({
  currentLanguage,
  onAddToCart,
  onToggleWishlist,
  onViewDetails,
  products
}) => {
  const content = {
    en: {
      title: 'Complete Your Ritual',
      subtitle: 'Discover my hand-poured candles, crafted to inspire tranquility and mindfulness.'
    },
    es: {
      title: 'Completa Tu Ritual',
      subtitle: 'Descubre mis velas artesanales, creadas para inspirar tranquilidad y conciencia plena.'
    }
  };

  const selectedContent = content[currentLanguage as keyof typeof content];

  return (
    <section className="py-20 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-4">
            {selectedContent.title}
          </h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto">
            {selectedContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="animate-fade-in"
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

export default CandleCollection;
