import React from "react";
import SearchBar from "./SearchBar";

function SearchResults ({buscarProducto, resultados}) {
    return (
        <div className="formulario">
            <SearchBar onSearch={buscarProducto} />
            {resultados.length > 0 && (
            <section>
                <h3 className="titulo">Resultados de Búsqueda</h3>
                <ul>
                    {resultados.map(producto => (
                        <li key={producto.id}>
                          ID: {producto.id} - {producto.descripcion} - Precio: ${producto.precioUnitario} - Descuento: {producto.descuento}% - Precio Final: ${producto.precioConDescuento.toFixed(2)} - Stock: {producto.stock}
                        </li>
                    ))}
                </ul>
            </section>
            
            
            )}
            
        </div>
    );
}


export default SearchResults;