/*
Clase XX - Ejercicios: El BOM en JavaScript
*/

// 1. ¿Qué es el BOM?
let bomDefinition = {
  descripcion:
    "El Browser Object Model (BOM) permite interactuar con el navegador y su entorno.",
  diferenciaDOM:
    "A diferencia del DOM, el BOM se enfoca en la ventana y sus características.",
};
console.log(bomDefinition);

// 2. Elementos principales del BOM
let bomElements = {
  window: "Representa la ventana del navegador.",
  navigator: "Proporciona información sobre el navegador.",
  screen: "Contiene información sobre la pantalla del usuario.",
  location: "Permite obtener y cambiar la URL actual.",
  document: "Accede al contenido de la página web.",
  history: "Permite manipular el historial de navegación.",
  console: "Proporciona métodos para la depuración.",
  performance: "Brinda datos sobre el rendimiento de la página.",
};
console.log(bomElements); // Muestra los elementos principales del BOM

// 3. Propiedades del objeto window
console.log(window.innerHeight); // Altura de la ventana
console.log(window.innerWidth); // Ancho de la ventana

// 4. Información del navegador
console.log(navigator.userAgent); // Información del navegador
console.log(navigator.platform); // Plataforma del usuario
console.log(navigator.language); // Idioma del navegador

// 5. Información de la pantalla
console.log(screen.width); // Ancho de la pantalla
console.log(screen.height); // Altura de la pantalla
console.log(screen.colorDepth); // Profundidad de color
console.log(screen.availWidth); // Ancho disponible
console.log(screen.availHeight); // Altura disponible
console.log(screen.pixelDepth); // Profundidad de píxeles

// 6. Información de la URL actual
console.log(location.href); // URL completa
console.log(location.hostname); // Nombre del host
console.log(location.port); // Puerto utilizado
console.log(location.host); // Nombre del host
console.log(location.protocol); // Protocolo utilizado
console.log(location.pathname); // Ruta de la URL
console.log(location.search); // Parámetros de la URL
// location.href = "https://www.ejemplo.com"; // Redirección a otra página

// 7. Acceso al documento
console.log(document.title); // Título de la página
console.log(document.URL); // URL de la página
console.log(document.body); // Cuerpo del documento
console.log(document.head); // Cabecera del documento

// 8. Manipulación del historial del navegador
history.pushState({ page: 1 }, "Title", "?page=1"); // Añadir una entrada al historial
history.pushState({ page: 2 }, "Title", "?page=2"); // Añadir otra entrada al historial
history.back(); // Retroceder en el historial
history.replaceState({ page: 2 }, "Title", "?page=2"); // Reemplazar la entrada actual
history.forward(); // Avanzar en el historial

// 9. Información de rendimiento
console.log(performance.now()); // Tiempo de ejecución en milisegundos
console.log(performance.memory); // Información sobre la memoria

// 10. Estado de la caché de la aplicación (en desuso)
// console.log(applicationCache.status);
// 11. Métodos de la consola
console.log("Mensaje de información"); // Mensaje de información
console.warn("Mensaje de advertencia"); // Mensaje de advertencia
console.error("Mensaje de error"); // Mensaje de error
console.info("Mensaje informativo"); // Mensaje informativo
console.clear(); // Limpiar la consola
console.log("Mensaje después de limpiar la consola"); // Mensaje después de limpiar la consola
