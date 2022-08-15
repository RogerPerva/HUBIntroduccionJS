const carrito=[
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Television 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];  


// ForEach
    // Se ejecuataran una vez por cada elemento que hay en el arreglo
carrito.forEach(producto=>console.log(producto.nombre));

// Map
    //Map crea un nuevo arreglo y si solamente se va a mostrar la informacion de lo que tenga dentro un arreglo, utilizaremos FOREACH
    // ForEach solo sirve para iterar o mostrar
    
    // Map nos sirve para mostrar o iterar, pero tambien nos va a crear un nuevo arreglo
// carrito.map(producto=>console.log(producto.nombre));

const arreglo2 = carrito.map(producto=>`${producto.nombre} - ${producto.precio}`);

console.log(arreglo2);