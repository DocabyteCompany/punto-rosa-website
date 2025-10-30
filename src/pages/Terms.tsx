import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-serif text-text-deep-900 mb-6">Términos y Condiciones</h1>
        <p className="text-text-deep-700 mb-4">
          Estos términos regulan el uso del sitio y la contratación de servicios de masaje y bienestar
          ofrecidos por Punto Rosa.
        </p>

        <h2 className="text-2xl font-semibold text-text-deep-900 mt-8 mb-3">Servicios</h2>
        <p className="text-text-deep-700 mb-4">
          Los servicios se prestan únicamente con fines de bienestar y relajación. No constituyen atención
          médica ni sustituyen asesoría profesional. Si presentas condiciones médicas, notifícalo antes de tu
          sesión para evaluar tu elegibilidad.
        </p>

        <h2 className="text-2xl font-semibold text-text-deep-900 mt-8 mb-3">Agendamiento y comunicación</h2>
        <p className="text-text-deep-700 mb-4">
          Las citas se coordinan por el formulario del sitio y/o por WhatsApp. No se crean cuentas de usuario.
          Te solicitaremos datos mínimos: nombre, teléfono, correo (opcional), servicio, fecha y hora.
        </p>

        <h2 className="text-2xl font-semibold text-text-deep-900 mt-8 mb-3">Reprogramaciones y cancelaciones</h2>
        <ul className="list-disc ml-6 text-text-deep-700 space-y-2">
          <li>Solicita reprogramar o cancelar con la mayor anticipación posible por WhatsApp.</li>
          <li>Los retrasos mayores a 15 minutos podrían reducir la duración de la sesión.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-text-deep-900 mt-8 mb-3">Tarifas y pagos</h2>
        <p className="text-text-deep-700 mb-4">
          Los precios publicados están sujetos a cambios sin previo aviso. El pago se realiza al momento del
          servicio mediante los métodos disponibles y comunicados por el personal.
        </p>

        <h2 className="text-2xl font-semibold text-text-deep-900 mt-8 mb-3">Domicilio y alcance del servicio</h2>
        <p className="text-text-deep-700 mb-4">
          El servicio se presta en Cocoyoc, Morelos y zonas aledañas según disponibilidad. El servicio a
          domicilio puede requerir condiciones mínimas de espacio e higiene.
        </p>

        <h2 className="text-2xl font-semibold text-text-deep-900 mt-8 mb-3">Responsabilidad</h2>
        <p className="text-text-deep-700 mb-4">
          Punto Rosa no se hace responsable por daños derivados del mal uso de la información o por no haber
          informado condiciones de salud relevantes. Informar alergias, lesiones y estados médicos es
          responsabilidad del cliente.
        </p>

        <h2 className="text-2xl font-semibold text-text-deep-900 mt-8 mb-3">Privacidad</h2>
        <p className="text-text-deep-700 mb-4">
          El tratamiento de datos personales se rige por nuestro <a href="/privacy" className="text-punto-rosa-700 underline">Aviso de Privacidad</a>.
        </p>

        <h2 className="text-2xl font-semibold text-text-deep-900 mt-8 mb-3">Contacto</h2>
        <ul className="list-disc ml-6 text-text-deep-700 space-y-2">
          <li>Teléfono/WhatsApp: +52 554 918 6534</li>
          <li>Ubicación de servicio: Cocoyoc, Morelos, México</li>
        </ul>

        <p className="text-text-deep-500 mt-10">Última actualización: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Terms;


