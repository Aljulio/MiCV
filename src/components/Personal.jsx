import React from 'react';

const Personal = () => {
  return (
    <section id="personal" className="container my-5">
      <h2>Datos Personales</h2>
      <div className="personal-details-grid"> {/* Contenedor para la cuadrícula */}
        {/* Primera fila: Nombre Completo y Nacionalidad */}
        <div className="personal-item">
          <strong>Nombre Completo:</strong> Julio Alberto Hernández Morales
        </div>
        <div className="personal-item">
          <strong>Nacionalidad:</strong> Guatemalteco
        </div>

        {/* Segunda fila: Teléfono y Estado Civil */}
        <div className="personal-item">
          <strong>Teléfono:</strong> 59079563
        </div>
        <div className="personal-item">
          <strong>Estado Civil:</strong> Soltero
        </div>

        {/* Tercera fila: Correo electrónico y Edad */}
        <div className="personal-item">
          <strong>Correo electrónico:</strong> julioalbertoh79@gmail.com
        </div>
        <div className="personal-item">
          <strong>Edad:</strong> 23 años
        </div>

        {/* Cuarta fila: Dirección y DPI */}
        <div className="personal-item">
          <strong>Dirección:</strong> Barrio el Milagro, Chiquimulilla Santa Rosa
        </div>
        <div className="personal-item">
          <strong>DPI:</strong> 3086940660608
        </div>

        {/* Quinta fila: Fecha de Nacimiento y NIT */}
        <div className="personal-item">
          <strong>Fecha de Nacimiento:</strong> 05 de Julio de 2002
        </div>
        <div className="personal-item">
          <strong>NIT:</strong> 112228771
        </div>

        {/* Sexta fila (ancho completo): Lugar de Nacimiento */}
        <div className="personal-item full-width">
          <strong>Lugar de Nacimiento:</strong> Chiquimulilla, Santa Rosa
        </div>

        {/* Séptima fila (ancho completo): Profesión */}
        <div className="personal-item full-width">
          <strong>Profesión:</strong> Bachiller en Ciencias y Letras con Orientación en Electricidad
        </div>
      </div>
    </section>
  );
};

export default Personal;