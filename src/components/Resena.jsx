import React, { useState } from 'react';

const Resena = () => {
  const [nombrePlato, setNombrePlato] = useState('');
  const [rating, setRating] = useState(0);
  const [comentario, setComentario] = useState('');
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reseña enviada:', { nombrePlato, rating, comentario });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Imagen de fondo */}
      <img 
        src="/img/img2.jpeg" 
        alt="Interior del restaurante" 
        className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
      />
      
      {/* Contenido */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-2xl w-full bg-black/90 backdrop-blur-sm rounded-2xl p-12">
          {/* Encabezado */}
          <p className="text-white text-center text-lg mb-4">Valora los platos de los demás</p>
          <h1 className="text-white text-5xl font-bold text-center mb-12">Deja tu reseña</h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Nombre del plato con imagen */}
            <div>
              <label className="text-white text-lg block text-center mb-4">Nombre del plato</label>
              <div className="max-w-md mx-auto">
                {/* Imagen decorativa del plato */}
                <div className="w-full aspect-[2/1] bg-gradient-to-b from-sky-200 to-lime-500 rounded-3xl mb-4 overflow-hidden relative">
                  <div className="w-full h-3/5 bg-sky-200 relative flex items-end justify-center pb-4">
                    <div className="w-24 h-16 bg-white rounded-full opacity-80"></div>
                  </div>
                  <div className="w-full h-2/5 bg-lime-500"></div>
                </div>
              </div>
            </div>

            {/* Sistema de estrellas */}
            <div className="flex justify-center gap-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <svg
                    className="w-12 h-12"
                    fill={(hoveredRating || rating) >= star ? "#D4AF37" : "none"}
                    stroke="#D4AF37"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </button>
              ))}
            </div>

            {/* Comentario */}
            <div>
              <label className="text-white text-lg block text-center mb-4">Comentario</label>
              <textarea
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                rows="4"
                className="w-full px-6 py-4 bg-white/10 text-white border-2 border-white/30 rounded-lg outline-none focus:border-gold transition-colors resize-none"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                required
              />
            </div>

            {/* Botón enviar */}
            <button
              type="submit"
              className="w-full bg-gold text-black py-4 rounded-full text-lg font-bold tracking-wider hover:bg-gold-dark transition-all transform hover:-translate-y-0.5 shadow-lg"
            >
              ENVIAR
            </button>
          </form>

          {/* Puntos decorativos */}
          <div className="flex justify-end gap-3 mt-8">
            <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resena;
