/// POO: Programacion orientada a objetos


/** Object Literal */

const producto = {
    nombre: "tablet",
    precio: 500
}

/* Object Constructor */

function Producto(nombre, precio, disponible){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const producto2 = new Producto('Monitor curvo de 49"', 800, true);
const producto3 = new Producto('Laptop de 49"', 500, true);
const producto4 = new Producto('Pantalla inteligente', 1000, true);

console.log(producto2);
console.log(producto3);
console.log(producto4);