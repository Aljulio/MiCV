import React from 'react'; // Necesario para que JSX funcione correctamente

function Formacion() {
  return (
    <section id="formacion" className="mb-5 p-4 bg-white rounded shadow-sm">
        <h2 className="text-primary mb-4">Estudios Realizados</h2>
        
        {/* Nivel Primario */}
        <p>
            <strong>Nivel Primario</strong><br />
            Escuela Oficial Rural Mixta Cantón el Milagro, Chiquimulilla Santa Rosa.
        </p>
        
        {/* Nivel Básico */}
        <p>
            <strong>Nivel Básico</strong><br />
            Instituto Federico de Jesús Morales Pivaral, Chiquimulilla Santa Rosa.
        </p>
        
        {/* Nivel Diversificado */}
        <p>
            <strong>Nivel Diversificado</strong><br />
            Bachiller en Ciencias y Letras con Orientación en Electricidad<br />
            Instituto Theodore Schultz, Chiquimulilla Santa Rosa.
        </p>
        
        {/* Universidad */}
        <p>
            <strong>Universidad</strong><br />
            Ingeniería en Sistemas de Información y Ciencias de la Computación (Actual)<br />
            Universidad Mariano Gálvez de Guatemala<br />
            2022 - Presente
        </p>
        
    </section>
  );
}

export default Formacion; // Exporta el componente para poder usarlo en otros archivos