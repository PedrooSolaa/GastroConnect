import React, { useState, useEffect } from 'react';

const Administracion = () => {
  const [estadisticas, setEstadisticas] = useState({
    totalReservas: 342,
    clientesRegistrados: 128,
    recetasDisponibles: 45,
    puntuacionPromedio: 4.8,
    ingresosEsteMes: 12500,
    ocupacionPromedio: 87,
    resenasTotal: 156,
    platosPopulares: [
      { nombre: 'Paella de Marisco', ordenes: 89 },
      { nombre: 'Filete a la Pimienta', ordenes: 76 },
      { nombre: 'Lubina al Horno', ordenes: 65 },
      { nombre: 'Croquetas de Jamón', ordenes: 58 },
      { nombre: 'Tiramisú', ordenes: 52 }
    ],
    horariosPopulares: [
      { hora: '13:00 - 13:30', porcentaje: 95 },
      { hora: '13:30 - 14:00', porcentaje: 98 },
      { hora: '20:00 - 20:30', porcentaje: 92 },
      { hora: '20:30 - 21:00', porcentaje: 89 },
      { hora: '21:00 - 21:30', porcentaje: 78 }
    ]
  });

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <h1 className="text-4xl font-bold text-gold mb-12 text-center">
          Estadísticas del Restaurante
        </h1>

        {/* Grid de estadísticas principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Tarjeta: Total de Reservas */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gold/30 hover:border-gold transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-2">Total de Reservas</p>
                <p className="text-3xl font-bold text-gold">{estadisticas.totalReservas}</p>
              </div>
              <i className="fa-solid fa-calendar-check text-gold text-4xl opacity-30"></i>
            </div>
            <p className="text-gray-500 text-xs mt-4">Este mes</p>
          </div>

          {/* Tarjeta: Clientes Registrados */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gold/30 hover:border-gold transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-2">Clientes Registrados</p>
                <p className="text-3xl font-bold text-gold">{estadisticas.clientesRegistrados}</p>
              </div>
              <i className="fa-solid fa-users text-gold text-4xl opacity-30"></i>
            </div>
            <p className="text-gray-500 text-xs mt-4">Plataforma activa</p>
          </div>

          {/* Tarjeta: Recetas Disponibles */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gold/30 hover:border-gold transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-2">Recetas Disponibles</p>
                <p className="text-3xl font-bold text-gold">{estadisticas.recetasDisponibles}</p>
              </div>
              <i className="fa-solid fa-book text-gold text-4xl opacity-30"></i>
            </div>
            <p className="text-gray-500 text-xs mt-4">En la carta</p>
          </div>

          {/* Tarjeta: Puntuación Promedio */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gold/30 hover:border-gold transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-2">Puntuación Promedio</p>
                <p className="text-3xl font-bold text-gold">{estadisticas.puntuacionPromedio}</p>
              </div>
              <i className="fa-solid fa-star text-gold text-4xl opacity-30"></i>
            </div>
            <p className="text-gray-500 text-xs mt-4">De 5.0 estrellas</p>
          </div>

          {/* Tarjeta: Ingresos Este Mes */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gold/30 hover:border-gold transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-2">Ingresos Este Mes</p>
                <p className="text-3xl font-bold text-gold">${estadisticas.ingresosEsteMes.toLocaleString()}</p>
              </div>
              <i className="fa-solid fa-euro-sign text-gold text-4xl opacity-30"></i>
            </div>
            <p className="text-gray-500 text-xs mt-4">Ingresos totales</p>
          </div>

          {/* Tarjeta: Ocupación Promedio */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gold/30 hover:border-gold transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-2">Ocupación Promedio</p>
                <p className="text-3xl font-bold text-gold">{estadisticas.ocupacionPromedio}%</p>
              </div>
              <i className="fa-solid fa-chair text-gold text-4xl opacity-30"></i>
            </div>
            <p className="text-gray-500 text-xs mt-4">Del aforo disponible</p>
          </div>
        </div>

        {/* Sección de Platos Populares */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Platos Populares */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gold/30">
            <h2 className="text-2xl font-bold text-gold mb-6 flex items-center gap-2">
              <i className="fa-solid fa-fire"></i>
              Platos Populares
            </h2>
            <div className="space-y-4">
              {estadisticas.platosPopulares.map((plato, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-gold text-black font-bold rounded-full w-8 h-8 flex items-center justify-center">
                      {index + 1}
                    </div>
                    <p className="text-white">{plato.nombre}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gold h-2 rounded-full" 
                        style={{ width: `${(plato.ordenes / 100) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-gold font-semibold w-12 text-right">{plato.ordenes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Horarios Populares */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gold/30">
            <h2 className="text-2xl font-bold text-gold mb-6 flex items-center gap-2">
              <i className="fa-solid fa-clock"></i>
              Horarios Populares
            </h2>
            <div className="space-y-4">
              {estadisticas.horariosPopulares.map((horario, index) => (
                <div key={index} className="flex items-center justify-between">
                  <p className="text-white text-sm font-semibold">{horario.hora}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gold h-2 rounded-full" 
                        style={{ width: `${horario.porcentaje}%` }}
                      ></div>
                    </div>
                    <p className="text-gold font-semibold w-12 text-right">{horario.porcentaje}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sección de Reseñas */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gold/30">
          <h2 className="text-2xl font-bold text-gold mb-6 flex items-center gap-2">
            <i className="fa-solid fa-comments"></i>
            Reseñas y Opiniones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <p className="text-gray-400 text-sm mb-2">Total de Reseñas</p>
              <p className="text-3xl font-bold text-gold">{estadisticas.resenasTotal}</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <p className="text-gray-400 text-sm mb-2">Puntuación Promedio</p>
              <div className="text-2xl text-gold mb-2">
                {[...Array(Math.floor(estadisticas.puntuacionPromedio))].map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
                {estadisticas.puntuacionPromedio % 1 !== 0 && (
                  <i className="fa-solid fa-star-half-stroke"></i>
                )}
              </div>
              <p className="text-gold font-semibold">{estadisticas.puntuacionPromedio}/5.0</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <p className="text-gray-400 text-sm mb-2">Tasa de Satisfacción</p>
              <p className="text-3xl font-bold text-gold">96%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Administracion;
