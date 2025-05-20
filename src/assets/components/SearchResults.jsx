
import React, { useMemo } from "react";
import SearchBar from "./SearchBar";

function SearchResults({ buscarProducto, resultados, noEncontrado, resetNoEncontrado }) {
  const renderedResults = useMemo(() => {
    if (resultados.length === 0) return null;

    return (
      <section>
        <h3 className="titulo">Resultados de Búsqueda</h3>
        <ul>
          {resultados.map((producto) => (
            <li key={producto.id}>
              ID: {producto.id} - {producto.nombre} - Marca: {producto.marca} - Precio: ${producto.precioUnitario} - 
              Descuento: {producto.descuento}% - Precio Final: ${producto.precioConDescuento.toFixed(2)} - 
              Stock: {producto.stock} - Estado: {producto.estado ? "Activo" : "Inactivo"}
            </li>
          ))}
        </ul>
      </section>
    );
  }, [resultados]);

  return (
    <div className="formulario">
      <SearchBar onSearch={buscarProducto} noEncontrado={noEncontrado} onInputChange={resetNoEncontrado} />
      {renderedResults}
    </div>
  );
}

export default SearchResults;