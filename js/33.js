

function obtenerEmpleados(){
    const archivo='empleados.json';
    //  Hazle fetch al archivo y luego (.then)
    fetch(archivo) 
        .then(resultado =>{
            console.log(resultado);
        } )

}

obtenerEmpleados();