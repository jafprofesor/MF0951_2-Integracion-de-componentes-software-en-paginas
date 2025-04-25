// EJERCICIO 5: Eliminar elementos de una lista
// Enunciado: Cada <li> debe tener un botón de eliminar que al hacer clic lo borre.

// PASOS:
// 1. Seleccionar la lista con document.getElementById.
// 2. Agregar un event listener a cada botón de eliminar dentro de los <li>.
// 3. En el evento, eliminar el elemento padre con parentNode.removeChild.


let lista = document.getElementById('lista');

let botones = document.querySelectorAll('.eliminar');
for ( let i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click', function() {
                this.parentNode.remove();
        });
}
