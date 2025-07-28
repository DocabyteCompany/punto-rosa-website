import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

interface BookingSystemProps {
  currentLanguage: string;
}

const BookingSystem: React.FC<BookingSystemProps> = ({ currentLanguage }) => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  const content = {
    en: {
      title: "Book Your Appointment",
      subtitle: "Select your preferred service, date and time",
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
      services: [
        { id: 'relaxing', name: 'Relaxing Massage', duration: '60 min', price: '$80,000' },
        { id: 'therapeutic', name: 'Therapeutic Massage', duration: '90 min', price: '$120,000' },
        { id: 'couples', name: 'Couples Massage', duration: '90 min', price: '$240,000' },
        { id: 'prenatal', name: 'Prenatal Massage', duration: '60 min', price: '$100,000' }
      ],
      timeSlots: ['9:00 AM', '10:30 AM', '12:00 PM', '2:00 PM', '3:30 PM', '5:00 PM']
    },
    es: {
      title: "Agenda Tu Cita",
      subtitle: "Selecciona tu servicio, fecha y hora preferida",
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
      services: [
        { id: 'relaxing', name: 'Masaje Relajante', duration: '60 min', price: '$80,000' },
        { id: 'therapeutic', name: 'Masaje Terapéutico', duration: '90 min', price: '$120,000' },
        { id: 'couples', name: 'Masaje en Pareja', duration: '90 min', price: '$240,000' },
        { id: 'prenatal', name: 'Masaje Prenatal', duration: '60 min', price: '$100,000' }
      ],
      timeSlots: ['9:00 AM', '10:30 AM', '12:00 PM', '2:00 PM', '3:30 PM', '5:00 PM']
    }
  };

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

  const handleBooking = () => {
    if (!selectedService || !selectedDate || !selectedTime || !formData.name || !formData.phone) {
      alert(currentLanguage === 'es' ? 'Por favor completa todos los campos requeridos' : 'Please fill in all required fields');
      return;
    }

    const selectedServiceData = currentContent.services.find(s => s.id === selectedService);
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

    const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleWhatsAppBooking = () => {
    const message = currentLanguage === 'es'
      ? 'Hola! Me gustaría agendar una cita para un masaje. ¿Podrían ayudarme con la disponibilidad?'
      : 'Hello! I would like to book a massage appointment. Could you help me with availability?';
    
    const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-spa-soft-primary/5 to-punto-rosa-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-text-deep-primary mb-4">
            {currentContent.title}
          </h2>
          <p className="text-lg text-text-deep-secondary max-w-2xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Service & Time Selection */}
            <div className="space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-sm font-medium text-text-deep-primary mb-3">
                  {currentContent.service}
                </label>
                <div className="space-y-2">
                  {currentContent.services.map((service) => (
                    <label
                      key={service.id}
                      className={`block p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                        selectedService === service.id
                          ? 'border-punto-rosa-primary bg-punto-rosa-primary/5'
                          : 'border-spa-soft-primary/30 hover:border-punto-rosa-primary/50'
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
                          <h4 className="font-medium text-text-deep-primary">{service.name}</h4>
                          <p className="text-sm text-text-deep-secondary">{service.duration}</p>
                        </div>
                        <span className="font-medium text-punto-rosa-primary">{service.price}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-sm font-medium text-text-deep-primary mb-3">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  {currentContent.date}
                </label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-3 border border-spa-soft-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-punto-rosa-primary/50"
                >
                  <option value="">{currentContent.date}</option>
                  {generateDateOptions().map((date) => (
                    <option key={date} value={date}>
                      {new Date(date).toLocaleDateString()}
                    </option>
                  ))}
                </select>
              </div>

              {/* Time Selection */}
              <div>
                <label className="block text-sm font-medium text-text-deep-primary mb-3">
                  <Clock className="w-4 h-4 inline mr-2" />
                  {currentContent.time}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {currentContent.timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 text-sm border rounded-lg transition-all duration-200 ${
                        selectedTime === time
                          ? 'border-punto-rosa-primary bg-punto-rosa-primary text-white'
                          : 'border-spa-soft-primary/30 hover:border-punto-rosa-primary/50'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-text-deep-primary flex items-center gap-2">
                <User className="w-5 h-5" />
                {currentContent.personalInfo}
              </h3>

              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder={currentContent.name}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-3 border border-spa-soft-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-punto-rosa-primary/50"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder={currentContent.phone}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full p-3 border border-spa-soft-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-punto-rosa-primary/50"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder={currentContent.email}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-3 border border-spa-soft-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-punto-rosa-primary/50"
                  />
                </div>

                <div>
                  <textarea
                    placeholder={currentContent.notes}
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    rows={3}
                    className="w-full p-3 border border-spa-soft-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-punto-rosa-primary/50 resize-none"
                  />
                </div>
              </div>

              {/* Booking Buttons */}
              <div className="space-y-3">
                <Button
                  onClick={handleBooking}
                  className="w-full hover:shadow-lg rounded-full"
                  style={{
                    backgroundColor: '#e399a3'
                  }}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  {currentContent.bookNow}
                </Button>

                <Button
                  onClick={handleWhatsAppBooking}
                  variant="outline"
                  className="w-full border-green-500 text-green-600 hover:bg-green-50"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {currentContent.whatsappBooking}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSystem;