// SOLUCIÓN DEL EJERCICIO 18: Evento submit en formulario
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita la recarga de la página
    let nombre = document.getElementById("nombre").value;
    document.getElementById("saludo").textContent = "Hola, " + nombre;
});
