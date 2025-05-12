import { useState, useEffect, useCallback } from 'react'
import ProductForm from './ProductForm'
import '../css/Estilos.css'

 
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
      <main className='container'>
          <ProductForm onAddProduct={handleAgregarProducto} />
          <aside className='aside'>
            <h2 className='titulo'>Lista de Productos Agregados</h2>
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
          </aside>
      </main>
     </>
   )
 }
 export default App