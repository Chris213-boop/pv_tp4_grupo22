//para representar cada producto individual.


function Item ({nombre, marca, precioUnitario, descuento, stock, estado }){
    //Nuevo Producto
    return {
        id: Date.now().toString(),
        nombre,
        marca,
        precioUnitario,
        descuento,
        precioConDescuento: precioUnitario * (1 - descuento / 100),
        stock,
        estado,
    };
}

export default Item;
