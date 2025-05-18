// para mostrar la lista de productos.
import React from "react";

function ProductList ({productos}) {
    return(
        <div className="lista">
            <h2 className='titulo'>Lista de Productos Agregados</h2>
            {productos.length === 0 ? (
              <p>Aún no hay productos. ¡Agrega uno!</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Marca</th>
                    <th>Precio Unitario</th>
                    <th>Descuento</th>
                    <th>Precio Final</th>
                    <th>Stock</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {productos.map(producto => (
                    <tr key={producto.id}>
                      <td>{producto.id}</td>
                      <td>{producto.nombre}</td>
                      <td>{producto.marca}</td>
                      <td>${producto.precioUnitario}</td>
                      <td>{producto.descuento}%</td>
                      <td>${producto.precioConDescuento.toFixed(2)}</td>
                      <td>{producto.stock}</td>
                      <td>{producto.estado}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
        </div>
    );
}

export default ProductList;