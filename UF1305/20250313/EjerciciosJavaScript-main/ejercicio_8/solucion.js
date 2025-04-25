// SOLUCIÓN DEL EJERCICIO 8: Almacenar datos en localStorage
document.getElementById("guardar").addEventListener("click", function() {
    let nombre = document.getElementById("nombre").value;
    localStorage.setItem("nombreGuardado", nombre);
    document.getElementById("saludo").textContent = "Hola, " + nombre;
});

// Recuperar datos al cargar la página
window.addEventListener("load", function() {
    let nombre = localStorage.getItem("nombreGuardado");
    if (nombre) {
        document.getElementById("saludo").textContent = "Hola, " + nombre;
    }
});
