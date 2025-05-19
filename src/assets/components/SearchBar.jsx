//Buscar un producto: mediante una barra de búsqueda (por descripción o ID).
//MAXIMILIANO
import React, { useState, useCallback } from 'react';

const SearchBar = React.memo(function SearchBar({ onSearch }) {
  const [termino, setTermino] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    onSearch(termino.trim());
    setTermino('');
  }, [termino, onSearch]);

  const handleChange = useCallback((e) => {
    setTermino(e.target.value);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Buscar producto por ID o Nombre:</h2>
        <label htmlFor="busqueda">ID o Nombre:</label>
        <input
          id="busqueda"
          type="text"
          value={termino}
          onChange={handleChange}
          placeholder="Ej: 101 o 'camisa'"
        />
        <div>
          <button type="submit" className="boton">Buscar</button>
        </div>
      </form>
    </div>
  );
});
}

export default SearchBar;












