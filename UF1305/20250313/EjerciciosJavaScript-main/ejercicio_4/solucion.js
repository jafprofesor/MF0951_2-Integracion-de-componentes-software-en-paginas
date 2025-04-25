// SOLUCIÓN DEL EJERCICIO 4: Agregar elementos a una lista
document.getElementById("boton").addEventListener("click", function() {
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = "Nuevo elemento";
    document.getElementById("lista").appendChild(nuevoElemento);
});
