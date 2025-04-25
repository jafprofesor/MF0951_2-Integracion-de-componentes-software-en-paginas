// EJERCICIO 18: Evento submit en formulario
// Enunciado: Cuando el usuario envíe el formulario, se debe mostrar un saludo con su nombre.

// PASOS:
// 1. Seleccionar el formulario y el párrafo con document.getElementById.
// 2. Agregar un event listener al formulario para detectar 'submit'.
// 3. En el evento, evitar la recarga de la página con preventDefault().
// 4. Obtener el valor del input y mostrarlo en el párrafo.

/*let miFormulario = document.getElementById('formulario'); //paso 1 seleccion formulario
let saludar = document.getElementById('saludo'); //paso 1A creamos la variable ddel saludo, por ID

miFormulario.addEventListener('submit', function(evento) { //paso 2 escuchador por el evento
    evento.preventDefault(); //evento preventDefault
    let nombre = document.getElementById('nombre').value; //obtener valor del input, el value
    saludar.textContent = 'Hola ' + nombre;
});*/

let formulario = document.getElementById('formulario');
let parrafoSaludo = document.getElementById('saludo');
parrafoSaludo.style.cssText = 'background:lavender; width:50%;line-height: 5rem; margin:1rem auto;';

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    let nombre = document.getElementById('nombre').value;
    parrafoSaludo.textContent = 'Hola ' + nombre + ' Bienvenido';

});