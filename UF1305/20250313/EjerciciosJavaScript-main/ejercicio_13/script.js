// EJERCICIO 13: Evento dblclick
// Enunciado: Cuando el usuario haga doble clic en el botón, un mensaje debe mostrarse.

// PASOS:
// 1. Seleccionar el botón y el párrafo con document.getElementById.
// 2. Agregar un event listener al botón para detectar 'dblclick'.
// 3. Dentro del evento, cambiar el texto del párrafo con un mensaje.

let boton = document.getElementById('dobleClick');
let parrafo = document.getElementById('mensaje');

boton.addEventListener('dblclick', function () {
    parrafo.textContent = 'Has dado doble click en el botón';
    alert('Desde Alert-dobleClick'); //prueba segundo comportamiento del evento
})