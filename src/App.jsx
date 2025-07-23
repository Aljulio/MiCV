import React from 'react';
import './index.css';

// Importamos los componentes de contenido
import Personal from './components/Personal';
import Objetivo from './components/Objetivo';
import Formacion from './components/Formacion';
import Experiencia from './components/Experiencia';
import Habilidades from './components/Habilidades';
import Portafolio from './components/Portafolio';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* SECCIÓN DEL ENCABEZADO (HEADER) */}
      <header className="main-header">
        <div className="container header-content">
            <div className="header-text-container">
                <h1>Julio Alberto Hernández Morales</h1> 
                <p className="lead">Bachiller en Ciencias y Letras con Orientación en Electricidad</p>
            </div>
            <div className="header-photo-container">
                <img src="/images/mi-foto-perfil.jpg" alt="Foto de Julio Alberto Hernández Morales" className="img-fluid" id="foto-encabezado" />
            </div>
        </div>
      </header>

      {/* Aquí empieza la sección principal de contenido */}
      <main className="container my-5">
        {/*
          Esta es la sección para la lista "Mi hoja de vida" y su título.
          El centrado lo controlaremos desde index.css en la clase .main-content-nav
        */}
        <div className="main-content-nav text-center mb-5">
          <h2 className="mi-hoja-de-vida-title">Mi hoja de vida</h2> 
          <ul>
            <li><a href="#personal">Personal</a></li>
            <li><a href="#objetivo">Objetivo</a></li>
            <li><a href="#formacion">Formacion</a></li>
            <li><a href="#experiencia">Experiencia</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#portafolio">Portafolio</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        
        <hr className="my-5" style={{marginTop: '3rem'}}/> 

        {/* Aquí es donde se renderizan tus componentes de contenido */}
        <Personal />
        <hr />
        <Objetivo />
        <hr />
        <Formacion />
        <hr />
        <Experiencia />
        <hr />
        <Habilidades />
        <hr />
        <Portafolio />
        <hr />
        <Contacto />
      </main>

      <Footer />
    </>
  );
}

export default App;