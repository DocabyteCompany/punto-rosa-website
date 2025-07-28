import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageCircle, Facebook, Instagram, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';

interface ContactSectionProps {
  currentLanguage: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ currentLanguage }) => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const content = {
    en: {
      title: "Contact Me",
      subtitle: "Book your appointment or reach out through your preferred channel",
      formTitle: "Book Your Appointment",
      formSubtitle: "Select your preferred service, date and time",
      service: "Select Service",
      date: "Select Date",
      time: "Select Time",
      personalInfo: "Personal Information",
      name: "Full Name",
      phone: "Phone Number",
      email: "Email Address",
      notes: "Additional Notes (Optional)",
      bookNow: "Book Appointment",
      whatsappBooking: "Book via WhatsApp",
      contactInfo: "Contact Information",
      phoneNumber: "(55) 49186534",
      hours: "Monday to Sunday",
      homeService: "Home service available",
      otherServices: "Other services: vitamin serums at home or in clinic",
      serviceSelection: "Service Selection",
      dateTimeSelection: "Date & Time Selection",
      personalInformation: "Personal Information",
      socialTitle: "Follow Me",
      socialSubtitle: "Stay updated with my latest news and promotions",
      followInstagram: "Follow on Instagram",
      followFacebook: "Follow on Facebook",
      instagramDesc: "Client results and tips",
      facebookDesc: "See my latest treatments"
    },
    es: {
      title: "Contáctame",
      subtitle: "Agenda tu cita o comunícate a través de tu canal preferido",
      formTitle: "Agenda Tu Cita",
      formSubtitle: "Selecciona tu servicio, fecha y hora preferida",
      service: "Seleccionar Servicio",
      date: "Seleccionar Fecha",
      time: "Seleccionar Hora",
      personalInfo: "Información Personal",
      name: "Nombre Completo",
      phone: "Número de Teléfono",
      email: "Correo Electrónico",
      notes: "Notas Adicionales (Opcional)",
      bookNow: "Agendar Cita",
      whatsappBooking: "Agendar por WhatsApp",
      contactInfo: "Información de Contacto",
      phoneNumber: "(55) 49186534",
      hours: "Lunes a Domingo",
      homeService: "Servicio a domicilio disponible",
      otherServices: "Otros servicios: sueros vitaminados a domicilio o en cabina",
      serviceSelection: "Selección de Servicio",
      dateTimeSelection: "Fecha y Hora",
      personalInformation: "Información Personal",
      socialTitle: "Sígueme",
      socialSubtitle: "Mantente actualizado con mis últimas noticias y promociones",
      followInstagram: "Seguir en Instagram",
      followFacebook: "Seguir en Facebook",
      instagramDesc: "Resultados de clientes y consejos",
      facebookDesc: "Ve mis últimos tratamientos"
    }
  };

  const services = [
    { id: 'harmony', name: currentLanguage === 'es' ? 'Masaje Harmony' : 'Harmony Massage', duration: '60 min', price: '$500' },
    { id: 'myofascial', name: currentLanguage === 'es' ? 'Masaje de liberación miofascial' : 'Myofascial Release Massage', duration: '60 min', price: '$500' },
    { id: 'mixed', name: currentLanguage === 'es' ? 'Masaje mixto' : 'Mixed Massage', duration: '60 min', price: '$550' },
    { id: 'lymphatic', name: currentLanguage === 'es' ? 'Drenaje linfático manual' : 'Manual Lymphatic Drainage', duration: '60 min', price: '$500' },
    { id: 'sports', name: currentLanguage === 'es' ? 'Masaje deportivo' : 'Sports Massage', duration: '60 min', price: '$500' },
    { id: 'pressotherapy', name: currentLanguage === 'es' ? 'Presoterapia' : 'Pressotherapy', duration: '45 min', price: '$550' },
    { id: 'passive', name: currentLanguage === 'es' ? 'Gimnasia pasiva' : 'Passive Gymnastics', duration: '30 min', price: '$550' },
    { id: 'cavitation', name: currentLanguage === 'es' ? 'Cavitación' : 'Cavitation', duration: '30 min', price: '$400' },
    { id: 'serum', name: currentLanguage === 'es' ? 'Suero vitaminado' : 'Vitamin Serum', duration: '60 min', price: '$1,200' }
  ];

  const timeSlots = ['9:00 AM', '10:30 AM', '12:00 PM', '2:00 PM', '3:30 PM', '5:00 PM'];

  const currentContent = content[currentLanguage as keyof typeof content];

  const generateDateOptions = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  };

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleBooking = () => {
    if (!selectedService || !selectedDate || !selectedTime || !formData.name || !formData.phone) {
      alert(currentLanguage === 'es' ? 'Por favor completa todos los campos requeridos' : 'Please fill in all required fields');
      return;
    }

    const selectedServiceData = services.find(s => s.id === selectedService);
    const message = currentLanguage === 'es' 
      ? `Hola! Quiero agendar una cita:
Servicio: ${selectedServiceData?.name}
Fecha: ${selectedDate}
Hora: ${selectedTime}
Nombre: ${formData.name}
Teléfono: ${formData.phone}
Email: ${formData.email}
Notas: ${formData.notes}`
      : `Hello! I want to book an appointment:
Service: ${selectedServiceData?.name}
Date: ${selectedDate}
Time: ${selectedTime}
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Notes: ${formData.notes}`;

    const whatsappUrl = `https://wa.me/5549186534?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleWhatsAppBooking = () => {
    const message = currentLanguage === 'es'
      ? 'Hola! Me gustaría agendar una cita para un masaje. ¿Podrían ayudarme con la disponibilidad?'
      : 'Hello! I would like to book a massage appointment. Could you help me with availability?';
    
    const whatsappUrl = `https://wa.me/5549186534?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-spa-soft-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-punto-rosa-400 to-spa-green-400 mx-auto mb-6 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-serif text-text-deep-800 mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-text-deep-600 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Booking Form with Expandable Sections */}
          <div className="bg-white rounded-3xl shadow-lg border border-neutral-warm-200 overflow-hidden">
            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-text-deep-800 mb-2">
                  {currentContent.formTitle}
                </h3>
                <p className="text-text-deep-600">
                  {currentContent.formSubtitle}
                </p>
              </div>

              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {/* Service Selection Section */}
                <div className="border border-neutral-warm-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleSection('service')}
                    className="w-full p-4 bg-gradient-to-r from-punto-rosa-50 to-spa-green-50 hover:from-punto-rosa-100 hover:to-spa-green-100 transition-all duration-200 flex items-center justify-between"
                  >
                    <span className="font-semibold text-text-deep-800">{currentContent.serviceSelection}</span>
                    {activeSection === 'service' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {activeSection === 'service' && (
                    <div className="p-4 border-t border-neutral-warm-200">
                      <div className="space-y-2 max-h-48 overflow-y-auto">
                        {services.map((service) => (
                          <label
                            key={service.id}
                            className={`block p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                              selectedService === service.id
                                ? 'border-punto-rosa-500 bg-punto-rosa-50'
                                : 'border-neutral-warm-200 hover:border-punto-rosa-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name="service"
                              value={service.id}
                              checked={selectedService === service.id}
                              onChange={(e) => setSelectedService(e.target.value)}
                              className="sr-only"
                            />
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="font-medium text-text-deep-800">{service.name}</h4>
                                <p className="text-sm text-text-deep-600">{service.duration}</p>
                              </div>
                              <span className="font-medium text-punto-rosa-600">{service.price}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Date & Time Selection Section */}
                <div className="border border-neutral-warm-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleSection('datetime')}
                    className="w-full p-4 bg-gradient-to-r from-punto-rosa-50 to-spa-green-50 hover:from-punto-rosa-100 hover:to-spa-green-100 transition-all duration-200 flex items-center justify-between"
                  >
                    <span className="font-semibold text-text-deep-800">{currentContent.dateTimeSelection}</span>
                    {activeSection === 'datetime' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {activeSection === 'datetime' && (
                    <div className="p-4 border-t border-neutral-warm-200">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-text-deep-800 mb-3">
                            <Calendar className="w-4 h-4 inline mr-2" />
                            {currentContent.date}
                          </label>
                          <select
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="w-full p-3 border border-neutral-warm-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-punto-rosa-500/50"
                          >
                            <option value="">{currentContent.date}</option>
                            {generateDateOptions().map((date) => (
                              <option key={date} value={date}>
                                {new Date(date).toLocaleDateString()}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text-deep-800 mb-3">
                            <Clock className="w-4 h-4 inline mr-2" />
                            {currentContent.time}
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            {timeSlots.map((time) => (
                              <button
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                className={`p-3 text-sm border rounded-lg transition-all duration-200 ${
                                  selectedTime === time
                                    ? 'border-punto-rosa-500 bg-punto-rosa-500 text-white'
                                    : 'border-neutral-warm-200 hover:border-punto-rosa-300'
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Personal Information Section */}
                <div className="border border-neutral-warm-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleSection('personal')}
                    className="w-full p-4 bg-gradient-to-r from-punto-rosa-50 to-spa-green-50 hover:from-punto-rosa-100 hover:to-spa-green-100 transition-all duration-200 flex items-center justify-between"
                  >
                    <span className="font-semibold text-text-deep-800">{currentContent.personalInformation}</span>
                    {activeSection === 'personal' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {activeSection === 'personal' && (
                    <div className="p-4 border-t border-neutral-warm-200">
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder={currentContent.name}
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full p-3 border border-neutral-warm-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-punto-rosa-500/50"
                          />

                          <input
                            type="tel"
                            placeholder={currentContent.phone}
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full p-3 border border-neutral-warm-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-punto-rosa-500/50"
                          />
                        </div>

                        <input
                          type="email"
                          placeholder={currentContent.email}
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full p-3 border border-neutral-warm-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-punto-rosa-500/50"
                        />

                        <textarea
                          placeholder={currentContent.notes}
                          value={formData.notes}
                          onChange={(e) => setFormData({...formData, notes: e.target.value})}
                          rows={3}
                          className="w-full p-3 border border-neutral-warm-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-punto-rosa-500/50 resize-none"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Booking Actions - Always Visible */}
              <div className="mt-6 space-y-3">
                <Button
                  onClick={handleBooking}
                  className="w-full bg-gradient-to-r from-punto-rosa-500 to-punto-rosa-600 hover:from-punto-rosa-600 hover:to-punto-rosa-700 hover:scale-105 text-white py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  {currentContent.bookNow}
                </Button>

                <Button
                  onClick={handleWhatsAppBooking}
                  variant="outline"
                  className="w-full border-spa-green-500 text-spa-green-600 hover:border-spa-green-700 hover:scale-105 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {currentContent.whatsappBooking}
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Contact & Social Media */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-neutral-warm-200">
              <h3 className="text-xl font-bold text-text-deep-800 mb-6">
                {currentContent.contactInfo}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-punto-rosa-500 mr-3" />
                  <div>
                    <p className="font-medium text-text-deep-800">{currentContent.phoneNumber}</p>
                    <p className="text-sm text-text-deep-600">{currentContent.hours}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <User className="w-5 h-5 text-spa-green-500 mr-3" />
                  <p className="text-sm text-text-deep-600">{currentContent.homeService}</p>
                </div>
                
                <div className="pt-4 border-t border-neutral-warm-200">
                  <p className="text-sm text-text-deep-600">{currentContent.otherServices}</p>
                </div>
              </div>
            </div>

            {/* Social Media & Quick Contact */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-neutral-warm-200">
              <h3 className="text-xl font-bold text-text-deep-800 mb-6">
                {currentContent.socialTitle}
              </h3>
              <p className="text-text-deep-600 mb-8 leading-relaxed">
                {currentContent.socialSubtitle}
              </p>

              <div className="space-y-4">
                <a
                  href="https://instagram.com/puntorosamassage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 border border-neutral-warm-200 rounded-xl hover:border-pink-300 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-deep-800 group-hover:text-pink-600 transition-colors duration-300">
                      {currentContent.followInstagram}
                    </h4>
                    <p className="text-sm text-text-deep-600">
                      {currentContent.instagramDesc}
                    </p>
                  </div>
                </a>

                <a
                  href="https://facebook.com/puntorosamassage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 border border-neutral-warm-200 rounded-xl hover:border-blue-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Facebook className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-deep-800 group-hover:text-blue-600 transition-colors duration-300">
                      {currentContent.followFacebook}
                    </h4>
                    <p className="text-sm text-text-deep-600">
                      {currentContent.facebookDesc}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 