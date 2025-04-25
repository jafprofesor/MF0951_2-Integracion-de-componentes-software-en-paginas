// EJERCICIO 1: Modificar contenido
// Enunciado: Cuando el usuario presione el botón, el texto dentro del <p> debe cambiar.

// PASOS:
// 1. Seleccionar el botón y el párrafo con document.getElementById.
// 2. Agregar un event listener al botón para detectar el evento 'click'.
// 3. Dentro del evento, modificar la propiedad textContent del párrafo.

let cambiarTexto = document.getElementById('boton'); //seleccionamos el id del elemento
cambiarTexto.textContent = 'pulsa aquí (nuevo texto)'; //cambiamos con textContent el contenido del boton