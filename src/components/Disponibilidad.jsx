import React, { useState } from 'react';

const Disponibilidad = () => {
  // Estado inicial de las mesas (true = libre, false = ocupada)
  const [mesas, setMesas] = useState([
    { id: 1, libre: true },
    { id: 2, libre: false },
    { id: 3, libre: true },
    { id: 4, libre: true },
    { id: 5, libre: false },
    { id: 6, libre: true }
  ]);

  const mesasLibres = mesas.filter(mesa => mesa.libre).length;
  const mesasOcupadas = mesas.filter(mesa => !mesa.libre).length;

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Imagen de fondo */}
      <img 
        src="/img/img4.jpeg" 
        alt="Restaurante" 
        className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
      />
      
      {/* Contenido */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-5xl w-full bg-black/85 backdrop-blur-sm rounded-2xl p-12">
          {/* Título */}
          <h1 className="text-white text-5xl font-bold text-center mb-4">DISPONIBILIDAD</h1>
          <p className="text-white/80 text-center text-lg mb-12">Estado actual de las mesas del restaurante</p>
          
          {/* Estadísticas */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-white/20">
              <div className="text-gold text-4xl font-bold mb-2">6</div>
              <div className="text-white text-sm tracking-wide">TOTAL MESAS</div>
            </div>
            <div className="bg-green-500/20 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-green-500/40">
              <div className="text-green-400 text-4xl font-bold mb-2">{mesasLibres}</div>
              <div className="text-white text-sm tracking-wide">MESAS LIBRES</div>
            </div>
            <div className="bg-red-500/20 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-red-500/40">
              <div className="text-red-400 text-4xl font-bold mb-2">{mesasOcupadas}</div>
              <div className="text-white text-sm tracking-wide">MESAS OCUPADAS</div>
            </div>
          </div>

          {/* Grid de mesas */}
          <div className="grid grid-cols-3 gap-8">
            {mesas.map((mesa) => (
              <div
                key={mesa.id}
                className={`relative rounded-2xl p-8 text-center transition-all ${
                  mesa.libre
                    ? 'bg-green-500/20 border-2 border-green-500/40 hover:bg-green-500/30'
                    : 'bg-red-500/20 border-2 border-red-500/40'
                }`}
              >
                {/* Icono de mesa */}
                <div className="flex justify-center mb-4">
                  <svg 
                    className={`w-20 h-20 ${mesa.libre ? 'text-green-400' : 'text-red-400'}`}
                    fill="currentColor" 
                    viewBox="0 0 512 512"
                  >
                    <path d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/>
                  </svg>
                </div>

                {/* Número de mesa */}
                <div className="text-white text-2xl font-bold mb-2">Mesa {mesa.id}</div>
                
                {/* Estado */}
                <div className={`text-lg font-semibold ${mesa.libre ? 'text-green-400' : 'text-red-400'}`}>
                  {mesa.libre ? 'LIBRE' : 'OCUPADA'}
                </div>

                {/* Indicador visual */}
                <div className="mt-4 flex justify-center">
                  <div className={`w-4 h-4 rounded-full ${mesa.libre ? 'bg-green-400' : 'bg-red-400'} animate-pulse`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Leyenda */}
          <div className="flex justify-center gap-8 mt-12">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              <span className="text-white text-sm">Disponible</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-red-400 rounded-full"></div>
              <span className="text-white text-sm">Ocupada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disponibilidad;
