// EJERCICIO 20: Event de arrastrar y destino
// Enunciado: Permitir que un div sea arrastrado y soltado en otro div.

// PASOS:
// 1. Seleccionar los elementos de arrastre y destino con document.getElementById.
// 2. Agregar un event listener al elemento de arrastre para detectar 'dragstart'.
// 3. Agregar un event listener al destino para detectar 'dragover' y evitar el comportamiento por defecto.
// 4. Agregar un event listener al destino para detectar 'drop' y mover el elemento.
/*
let coger =document.getElementById('drag');
coger.setAttribute('draggable', true);
coger.style.cssText = 'width:100px;height:100px; background: coral; margin:1rem auto;';//estilos

let destino = document.getElementById('drop');
destino.style.cssText = 'width:150px; height:150px;background:lavender; margin:1rem auto;'

coger.addEventListener('dragstart', function (event) {
    event.dataTransfer.setData('text', event.target.id);
});
destino.addEventListener('dragover' , function (event) {
    event.preventDefault();
});

destino.addEventListener('drop', function(event) {
    event.preventDefault();
    let idElemento = event.dataTransfer.getData('text');
    let elemento = document.getElementById(idElemento);
    event.target.appendChild(elemento);
});
*/
let origen = document.getElementById('drag');
origen.setAttribute('draggable', true); //si cambiamos este atributo en orige, no funciona
origen.style.cssText = 'width:100px;height:100px; background: orange; margin:1rem auto;';//estilos

let destino = document.getElementById('drop');
destino.style.cssText = 'width:150px; height:150px;background:SkyBlue; margin:1rem auto;';

origen.addEventListener('dragstart', function (event){
    event.dataTransfer.setData('text', event.target.id);
});

destino.addEventListener('dragover', function(event) {
    event.preventDefault();
});

destino.addEventListener('drop', function (event) {
let elementoID = event.dataTransfer.getData('text');
let elemento = document.getElementById(elementoID);
event.target.appendChild(elemento);
});
