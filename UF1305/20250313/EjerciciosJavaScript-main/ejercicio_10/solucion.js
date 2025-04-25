// SOLUCIÓN DEL EJERCICIO 10: Petición HTTP con Fetch
document.getElementById("fetch").addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(data => {
            document.getElementById("resultado").textContent = "Título: " + data.title;
        })
        .catch(error => console.error("Error:", error));
});
