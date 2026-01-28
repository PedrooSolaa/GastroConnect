import React, { useState } from 'react';

const ContactReserva = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [dateError, setDateError] = useState('');

  const validateDateTime = (dateTimeValue) => {
    if (!dateTimeValue) return '';
    
    const selectedDate = new Date(dateTimeValue);
    const dayOfWeek = selectedDate.getDay(); // 0 = Domingo, 1 = Lunes, etc.
    const hours = selectedDate.getHours();
    
    // Verificar si es lunes (día 1)
    if (dayOfWeek === 1) {
      return 'Lo sentimos, los lunes el restaurante está cerrado';
    }
    
    // Verificar horario (12:00 - 23:00)
    if (hours < 12 || hours >= 23) {
      return 'El horario de reservas es de 12:00 a 23:00';
    }
    
    return '';
  };

  const handleDateChange = (e) => {
    const error = validateDateTime(e.target.value);
    setDateError(error);
    if (error) {
      e.target.setCustomValidity(error);
    } else {
      e.target.setCustomValidity('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateTime = e.target.elements[0].value;
    const error = validateDateTime(dateTime);
    
    if (error) {
      setDateError(error);
      return;
    }
    
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <section id="contacto-reserva" className="relative min-h-screen w-full overflow-hidden">
      {/* Imagen de fondo */}
      <img 
        src="/img/img2.jpeg" 
        alt="Interior del restaurante" 
        className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
      />
      
      {/* Contenido superpuesto */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-7xl w-full bg-black/80 backdrop-blur-sm rounded-2xl p-12 my-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Lado izquierdo - Información de contacto */}
            <div className="text-white space-y-8">
            <div>
              <p className="text-sm tracking-wider mb-2">Localización</p>
              <h2 className="text-5xl font-bold mb-8">Te esperamos</h2>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Horario</h3>
              <p className="text-white/90">De Martes a Domingo, de 12:00h a 23:00h.</p>
            </div>

            <div className="border-t border-white/20 pt-8">
              <h3 className="text-lg font-semibold mb-2">Dirección</h3>
              <p className="text-gold text-lg">Calle de la Luna, 24, CP: 28004</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Teléfono</h3>
              <p className="text-gold text-lg">659 96 65 04</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:nombredelrestaurante@gmail.com" className="text-gold text-lg underline hover:text-gold-dark transition-colors">
                gastroconnect@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Redes sociales</h3>
              <a href="#" className="text-gold text-lg hover:text-gold-dark transition-colors">
                @GastroConnect
              </a>
            </div>
          </div>

          {/* Lado derecho - Formulario de reserva */}
          <div className="text-white">
            <h2 className="text-5xl font-bold mb-4">Haz una reserva</h2>
            <p className="text-white/90 mb-8">También puedes reservar por teléfono si lo prefieres.</p>

            {showMessage && (
              <div className="mb-6 bg-gold text-black px-6 py-4 rounded-lg text-center font-bold text-lg animate-pulse">
                Reserva Confirmada
              </div>
            )}

            {dateError && (
              <div className="mb-6 bg-red-600 text-white px-6 py-4 rounded-lg text-center font-semibold">
                {dateError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="datetime-local"
                placeholder="Indica el día y la hora"
                required
                min={new Date().toISOString().slice(0, 16)}
                onChange={handleDateChange}
                onInvalid={(e) => e.target.setCustomValidity('Por favor, indica el día y la hora de tu reserva')}
                onInput={(e) => {
                  e.target.setCustomValidity('');
                  setDateError('');
                }}
                className="w-full px-6 py-4 bg-white text-gray-800 placeholder-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-gold"
              />

              <input
                type="number"
                placeholder="Nº de comensales"
                required
                min="1"
                onInvalid={(e) => e.target.setCustomValidity('Por favor, indica el número de comensales')}
                onInput={(e) => e.target.setCustomValidity('')}
                className="w-full px-6 py-4 bg-white text-gray-800 placeholder-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-gold"
              />

              <input
                type="text"
                placeholder="Escribe tu nombre"
                required
                onInvalid={(e) => e.target.setCustomValidity('Por favor, escribe tu nombre')}
                onInput={(e) => e.target.setCustomValidity('')}
                className="w-full px-6 py-4 bg-white text-gray-800 placeholder-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-gold"
              />

              <input
                type="tel"
                placeholder="Tu teléfono"
                required
                pattern="[0-9]{9,15}"
                title="Por favor, introduce un número de teléfono válido (9-15 dígitos)"
                onInvalid={(e) => e.target.setCustomValidity('Por favor, introduce un número de teléfono válido')}
                onInput={(e) => e.target.setCustomValidity('')}
                className="w-full px-6 py-4 bg-white text-gray-800 placeholder-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-gold"
              />

              <button
                type="submit"
                className="w-full bg-gold text-black font-bold text-lg py-4 rounded-full hover:bg-gold-dark transition-all duration-300 hover:scale-[1.02]"
              >
                RESERVAR
              </button>
            </form>
          </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-gold/90 text-black py-4 px-8 text-center z-10">
        <p className="text-sm">
          Restaurante GastroConnect 2026 · <a href="#" className="underline hover:text-gray-700">Política de privacidad</a>
        </p>
      </div>
    </section>
  );
};

export default ContactReserva;
