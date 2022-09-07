
const boton = document.querySelector('#boton');

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