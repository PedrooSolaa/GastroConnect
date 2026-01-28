import React from 'react';

const Hero = ({ onReservarClick }) => {
  return (
    <main>
      <section className="relative h-screen w-full overflow-hidden">
        {/* Imagen de fondo */}
        <img 
          src="/img/img1.jpeg" 
          alt="Interior del restaurante" 
          className="w-full h-full object-cover brightness-[0.8]"
        />
        
        {/* Contenido superpuesto */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-[2]">
          {/* Caja del título */}
          <div className="bg-white/95 py-8 px-16 mb-8 inline-block max-md:py-6 max-md:px-8">
            <h1 className="text-6xl font-black text-black tracking-[8px] m-0 max-md:text-3xl max-md:tracking-[4px]">
              GASTROCONNECT
            </h1>
          </div>
          
          {/* Botón de reserva */}
          <button 
            onClick={onReservarClick}
            className="bg-gold text-black px-12 py-4 border-none rounded-full text-base font-bold tracking-[2px] cursor-pointer transition-all shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:bg-gold-dark hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(212,175,55,0.6)] max-md:px-8 max-md:py-3 max-md:text-sm"
          >
            RESERVAR MESA
          </button>
        </div>
      </section>
    </main>
  );
};

export default Hero;
