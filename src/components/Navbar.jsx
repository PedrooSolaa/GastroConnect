import React from 'react';

const Navbar = ({ darkMode = false, onLoginClick, onCartaClick, onHomeClick, onResenaClick, onDisponibilidadClick, onAdministracionClick }) => {
  return (
    <header>
      <nav className={`fixed top-0 w-full py-4 pr-4 flex justify-between items-center z-[1000] flex-wrap ${darkMode ? 'bg-black' : 'bg-transparent'}`}>
        {/* Logo */}
        <div className={`flex items-center gap-2 text-lg font-bold text-white tracking-wide px-4 py-2 ${darkMode ? 'bg-black' : 'bg-black/70 backdrop-blur-md rounded'}`}>
          <i className="fa-solid fa-utensils text-gold text-2xl"></i>
          <span>LOGO</span>
        </div>

        {/* Menu central */}
        <ul className="flex list-none gap-12 absolute left-1/2 -translate-x-1/2 max-md:static max-md:translate-x-0 max-md:gap-6 max-md:flex-wrap max-md:justify-center max-md:mt-4">
          <li>
            <button 
              onClick={onHomeClick}
              className="text-white no-underline text-sm font-semibold tracking-[2px] transition-colors hover:text-gold bg-black/70 backdrop-blur-md px-4 py-2 inline-block rounded-full cursor-pointer border-none"
            >
              HOME
            </button>
          </li>
          <li>
            <button 
              onClick={onDisponibilidadClick}
              className="text-white no-underline text-sm font-semibold tracking-[2px] transition-colors hover:text-gold bg-black/70 backdrop-blur-md px-4 py-2 inline-block rounded-full cursor-pointer border-none"
            >
              DISPONIBILIDAD
            </button>
          </li>
          <li>
            <button 
              onClick={onCartaClick}
              className="text-white no-underline text-sm font-semibold tracking-[2px] transition-colors hover:text-gold bg-black/70 backdrop-blur-md px-4 py-2 inline-block rounded-full cursor-pointer border-none"
            >
              CARTA
            </button>
          </li>
          <li>
            <button 
              onClick={onResenaClick}
              className="text-white no-underline text-sm font-semibold tracking-[2px] transition-colors hover:text-gold bg-black/70 backdrop-blur-md px-4 py-2 inline-block rounded-full cursor-pointer border-none"
            >
              RESEÑAS
            </button>
          </li>
          <li>
            <button 
              onClick={onAdministracionClick}
              className="text-white no-underline text-sm font-semibold tracking-[2px] transition-colors hover:text-gold bg-black/70 backdrop-blur-md px-4 py-2 inline-block rounded-full cursor-pointer border-none"
            >
              ADMINISTRACIÓN
            </button>
          </li>
        </ul>

        {/* Botón de login */}
        <button 
          onClick={onLoginClick}
          className="bg-gold text-black px-8 py-3 border-none rounded-full text-sm font-bold tracking-wide cursor-pointer transition-all hover:bg-gold-dark hover:scale-105 mr-8 max-md:mr-0 max-md:mt-4"
        >
          INICIAR SESIÓN
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
