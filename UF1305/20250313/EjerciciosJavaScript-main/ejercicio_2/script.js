// EJERCICIO 2: Modificar estilos
// Enunciado: Cuando el usuario haga clic en el botón, el color del párrafo cambiará.

// PASOS:
// 1. Seleccionar el botón y el párrafo con document.getElementById.
// 2. Agregar un event listener al botón para detectar el evento 'click'.
// 3. Modificar la propiedad style.color del párrafo.

let cambiarColor = document.getElementById('texto');
let boton = document.getElementById('boton');

boton.addEventListener('click', () => {
    cambiarColor.style.cssText="color:tomato; font-size:1.5rem;";
});