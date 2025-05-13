//Eliminar un producto: opción para borrar productos de la lista.
//PABLO

import { useState } from 'react';

function ProductDelete({ onDelete }) {
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (descripcion.trim() === '') return;
    onDelete(descripcion); // Llama a App.jsx
    setDescripcion(''); // Limpia el input
  };

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div>
          <h2 className='titulo'>Eliminar Producto por Descripción</h2>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Descripción del producto"
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

