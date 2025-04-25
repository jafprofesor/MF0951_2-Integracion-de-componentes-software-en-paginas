// Este comentario explica que vamos a seleccionar un elemento por su ID y cambiar su contenido
document.addEventListener("DOMContentLoaded", () => {
  // Espera a que el DOM esté completamente cargado antes de ejecutar el código

  // Ejemplo 1: getElementById
  const miDiv = document.getElementById("miDiv"); // Selecciona el elemento con ID "miDiv" y lo guarda en una constante
  miDiv.textContent = "Contenido actualizado"; // Cambia el contenido de texto del elemento seleccionado

  // Ejemplo 2: getElementsByClassName
  // NOTA: getElementsByClassName devuelve un HTMLCollection (colección viva)
  // Un HTMLCollection se actualiza automáticamente cuando el DOM cambia
  const elementosClase = document.getElementsByClassName("miClase"); // Selecciona todos los elementos con la clase "miClase"
  for (let i = 0; i < elementosClase.length; i++) {
    // Itera sobre cada elemento encontrado
    // Nota: No podemos usar forEach directamente en un HTMLCollection, por eso usamos un bucle for
    elementosClase[i].style.backgroundColor = "yellow"; // Cambia el color de fondo de cada elemento a amarillo
  }

  //  elementosClase[0].style.backgroundColor = "green"; // Código comentado: cambiaría el fondo del primer elemento a verde
  //  elementosClase[1].style.backgroundColor = "yellow"; // Código comentado: cambiaría el fondo del segundo elemento a amarillo

  // Ejemplo 3: getElementsByTagName
  // NOTA: getElementsByTagName también devuelve un HTMLCollection (colección viva)
  let parrafosOcultos = true; // Variable que controla si los párrafos están ocultos o visibles
  window.mostrarParrafos = () => {
    // Define una función global para mostrar u ocultar párrafos
    const elementosTag = document.getElementsByTagName("p"); // Selecciona todos los elementos de tipo párrafo
    for (let i = 0; i < elementosTag.length; i++) {
      // Itera sobre cada párrafo
      elementosTag[i].style.display = parrafosOcultos ? "block" : "none"; // Cambia la visibilidad según el estado actual
    }
    parrafosOcultos = !parrafosOcultos; // Invierte el estado para la próxima vez que se llame a la función
  };

  // Ejemplo 4: querySelector
  const primerElemento = document.querySelector(".miClase"); // Selecciona el primer elemento con la clase "miClase"
  primerElemento.textContent = "Primer elemento actualizado"; // Actualiza el contenido de texto del primer elemento

  // Ejemplo 5: querySelectorAll
  // NOTA: querySelectorAll devuelve un NodeList estático (no se actualiza automáticamente)
  // Si se añaden nuevos elementos con la clase "miClase" después, no aparecerán en esta lista
  const todosLosElementos = document.querySelectorAll(".miClase"); // Selecciona todos los elementos con la clase "miClase"
  todosLosElementos.forEach((elemento) => {
    // Itera sobre cada elemento usando forEach
    // Nota: NodeList sí permite usar forEach directamente, a diferencia de HTMLCollection
    elemento.classList.add("nuevaClase"); // Añade una nueva clase a cada elemento
  });
  // Ejemplo 5.1: el último elemento
  const ultimoElemento = document.querySelectorAll(".miClase"); // Selecciona nuevamente todos los elementos con la clase "miClase"
  ultimoElemento[ultimoElemento.length - 1].textContent =
    "Último elemento actualizado"; // Actualiza el contenido del último elemento del conjunto

  // Ejemplo 5.2: el elemento de enmedio
  const elementoEnmedio = document.querySelectorAll(".miClase"); // Selecciona nuevamente todos los elementos con la clase "miClase"
  let enmedio = elementoEnmedio.length / 2; // Calcula el índice del elemento del medio
  elementoEnmedio[enmedio - 1].textContent = "Elemento de enmedio actualizado"; // Actualiza el contenido del elemento del medio

  // Ejemplo 6: createElement
  const nuevoElemento = document.createElement("p"); // Crea un nuevo elemento de párrafo
  nuevoElemento.textContent = "Nuevo párrafo"; // Establece el contenido de texto del nuevo párrafo
  document.getElementById("contenedor").appendChild(nuevoElemento); // Añade el nuevo párrafo al elemento con ID "contenedor"

  // Ejemplo 7: remove
  window.eliminarElemento = () => {
    // Define una función global para eliminar un elemento
    const elementoAEliminar = document.getElementById("elementoAEliminar"); // Selecciona el elemento a eliminar por su ID
    if (elementoAEliminar) {
      // Verifica si el elemento existe
      elementoAEliminar.remove(); // Elimina el elemento del DOM
    }
  };

  // Ejemplo 8: Cambiar atributos
  let imagenAlternada = false; // Variable para controlar el estado de la imagen
  window.cambiarImagen = () => {
    // Define una función global para alternar entre dos imágenes
    const miImagen = document.getElementById("miImagen"); // Selecciona la imagen por su ID
    if (imagenAlternada) {
      // Comprueba el estado actual
      miImagen.src = "cafeteria.png"; // Cambia la fuente de la imagen a "cafeteria.png"
    } else {
      miImagen.src = "degustaciontartas.png"; // Cambia la fuente de la imagen a "degustaciontartas.png"
    }
    imagenAlternada = !imagenAlternada; // Invierte el estado para la próxima vez
  };

  // Ejemplo 9: Eventos
  const miBoton = document.querySelector(".miBoton"); // Selecciona el primer elemento con la clase "miBoton"
  miBoton.addEventListener("click", () => {
    // Añade un evento de clic al botón
    alert("Botón clickeado"); // Muestra una alerta cuando se hace clic en el botón
  });

  // Ejemplo 10: Cambiar estilos
  // NOTA: Otro ejemplo de HTMLCollection (colección viva)
  const titulos = document.getElementsByTagName("h1"); // Selecciona todos los elementos h1
  for (let i = 0; i < titulos.length; i++) {
    // Itera sobre cada título
    titulos[i].style.fontFamily = "Arial, sans-serif"; // Cambia la fuente de los títulos
    titulos[i].style.color = "#2196f3"; // Cambia el color de los títulos a azul
  }

  // Ejemplo 11: Cambiar tamaño de fuente
  // NOTA: Otro ejemplo de NodeList estático
  const parrafos = document.querySelectorAll(".miParrafo"); // Selecciona todos los elementos con la clase "miParrafo"
  parrafos.forEach((parrafo) => {
    // Itera sobre cada párrafo usando forEach
    parrafo.style.fontSize = "20px"; // Establece el tamaño de fuente a 20px
    parrafo.style.color = "#4caf50"; // Cambia el color del texto a verde
  });

  // Ejemplo 12: Atributos personalizados
  const nuevoElementoAtributo = document.createElement("div"); // Crea un nuevo elemento div
  nuevoElementoAtributo.textContent =
    "Nuevo elemento con atributo personalizado"; // Establece el contenido de texto del nuevo div
  nuevoElementoAtributo.setAttribute("data-atributo", "valor"); // Añade un atributo personalizado al elemento
  document
    .getElementById("contenedorAtributo") // Selecciona el elemento contenedor por su ID
    .appendChild(nuevoElementoAtributo); // Añade el nuevo elemento al contenedor
});
