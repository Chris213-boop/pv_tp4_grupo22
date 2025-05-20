//Eliminar un producto: opción para borrar productos de la lista.
//PABLO

import { useState } from 'react';

function ProductDelete({ onDelete }) {
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id.trim() === '') return;

    const fueDesactivado = onDelete(id);

    if (fueDesactivado) {
      alert(`Producto con ID : ${id} ha sido Eliminado.`);
    } else {
      alert(`No se encontró un producto con ID :${id}.`);
    }

    setId('');
  };

  return (
    <div className="formulario">
      <h2 className='titulo'>Eliminar Producto por ID o Nombre</h2>
      <form onSubmit={handleSubmit}>
        <div className='contenido-formulario'>
          <label>ID o Nombre:</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="ID o nombre del producto"
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

