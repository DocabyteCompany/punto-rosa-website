
import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: { en: string; es: string };
  excerpt: { en: string; es: string };
  image: string;
  date: string;
  author: string;
  category: string;
}

interface BlogSectionProps {
  currentLanguage: string;
}

const BlogSection: React.FC<BlogSectionProps> = ({ currentLanguage }) => {
  const content = {
    en: {
      title: 'Wellness Journal',
      subtitle: 'Stories, insights, and guides for mindful living',
      readMore: 'Read More',
      viewAll: 'View All Articles'
    },
    es: {
      title: 'Diario de Bienestar',
      subtitle: 'Historias, perspectivas y guías para una vida consciente',
      readMore: 'Leer Más',
      viewAll: 'Ver Todos los Artículos'
    }
  };

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: {
        en: 'Creating Sacred Space in Your Home',
        es: 'Creando Espacio Sagrado en tu Hogar'
      },
      excerpt: {
        en: 'Transform any corner of your home into a peaceful sanctuary for daily rituals and meditation.',
        es: 'Transforma cualquier rincón de tu hogar en un santuario pacífico para rituales diarios y meditación.'
      },
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=300&fit=crop',
      date: '2024-06-10',
      author: 'Luna Martinez',
      category: 'Home & Space'
    },
    {
      id: 2,
      title: {
        en: 'The Art of Moon Rituals',
        es: 'El Arte de los Rituales Lunares'
      },
      excerpt: {
        en: 'Discover how to align your intentions with lunar cycles for deeper spiritual connection.',
        es: 'Descubre cómo alinear tus intenciones con los ciclos lunares para una conexión espiritual más profunda.'
      },
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&h=300&fit=crop',
      date: '2024-06-08',
      author: 'Sofia Chen',
      category: 'Rituals'
    },
    {
      id: 3,
      title: {
        en: 'Mindful Morning Practices',
        es: 'Prácticas Matutinas Conscientes'
      },
      excerpt: {
        en: 'Start your day with intention through simple, grounding morning rituals that nourish your soul.',
        es: 'Comienza tu día con intención a través de rituales matutinos simples que nutren tu alma.'
      },
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=500&h=300&fit=crop',
      date: '2024-06-05',
      author: 'Maya Rodriguez',
      category: 'Meditation'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-4">
            {content[currentLanguage as keyof typeof content].title}
          </h2>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            {content[currentLanguage as keyof typeof content].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title[currentLanguage as keyof typeof post.title]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-sage-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-sage-800 mb-3 story-link">
                  {post.title[currentLanguage as keyof typeof post.title]}
                </h3>
                <p className="text-sage-600 mb-4">
                  {post.excerpt[currentLanguage as keyof typeof post.excerpt]}
                </p>
                <button className="flex items-center space-x-2 text-sage-700 hover:text-sage-800 font-medium group">
                  <span>{content[currentLanguage as keyof typeof content].readMore}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-sage-100 hover:bg-sage-200 text-sage-700 px-8 py-3 rounded-full font-medium transition-colors duration-200">
            {content[currentLanguage as keyof typeof content].viewAll}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
