
import React, { useState } from 'react';
import { Mail, Sparkles } from 'lucide-react';

interface NewsletterProps {
  currentLanguage: string;
}

const Newsletter: React.FC<NewsletterProps> = ({ currentLanguage }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const content = {
    en: {
      title: 'Join the Flow Community',
      subtitle: 'Receive weekly rituals, wellness tips, and exclusive offers',
      placeholder: 'Enter your email address',
      button: 'Subscribe',
      success: 'Thank you! Welcome to our community.',
      privacy: 'We respect your privacy. Unsubscribe at any time.'
    },
    es: {
      title: 'Únete a la Comunidad Flow',
      subtitle: 'Recibe rituales semanales, consejos de bienestar y ofertas exclusivas',
      placeholder: 'Ingresa tu correo electrónico',
      button: 'Suscribirse',
      success: 'Gracias! Bienvenido a nuestra comunidad.',
      privacy: 'Respetamos tu privacidad. Cancela en cualquier momento.'
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter signup:', { email, language: currentLanguage });
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-sage-100 to-beige-100 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 bg-lavender-200 rounded-full animate-pulse" 
             style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-sage-200 rounded-full animate-pulse" 
             style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-beige-200 rounded-full animate-pulse" 
             style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Sparkles className="w-12 h-12 text-sage-600 mx-auto mb-4 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-4">
            {content[currentLanguage as keyof typeof content].title}
          </h2>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            {content[currentLanguage as keyof typeof content].subtitle}
          </p>
        </div>

        {isSubmitted ? (
          <div className="animate-fade-in">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <Mail className="w-12 h-12 text-sage-600 mx-auto mb-4" />
              <p className="text-lg font-medium text-sage-800">
                {content[currentLanguage as keyof typeof content].success}
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={content[currentLanguage as keyof typeof content].placeholder}
                className="flex-1 px-6 py-4 rounded-full border border-sage-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent text-sage-800 placeholder-sage-500"
                required
              />
              <button
                type="submit"
                className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                {content[currentLanguage as keyof typeof content].button}
              </button>
            </div>
            <p className="text-sm text-sage-600 mt-4">
              {content[currentLanguage as keyof typeof content].privacy}
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
