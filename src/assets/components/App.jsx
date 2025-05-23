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
  const [noEncontrado, setNoEncontrado] = useState(false);


  useEffect(() => {
    if (productos.length > 0) {
      console.log("Lista de productos actualizada:", productos);
    }
  }, [productos]);

  const handleAgregarProducto = useCallback((nuevoProducto) => {
    setProductos(prevProductos => [...prevProductos, nuevoProducto]);
  }, []);

  const deshabilitarProducto = useCallback((termino) => {
  let fueDesactivado = false;
  setProductos(prevProductos =>
    prevProductos.map(producto => {
      const idMatch = producto.id.toString() === termino;
      const nombreMatch = producto.nombre.toLowerCase() === termino.toLowerCase();
      if ((idMatch || nombreMatch) && producto.estado !== false) {
        fueDesactivado = true;
        return { ...producto, estado: false };
      }
      return producto;
    })
  );
  return fueDesactivado;
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
    const marcaMatch = producto.marca && producto.marca.toLowerCase().includes(termino.toLowerCase());

    return (idMatch || nombreMatch || marcaMatch) && producto.estado === true;
  });
  
  setNoEncontrado(resultado.length === 0);
  setResultados(resultado);
}, [productos]);
const resetNoEncontrado = () => setNoEncontrado(false);

 
   return (
     <> 
      <main className='contenedor-formularios'>
          <ProductForm onAddProduct={handleAgregarProducto} />
          <SearchResults buscarProducto={buscarProducto} resultados={resultados}noEncontrado={noEncontrado}resetNoEncontrado={resetNoEncontrado} />
          <ProductDelete onDelete={deshabilitarProducto} />
          <ProductEdit products={productos} onUpdate={actualizarProducto} />
          <ProductList productos={productos} />
      </main>
     </>
   )
 }
 export default App