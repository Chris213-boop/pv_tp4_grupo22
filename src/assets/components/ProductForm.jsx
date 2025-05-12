//Agregar un producto: desde un formulario, se completan los datos y se guarda el producto.
//LUCIA
import React, { useState } from 'react';

function ProductForm({ onAddProduct }) {
  const [descripcion, setDescripcion] = useState('');
  const [precioUnitario, setPrecioUnitario] = useState('');
  const [descuento, setDescuento] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!descripcion || !precioUnitario || !stock) {
      alert('Por favor, completa la descripción, precio unitario y stock.');
      return;
    }

    const precioNum = parseFloat(precioUnitario);
    const descuentoNum = parseFloat(descuento || 0);
    const stockNum = parseInt(stock, 10);

    if (isNaN(precioNum) || precioNum <= 0) {
      alert('El precio unitario debe ser un número positivo.');
      return;
    }
    if (isNaN(descuentoNum) || descuentoNum < 0 || descuentoNum > 100) {
        alert('El descuento debe ser un número entre 0 y 100.');
        return;
    }
    if (isNaN(stockNum) || stockNum < 0) {
      alert('El stock debe ser un número entero no negativo.');
      return;
    }

    const nuevoProducto = {
      id: Date.now().toString(),
      descripcion,
      precioUnitario: precioNum,
      descuento: descuentoNum,
      precioConDescuento: precioNum * (1 - descuentoNum / 100),
      stock: stockNum,
    };

    onAddProduct(nuevoProducto);

    setDescripcion('');
    setPrecioUnitario('');
    setDescuento('');
    setStock('');
  };

  return (
    <div className='container'>
      <article className='article'>
      <h2 className='titulo'>Agregar Nuevo Producto</h2>

      <form onSubmit={handleSubmit} className="formulario">
        <div className='columnas'>
          
          <div className='grupo'>
            <label htmlFor="descripcion">Descripción:</label>
            <input
              type="text"
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
            />
          </div>
          <div className='grupo'>
            <label htmlFor="precioUnitario">Precio Unitario:</label>
            <input
              type="number"
              id="precioUnitario"
              value={precioUnitario}
              onChange={(e) => setPrecioUnitario(e.target.value)}
              step="0.01"
              required
            />
          </div>
          <div className='grupo'>
            <label htmlFor="descuento">Descuento (%):</label>
            <input type="number" id="descuento" value={descuento} onChange={(e) => setDescuento(e.target.value)} min="0" max="100" />
          </div>
          <div className='grupo'>
            <label htmlFor="stock">Stock:</label>
            <input type="number" id="stock" value={stock} onChange={(e) => setStock(e.target.value)} required />
          </div>
        </div>

        <footer className='footer'>
          <button type="submit" className='boton'>Agregar Producto</button>
        </footer>
        </form>
      </article>
      
    </div>
  );
}

export default ProductForm;












