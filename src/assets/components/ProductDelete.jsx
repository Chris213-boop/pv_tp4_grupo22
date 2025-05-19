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
      <form onSubmit={handleSubmit}>
        <div>
          <h2 className='titulo'>Eliminar Producto por ID</h2>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="ID del producto"
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

