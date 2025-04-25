// EJERCICIO 19: Evento de contexto (clic derecho)
// Enunciado: Cuando el usuario haga clic derecho sobre el párrafo, mostrar un mensaje.

// PASOS:
// 1. Seleccionar el párrafo con document.getElementById.
// 2. Agregar un event listener al párrafo para detectar 'contextmenu'.
// 3. En el evento, usar preventDefault() para evitar el menú del navegador.
// 4. Mostrar un mensaje en un alert.

let parrafo = document.getElementById('contexto');

parrafo.addEventListener('contextmenu', function (evento)  {
evento.preventDefault();
alert ('Has hecho click derecho en el texto');
});