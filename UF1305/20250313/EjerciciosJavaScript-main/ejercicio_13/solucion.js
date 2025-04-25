// SOLUCIÓN DEL EJERCICIO 13: Evento dblclick
let boton = document.getElementById("dobleClick");
let mensaje = document.getElementById("mensaje");

boton.addEventListener("dblclick", function() {
    mensaje.textContent = "Doble clic detectado";
});
