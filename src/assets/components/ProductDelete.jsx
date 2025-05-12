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
    <form onSubmit={handleSubmit}>
      <h3>Eliminar Producto por Descripción</h3>
      <input
        type="text"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        placeholder="Descripción del producto"
      />
      <button type="submit">Eliminar</button>
    </form>
  );
}

export default ProductDelete;

