//Promises

const usuarioAutenticado = new Promise( (resolve, reject) =>{
    const auth=false;

    if(auth){
        //resolve se ejecuta cuando el promise se cumple.
        resolve('Usuario Autenticado');
    }else{
        //reject se ejecuta cuando no se cumple.
        reject('No se pudo inciar sesion');
        //Ambas son funciones.
    }
});
//funtioon
usuarioAutenticado
        .then(function(resultado){
            console.log(resultado)
        })
        .catch(function(error){
            console.log(error)
        });
//Arrow funtion
    usuarioAutenticado
    .then(resultado=> console.log(resultado))
    .catch(error => console.log(error))

//En los promises existen 3 valores posibles.
// Pending: No se ha cumplido pero tampoco se ha rechazado.
// Fulfilled: Ya se cumplio.
// Reject: es cuando se ha rechazado o no se pudo cumplir

