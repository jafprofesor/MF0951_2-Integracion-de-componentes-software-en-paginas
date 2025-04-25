// Array con la información de las imágenes
const imagenes = [
  {
    src: "imagenes/montana.svg",
    alt: "Montaña",
    descripcion: "Paisaje montañoso con nieve",
  },
  {
    src: "imagenes/playa.svg",
    alt: "Playa",
    descripcion: "Playa tropical con palmeras",
  },
  {
    src: "imagenes/bosque.svg",
    alt: "Bosque",
    descripcion: "Bosque verde y frondoso",
  },
  {
    src: "imagenes/ciudad.svg",
    alt: "Ciudad",
    descripcion: "Panorámica urbana moderna",
  },
];

// Variables para los elementos del DOM
let indiceActual = 0;
const imagenActual = document.getElementById("imagen-actual");
const descripcionImagen = document.getElementById("descripcion-imagen");
const btnAnterior = document.getElementById("btn-anterior");
const btnSiguiente = document.getElementById("btn-siguiente");

// Función para mostrar la imagen actual
function mostrarImagen(indice) {
  // Actualizamos la imagen y su descripción
  imagenActual.src = imagenes[indice].src;
  imagenActual.alt = imagenes[indice].alt;
  descripcionImagen.textContent = imagenes[indice].descripcion;
}

// Evento para el botón anterior
btnAnterior.addEventListener("click", function () {
  // Decrementamos el índice y comprobamos si llegamos al principio
  indiceActual--;
  if (indiceActual < 0) {
    indiceActual = imagenes.length - 1; // Volvemos al final si estamos en la primera imagen
  }
  mostrarImagen(indiceActual);
});

// Evento para el botón siguiente
btnSiguiente.addEventListener("click", function () {
  // Incrementamos el índice y comprobamos si llegamos al final
  indiceActual++;
  if (indiceActual >= imagenes.length) {
    indiceActual = 0; // Volvemos al principio si estamos en la última imagen
  }
  mostrarImagen(indiceActual);
});

// Inicializamos la galería mostrando la primera imagen
mostrarImagen(indiceActual);

// Comentario explicativo del código:
/*
  Este script implementa una galería de imágenes básica con las siguientes características:
  
  1. Almacenamos la información de las imágenes en un array de objetos
  2. Cada objeto contiene la ruta de la imagen, su texto alternativo y una descripción
  3. Utilizamos variables para mantener el estado actual de la galería
  4. La función mostrarImagen() actualiza la interfaz con la imagen seleccionada
  5. Los eventos de click en los botones permiten navegar entre las imágenes
  6. Implementamos navegación circular (al llegar al final vuelve al principio y viceversa)
*/
