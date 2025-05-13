//para representar cada producto individual.


function Item ({descripcion, precioUnitario, descuento, stock }){
    //Nuevo Producto
    return {
        id: Date.now().toString(),
        descripcion,
        precioUnitario,
        descuento,
        precioConDescuento: precioUnitario * (1 - descuento / 100),
        stock,
    };
}

export default Item;
