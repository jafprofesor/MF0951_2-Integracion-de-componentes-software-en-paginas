// SOLUCIÓN DEL EJERCICIO 12: Evento keydown
let entrada = document.getElementById("entrada");
let resultado = document.getElementById("resultado");

entrada.addEventListener("keydown", function() {
    resultado.textContent = entrada.value;
});
