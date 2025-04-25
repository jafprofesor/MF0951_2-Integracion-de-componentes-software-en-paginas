// EJERCICIO 15: Detectar tecla presionada
// Enunciado: Mostrar la tecla presionada por el usuario en un párrafo.

// PASOS:
// 1. Agregar un event listener al documento para detectar 'keydown'.
// 2. En el evento, capturar la tecla presionada con event.key.
// 3. Mostrar el valor en el párrafo.


let parrafo = document.getElementById('teclaPresionada'); //seleccionamos el parrafo por su ID
parrafo.style.cssText = 'background-image: url("tecla2.svg"); font-size:2rem; background-repeat:no-repeat; background-position: 62%;height: 3rem;';

document.addEventListener ('keydown', function (event) { //escuchador para 'keydown', presionar tecla
    parrafo.textContent = `La tecla presionada es   ${event.key}`; //variable con el argumento event de la function
    
});
