const API_URL = "https://jsonplaceholder.typicode.com/posts"; // URL de la API de JSONPlaceholder
// Cargar los títulos de los artículos en el selector
fetch(API_URL)
  .then((response) => response.json()) // Convertir la respuesta a JSON
  .then((data) => {
    // Iterar sobre los datos
    let select = document.getElementById("articulos"); // Obtener el elemento select
    select.innerHTML = "<option value=''>Elige un artículo</option>"; // Agregar una opción vacía

    data.slice(0, 10).forEach((articulo) => {
      // Iterar sobre los primeros 10 artículos
      // Solo cargamos 10 artículos
      let option = document.createElement("option"); // Crear una opción
      option.value = articulo.id; // Establecer el valor de la opción
      option.textContent = articulo.title; // Establecer el texto de la opción
      select.appendChild(option); // Agregar la opción al selector
    });

    // Mostrar el artículo seleccionado
    select.addEventListener("change", function () {
      // Escuchar el cambio en el selector
      let idSeleccionado = this.value; // Obtener el ID del artículo seleccionado
      if (idSeleccionado) {
        // Si se seleccionó un artículo
        fetch(`${API_URL}/${idSeleccionado}`) // Cargar el artículo
          .then((response) => response.json()) // Convertir la respuesta a JSON
          .then((articulo) => mostrarArticulo(articulo)) // Mostrar el artículo
          .catch(
            (
              error // Mostrar un mensaje de error si ocurre un error
            ) => console.error("Error al cargar el artículo:", error) // Mostrar el mensaje de error
          );
      }
    });
  })
  .catch((error) => console.error("Error al cargar los artículos:", error)); // Mostrar el mensaje de error

// Función para mostrar el artículo en la página con imágenes aleatorias de Picsum Photos
function mostrarArticulo(articulo) {
  document.getElementById("titulo").textContent = articulo.title;
  document.getElementById("autor").textContent =
    "Autor: Usuario " + articulo.userId;
  document.getElementById("contenido").textContent = articulo.body;

  let contenedorImagenes = document.getElementById("imagenes");
  contenedorImagenes.innerHTML = ""; // Limpiar imágenes previas

  // Cargar 3 imágenes aleatorias de Picsum Photos
  for (let i = 0; i < 3; i++) {
    let img = document.createElement("img");
    img.src = `https://picsum.photos/300/200?random=${Math.random()}`; // URL de la imagen aleatoria
    img.alt = articulo.title;
    img.style.maxWidth = "200px";
    img.style.margin = "5px";
    contenedorImagenes.appendChild(img);
  }
}
