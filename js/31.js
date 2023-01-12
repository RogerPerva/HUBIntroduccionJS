
//document.querySelector selecciona el documento y dentro del parentesis escribimos lo que seleccionara

const boton = document.querySelector('#boton');
//seleccionamos el elemento al cual le vamos a poner el evento, en este caso le agreamo una funcion al evento o cuando se realice el click en el boton
boton.addEventListener('click', function(){
    //Notification es nativa de JS, ya maneja el resolve y el reject por default.
    Notification.requestPermission()
        .then(resultado=> console.log(`El resultado es: ${resultado}`));

});

if(Notification.permission == 'granted'){
        new Notification('Esta es una notificacion',{
            icon:'img/ccj.png',
            body: 'Codigo con Juan'
        })
}