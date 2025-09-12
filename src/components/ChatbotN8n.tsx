import React, { useEffect, useRef } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

interface ChatbotN8nProps {
  currentLanguage: string;
}

const ChatbotN8n: React.FC<ChatbotN8nProps> = ({ currentLanguage }) => {
  const chatInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Configuración del webhook
    const webhookUrl = 'https://n8n-n8n.mggfaf.easypanel.host/webhook/719fe441-73d5-42cb-92fd-5b417e4bc723/chat';

    // Crear el chatbot n8n con configuración optimizada
    chatInstanceRef.current = createChat({
      webhookUrl,
      // La librería n8n no renderiza botón por defecto, solo el widget
      theme: {
        '--chat--color-primary': '#e399a3',
        '--chat--color-secondary': '#324345',
        '--chat--window--width': '400px',
        '--chat--window--height': '600px',
        '--chat--window--bottom': '90px', // Espacio para nuestro FAB
      },
      // Configuración de idioma personalizada
      i18n: {
        en: {
          title: 'Punto Rosa Assistant',
          subtitle: 'Start a chat. We\'re here to help you 24/7.',
          footer: '', // Eliminar completamente el texto "Powered by n8n"
          getStarted: 'New Conversation',
          inputPlaceholder: 'Type your message...',
          closeButtonTooltip: 'Close chat',
          sendButton: 'Send',
          typingIndicator: 'Typing...',
          errorMessage: 'Sorry, something went wrong. Please try again.',
          noMessages: 'No messages yet. Start a conversation!'
        },
        es: {
          title: 'Asistente Punto Rosa',
          subtitle: 'Inicia una conversación. Estamos aquí para ayudarte 24/7.',
          footer: '', // Eliminar completamente el texto "Powered by n8n"
          getStarted: 'Nueva Conversación',
          inputPlaceholder: 'Escribe tu mensaje...',
          closeButtonTooltip: 'Cerrar chat',
          sendButton: 'Enviar',
          typingIndicator: 'Escribiendo...',
          errorMessage: 'Lo siento, algo salió mal. Por favor intenta de nuevo.',
          noMessages: 'Aún no hay mensajes. ¡Inicia una conversación!'
        }
      },
      // Mensajes iniciales personalizados
      initialMessages: currentLanguage === 'es' 
        ? ['¡Hola! 👋', 'Soy tu asistente de Punto Rosa. ¿En qué puedo ayudarte hoy?']
        : ['Hi there! 👋', 'I\'m your Punto Rosa assistant. How can I help you today?'],
    });

    // Función de limpieza
    return () => {
      if (chatInstanceRef.current) {
        chatInstanceRef.current.destroy();
      }
    };
  }, [currentLanguage]);

  // Función para toggle del chat usando la API de n8n
  const toggleChat = () => {
    if (chatInstanceRef.current) {
      chatInstanceRef.current.toggle();
    }
  };

  return (
    <button
      onClick={toggleChat}
      className="fixed bottom-6 right-6 z-[99999] w-16 h-16 bg-[#e399a3] hover:bg-[#d18a94] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#e399a3]/30"
      style={{
        boxShadow: '0 10px 25px -5px rgba(227, 153, 163, 0.4)',
        position: 'fixed',
        zIndex: 99999,
        display: 'flex',
        visibility: 'visible',
        opacity: 1
      }}
      aria-label="Abrir chat"
      title="Abrir chat"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    </button>
  );
};

export default ChatbotN8n;