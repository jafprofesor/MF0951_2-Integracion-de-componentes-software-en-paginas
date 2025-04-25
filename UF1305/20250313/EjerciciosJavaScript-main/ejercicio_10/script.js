// EJERCICIO 10: Petición HTTP con Fetch
// Enunciado: Al hacer clic en el botón, obtener datos de una API y mostrarlos en pantalla.

// PASOS:
// 1. Seleccionar el botón y el div donde se mostrarán los datos con document.getElementById.
// 2. Agregar un event listener al botón para detectar 'click'.
// 3. Dentro del evento, usar fetch para obtener datos de la API.
// 4. Convertir la respuesta a JSON y mostrarla en el div.

// Seleccionar el botón y el div donde se mostrarán los datos
const button = document.getElementById('fetch');
const dataDiv = document.getElementById('resultado');

// Agregar un event listener al botón para detectar 'click'
button.addEventListener('click', () => {
    // Usar fetch para obtener datos de la API
    fetch('https://jsonplaceholder.typicode.com/posts') // Cambia la URL por la de tu API
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            return response.json(); // Convertir la respuesta a JSON
        })
        .then(data => {
            // Mostrar los datos en el div
            dataDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => {
            // Manejar errores
            dataDiv.innerHTML = `<p style="color: red;">${error.message}</p>`;
        });
});
