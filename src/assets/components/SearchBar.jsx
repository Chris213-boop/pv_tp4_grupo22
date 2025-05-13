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
    <div>
      <form onSubmit={handleSubmit} >
        <h2> Buscar producto por ID o descripción: </h2>
        <label htmlFor="busqueda">ID o descripción:</label>
          <input
            id="busqueda"
            type="text"
            value={termino}
            onChange={(e) => setTermino(e.target.value)}
            placeholder="Ej: 101 o 'camisa'"
          />
        <div>
          <button type="submit" className="boton">Buscar</button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;












