//Agregar un producto: desde un formulario, se completan los datos y se guarda el producto.
//LUCIA
import React, { useState } from 'react';
import Item from './ProductItem';

function ProductForm({ onAddProduct }) {
  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('');
  const [precioUnitario, setPrecioUnitario] = useState('');
  const [descuento, setDescuento] = useState('');
  const [stock, setStock] = useState('');
  const [estado, setEstado] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !precioUnitario || !stock) {
      alert('Por favor, completa el nombre, precio unitario y stock.');
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

    const datos = {
      nombre,
      marca,
      precioUnitario: precioNum,
      descuento: descuentoNum,
      stock: stockNum,
      estado,
    };
    const nuevoProducto = Item(datos); //aqui hacemos el llamada a Item pasandole los datos que tenemos en const datos

    onAddProduct(nuevoProducto);

    setNombre('');
    setMarca('');
    setPrecioUnitario('');
    setDescuento('');
    setStock('');
    setEstado('');
  };

  return (
    <div className="formulario">
      
      <h2 className='titulo'>Agregar Nuevo Producto</h2>

      <form onSubmit={handleSubmit} >
        <div>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="marca">Marca:</label>
            <input
              type="text"
              id="marca"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              required
            />
          </div>
          <div>
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
          <div>
            <label htmlFor="descuento">Descuento (%):</label>
            <input type="number" id="descuento" value={descuento} onChange={(e) => setDescuento(e.target.value)} min="0" max="100" />
          </div>
          <div>
            <label htmlFor="stock">Stock:</label>
            <input type="number" id="stock" value={stock} onChange={(e) => setStock(e.target.value)} required />
          </div>
        </div>

        <div>
          <button type="submit" className='boton'>Agregar Producto</button>
        </div>
        </form>
      
      
    </div>
  );
}

export default ProductForm;












