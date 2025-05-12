import { useState, useEffect, useCallback } from 'react'
import ProductForm from './ProductForm'
import '../css/Estilos.css'
import ProductDelete from './ProductDelete'
import ProductEdit from './ProductEdit';

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

  const eliminarProducto = useCallback((descripcionABuscar) => {
  setProductos(prevProductos =>
    prevProductos.filter(producto => producto.descripcion.toLowerCase() !== descripcionABuscar.toLowerCase())
  );
  }, []);

   const actualizarProducto = useCallback((productoActualizado) => {
  setProductos(prevProductos =>
      prevProductos.map(producto =>
        producto.id === productoActualizado.id ? { ...producto, ...productoActualizado } : producto
      )
    );
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
            <ProductDelete onDelete={eliminarProducto} />
          </aside>

 <article className='article'>
          <ProductEdit products={productos} onUpdate={actualizarProducto} />
        </article>

      </main>
     </>
   )
 }
 export default App