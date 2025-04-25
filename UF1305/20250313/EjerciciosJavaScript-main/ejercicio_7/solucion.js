// SOLUCIÓN DEL EJERCICIO 7: Obtener y modificar valores de input
document.getElementById("boton").addEventListener("click", function() {
    let texto = document.getElementById("input").value;
    document.getElementById("resultado").textContent = texto;
});
