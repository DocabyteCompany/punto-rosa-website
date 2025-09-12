import React, { useEffect, useRef, useState, useCallback } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

interface ChatbotN8nProps {
  currentLanguage: string;
}

const ChatbotN8n: React.FC<ChatbotN8nProps> = ({ currentLanguage }) => {
  // Instancia del chat guardada en un ref
  const chatInstanceRef = useRef<any>(null);
  // Contenedor donde se renderizará el chat
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  // Estado para controlar la visibilidad del contenedor del chat
  const [isChatOpen, setIsChatOpen] = useState(false);

  const initializeChat = useCallback(() => {
    // Verificar que el contenedor esté montado
    if (!chatContainerRef.current) {
      console.warn('Chat container not mounted yet');
      return;
    }

    // Limpiar instancia anterior para evitar duplicados
    if (chatInstanceRef.current) {
      chatInstanceRef.current.destroy();
      chatInstanceRef.current = null;
    }

    // Tema de estilos completo para una personalización total
    const theme = {
      '--chat--color-primary': '#e399a3',
      '--chat--color-primary-shade-50': '#d18a94',
      '--chat--color-secondary': '#324345',
      '--chat--color-white': '#ffffff',
      '--chat--color-light': '#fdf8f5',
      '--chat--color-dark': '#324345',
      '--chat--window--width': '400px',
      '--chat--window--height': '600px',
    };

    // Se usa `mode: 'window'` con target personalizado para controlar el contenedor
    chatInstanceRef.current = createChat({
      webhookUrl: 'https://n8n-n8n.mggfaf.easypanel.host/webhook/719fe441-73d5-42cb-92fd-5b417e4bc723/chat',
      mode: 'window',
      target: chatContainerRef.current, // Apuntamos al div que controlamos
      theme,
        i18n: {
          en: {
            title: 'Punto Rosa Assistant',
          subtitle: "Start a chat. We're here to help you 24/7.",
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
      initialMessages:
        currentLanguage === 'es'
          ? ['¡Hola! 👋', 'Soy tu asistente de Punto Rosa. ¿En qué puedo ayudarte hoy?']
          : ['Hi there! 👋', "I'm your Punto Rosa assistant. How can I help you today?"],
    });
  }, [currentLanguage]);

  // useEffect para inicializar y destruir el chat
  useEffect(() => {
    // Pequeño delay para asegurar que el contenedor esté montado
    const timer = setTimeout(() => {
      initializeChat();
    }, 100);

    return () => {
      clearTimeout(timer);
      chatInstanceRef.current?.destroy();
    };
  }, [currentLanguage]); // Solo depende de currentLanguage, no de initializeChat

  // La función de clic ahora solo cambia el estado de visibilidad
  const handleToggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <>
      {/* Contenedor del chat, su visibilidad depende del estado `isChatOpen` */}
      <div
        ref={chatContainerRef}
        className="fixed bottom-24 right-6 z-[9999] w-[400px] h-[600px] transition-all duration-300 ease-in-out"
        style={{
          transform: isChatOpen ? 'translateY(0)' : 'translateY(20px)',
          opacity: isChatOpen ? 1 : 0,
          pointerEvents: isChatOpen ? 'auto' : 'none',
        }}
      />

      {/* Nuestro único botón FAB. El ícono cambia según el estado. */}
      <button
        onClick={handleToggleChat}
        className="fixed bottom-6 right-6 z-[99999] w-16 h-16 bg-[#e399a3] hover:bg-[#d18a94] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#e399a3]/30"
        style={{
          boxShadow: '0 10px 25px -5px rgba(227, 153, 163, 0.4)',
        }}
        aria-label={isChatOpen ? 'Cerrar chat' : 'Abrir chat'}
        title={isChatOpen ? 'Cerrar chat' : 'Abrir chat'}
      >
        {isChatOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </>
  );
};

export default ChatbotN8n;