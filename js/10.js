//Objetos

const nombreProducto="Monitor 20\"";
const precio = 300;
const disponible =  true;

//La manera en que se crean los objetos es por medio de las llaves y utilizando en lugar de signo de igual, se utilizan los dos puntos
// y se separa cada valor por medio de una coma
const producto = {
    nombreProducto : "Monitor 20\"",
    precio : 300,
    disponible : true
}

// //De esta forma es que accedemos a las variables del objeto
// console.log(producto.precio);
// //Esta es otra forma de poder acceder a la variable del objeto.
// console.log(producto["precio"]);

//agregar propiedades
producto.imagen = 'imagen.jpg';

//Eliminar propieades del objeto
delete producto.disponible;


console.log(producto);
