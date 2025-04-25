// SOLUCIÓN DEL EJERCICIO 19: Evento de contexto (clic derecho)
document.getElementById("contexto").addEventListener("contextmenu", function(event) {
    event.preventDefault();
    alert("Clic derecho detectado");
});
