import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import CandleBanner from '../components/CandleBanner';
import CandleCollection from '../components/CandleCollection';
import HowItWorks from '../components/HowItWorks';
import BlogSection from '../components/BlogSection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import FloatingCart from '../components/FloatingCart';
import Cart from '../components/Cart';
import ProductModal from '../components/ProductModal';
import CheckoutModal from '../components/CheckoutModal';

interface Product {
  id: number;
  name: { en: string; es: string };
  price: number;
  image: string;
  category: string;
  description: { en: string; es: string };
  inWishlist?: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [activeSection, setActiveSection] = useState('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [wishlistItems, setWishlistItems] = useState<number[]>([]);

  // Sample products data
  const products: Product[] = [
    {
      id: 1,
      name: { en: 'Sacred Sage Candle', es: 'Vela de Salvia Sagrada' },
      price: 28,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop',
      category: 'candles',
      description: {
        en: 'Hand-poured soy candle infused with sacred sage and lavender. Perfect for meditation and cleansing rituals.',
        es: 'Vela de soja artesanal infundida con salvia sagrada y lavanda. Perfecta para meditación y rituales de limpieza.'
      }
    },
    {
      id: 2,
      name: { en: 'Meditation Cushion', es: 'Cojín de Meditación' },
      price: 65,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop',
      category: 'meditation',
      description: {
        en: 'Organic buckwheat hull meditation cushion with removable cover. Designed for comfort during long practices.',
        es: 'Cojín de meditación orgánico con cáscara de trigo sarraceno y funda removible. Diseñado para comodidad durante prácticas largas.'
      }
    },
    {
      id: 3,
      name: { en: 'Crystal Healing Set', es: 'Set de Cristales Sanadores' },
      price: 42,
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop',
      category: 'crystals',
      description: {
        en: 'Carefully selected crystals including rose quartz, amethyst, and clear quartz for healing and energy work.',
        es: 'Cristales cuidadosamente seleccionados incluyendo cuarzo rosa, amatista y cuarzo transparente para sanación y trabajo energético.'
      }
    },
    {
      id: 4,
      name: { en: 'Organic Ceremonial Tea', es: 'Té Ceremonial Orgánico' },
      price: 24,
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&h=400&fit=crop',
      category: 'tea',
      description: {
        en: 'Premium organic tea blend crafted for ceremonial use. Contains chamomile, lavender, and lemon balm.',
        es: 'Mezcla premium de té orgánico elaborada para uso ceremonial. Contiene manzanilla, lavanda y toronjil.'
      }
    },
    {
      id: 5,
      name: { en: 'Yoga Mat - Natural', es: 'Mat de Yoga - Natural' },
      price: 89,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop',
      category: 'yoga',
      description: {
        en: 'Eco-friendly yoga mat made from natural rubber with excellent grip and cushioning for your practice.',
        es: 'Mat de yoga ecológico hecho de caucho natural con excelente agarre y amortiguación para tu práctica.'
      }
    },
    {
      id: 6,
      name: { en: 'Tibetan Singing Bowl', es: 'Cuenco Tibetano' },
      price: 156,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop',
      category: 'sound',
      description: {
        en: 'Authentic handcrafted Tibetan singing bowl for sound healing, meditation, and energy cleansing.',
        es: 'Auténtico cuenco tibetano artesanal para sanación sonora, meditación y limpieza energética.'
      }
    },
    {
      id: 7,
      name: { en: 'Moonlight Jasmine Candle', es: 'Vela de Jazmín Lunar' },
      price: 32,
      image: 'https://images.unsplash.com/photo-1614237581691-11814138b34f?w=400&h=400&fit=crop',
      category: 'candles',
      description: {
        en: 'An enchanting blend of jasmine, moonflower, and a hint of white musk. Perfect for evening relaxation.',
        es: 'Una mezcla encantadora de jazmín, flor de luna y un toque de almizcle blanco. Perfecta para la relajación nocturna.'
      }
    },
    {
      id: 8,
      name: { en: 'Sandalwood & Amber Candle', es: 'Vela de Sándalo y Ámbar' },
      price: 30,
      image: 'https://images.unsplash.com/photo-1600818248487-99578820993f?w=400&h=400&fit=crop',
      category: 'candles',
      description: {
        en: 'A warm, woody aroma of sandalwood combined with the rich, exotic notes of amber. Creates a cozy atmosphere.',
        es: 'Un aroma cálido y amaderado de sándalo combinado con las ricas y exóticas notas del ámbar. Crea una atmósfera acogedora.'
      }
    },
    {
      id: 9,
      name: { en: 'Eucalyptus & Mint Candle', es: 'Vela de Eucalipto y Menta' },
      price: 28,
      image: 'https://images.unsplash.com/photo-1594323635759-459918c7209f?w=400&h=400&fit=crop',
      category: 'candles',
      description: {
        en: 'An invigorating and refreshing scent of eucalyptus and spearmint to awaken the senses and clear the mind.',
        es: 'Un aroma vigorizante y refrescante de eucalipto y menta verde para despertar los sentidos y despejar la mente.'
      }
    }
  ];

  // Add wishlist status to products
  const productsWithWishlist = products.map(product => ({
    ...product,
    inWishlist: wishlistItems.includes(product.id)
  }));
  
  const candleCollectionProducts = productsWithWishlist.filter(p => [7, 8, 9].includes(p.id));

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
  };

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    
    // Show success feedback
    console.log('Added to cart:', product.name[currentLanguage as keyof typeof product.name]);
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(prev => 
      prev.map(item => item.id === id ? { ...item, quantity } : item)
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleToggleWishlist = (productId: number) => {
    setWishlistItems(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Smooth scroll to sections
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'blog'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <main>
        <section id="home">
          <Hero currentLanguage={currentLanguage} />
        </section>

        <section id="products">
          <ProductGrid
            currentLanguage={currentLanguage}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            onViewDetails={handleViewDetails}
            products={productsWithWishlist}
          />
        </section>

        <CandleBanner currentLanguage={currentLanguage} />

        <CandleCollection
          products={candleCollectionProducts}
          currentLanguage={currentLanguage}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          onViewDetails={handleViewDetails}
        />

        <HowItWorks currentLanguage={currentLanguage} />

        <section id="blog">
          <BlogSection currentLanguage={currentLanguage} />
        </section>

        <Newsletter currentLanguage={currentLanguage} />
      </main>

      <Footer currentLanguage={currentLanguage} />

      <FloatingCart
        itemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onClick={() => setIsCartOpen(true)}
      />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        currentLanguage={currentLanguage}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        currentLanguage={currentLanguage}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        currentLanguage={currentLanguage}
        total={cartTotal}
      />
    </div>
  );
};

export default Index;
