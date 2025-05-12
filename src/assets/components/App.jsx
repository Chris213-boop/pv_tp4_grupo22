import { useState, useEffect, useCallback } from 'react'
import ProductForm from './ProductForm'
 
 function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    if (productos.length > 0) {
      console.log("Lista de productos actualizada:", productos);
    }
  }, [productos]);

  const handleAgregarProducto = useCallback((nuevoProducto) => {
    setProductos(prevProductos => [...prevProductos, nuevoProducto]);
  }, []);
 
   return (
     <> 
      <header>
        <h1>Gestión de Productos - GRUPO 22 PROGRAMACION VISUAL</h1>
      </header>
      <main>
        <ProductForm onAddProduct={handleAgregarProducto} />
        <section className="product-list-display">
          <h2>Lista de Productos Agregados</h2>
          {productos.length === 0 ? (
            <p>Aún no hay productos. ¡Agrega uno!</p>
          ) : (
            <ul>
              {productos.map(producto => (
                <li key={producto.id}>
                  {producto.descripcion} - Precio: ${producto.precioUnitario} - Descuento: {producto.descuento}% - Precio Final: ${producto.precioConDescuento.toFixed(2)} - Stock: {producto.stock}
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
     </>
   )
 }
 export default App