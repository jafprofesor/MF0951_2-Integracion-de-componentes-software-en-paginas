// SOLUCIÓN DEL EJERCICIO 11: Evento mouseover
let caja = document.getElementById("caja");

caja.addEventListener("mouseover", function() {
    caja.style.backgroundColor = "yellow";
});

caja.addEventListener("mouseout", function() {
    caja.style.backgroundColor = "";
});
