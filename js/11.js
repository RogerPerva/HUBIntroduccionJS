//Objetos
const producto = {
    nombreProducto : "Monitor 20\"",
    precio : 300,
    disponible : true
}

//Forma antigua de hacerlo.
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

// Destructuring obj ect.
// Sacar de una estructura.
//Siempre se utilizan las llaves
const {precio, nombreProducto}= producto;


console.log(precio);
console.log(nombreProducto);
