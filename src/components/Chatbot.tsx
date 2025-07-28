import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface ChatbotProps {
  currentLanguage: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ currentLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{id: number, text: string, isBot: boolean}>>([]);
  const [inputText, setInputText] = useState('');

  const content = {
    en: {
      title: "Punto Rosa Assistant",
      placeholder: "Type your message...",
      send: "Send",
      welcomeMessage: "Hello! I'm here to help you with information about our massage services. How can I assist you today?",
      quickReplies: [
        "Service prices",
        "Available schedules", 
        "Location",
        "Book appointment"
      ]
    },
    es: {
      title: "Asistente Punto Rosa",
      placeholder: "Escribe tu mensaje...",
      send: "Enviar",
      welcomeMessage: "¡Hola! Estoy aquí para ayudarte con información sobre nuestros servicios de masajes. ¿Cómo puedo asistirte hoy?",
      quickReplies: [
        "Precios de servicios",
        "Horarios disponibles",
        "Ubicación", 
        "Agendar cita"
      ]
    }
  };

  const currentContent = content[currentLanguage as keyof typeof content];

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputText,
      isBot: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: currentLanguage === 'es' 
          ? "Gracias por tu mensaje. Un especialista te contactará pronto para brindarte información detallada."
          : "Thank you for your message. A specialist will contact you soon to provide detailed information.",
        isBot: true
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    const userMessage = {
      id: Date.now(),
      text: reply,
      isBot: false
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response based on quick reply
    setTimeout(() => {
      let responseText = '';
      if (reply.includes('precio') || reply.includes('price')) {
        responseText = currentLanguage === 'es' 
          ? "Nuestros precios van desde $80,000 para masajes relajantes hasta $150,000 para terapias especializadas."
          : "Our prices range from $80,000 for relaxing massages to $150,000 for specialized therapies.";
      } else if (reply.includes('horario') || reply.includes('schedule')) {
        responseText = currentLanguage === 'es'
          ? "Atendemos de lunes a sábado de 9:00 AM a 7:00 PM. Domingos con cita previa."
          : "We serve Monday to Saturday from 9:00 AM to 7:00 PM. Sundays by appointment only.";
      } else {
        responseText = currentLanguage === 'es'
          ? "Te ayudo con esa información. ¿Podrías ser más específico sobre lo que necesitas?"
          : "I can help you with that information. Could you be more specific about what you need?";
      }

      const botResponse = {
        id: Date.now() + 1,
        text: responseText,
        isBot: true
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  React.useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: 1,
        text: currentContent.welcomeMessage,
        isBot: true
      }]);
    }
  }, [isOpen, currentContent.welcomeMessage, messages.length]);

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 text-white rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
          style={{
            background: 'radial-gradient(circle, hsla(0, 87%, 79%, 1) 0%, hsla(6, 77%, 85%, 1) 70%, hsla(6, 77%, 85%, 1) 100%)'
          }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border border-spa-soft-primary/20 z-50 flex flex-col animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-punto-rosa-primary to-punto-rosa-accent text-white p-4 rounded-t-lg flex items-center gap-2">
            <Bot className="w-5 h-5" />
            <h3 className="font-medium">{currentContent.title}</h3>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-spa-soft-primary/10 text-text-deep-primary'
                      : 'bg-punto-rosa-primary text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="space-y-2">
                <p className="text-xs text-text-deep-secondary text-center">
                  {currentLanguage === 'es' ? 'Respuestas rápidas:' : 'Quick replies:'}
                </p>
                {currentContent.quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="block w-full text-left px-3 py-2 text-sm bg-spa-soft-primary/10 hover:bg-spa-soft-primary/20 rounded-lg transition-colors duration-200"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-spa-soft-primary/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={currentContent.placeholder}
                className="flex-1 px-3 py-2 border border-spa-soft-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-punto-rosa-primary/50 text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="px-3 py-2 bg-punto-rosa-primary text-white rounded-lg hover:bg-punto-rosa-accent transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;