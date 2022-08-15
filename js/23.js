const metodoPago ='tarjeta';

switch(metodoPago){
    case 'tarjeta': 
        console.log('Pagaste con tarjeta'); 
        break;
    case 'cheque':
        console.log('Revisaremos los fondos primero');
        break;
    case 'efectivo':
        console.log('pagaste con efectivo');
        break;
    default:
        console.log('Aun no has pagado'); 
        break;
}