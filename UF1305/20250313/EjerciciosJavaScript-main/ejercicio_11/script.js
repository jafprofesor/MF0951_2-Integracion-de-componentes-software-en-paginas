// EJERCICIO 11: Evento mouseover
// Enunciado: Cuando el usuario pase el mouse sobre el div, su color debe cambiar.

// PASOS:
// 1. Seleccionar el div con document.getElementById.
// 2. Agregar un event listener al div para detectar el evento 'mouseover'.
// 3. Dentro del evento, cambiar el color de fondo del div.
// 4. Agregar otro event listener para 'mouseout' que restaure el color original.

/* verdsion primera
let contenedor = document.getElementById('caja');
contenedor.style.cssText = 'width:50%; height: 200px;margin:0 auto;background:tomato;line-height: 10rem;';

contenedor.addEventListener('mouseover', function (){
    contenedor.style.backgroundColor = 'khaki';
});

contenedor.addEventListener('mouseout', function () {
    contenedor.style.backgroundColor = 'tomato';
})
*/

// opcion con un if else

let contenedor = document.getElementById('caja');
contenedor.style.cssText = 'width:40%; height: 300px;margin:0 auto;background:tomato;line-height: 15rem;';

contenedor.addEventListener('mouseover', cambiarFondo);
contenedor.addEventListener('mouseout', cambiarFondo);

function cambiarFondo (event) {
    if (event.type === 'mouseover') {
        contenedor.style.background = 'khaki';
    }
    else if (event.type === 'mouseout') {
        contenedor.style.background = 'tomato';
    }
}
