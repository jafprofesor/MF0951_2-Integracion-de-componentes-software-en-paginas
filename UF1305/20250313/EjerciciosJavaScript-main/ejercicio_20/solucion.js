// SOLUCIÓN DEL EJERCICIO 20: Evento de arrastrar y soltar
let drag = document.getElementById("drag");
let drop = document.getElementById("drop");

drag.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text", event.target.id);
});

drop.addEventListener("dragover", function(event) {
    event.preventDefault();
});

drop.addEventListener("drop", function(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    drop.appendChild(document.getElementById(data));
});
