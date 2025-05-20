//Buscar un producto: mediante una barra de búsqueda (por descripción o ID).
//MAXIMILIANO
import React, { useState, useCallback } from 'react';

const SearchBar = React.memo(function SearchBar({ onSearch, noEncontrado, onInputChange  }) {
  const [termino, setTermino] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    onSearch(termino.trim());
    setTermino('');
  }, [termino, onSearch]);

  const handleChange = useCallback((e) => {
     const nuevoValor = e.target.value;
    setTermino(nuevoValor);
    onInputChange();
    setTermino(e.target.value);
  }, [onInputChange]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Buscar producto por ID, Nombre o Marca:</h2>
        <label htmlFor="busqueda">ID, Nombre o Marca:</label>
        <input
          id="busqueda"
          type="text"
          value={termino}
          onChange={handleChange}
          placeholder="Ej: 101, 'camisa' o 'MarcaX'"
        />
        <div>
          <button type="submit" className="boton">Buscar</button>
        </div>

      </form>

      {noEncontrado && (
        <p >
          No se encontró el producto buscado.
        </p>
      )}
    </div>
  );
});


export default SearchBar;












