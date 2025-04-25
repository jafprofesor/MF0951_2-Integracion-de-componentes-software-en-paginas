// EJERCICIO 14: Evento focus y blur
// Enunciado: Cuando el usuario haga focus en el input, su borde debe cambiar.
// Al perder el foco (blur), debe volver al estilo original.

// PASOS:
// 1. Seleccionar el input con document.getElementById.
// 2. Agregar un event listener para detectar 'focus' y cambiar el borde.
// 3. Agregar otro event listener para detectar 'blur' y restaurar el borde.
/*
let input = document.getElementById ('campo');
input.addEventListener('focus', () => {
    input.style.cssText = 'border: 4px solid tomato; background:moccasin;';
});

input.addEventListener('blur', () => {
input.style.cssText = 'border: 4px solid blue; background: lavender';
});
*/

//opcion con 1 for
let campos = document.getElementsByTagName('input');

for (let i = 0; i < campos.length; i++) {
    campos[i].addEventListener('focus', function (){
        campos[i].style.cssText = 'border: 4px solid tomato; background:moccasin;';
    })

    campos[i].addEventListener('blur', function () {
        campos[i].style.cssText ='';
    })
}