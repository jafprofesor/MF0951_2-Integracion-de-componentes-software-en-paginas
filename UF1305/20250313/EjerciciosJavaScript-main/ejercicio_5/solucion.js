// SOLUCIÓN DEL EJERCICIO 5: Eliminar elementos de una lista
document.querySelectorAll(".eliminar").forEach(boton => {
    boton.addEventListener("click", function() {
        this.parentNode.remove();
    });
});
