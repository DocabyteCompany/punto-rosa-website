import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-serif text-text-deep-900 mb-6">Aviso de Privacidad</h1>
        <p className="text-text-deep-700 mb-4">
          En Punto Rosa nos comprometemos a proteger tu información personal. Este aviso describe qué datos
          recabamos, para qué los usamos, cómo los protegemos y cuáles son tus derechos.
        </p>

        <h2 className="text-2xl font-semibold text-text-deep-900 mt-8 mb-3">Datos personales que recabamos</h2>
        <ul className="list-disc ml-6 text-text-deep-700 space-y-2">
          <li>Nombre completo</li>
          <li>Número de teléfono</li>
          <li>Correo electrónico</li>
          <li>Información de la cita: servicio seleccionado, fecha y hora preferida</li>
          <li>Notas o mensajes que nos compartas de forma voluntaria</li>
        </ul>

        <h2 className="text-2xl font-semibold text-text-deep-900 mt-8 mb-3">¿Para qué utilizamos tus datos?</h2>
        <ul className="list-disc ml-6 text-text-deep-700 space-y-2">
          <li>Agendar y gestionar citas</li>
          <li>Comunicarnos contigo para confirmar, reprogramar o resolver dudas</li>
          <li>Brindar atención al cliente y seguimiento de servicio</li>
        </ul>

        <h2 className="text-2xl font-semibold text-text-deep-900 mt-8 mb-3">Base legal</h2>
        <p className="text-text-deep-700 mb-4">
          Tratamos tus datos con base en tu consentimiento y para la ejecución de medidas precontractuales
          relacionadas con la prestación del servicio solicitado.
        </p>

        <h2 className="text-2xl font-semibold text-text-deep-900 mt-8 mb-3">Medios de obtención</h2>
        <p className="text-text-deep-700 mb-4">
          Recabamos tus datos a través del formulario de contacto del sitio y/o mediante mensajes de WhatsApp.
          No creamos cuentas de usuario ni perfiles persistentes en este sitio.
        </p>

        <h2 className="text-2xl font-semibold text-text-deep-900 mt-8 mb-3">Transferencias y terceros</h2>
        <p className="text-text-deep-700 mb-4">
          Utilizamos WhatsApp como canal de comunicación. Al interactuar por este medio, tu información queda
          sujeta también a las políticas de privacidad de WhatsApp (Meta Platforms, Inc.). No vendemos ni
          compartimos tus datos con terceros para fines comerciales.
        </p>

        <h2 className="text-2xl font-semibold text-text-deep-900 mt-8 mb-3">Conservación de datos</h2>
        <p className="text-text-deep-700 mb-4">
          Conservamos la información únicamente el tiempo necesario para gestionar tu cita y el seguimiento del
          servicio. Los mensajes de WhatsApp permanecerán según tu propia configuración de chat y la nuestra.
        </p>

        <h2 className="text-2xl font-semibold text-text-deep-900 mt-8 mb-3">Tus derechos</h2>
        <p className="text-text-deep-700 mb-2">
          Puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición (ARCO), así como revocar
          tu consentimiento, escribiéndonos por WhatsApp o a nuestro correo.
        </p>
        <ul className="list-disc ml-6 text-text-deep-700 space-y-2">
          <li>Teléfono/WhatsApp: +52 554 918 6534</li>
          <li>Ubicación de servicio: Cocoyoc, Morelos, México</li>
        </ul>

        <h2 className="text-2xl font-semibold text-text-deep-900 mt-8 mb-3">Medidas de seguridad</h2>
        <p className="text-text-deep-700 mb-4">
          Implementamos medidas administrativas y técnicas razonables para proteger tu información. Sin embargo,
          ninguna transmisión por Internet es 100% segura, por lo que te recomendamos no compartir datos
          sensibles innecesarios.
        </p>

        <p className="text-text-deep-500 mt-10">
          Última actualización: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Privacy;


