import { useState, useEffect, useCallback } from 'react'
import ProductForm from './ProductForm'
import '../css/Estilos.css'
import ProductDelete from './ProductDelete'
import SearchBar from './SearchBar';
import ProductEdit from './ProductEdit';

 function App() {
  const [productos, setProductos] = useState([]);
  const [resultados, setResultados] = useState([]);


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
  const buscarProducto = useCallback((termino) => {
  const resultado = productos.filter(producto => {
    const idMatch = producto.id.toString() === termino;
    const descMatch = producto.descripcion.toLowerCase().includes(termino.toLowerCase());
    return idMatch || descMatch;
  });
  setResultados(resultado);
}, [productos]);

 
   return (
     <> 
      <main className='container'>
          <ProductForm onAddProduct={handleAgregarProducto} />
          <aside className='aside'>
          <SearchBar onSearch={buscarProducto} />
          {resultados.length > 0 && (
          <section>
          <h3 className="titulo">Resultados de Búsqueda</h3>
        <ul>
          {resultados.map(producto => (
            <li key={producto.id}>
          {producto.descripcion} - Precio: ${producto.precioUnitario} - Descuento: {producto.descuento}% - Precio Final: ${producto.precioConDescuento.toFixed(2)} - Stock: {producto.stock}
          </li>
       ))}
      </ul>
    </section>
)}

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