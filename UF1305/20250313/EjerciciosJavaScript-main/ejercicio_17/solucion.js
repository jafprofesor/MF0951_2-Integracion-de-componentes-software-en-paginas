// SOLUCIÓN DEL EJERCICIO 17: Evento de cambio en select
let seleccion = document.getElementById("seleccion");
let colorElegido = document.getElementById("colorElegido");

seleccion.addEventListener("change", function() {
    colorElegido.textContent = "Has seleccionado: " + seleccion.value;
});
