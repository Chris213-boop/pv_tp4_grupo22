//Eliminar un producto: opción para borrar productos de la lista.
//PABLO

import { useState } from 'react';

function ProductDelete({ onDelete }) {
  const [nombre, setNombre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() === '') return;
    onDelete(nombre); // Llama a App.jsx
    setNombre(''); // Limpia el input
  };

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div>
          <h2 className='titulo'>Eliminar Producto por Descripción</h2>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre del producto"
          />
        </div>
        <div>
          <button type="submit" className='boton'>Eliminar</button>
        </div>
    </form>
    </div>
    
  );
}

export default ProductDelete;

