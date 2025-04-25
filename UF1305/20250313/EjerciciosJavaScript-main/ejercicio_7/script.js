// EJERCICIO 7: Obtener y modificar valores de input
// Enunciado: El usuario escribe en un input y, al presionar el botón, el texto se muestra en un párrafo.

// PASOS:
// 1. Seleccionar el input, el botón y el párrafo con document.getElementById.
// 2. Agregar un event listener al botón para detectar 'click'.
// 3. En el evento, asignar el valor del input al texto del párrafo.

/*let input = document.getElementById ('input');
let boton = document.getElementById ('buton');

boton.addEventListener ('click', () => {
    document.getElementById('resultado').textContent = input.value;
});*/

let input = document.getElementById ('input');
let boton = document.getElementById ('boton');

boton.addEventListener( 'click', () => {
    document.getElementById ('resultado').textContent = input.value;
});

/*
let input = document.getElementById ('input');
let boton = document.getElementById ('boton');
let resultado = document.getElementById ('resultado');

boton.addEventListener( 'click', () => {
    let texto = input.value;
    resultado.textContent = texto;
}); */