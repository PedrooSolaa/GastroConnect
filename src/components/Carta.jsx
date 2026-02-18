import React, { useState, useEffect } from 'react';

const Carta = ({ onCrearRecetaClick }) => {
  const [recetas, setRecetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState({});
  const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

  useEffect(() => {
    // Obtener recetas de la API
    fetch(`${apiBaseUrl}/platos`)
      .then(response => response.json())
      .then(data => {
        setRecetas(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar platos:', error);
        setLoading(false);
      });
  }, [apiBaseUrl]);

  // Filtrar recetas por categoría
  const entrantes = recetas.filter(r => r.categoria === 'entrantes');
  const primeros = recetas.filter(r => r.categoria === 'primeros');
  const segundos = recetas.filter(r => r.categoria === 'segundos');
  const postres = recetas.filter(r => r.categoria === 'postres');

  // Función para manejar likes
  const toggleLike = (id) => {
    setLikes(prevLikes => ({
      ...prevLikes,
      [id]: !prevLikes[id]
    }));
  };

  if (loading) {
    return (
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="text-white text-2xl">Cargando carta...</div>
      </section>
    );
  }

  return (
    <section className="relative w-full overflow-x-hidden">
      {/* Imagen de fondo */}
      <img 
        src="/img/img3.jpeg" 
        alt="Comida del restaurante" 
        className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
      />
      
      {/* Contenido */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-8 py-24">
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
          
          <div className="w-full grid grid-cols-4 gap-6">
            {recetas.map((plato) => (
              <div key={plato.id} className="bg-gold rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-105">
                {/* Imagen del plato con botón de like */}
                <div className="relative">
                  <img 
                    src={plato.imagen} 
                    alt={plato.nombre}
                    className="w-full h-40 object-cover"
                  />
                  <button
                    onClick={() => toggleLike(plato.id)}
                    className="absolute top-2 right-2 bg-black/70 hover:bg-black rounded-full p-2 transition-all"
                  >
                    <span className="text-xl">{likes[plato.id] ? '❤️' : '🤍'}</span>
                  </button>
                </div>
                {/* Contenido del card */}
                <div className="p-4 bg-black">
                  <h3 className="text-gold text-lg font-bold mb-2">{plato.nombre}</h3>
                  <p className="text-white text-xs mb-3">{plato.ingredientes.join(' - ')}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold text-lg">{plato.precio.toFixed(2)} €</span>
                    <span className="text-gold text-xs font-semibold">{plato.categoria.toUpperCase()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Carta;
