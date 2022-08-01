//Arreglos o Arrays

const numeros = [10, 20, 30, 40, 50];


const arreglo = ["Hola", 10, true, "si", null, {nombre:"Juan", trabajo: "programador"}, [1,2,3]];
console.log(arreglo); 

//-------------------------Acceder a los valores de un arreglo.

// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);
// console.log(numeros[5]);


//--------------------------Conocer la extension de un arreglo
// console.log(meses.length);

// numeros.forEach(function(numero){
//     console.log(numero);

// })  
//---------- Agregar elementos a los array
//---------- Utilizaremos .push para poner elementos al final
numeros.push(70,80);
numeros[5] = 60;

//------------ Utilizaremos .unshift al inicio del arreglo.
numeros.unshift(-10,-20,-30);

console.table(numeros);

//-------- Eliminar elementos de un arreglo
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril','Mayo'];
meses.pop();
meses.shift();
meses.splice(2, 1); //escogemos el indicie del arreglo y el 1 significa que solo borrara un elemento.

console.table(meses);

// Rest Operator o Spread Operator, para poder agregar elementos, copiamos el arreglo de meses y le agreagamos "junio"
const nuevoArreglo = [...meses, 'Junio']
console.log(nuevoArreglo);

