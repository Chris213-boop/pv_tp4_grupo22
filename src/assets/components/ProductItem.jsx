//para representar cada producto individual.


let idCounter = 0;

function Item (descripcion, precioUnitario, descuento, precioConDescuento, stock, fechaIncorporacion ){
    //Nuevo Producto
    return {
        id: ++idCounter,  //id unico
        descripcion,
        precioUnitario,
        descuento,
        precioConDescuento,
        stock,
        fechaIncorporacion
    };
}

export default Item;
