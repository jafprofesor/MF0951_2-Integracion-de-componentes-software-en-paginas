// EJERCICIO 9: Contador de clics
// Enunciado: Cada vez que el usuario haga clic en el botón, el contador debe aumentar.

// PASOS:
// 1. Seleccionar el botón con document.getElementById.
// 2. Agregar un event listener al botón para detectar 'click'.
// 3. En el evento, incrementar una variable contador y actualizar el texto del botón.


/* version 1
let boton = document.getElementById('contador');
let contador = 0;

boton.addEventListener('click', function () {
    contador++;
    boton.textContent = `Nº de Clicks: ${contador}`;
})
*/

//version 2, con contenedor externo
let boton = document.getElementById('contador');//seleccionamos el boton por su ID
boton.textContent = 'Pulsa aquí para ver el contador de click'; //cambiamos texto del boton
let contador = 0; //variable contador, lo ponemos a cero
let contadorDiv = document.createElement ('div'); //creamos un elemento div
document.body.appendChild(contadorDiv); //lo colocamos en el body

//estilo del div
contadorDiv.style.cssText = 'margin:1rem auto;border: 2px solid tomato; padding:1rem; width:20%;';

//funcion para el boton y el incremento
boton.addEventListener('click', () => { //boton con escuchador al hacer click
    contador++; //incrementamos el contador
    contadorDiv.textContent = `Nº de click: ${contador}`; //en el div creado inserttamos texto con la variable del contador
});
