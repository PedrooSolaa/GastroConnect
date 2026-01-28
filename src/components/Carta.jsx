import React from 'react';

const Carta = ({ onCrearRecetaClick }) => {
  const entrantes = [
    { nombre: "Nombre del plato (ingredientes)", precio: "Precio €" },
    { nombre: "Nombre del plato (ingredientes)", precio: "Precio €" },
    { nombre: "Nombre del plato (ingredientes)", precio: "Precio €" }
  ];

  const primeros = [
    { nombre: "Nombre del plato (ingredientes)", precio: "Precio €" },
    { nombre: "Nombre del plato (ingredientes)", precio: "Precio €" },
    { nombre: "Nombre del plato (ingredientes)", precio: "Precio €" }
  ];

  const segundos = [
    { nombre: "Nombre del plato (ingredientes)", precio: "Precio €" },
    { nombre: "Nombre del plato (ingredientes)", precio: "Precio €" },
    { nombre: "Nombre del plato (ingredientes)", precio: "Precio €" }
  ];

  const postres = [
    { nombre: "Nombre del plato (ingredientes)", precio: "Precio €" },
    { nombre: "Nombre del plato (ingredientes)", precio: "Precio €" },
    { nombre: "Nombre del plato (ingredientes)", precio: "Precio €" }
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Imagen de fondo */}
      <img 
        src="/img/img3.jpeg" 
        alt="Comida del restaurante" 
        className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
      />
      
      {/* Contenido */}
      <div className="relative z-10 h-screen flex items-center justify-center px-8 py-24">
        <div className="max-w-7xl w-full bg-black/80 backdrop-blur-sm rounded-2xl p-12">
          {/* Título principal */}
          <h1 className="text-white text-5xl font-bold text-center mb-4">CARTA</h1>
          
          {/* Botón Crea tu receta */}
          <div className="text-center mb-8">
            <button
              onClick={onCrearRecetaClick}
              className="bg-gold text-black px-8 py-3 rounded-full text-base font-bold tracking-wide hover:bg-gold-dark transition-all hover:scale-105"
            >
              CREA TU RECETA
            </button>
          </div>
          
          <div className="w-full grid grid-cols-2 gap-x-12 gap-y-6">
            {/* Entrantes - Imagen a la derecha */}
            <div className="relative">
              <h2 className="text-gold text-xl font-semibold mb-3">Entrantes</h2>
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-gold rounded-[30px] py-4 px-6">
                  <div className="space-y-2">
                    {entrantes.map((plato, index) => (
                      <div key={index} className="flex justify-between items-center text-black text-sm">
                      <span>{plato.nombre}</span>
                      <span className="font-semibold">{plato.precio}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Círculo decorativo */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-b from-sky-200 to-lime-500 flex-shrink-0 overflow-hidden">
                <div className="w-full h-2/3 bg-sky-200 relative">
                  <div className="absolute bottom-0 left-1/4 w-10 h-6 bg-white rounded-full opacity-80"></div>
                </div>
                <div className="w-full h-1/3 bg-lime-500"></div>
              </div>
            </div>
          </div>

          {/* Primeros - Imagen a la derecha */}
          <div className="relative">
            <h2 className="text-gold text-xl font-semibold mb-3">Primeros</h2>
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-gold rounded-[30px] py-4 px-6">
                <div className="space-y-2">
                  {primeros.map((plato, index) => (
                    <div key={index} className="flex justify-between items-center text-black text-sm">
                      <span>{plato.nombre}</span>
                      <span className="font-semibold">{plato.precio}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Círculo decorativo */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-b from-sky-200 to-lime-500 flex-shrink-0 overflow-hidden">
                <div className="w-full h-2/3 bg-sky-200 relative">
                  <div className="absolute bottom-0 left-1/4 w-10 h-6 bg-white rounded-full opacity-80"></div>
                </div>
                <div className="w-full h-1/3 bg-lime-500"></div>
              </div>
            </div>
          </div>

          {/* Segundos - Imagen a la derecha */}
          <div className="relative">
            <h2 className="text-gold text-xl font-semibold mb-3">Segundos</h2>
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-gold rounded-[30px] py-4 px-6">
                <div className="space-y-2">
                  {segundos.map((plato, index) => (
                    <div key={index} className="flex justify-between items-center text-black text-sm">
                      <span>{plato.nombre}</span>
                      <span className="font-semibold">{plato.precio}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Círculo decorativo */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-b from-sky-200 to-lime-500 flex-shrink-0 overflow-hidden">
                <div className="w-full h-2/3 bg-sky-200 relative">
                  <div className="absolute bottom-0 left-1/4 w-10 h-6 bg-white rounded-full opacity-80"></div>
                </div>
                <div className="w-full h-1/3 bg-lime-500"></div>
              </div>
            </div>
          </div>

          {/* Postres - Imagen a la derecha */}
          <div className="relative">
            <h2 className="text-gold text-xl font-semibold mb-3">Postres</h2>
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-gold rounded-[30px] py-4 px-6">
                <div className="space-y-2">
                  {postres.map((plato, index) => (
                    <div key={index} className="flex justify-between items-center text-black text-sm">
                      <span>{plato.nombre}</span>
                      <span className="font-semibold">{plato.precio}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Círculo decorativo */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-b from-sky-200 to-lime-500 flex-shrink-0 overflow-hidden">
                <div className="w-full h-2/3 bg-sky-200 relative">
                  <div className="absolute bottom-0 left-1/4 w-10 h-6 bg-white rounded-full opacity-80"></div>
                </div>
                <div className="w-full h-1/3 bg-lime-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Puntos decorativos */}
        <div className="absolute bottom-8 right-8 flex flex-col gap-3">
          <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Carta;
