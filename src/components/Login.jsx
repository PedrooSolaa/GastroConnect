import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log('Login:', { email, password });
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Imagen de fondo */}
      <img 
        src="/img/img2.jpeg" 
        alt="Interior del restaurante" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Contenido del formulario */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-32">
        <div className="w-full max-w-md bg-black/80 backdrop-blur-sm rounded-2xl p-12">
          {/* Título */}
          <h1 className="text-white text-5xl font-bold text-center mb-12">
            Iniciar sesión
          </h1>
          
          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo Email */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 bg-white text-black text-lg placeholder-gray-500 border-none outline-none"
              required
            />
            
            {/* Campo Password */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 bg-white text-black text-lg placeholder-gray-500 border-none outline-none"
              required
            />
            
            {/* Link olvidar contraseña */}
            <div className="text-center">
              <a href="#" className="text-gold hover:text-gold-dark transition-colors">
                ¿Olvidaste la contraseña?
              </a>
            </div>
            
            {/* Botón Iniciar Sesión */}
            <button
              type="submit"
              className="w-full bg-gold text-black py-4 rounded-full text-lg font-bold tracking-wider hover:bg-gold-dark transition-all transform hover:-translate-y-0.5 shadow-lg"
            >
              INICIAR SESIÓN
            </button>
          </form>
          
          {/* Sección de registro */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <span className="text-gold text-lg">¿No eres miembro?</span>
            <button
              className="bg-gold text-black px-8 py-3 rounded-full text-base font-bold hover:bg-gold-dark transition-all"
            >
              REGÍSTRATE
            </button>
          </div>
        </div>
        
        {/* Footer */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-white text-sm bg-black/50 inline-block px-6 py-3">
            Restaurante GastroConnect 2026 · Política de privacidad
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
