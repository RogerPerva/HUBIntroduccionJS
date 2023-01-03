//Async / await 

function descargarNuevosClientes(){
    return new Promise(resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout( ()=>{
            resolve('Los clientes fueron descargados');
        }, 5000);
    });
}

function descargarUltimosClientes(){
    return new Promise(resolve => {
        console.log('Descargando pedidos... espere...');

        setTimeout( ()=>{
            resolve('Los pedidos fueron descargados');
        }, 5000);
    });
}


async function app(){
    try {
       //Con las siguientes lineas de codigo se ejecuta una y luego se ejecuta la otra, pero buscamos que se ejecuten las dos al mismo tiempo
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosClientes();
        // console.log(clientes);
        // console.log(pedidos);

        //Con las siguientes lineas de codigo ambas se ejecutan al mismo tiempo.
        const resultado = Promise.all([ descargarNuevosClientes(), descargarUltimosClientes() ]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        
        console.log(error);
    }
}

app();

console.log('Este codigo no se bloquea.');