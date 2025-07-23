import React from 'react';

function Contacto() {
  return (
    <section id="contacto" className="mb-5 p-4 bg-white rounded shadow-sm">
        <h2 className="text-primary mb-4">Contacto</h2>
        <p><strong>Teléfono:</strong> 59079563</p>
        <p><strong>Email:</strong> julioalbertoh79@gmail.com</p>
        {/* La línea de LinkedIn ha sido eliminada */}
        <p><strong>GitHub:</strong> <a href="https://github.com/ajulio" target="_blank" rel="noopener noreferrer">Perfil de GitHub</a></p>
    </section>
  );
}

export default Contacto;