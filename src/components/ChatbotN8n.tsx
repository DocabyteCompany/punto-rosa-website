import React, { useEffect, useRef, useState, useCallback } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

/**
 * Error Boundary para capturar errores de React
 */
class ChatbotErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('🔴 Error Boundary capturó un error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed bottom-24 right-24 z-[9998] bg-red-50 border border-red-200 rounded-lg p-4 max-w-xs shadow-lg">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-red-800">Error en el chatbot</p>
              <p className="text-sm text-red-600 mt-1">
                {this.state.error?.message || 'Error desconocido'}
              </p>
              <button
                onClick={() => this.setState({ hasError: false, error: null })}
                className="mt-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
              >
                Reintentar
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * ChatbotN8n - Componente de chatbot integrado con n8n
 * 
 * Características:
 * - Integración con webhook de n8n
 * - Soporte multiidioma (Español/Inglés)
 * - Estilos personalizados con tema Punto Rosa
 * - Manejo robusto de errores con reintento automático
 * - Indicadores de estado visuales
 * - Uso de Portal para evitar conflictos con React
 * 
 * @param currentLanguage - Idioma actual de la aplicación ('es' | 'en')
 */
interface ChatbotN8nProps {
  currentLanguage: string;
}

const ChatbotN8n: React.FC<ChatbotN8nProps> = ({ currentLanguage }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showChat, setShowChat] = useState(false);
  const chatInstanceRef = useRef<any>(null);
  const stylesAppliedRef = useRef(false);

  // Función para aplicar estilos personalizados
  const applyCustomStyles = useCallback(() => {
    if (stylesAppliedRef.current) return;
    
    console.log('🔍 DEBUG: Aplicando estilos...');
    
    const style = document.createElement('style');
    style.id = 'n8n-chat-custom-styles';
    style.textContent = `
      /* Estilos personalizados para el chatbot n8n - CONTENEDOR ESPECÍFICO */
      #n8n-chat-container {
        position: fixed !important;
        bottom: 24px !important;
        right: 24px !important;
        z-index: 9999 !important;
        width: 400px !important;
        height: 600px !important;
        background: white !important;
        border-radius: 12px !important;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(227, 153, 163, 0.1) !important;
        overflow: hidden !important;
        border: 1px solid rgba(227, 153, 163, 0.2) !important;
        display: none !important;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif !important;
        pointer-events: none !important;
      }

      #n8n-chat-container.show {
        display: block !important;
        pointer-events: auto !important;
      }

      /* Asegurar que el contenido del chat sea visible */
      #n8n-chat-container * {
        visibility: visible !important;
        opacity: 1 !important;
      }

      /* Asegurar que el contenido del chat se ajuste al contenedor */
      #n8n-chat-container > div {
        width: 100% !important;
        height: 100% !important;
        display: block !important;
      }

      /* Personalizar variables CSS del tema */
      :root {
        --chat--color-primary: #e399a3 !important;
        --chat--color-primary-shade-50: #d18a94 !important;
        --chat--color-primary-shade-100: #bf7b85 !important;
        --chat--color-secondary: #324345 !important;
        --chat--color-white: #ffffff !important;
        --chat--color-light: #fdf8f5 !important;
        --chat--color-light-shade-50: #f5e8e3 !important;
        --chat--color-light-shade-100: #e8d1c9 !important;
        --chat--color-medium: #d2d4d9 !important;
        --chat--color-dark: #324345 !important;
        --chat--color-disabled: #777980 !important;
        --chat--color-typing: #404040 !important;
        
        /* Forzar tamaño específico */
        --chat--window--width: 400px !important;
        --chat--window--height: 600px !important;
      }

      /* Personalizar el header del chat */
      #n8n-chat-container .chat-header,
      .chat-header {
        background: #e399a3 !important;
        color: white !important;
        padding: 1rem !important;
        font-weight: 500 !important;
        border-radius: 12px 12px 0 0 !important;
        flex-shrink: 0 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
      }

      /* Título del header */
      #n8n-chat-container .chat-header h1,
      #n8n-chat-container .chat-header h2,
      #n8n-chat-container .chat-header h3,
      .chat-header h1,
      .chat-header h2,
      .chat-header h3 {
        color: white !important;
        font-size: 1.125rem !important;
        font-weight: 600 !important;
        margin: 0 !important;
      }

      /* Subtítulo del header */
      #n8n-chat-container .chat-header p,
      .chat-header p {
        color: rgba(255, 255, 255, 0.9) !important;
        font-size: 0.875rem !important;
        margin: 0.25rem 0 0 0 !important;
      }

      /* Estilos básicos para mensajes - menos agresivos */
      #n8n-chat-container .chat-message-bot {
        background: #fdf8f5 !important;
        color: #324345 !important;
        border-radius: 1rem 1rem 1rem 0.25rem !important;
        margin: 0.5rem 0 !important;
        padding: 0.75rem 1rem !important;
        max-width: 80% !important;
        font-size: 0.875rem !important;
        line-height: 1.5 !important;
      }

      #n8n-chat-container .chat-message-user {
        background: #e399a3 !important;
        color: white !important;
        border-radius: 1rem 1rem 0.25rem 1rem !important;
        margin: 0.5rem 0 !important;
        padding: 0.75rem 1rem !important;
        max-width: 80% !important;
        font-size: 0.875rem !important;
        line-height: 1.5 !important;
      }

      /* Estilos básicos para el área de mensajes */
      #n8n-chat-container .chat-messages {
        flex: 1 !important;
        overflow-y: auto !important;
        padding: 1rem !important;
      }

      /* Estilos básicos para el input */
      #n8n-chat-container .chat-input-container {
        display: flex !important;
        padding: 1rem !important;
        border-top: 1px solid rgba(227, 153, 163, 0.2) !important;
        background: white !important;
        align-items: center !important;
        gap: 0.5rem !important;
      }

      /* Estilos básicos para el input */
      #n8n-chat-container .chat-input {
        flex: 1 !important;
        border: 1px solid rgba(227, 153, 163, 0.3) !important;
        border-radius: 0.5rem !important;
        padding: 0.75rem !important;
        font-size: 0.875rem !important;
        outline: none !important;
        background: white !important;
        color: #324345 !important;
        min-height: 40px !important;
      }

      #n8n-chat-container .chat-input:focus {
        border-color: #e399a3 !important;
        box-shadow: 0 0 0 2px rgba(227, 153, 163, 0.2) !important;
      }

      /* Estilos básicos para botones */
      #n8n-chat-container .chat-send-button {
        background: #e399a3 !important;
        color: white !important;
        border: none !important;
        border-radius: 0.5rem !important;
        padding: 0.75rem !important;
        cursor: pointer !important;
        min-width: 40px !important;
        height: 40px !important;
      }

      #n8n-chat-container .chat-send-button:hover {
        background: #d18a94 !important;
      }

      #n8n-chat-container .chat-send-button:disabled {
        background: #d2d4d9 !important;
        cursor: not-allowed !important;
      }

      /* Ocultar solo elementos específicos del footer de n8n */
      #n8n-chat-container [class*="footer"],
      #n8n-chat-container [class*="powered"],
      #n8n-chat-container [class*="branding"],
      #n8n-chat-container [class*="credit"],
      #n8n-chat-container [class*="watermark"],
      #n8n-chat-container [class*="attribution"] {
        display: none !important;
      }

      /* Estilos básicos para scrollbar */
      #n8n-chat-container {
        scrollbar-width: thin !important;
      }

      #n8n-chat-container::-webkit-scrollbar {
        width: 6px !important;
      }

      #n8n-chat-container::-webkit-scrollbar-thumb {
        background: rgba(227, 153, 163, 0.3) !important;
        border-radius: 3px !important;
      }

      /* Asegurar que el FAB sea siempre visible */
      .chatbot-fab {
        position: fixed !important;
        bottom: 24px !important;
        right: 24px !important;
        z-index: 99999 !important;
        display: flex !important;
        visibility: visible !important;
        opacity: 1 !important;
        pointer-events: auto !important;
      }

      /* Estilos básicos para botones */
      #n8n-chat-container button {
        background: #e399a3 !important;
        color: white !important;
        border: none !important;
        border-radius: 0.5rem !important;
        padding: 0.5rem 1rem !important;
        font-size: 0.875rem !important;
        cursor: pointer !important;
      }

      #n8n-chat-container button:hover {
        background: #d18a94 !important;
      }
    `;
    
    // Verificar si ya existe el estilo antes de agregarlo
    if (!document.getElementById('n8n-chat-custom-styles')) {
      document.head.appendChild(style);
      stylesAppliedRef.current = true;
      console.log('🔍 DEBUG: Estilos aplicados');
    }
  }, []);

  // Función para limpiar estilos
  const cleanupStyles = useCallback(() => {
    const existingStyle = document.getElementById('n8n-chat-custom-styles');
    if (existingStyle && existingStyle.parentNode) {
      existingStyle.parentNode.removeChild(existingStyle);
      stylesAppliedRef.current = false;
    }
  }, []);

  // Función para inicializar el chatbot
  const initializeChat = useCallback(async () => {
    if (isInitialized) return;

    try {
      console.log('🔄 Iniciando creación del chatbot n8n...');
      
      // Limpiar cualquier instancia anterior
      if (chatInstanceRef.current) {
        try {
          chatInstanceRef.current.destroy?.();
        } catch (e) {
          console.warn('⚠️ Error al destruir instancia anterior:', e);
        }
        chatInstanceRef.current = null;
      }
      
      // Crear contenedor del chat en el body para evitar conflictos con React
      let chatContainer = document.getElementById('n8n-chat-container');
      if (chatContainer) {
        // Limpiar contenedor existente
        chatContainer.innerHTML = '';
      } else {
        chatContainer = document.createElement('div');
        chatContainer.id = 'n8n-chat-container';
        document.body.appendChild(chatContainer);
      }
      
      // Configuración del webhook con validación
      const webhookUrl = 'https://n8n-n8n.mggfaf.easypanel.host/webhook/719fe441-73d5-42cb-92fd-5b417e4bc723/chat';
      
      console.log('🔍 DEBUG: webhookUrl:', webhookUrl);
      
      // Validar que la URL del webhook sea válida
      if (!webhookUrl || !webhookUrl.startsWith('https://')) {
        throw new Error('URL del webhook inválida');
      }

      console.log('🔍 DEBUG: Antes de createChat...');

      // Crear el chatbot n8n con configuración optimizada
      chatInstanceRef.current = createChat({
        webhookUrl,
        target: '#n8n-chat-container',
        mode: 'window', // Cambiar a window para mejor control del widget
        showWelcomeScreen: false,
        defaultLanguage: 'en', // Idioma por defecto (se maneja con i18n)
        enableStreaming: false,
        loadPreviousSession: true,
        theme: 'light', // Forzar tema claro
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
        
        // Configuración adicional para mejor funcionamiento
        // Nota: Solo se incluyen propiedades válidas de la API de n8n
      });

      console.log('✅ Chatbot n8n creado exitosamente');
      setError(null);
      setIsInitialized(true);

      // Aplicar estilos CSS personalizados inmediatamente
      console.log('🎨 Aplicando estilos personalizados...');
      applyCustomStyles();
      
      // Verificar que el chat se inicializó correctamente
      const verifyInitialization = () => {
        if (chatContainer && chatInstanceRef.current) {
          console.log('✅ Chat inicializado correctamente (cerrado por defecto)');
          return true;
        } else {
          console.warn('⚠️ El chat no se inicializó correctamente');
          setError('Error al inicializar el chat');
          return false;
        }
      };

      // Verificar inmediatamente y también después de un breve delay
      if (!verifyInitialization()) {
        setTimeout(verifyInitialization, 500);
      }

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido al crear el chatbot';
      console.error('❌ Error creating n8n chat:', error);
      console.error('❌ Error completo:', error);
      setError(errorMessage);
      setIsInitialized(false);
    }
  }, [currentLanguage, isInitialized, applyCustomStyles]);

  // Función para mostrar/ocultar el chat
  const toggleChat = useCallback(() => {
    console.log('🔄 Toggle chat - Estado actual:', showChat);
    
    // Si no está inicializado, inicializar primero
    if (!isInitialized) {
      console.log('🔍 Chat no inicializado, inicializando...');
      initializeChat();
      return;
    }
    
    const chatContainer = document.getElementById('n8n-chat-container');
    
    if (!chatContainer) {
      console.error('❌ No se encontró el contenedor del chat');
      setError('Error: Contenedor del chat no encontrado');
      return;
    }
    
    if (showChat) {
      console.log('🔍 Cerrando chat...');
      chatContainer.classList.remove('show');
      setShowChat(false);
      console.log('✅ Chat cerrado exitosamente');
    } else {
      console.log('🔍 Abriendo chat...');
      chatContainer.classList.add('show');
      setShowChat(true);
      console.log('✅ Chat abierto exitosamente');
    }
  }, [showChat, isInitialized, initializeChat]);

  useEffect(() => {
    console.log('🔍 DEBUG: useEffect ejecutándose...');
    console.log('🔍 DEBUG: isInitialized:', isInitialized);
    
    // Solo inicializar si no está inicializado y no hay error
    if (!isInitialized && !error) {
      console.log('🔍 Inicializando chatbot...');
      initializeChat();
    }

    // Cleanup function - limpiar estilos y referencias
    return () => {
      console.log('🔍 DEBUG: Cleanup ejecutándose...');
      cleanupStyles();
      
      // Limpiar instancia del chat si existe
      if (chatInstanceRef.current) {
        try {
          chatInstanceRef.current.destroy?.();
        } catch (e) {
          console.warn('⚠️ Error al destruir instancia en cleanup:', e);
        }
        chatInstanceRef.current = null;
      }
    };
  }, [isInitialized, error, initializeChat, cleanupStyles]);

  // Función para reintentar la inicialización del chatbot
  const retryInitialization = useCallback(() => {
    console.log('🔄 Reintentando inicialización del chatbot...');
    
    // Limpiar estado
    setError(null);
    setIsInitialized(false);
    setShowChat(false);
    
    // Limpiar instancia anterior
    if (chatInstanceRef.current) {
      try {
        chatInstanceRef.current.destroy?.();
      } catch (e) {
        console.warn('⚠️ Error al destruir instancia anterior:', e);
      }
      chatInstanceRef.current = null;
    }
    
    // Limpiar contenedor existente
    const existingContainer = document.getElementById('n8n-chat-container');
    if (existingContainer && existingContainer.parentNode) {
      existingContainer.parentNode.removeChild(existingContainer);
    }
    
    // Limpiar estilos
    cleanupStyles();
    
    // Reintentar después de un breve delay
    setTimeout(() => {
      initializeChat();
    }, 500);
  }, [initializeChat, cleanupStyles]);

  console.log('🔍 DEBUG: Renderizando componente...');

  return (
    <ChatbotErrorBoundary>
      {/* Botón FAB para mostrar/ocultar el chat */}
      <button
        onClick={toggleChat}
        className="chatbot-fab fixed bottom-6 right-6 z-[99999] w-16 h-16 bg-[#e399a3] hover:bg-[#d18a94] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#e399a3]/30"
        style={{
          boxShadow: '0 10px 25px -5px rgba(227, 153, 163, 0.4)',
          position: 'fixed',
          zIndex: 99999,
          display: 'flex',
          visibility: 'visible',
          opacity: 1
        }}
        aria-label={showChat ? 'Cerrar chat' : 'Abrir chat'}
        title={showChat ? 'Cerrar chat' : 'Abrir chat'}
      >
        {showChat ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
      
      {/* Indicador de estado y manejo de errores */}
      {error && (
        <div className="fixed bottom-24 right-6 z-[9998] bg-red-50 border border-red-200 rounded-lg p-4 max-w-xs shadow-lg">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-red-800">
                {currentLanguage === 'es' ? 'Error en el chatbot' : 'Chatbot Error'}
              </p>
              <p className="text-sm text-red-600 mt-1">
                {error}
              </p>
              <button
                onClick={retryInitialization}
                className="mt-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
              >
                {currentLanguage === 'es' ? 'Reintentar' : 'Retry'}
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Indicador de carga */}
      {!isInitialized && !error && (
        <div className="fixed bottom-24 right-6 z-[9998] bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-xs shadow-lg">
          <div className="flex items-center space-x-3">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
            <p className="text-sm text-blue-800">
              {currentLanguage === 'es' ? 'Inicializando chatbot...' : 'Initializing chatbot...'}
            </p>
          </div>
        </div>
      )}
    </ChatbotErrorBoundary>
  );
};

export default ChatbotN8n;
