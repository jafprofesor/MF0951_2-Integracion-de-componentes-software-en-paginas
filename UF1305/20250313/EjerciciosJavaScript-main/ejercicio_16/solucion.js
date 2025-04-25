// SOLUCIÓN DEL EJERCICIO 16: Evento de scroll
let scrollBox = document.getElementById("scrollBox");

scrollBox.addEventListener("scroll", function() {
    scrollBox.textContent = "¡Has hecho scroll!";
});
