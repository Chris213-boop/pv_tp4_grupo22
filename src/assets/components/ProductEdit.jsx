//Modificar un producto: seleccionando uno de la lista, se pueden cambiar sus datos.
//DARDO

import { useState } from 'react';

function ProductEdit({ products, onUpdate }) {
  const [selectedId, setSelectedId] = useState('');
  const [precioUnitario, setPrecioUnitario] = useState('');
  const [descuento, setDescuento] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedId) return;

    const precioNum = parseFloat(precioUnitario);
    const descuentoNum = parseFloat(descuento || 0);
    const stockNum = parseInt(stock, 10);

    if (isNaN(precioNum) || precioNum <= 0 || isNaN(descuentoNum) || descuentoNum < 0 || descuentoNum > 100 || isNaN(stockNum) || stockNum < 0) {
      alert("Revisa que los valores ingresados sean correctos.");
      return;
    }

    const precioConDescuento = precioNum * (1 - descuentoNum / 100);

    onUpdate({
      id: selectedId,
      precioUnitario: precioNum,
      descuento: descuentoNum,
      precioConDescuento,
      stock: stockNum
    });

    setSelectedId('');
    setPrecioUnitario('');
    setDescuento('');
    setStock('');
  };

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit} >
      <h2 className='titulo'>Editar Producto</h2>
      
      <div>
        <label htmlFor="producto">Selecciona un producto:</label>
        <select
          id="producto"
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
        >
          <option value="">-- Elige un producto --</option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.descripcion}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="precioUnitario">Nuevo Precio Unitario:</label>
        <input
          type="number"
          id="precioUnitario"
          value={precioUnitario}
          onChange={(e) => setPrecioUnitario(e.target.value)}
          step="0.01"
        />
      </div>

      <div>
        <label htmlFor="descuento">Nuevo Descuento (%):</label>
        <input
          type="number"
          id="descuento"
          value={descuento}
          onChange={(e) => setDescuento(e.target.value)}
          min="0"
          max="100"
        />
      </div>

      <div>
        <label htmlFor="stock">Nuevo Stock:</label>
        <input
          type="number"
          id="stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
      </div>

      <div>
        <button type="submit" className="boton">Guardar Cambios</button>
      </div>
    </form>
    </div>
  );
}

export default ProductEdit;