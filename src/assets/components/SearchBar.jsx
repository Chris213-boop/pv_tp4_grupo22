//Buscar un producto: mediante una barra de búsqueda (por descripción o ID).
//MAXIMILIANO
import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [termino, setTermino] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(termino.trim());
    setTermino('');
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <label htmlFor="busqueda">Buscar producto por ID o descripción:</label>
      <input
        id="busqueda"
        type="text"
        value={termino}
        onChange={(e) => setTermino(e.target.value)}
        placeholder="Ej: 101 o 'camisa'"
      />
      <button type="submit" className="boton">Buscar</button>
    </form>
  );
}

export default SearchBar;












