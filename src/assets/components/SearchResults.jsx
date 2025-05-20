
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
              ID : {producto.id}<br />
              Nombre : {producto.nombre}<br />
              Marca : {producto.marca}<br />
              Precio : ${producto.precioUnitario}<br />
              Descuento : {producto.descuento}%<br />
              Precio Final : ${producto.precioConDescuento.toFixed(2)}<br />
              Stock : {producto.stock}<br />
              Estado : {producto.estado ? "Activo" : "Inactivo"}
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