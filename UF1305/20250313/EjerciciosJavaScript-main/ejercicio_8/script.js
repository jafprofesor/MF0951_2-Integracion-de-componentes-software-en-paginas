// EJERCICIO 8: Almacenar datos en localStorage
// Enunciado: Guardar el nombre ingresado en un input y mostrarlo al recargar la página.

// PASOS:
// 1. Seleccionar el input, el botón y el párrafo con document.getElementById.
// 2. Agregar un event listener al botón para detectar 'click'.
// 3. En el evento, almacenar el valor del input en localStorage.
// 4. Al cargar la página, recuperar el valor y mostrarlo en el párrafo.

let textoInput = document.getElementById('nombre');
let boton = document.getElementById('guardar');
let parrafo = document.getElementById('saludo');

boton.addEventListener('click', () => { //escuchador del boton
    let nombre = textoInput.value; // variable nombre que recupera value del input
    localStorage.setItem ('nombreGuardado', nombre); //lo de local storage, van por pares clave,valor
    parrafo.textContent = `Nombre Guardado: ${nombre}`; //recuperamos nombre, input
});

window.addEventListener('load', () => {
    let nombreGuardado = localStorage.getItem('nombreGuardado') //variable que con localStorage obtenemos values
    if (nombreGuardado) { //si existe value de la variable, lo mostramos con textContent
       parrafo.textContent = 'El nombre guardado es: ' + nombreGuardado;
    }   
   })

