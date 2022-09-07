/// POO: Programacion orientada a objetos


/** Object Literal */

const producto = {
    nombre: "tablet",
    precio: 500
}

/* Object Constructor */

function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function(){
    return `El cliente ${this.nombre} ${this.apellido}`;
}
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}
// Prototype nos permite crear funciones que solo se utilizan en un objeto especifico.
Producto.prototype.formatearProducto = function(producto){
    return `El producto ${this.nombre} tiene un precio de: $${this.precio}`;
}
//Creamos los objetos:
const producto2 = new Producto('Monitor curvo de 49"', 800, true);
const producto3 = new Producto('Laptop', 500, true);
const cliente = new Cliente('Rogelio', 'Perez');

function formatearProducto(producto){
    return `El producto ${producto.nombre} tiene un precio de: $${producto.precio}`;
}

console.log(cliente);
console.log(producto2);
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());


