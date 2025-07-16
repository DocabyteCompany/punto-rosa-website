
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
      title: 'Wellness & Relaxation Blog',
      subtitle: 'Tips, techniques, and insights for a more relaxed and balanced life',
      readMore: 'Read More',
      viewAll: 'View All Articles'
    },
    es: {
      title: 'Blog de Bienestar y Relajación',
      subtitle: 'Consejos, técnicas y perspectivas para una vida más relajada y equilibrada',
      readMore: 'Leer Más',
      viewAll: 'Ver Todos los Artículos'
    }
  };

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: {
        en: 'Benefits of Regular Massage Therapy',
        es: 'Beneficios de la Terapia de Masajes Regular'
      },
      excerpt: {
        en: 'Discover how regular massage therapy can improve your physical and mental well-being.',
        es: 'Descubre cómo la terapia de masajes regular puede mejorar tu bienestar físico y mental.'
      },
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&h=300&fit=crop',
      date: '2024-06-10',
      author: 'Dr. Ana María Torres',
      category: 'Wellness'
    },
    {
      id: 2,
      title: {
        en: 'Stress Relief Through Therapeutic Touch',
        es: 'Alivio del Estrés a Través del Toque Terapéutico'
      },
      excerpt: {
        en: 'Learn about the science behind massage therapy and its powerful effects on stress reduction.',
        es: 'Aprende sobre la ciencia detrás de la terapia de masajes y sus poderosos efectos en la reducción del estrés.'
      },
      image: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?w=500&h=300&fit=crop',
      date: '2024-06-08',
      author: 'Carmen Rodríguez',
      category: 'Relaxation'
    },
    {
      id: 3,
      title: {
        en: 'Creating a Self-Care Routine',
        es: 'Creando una Rutina de Autocuidado'
      },
      excerpt: {
        en: 'Tips for incorporating massage and relaxation techniques into your daily wellness routine.',
        es: 'Consejos para incorporar masajes y técnicas de relajación en tu rutina diaria de bienestar.'
      },
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      date: '2024-06-05',
      author: 'Sofía Martínez',
      category: 'Self-Care'
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
