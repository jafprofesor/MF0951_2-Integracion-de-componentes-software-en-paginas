// SOLUCIÓN DEL EJERCICIO 15: Detectar tecla presionada
document.addEventListener("keydown", function(event) {
    document.getElementById("teclaPresionada").textContent = "Tecla presionada: " + event.key;
});
