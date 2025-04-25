// SOLUCIÓN DEL EJERCICIO 9: Contador de clics
let contador = 0;
document.getElementById("contador").addEventListener("click", function() {
    contador++;
    this.textContent = "Clics: " + contador;
});
