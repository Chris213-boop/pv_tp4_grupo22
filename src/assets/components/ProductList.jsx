// para mostrar la lista de productos.
import React from "react";

function ProductList({ productos }) {
  // Separar productos activos e inactivos
  const productosActivos = productos.filter(p => p.estado === true);
  const productosInactivos = productos.filter(p => p.estado === false);

  const Tabla = (lista, titulo) => (
    <div className="lista">
      <h2 className="titulo">{titulo}</h2>
      {lista.length === 0 ? (
        <p>No hay productos en esta categoría.</p>
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
            {lista.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.marca}</td>
                <td>${producto.precioUnitario}</td>
                <td>{producto.descuento}%</td>
                <td>${producto.precioConDescuento.toFixed(2)}</td>
                <td>{producto.stock}</td>
                <td>{producto.estado ? 'Activo' : 'Inactivo'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );

  return (
    <>
      {Tabla(productosActivos, '📦 Productos Activos')}
      {Tabla(productosInactivos, '🗃️ Productos Inactivos')}
    </>
  );
}

export default ProductList;