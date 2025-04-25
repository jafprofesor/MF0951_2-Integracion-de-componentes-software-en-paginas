//document.addEventListener("DOMContentLoaded", () => {

// Ejemplo 9: Eventos
/*const miBoton = document.querySelector(".miBoton"); // Selecciona el primer elemento con la clase "miBoton"
miBoton.addEventListener("click", () => {
  // Añade un evento de clic al botón
  alert("Botón clickeado"); // Muestra una alerta cuando se hace clic en el botón
});*/

// Ejemplo 7: remove
window.eliminarElemento = () => {
  // Define una función global para eliminar un elemento
  const elementoAEliminar = document.getElementById("elementoAEliminar"); // Selecciona el elemento a eliminar por su ID
  if (elementoAEliminar) {
    // Verifica si el elemento existe
    elementoAEliminar.remove(); // Elimina el elemento del DOM
  }
};
