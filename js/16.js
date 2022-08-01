// Funciones Javascript
// Declaracion de una funcion

function sumar(){
    console.log(10 + 10);

}

sumar();

//Expresion de la función

const sumar2 = function(){
    console.log(3 + 3);
}

sumar2();

// IIFE
// esta es una funcion que se manda a llamar a ella misma.
(function() {
    console.log("Esto es una función");
})();