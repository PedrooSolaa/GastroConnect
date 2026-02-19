import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContactReserva from './components/ContactReserva';
import Login from './components/Login';
import Carta from './components/Carta';
import SubeReceta from './components/SubeReceta';
import Resena from './components/Resena';
import Disponibilidad from './components/Disponibilidad';
import Administracion from './components/Administracion';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'reserva', 'login', 'carta', 'subereceta', 'resena', 'disponibilidad', 'administracion'

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar 
        darkMode={currentView === 'reserva' || currentView === 'carta' || currentView === 'login' || currentView === 'subereceta' || currentView === 'resena' || currentView === 'disponibilidad' || currentView === 'administracion'} 
        onLoginClick={() => setCurrentView('login')}
        onCartaClick={() => setCurrentView('carta')}
        onHomeClick={() => setCurrentView('home')}
        onResenaClick={() => setCurrentView('resena')}
        onDisponibilidadClick={() => setCurrentView('disponibilidad')}
        onAdministracionClick={() => setCurrentView('administracion')}
      />
      
      {currentView === 'home' && (
        <Hero onReservarClick={() => setCurrentView('reserva')} />
      )}
      
      {currentView === 'reserva' && (
        <ContactReserva />
      )}
      
      {currentView === 'login' && (
        <Login />
      )}
      
      {currentView === 'carta' && (
        <Carta onCrearRecetaClick={() => setCurrentView('subereceta')} />
      )}
      
      {currentView === 'subereceta' && (
        <SubeReceta />
      )}
      
      {currentView === 'resena' && (
        <Resena />
      )}
      
      {currentView === 'disponibilidad' && (
        <Disponibilidad />
      )}
      
      {currentView === 'administracion' && (
        <Administracion />
      )}
    </div>
  );
}

export default App;
