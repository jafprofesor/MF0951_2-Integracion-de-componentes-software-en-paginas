// EJERCICIO 12: Evento keydown
// Enunciado: Cuando el usuario escriba en el input, el texto debe reflejarse en un párrafo.

// PASOS:
// 1. Seleccionar el input y el párrafo con document.getElementById.
// 2. Agregar un event listener al input para detectar 'keydown'.
// 3. En el evento, actualizar el texto del párrafo con el valor del input.

let input = document.getElementById('entrada');
let parrafo = document.getElementById('resultado');
parrafo.style.cssText = 'width:40%;border: 2px solid tomato; margin:1rem auto; height:200px;padding:1rem;';

input.addEventListener('keydown', function () {
    parrafo.textContent = input.value;
})