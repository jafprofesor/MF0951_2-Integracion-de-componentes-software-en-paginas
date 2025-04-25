// EJERCICIO 17: Evento de cambio en select
// Enunciado: Cuando el usuario seleccione una opción del menú desplegable, mostrarla en un párrafo.

// PASOS:
// 1. Seleccionar el <select> y el párrafo con document.getElementById.
// 2. Agregar un event listener al <select> para detectar 'change'.
// 3. En el evento, obtener el valor seleccionado y mostrarlo en el párrafo.

let select = document.getElementById ('seleccion');
let parrafo = document.getElementById ('colorElegido');
parrafo.style.cssText = 'border:1px solid silver; width: 50%; margin:1rem auto;height:8rem;padding:3rem;';

select.addEventListener('change', function () {
    let elegido = select.value;
    parrafo.textContent = `has elegido: ${elegido}`;

    if (elegido === 'rojo') {
        parrafo.style.backgroundColor = 'Crimson';
    }
    
    else if (elegido === 'azul') {
        parrafo.style.backgroundColor = 'DeepSkyBlue';
    }

    else if (elegido === 'verde') {
        parrafo.style.backgroundColor = 'YellowGreen';
    }

})