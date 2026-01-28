import React, { useState } from 'react';

const SubeReceta = () => {
  const [nombrePlato, setNombrePlato] = useState('');
  const [receta, setReceta] = useState('');
  const [imagen, setImagen] = useState(null);

  const handleImagenChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImagen(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Receta enviada:', { nombrePlato, receta, imagen });
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
        <div className="max-w-3xl w-full bg-black/90 backdrop-blur-sm rounded-2xl p-12">
          {/* Encabezado */}
          <p className="text-white text-center text-lg mb-4">¿Quieres que prueben tu creación?</p>
          <h1 className="text-white text-5xl font-bold text-center mb-12">SUBE TU RECETA</h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Foto del plato */}
            <div>
              <label className="text-white text-lg block text-center mb-4">FOTO DEL PLATO TERMINADO</label>
              <div className="relative max-w-xl mx-auto">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImagenChange}
                  className="hidden"
                  id="imagen-upload"
                />
                <label 
                  htmlFor="imagen-upload"
                  className="block w-full aspect-video bg-gradient-to-b from-sky-200 to-lime-500 rounded-3xl cursor-pointer overflow-hidden relative"
                >
                  {imagen ? (
                    <img src={imagen} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-full h-2/3 bg-sky-200 relative flex items-end justify-center pb-8">
                          <div className="w-32 h-20 bg-white rounded-full opacity-80"></div>
                        </div>
                        <div className="w-full h-1/3 bg-lime-500"></div>
                      </div>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Nombre del plato */}
            <div>
              <label className="text-white text-lg block text-center mb-4">NOMBRE DEL PLATO</label>
              <input
                type="text"
                value={nombrePlato}
                onChange={(e) => setNombrePlato(e.target.value)}
                className="w-full px-6 py-3 bg-white/10 text-white text-center border-2 border-white/30 rounded-lg outline-none focus:border-gold transition-colors"
                placeholder="Nombre del plato"
                required
              />
            </div>

            {/* Receta */}
            <div>
              <label className="text-white text-lg block text-center mb-4">Receta (con pasos)</label>
              <textarea
                value={receta}
                onChange={(e) => setReceta(e.target.value)}
                rows="6"
                className="w-full px-6 py-4 bg-white/10 text-white border-2 border-white/30 rounded-lg outline-none focus:border-gold transition-colors resize-none"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a enim nec nisl ullamcorper eleifend. Praesent risus leo, fringilla et nulla at, egestas euismod orci. Suspendisse porttitor diam eu condimentum aliquam."
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
        </div>
      </div>
    </section>
  );
};

export default SubeReceta;
