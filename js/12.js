// "use strict", lo que va a hacer es que ejecutara el codigo de JS de forma estricta de manera que siga las 'buenas practicas'
// "use strict"
//Objetos
const producto = {
    nombreProducto : "Monitor 20\"",
    precio : 300,
    disponible : true
}
//Utilizamos freeze para congelar el objeto y que sus caracteristicas no puedan ser modificadas.
// Object.freeze no te permite ni eliminar ni agregar propiedades al objeto, ni modificar.

Object.freeze(producto);

producto.imagen = 'imagen.jpg';
delete producto.precio;
producto.precio = "nuevo precio";

//¿Como sabemos si un objeto esta congelado?
// Con la funcion de 'isFrozen'
console.log(Object.isFrozen(producto));
console.log(producto);

//////////////////////// Object.seal
//La funcion de Object.seal te permite congelar de igual forma que freeze, pero este si te permite modificar las propiedades.
const producto2 = {
    nombreProducto : "Monitor 20\"",
    precio : 300,
    disponible : true
}
Object.seal(producto2);

producto2.imagen = 'imagen.jpg';
delete producto2.precio;
producto2.precio = "nuevo precio";

//La funcion de Object.seal te permite congelar de igual forma que freeze, pero este si te permite modificar las propiedades.


console.log(producto2);