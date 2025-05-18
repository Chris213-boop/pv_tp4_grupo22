import { useState, useEffect, useCallback } from 'react'
import ProductForm from './ProductForm'
import '../css/Estilos.css'
import ProductDelete from './ProductDelete'
import ProductEdit from './ProductEdit';
import SearchResults from './SearchResults';
import ProductList from './ProductList';

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

  const eliminarProducto = useCallback((nombreABuscar) => {
  setProductos(prevProductos =>
    prevProductos.filter(producto => producto.nombre.toLowerCase() !== nombreABuscar.toLowerCase())
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
    const nombreMatch = producto.nombre.toLowerCase().includes(termino.toLowerCase());
    return idMatch || nombreMatch;
  });
  setResultados(resultado);
}, [productos]);

 
   return (
     <> 
      <main className='contenedor-formularios'>
          <ProductForm onAddProduct={handleAgregarProducto} />
          <SearchResults buscarProducto={buscarProducto} resultados={resultados} />
          <ProductDelete onDelete={eliminarProducto} />
          <ProductEdit products={productos} onUpdate={actualizarProducto} />
          <ProductList productos={productos} />
      </main>
     </>
   )
 }
 export default App