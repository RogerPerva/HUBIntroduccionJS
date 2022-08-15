// Palabra reservada THIS
//  Llaves como significativo de un objeto
// esta forma es la forma mas comun como ObjectLiteral
const reservacion = {
    nombre: 'Rogelio',
    apellido: 'Perez',
    total: 500,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`)
    }
}

// This hace referencia a las propiedades del objeto, tambien no podemos hacer uso de arrowfunction, si no unicamente del metodo
// "tradicional " de hacer funciones

const reservacion2 = {
    nombre: 'Ulises',
    apellido: 'Vazquez',
    total: 500,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`)
    }
}

reservacion.informacion();

reservacion2.informacion();


