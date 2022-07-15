//Tipos de datos.

//String o cadena de texto
const producto = "Monitor de 20 pulgadas\"";
const producto2 = String('Monitor 30 pulgadas');
const producto3 = new String ('Monitor 50 pulgadas');

console.log(producto2);
console.log(producto);
console.log(producto3);
// console.log(typeof producto3); Podemos utilizar 'typeof' para saber el tipo de dato que tenemos en esa variable.

const tweet = "Aprendiendo JavaScript con el curso de Desarrikki web completo";
//Length es para saber el largo del String
console.log(tweet.length);

//IndexOf nos retorna la posicion.
//Nos sirve para saber si una cadena tiene la palabra que buscamos.
console.log(tweet.indexOf('JavaScript'));
console.log(producto2.indexOf('Tablet'));
//Si nos marca en la consola que tiene un valor de "-1" significa que no encontro la palabra que buscabamos.

//Includes retorna true o false.
console.log(tweet.includes('JavaScript'));
console.log(producto2.includes('Tablet'));

//Estos son algunos metodos o propiedades para las cadenas o Strings.