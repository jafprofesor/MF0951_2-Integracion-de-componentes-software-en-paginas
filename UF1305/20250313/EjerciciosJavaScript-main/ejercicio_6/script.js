// EJERCICIO 6: Alternar clases con classList
// Enunciado: Al hacer clic en el botón, se debe alternar una clase en el div que cambie su color.

// PASOS:
// 1. Seleccionar el div y el botón con document.getElementById.
// 2. Agregar un event listener al botón para detectar 'click'.
// 3. Dentro del evento, usar classList.toggle para alternar una clase CSS.

let divCaja = document.getElementById('caja');
let botonCambiar = document.getElementById('boton');

botonCambiar.addEventListener( 'click', () => {
    divCaja.classList.toggle('verde');
});