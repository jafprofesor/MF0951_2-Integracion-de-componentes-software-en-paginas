// SOLUCIÓN DEL EJERCICIO 14: Evento focus y blur
let campo = document.getElementById("campo");

campo.addEventListener("focus", function() {
    campo.style.border = "2px solid blue";
});

campo.addEventListener("blur", function() {
    campo.style.border = "";
});
