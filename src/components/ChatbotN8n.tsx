import React, { useEffect, useRef } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

interface ChatbotN8nProps {
  currentLanguage: string;
}

const ChatbotN8n: React.FC<ChatbotN8nProps> = ({ currentLanguage }) => {
  const chatInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Limpiar instancia anterior para evitar duplicados
    if (chatInstanceRef.current) {
      chatInstanceRef.current.unmount();
      chatInstanceRef.current = null;
    }

    // Tema completo con colores de Punto Rosa
    const theme = {
      // Colores principales
      '--chat--color-primary': '#e399a3',
      '--chat--color-primary-shade-50': '#d18a94',
      '--chat--color-primary-shade-100': '#bf7b85',
      '--chat--color-secondary': '#324345',
      '--chat--color-secondary-shade-50': '#2a3839',
      '--chat--color-white': '#ffffff',
      '--chat--color-light': '#fdf8f5',
      '--chat--color-light-shade-50': '#f5e8e3',
      '--chat--color-light-shade-100': '#e8d1c9',
      '--chat--color-medium': '#d2d4d9',
      '--chat--color-dark': '#324345',
      '--chat--color-disabled': '#777980',
      '--chat--color-typing': '#404040',

      // Espaciado y bordes
      '--chat--spacing': '1rem',
      '--chat--border-radius': '0.75rem',
      '--chat--transition-duration': '0.3s',

      // Dimensiones de la ventana
      '--chat--window--width': '400px',
      '--chat--window--height': '600px',

      // Header
      '--chat--header-height': 'auto',
      '--chat--header--padding': 'var(--chat--spacing)',
      '--chat--header--background': 'var(--chat--color-primary)',
      '--chat--header--color': 'var(--chat--color-white)',
      '--chat--header--border-top': 'none',
      '--chat--header--border-bottom': 'none',
      '--chat--heading--font-size': '1.5em',
      '--chat--subtitle--font-size': '0.9em',
      '--chat--subtitle--line-height': '1.4',

      // Textarea
      '--chat--textarea--height': '50px',

      // Mensajes
      '--chat--message--font-size': '0.95rem',
      '--chat--message--padding': 'var(--chat--spacing)',
      '--chat--message--border-radius': 'var(--chat--border-radius)',
      '--chat--message-line-height': '1.5',
      '--chat--message--bot--background': 'var(--chat--color-light)',
      '--chat--message--bot--color': 'var(--chat--color-dark)',
      '--chat--message--bot--border': 'none',
      '--chat--message--user--background': 'var(--chat--color-primary)',
      '--chat--message--user--color': 'var(--chat--color-white)',
      '--chat--message--user--border': 'none',
      '--chat--message--pre--background': 'rgba(227, 153, 163, 0.1)',

      // Botón toggle
      '--chat--toggle--background': 'var(--chat--color-primary)',
      '--chat--toggle--hover--background': 'var(--chat--color-primary-shade-50)',
      '--chat--toggle--active--background': 'var(--chat--color-primary-shade-100)',
      '--chat--toggle--color': 'var(--chat--color-white)',
      '--chat--toggle--size': '64px',
    };

    // Crear el chat con botón nativo de n8n
      chatInstanceRef.current = createChat({
      webhookUrl: 'https://n8n-n8n.mggfaf.easypanel.host/webhook/719fe441-73d5-42cb-92fd-5b417e4bc723/chat',
      mode: 'window', // n8n renderiza su propio botón
      defaultLanguage: 'en', // n8n solo acepta 'en' como predeterminado
      theme,
        i18n: {
        // Solo configuración en español - eliminar inglés
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
      initialMessages: currentLanguage === 'es' 
        ? [
            '¡Hola! 👋', 
            'Soy tu asistente de Punto Rosa. ¿En qué puedo ayudarte hoy?'
          ]
        : [
            'Hello! 👋', 
            'I am your Punto Rosa assistant. How can I help you today?'
          ],
    });

    // Forzar español después de crear el chat
    setTimeout(() => {
      if (chatInstanceRef.current && currentLanguage === 'es') {
        // Intentar cambiar a español usando diferentes métodos posibles
        if (chatInstanceRef.current.setLanguage) {
          chatInstanceRef.current.setLanguage('es');
        } else if (chatInstanceRef.current.changeLanguage) {
          chatInstanceRef.current.changeLanguage('es');
        } else if (chatInstanceRef.current.updateLanguage) {
          chatInstanceRef.current.updateLanguage('es');
        }
      }
    }, 300);

    // Aplicar estilos CSS personalizados después de crear el chat
      setTimeout(() => {
      const style = document.createElement('style');
      style.id = 'n8n-chat-custom-styles';
      style.textContent = `
        /* Estilos personalizados para el header del chat */
        .chat-layout .chat-header {
          background: #e399a3 !important;
          color: #ffffff !important;
          font-family: 'Inter', sans-serif !important;
          border-radius: 0.75rem 0.75rem 0 0 !important;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: center !important;
          gap: 0.5rem !important;
          height: auto !important;
          padding: 1rem !important;
        }

        .chat-layout .chat-header h1,
        .chat-layout .chat-header h2,
        .chat-layout .chat-header h3 {
          color: #ffffff !important;
          font-weight: 600 !important;
          margin: 0 !important;
          font-size: 1.25rem !important;
        }

        .chat-layout .chat-header p {
          color: rgba(255, 255, 255, 0.9) !important;
          font-size: 0.9rem !important;
          margin: 0 !important;
          line-height: 1.4 !important;
        }

        /* Forzar header en español usando CSS */
        .chat-layout .chat-header h1::before {
          content: "Asistente Punto Rosa" !important;
          display: block !important;
        }
        
        .chat-layout .chat-header h1 {
          font-size: 0 !important;
          line-height: 0 !important;
          overflow: hidden !important;
        }
        
        .chat-layout .chat-header p::before {
          content: "Inicia una conversación. Estamos aquí para ayudarte 24/7." !important;
          display: block !important;
        }
        
        .chat-layout .chat-header p {
          font-size: 0 !important;
          line-height: 0 !important;
          overflow: hidden !important;
        }

        /* Estilos para el botón de enviar */
        .chat-layout .chat-input button[type="submit"],
        .chat-layout .chat-input .send-button,
        .chat-layout .chat-input button[aria-label*="send"],
        .chat-layout .chat-input button[aria-label*="Send"],
        .chat-layout .chat-input button[title*="send"],
        .chat-layout .chat-input button[title*="Send"],
        .chat-layout .chat-input button:last-child,
        .chat-layout .chat-input .chat-send-button,
        .chat-layout .chat-input .send-btn,
        .chat-layout .chat-input button[class*="send"],
        .chat-layout .chat-input button[class*="Send"] {
          background: #e399a3 !important;
          color: #ffffff !important;
          border: none !important;
          border-radius: 50% !important;
          width: 40px !important;
          height: 40px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          cursor: pointer !important;
          transition: all 0.3s ease !important;
          box-shadow: 0 2px 4px rgba(227, 153, 163, 0.3) !important;
        }

        .chat-layout .chat-input button[type="submit"]:hover,
        .chat-layout .chat-input .send-button:hover,
        .chat-layout .chat-input button[aria-label*="send"]:hover,
        .chat-layout .chat-input button[aria-label*="Send"]:hover,
        .chat-layout .chat-input button[title*="send"]:hover,
        .chat-layout .chat-input button[title*="Send"]:hover,
        .chat-layout .chat-input button:last-child:hover,
        .chat-layout .chat-input .chat-send-button:hover,
        .chat-layout .chat-input .send-btn:hover,
        .chat-layout .chat-input button[class*="send"]:hover,
        .chat-layout .chat-input button[class*="Send"]:hover {
          background: #d18a94 !important;
          transform: scale(1.05) !important;
          box-shadow: 0 4px 8px rgba(227, 153, 163, 0.4) !important;
        }

        .chat-layout .chat-input button[type="submit"]:active,
        .chat-layout .chat-input .send-button:active,
        .chat-layout .chat-input button[aria-label*="send"]:active,
        .chat-layout .chat-input button[aria-label*="Send"]:active,
        .chat-layout .chat-input button[title*="send"]:active,
        .chat-layout .chat-input button[title*="Send"]:active,
        .chat-layout .chat-input button:last-child:active,
        .chat-layout .chat-input .chat-send-button:active,
        .chat-layout .chat-input .send-btn:active,
        .chat-layout .chat-input button[class*="send"]:active,
        .chat-layout .chat-input button[class*="Send"]:active {
          background: #bf7b85 !important;
          transform: scale(0.95) !important;
        }

        /* Estilos para el ícono del botón de enviar */
        .chat-layout .chat-input button svg,
        .chat-layout .chat-input .send-button svg {
          width: 20px !important;
          height: 20px !important;
          fill: #ffffff !important;
          stroke: #ffffff !important;
        }

        /* Estilos personalizados para el botón toggle */
        .chat-window-wrapper .chat-window-toggle {
          background: #e399a3 !important;
          color: #ffffff !important;
          width: 64px !important;
          height: 64px !important;
          border-radius: 50% !important;
          box-shadow: 0 4px 12px rgba(227, 153, 163, 0.4) !important;
          transition: all 0.3s ease !important;
          border: none !important;
          cursor: pointer !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        .chat-window-wrapper .chat-window-toggle:hover {
          background: #d18a94 !important;
          transform: scale(1.05) !important;
          box-shadow: 0 6px 16px rgba(227, 153, 163, 0.5) !important;
        }

        .chat-window-wrapper .chat-window-toggle:active {
          background: #bf7b85 !important;
          transform: scale(0.95) !important;
        }

        /* Estilos para el ícono del botón */
        .chat-window-wrapper .chat-window-toggle svg {
          width: 24px !important;
          height: 24px !important;
          fill: none !important;
          stroke: currentColor !important;
          stroke-width: 2 !important;
        }

        /* Asegurar que el contenedor del chat tenga bordes redondeados */
        .chat-window-wrapper .chat-window {
          border-radius: 0.75rem !important;
          overflow: hidden !important;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(227, 153, 163, 0.1) !important;
        }
      `;
      
      // Verificar si ya existe el estilo antes de agregarlo
      if (!document.getElementById('n8n-chat-custom-styles')) {
        document.head.appendChild(style);
      }
    }, 100);

    // Función de limpieza
    return () => {
      if (chatInstanceRef.current) {
        chatInstanceRef.current.unmount();
      }
      
      // Limpiar estilos personalizados
      const existingStyle = document.getElementById('n8n-chat-custom-styles');
      if (existingStyle && existingStyle.parentNode) {
        existingStyle.parentNode.removeChild(existingStyle);
      }
    };
  }, [currentLanguage]);

  // n8n renderiza todo, no necesitamos JSX
  return null;
};

export default ChatbotN8n;