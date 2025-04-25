// Función para mostrar información de navegación
function mostrarInformacion(mensaje) {
  // Define una función que añade mensajes al panel de información
  const infoPanel = document.getElementById("info-navegacion"); // Obtiene el elemento donde se mostrará la información
  infoPanel.innerHTML += `<p>${mensaje}</p>`; // Añade el mensaje como un párrafo al contenido HTML existente
}

// Función para resaltar un elemento
function resaltarElemento(elemento) {
  // Define una función para resaltar visualmente un elemento en la página
  // Remover resaltado anterior
  document.querySelectorAll(".highlight").forEach((el) => {
    // Selecciona todos los elementos con la clase 'highlight'
    el.classList.remove("highlight"); // Elimina la clase 'highlight' de cada elemento para quitar resaltados previos
  });
  // Agregar nuevo resaltado
  if (elemento) {
    // Verifica que el elemento exista para evitar errores
    elemento.classList.add("highlight"); // Añade la clase 'highlight' al elemento para resaltarlo
  }
}

// Obtener el elemento actual
const elementoActual = document.getElementById("elemento-actual"); // Obtiene el elemento principal con el que trabajaremos

// 1. Navegar hacia arriba (padres)
mostrarInformacion("1. Navegación hacia arriba (padres):"); // Muestra un título para la sección de navegación hacia padres

// Obtener el padre directo
const padre = elementoActual.parentElement; // Accede al elemento padre directo del elemento actual
mostrarInformacion(`- Padre directo: ${padre.className}`); // Muestra el nombre de la clase del elemento padre
padre.addEventListener("click", () => resaltarElemento(padre)); // Añade un evento de clic que resalta el padre cuando se hace clic en él

// Obtener el abuelo usando closest
const abuelo = elementoActual.closest(".abuelo"); // Busca el ancestro más cercano que tenga la clase 'abuelo'
mostrarInformacion(`- Abuelo (.abuelo): ${abuelo.className}`); // Muestra el nombre de la clase del elemento abuelo
abuelo.addEventListener("click", () => resaltarElemento(abuelo)); // Añade un evento de clic que resalta el abuelo

// 2. Navegar hacia abajo (hijos)
mostrarInformacion("\n2. Navegación hacia abajo (hijos):"); // Muestra un título para la sección de navegación hacia hijos

// Obtener hijos del padre
const hijosDelPadre = padre.children; // Obtiene una colección de todos los elementos hijo directos del padre
mostrarInformacion(`- Número de hijos del padre: ${hijosDelPadre.length}`); // Muestra cuántos hijos tiene el padre

// Obtener primer y último hijo
const primerHijo = padre.firstElementChild; // Obtiene el primer hijo elemento del padre
const ultimoHijo = padre.lastElementChild; // Obtiene el último hijo elemento del padre

mostrarInformacion(`- Primer hijo: ${primerHijo.className}`); // Muestra el nombre de la clase del primer hijo
mostrarInformacion(`- Último hijo: ${ultimoHijo.className}`); // Muestra el nombre de la clase del último hijo

primerHijo.addEventListener("click", () => resaltarElemento(primerHijo)); // Añade un evento de clic que resalta el primer hijo
ultimoHijo.addEventListener("click", () => resaltarElemento(ultimoHijo)); // Añade un evento de clic que resalta el último hijo

// 3. Navegar lateralmente (hermanos)
mostrarInformacion("\n3. Navegación lateral (hermanos):"); // Muestra un título para la sección de navegación entre hermanos

// Obtener hermano siguiente
const hermanoSiguiente = elementoActual.nextElementSibling; // Obtiene el siguiente elemento hermano del elemento actual
if (hermanoSiguiente) {
  // Verifica si existe un hermano siguiente
  mostrarInformacion(`- Hermano siguiente: ${hermanoSiguiente.className}`); // Muestra el nombre de la clase del hermano siguiente
  hermanoSiguiente.addEventListener("click", () =>
    resaltarElemento(hermanoSiguiente)
  ); // Añade un evento de clic que resalta el hermano siguiente
}

// Obtener hermano anterior
const hermanoAnterior = elementoActual.previousElementSibling; // Obtiene el elemento hermano anterior del elemento actual
if (hermanoAnterior) {
  // Verifica si existe un hermano anterior
  mostrarInformacion(`- Hermano anterior: ${hermanoAnterior.className}`); // Muestra el nombre de la clase del hermano anterior
  hermanoAnterior.addEventListener("click", () =>
    resaltarElemento(hermanoAnterior)
  ); // Añade un evento de clic que resalta el hermano anterior
}

// 4. Verificación de elementos
mostrarInformacion("\n4. Verificación de elementos:"); // Muestra un título para la sección de verificación de elementos

// Verificar si el elemento actual coincide con un selector
const coincideClase = elementoActual.matches(".elemento-actual"); // Comprueba si el elemento actual coincide con el selector CSS '.elemento-actual'
mostrarInformacion(
  `- ¿Elemento actual coincide con .elemento-actual? ${coincideClase}`
); // Muestra el resultado de la comprobación

// Verificar si un elemento contiene a otro
const contieneElemento = abuelo.contains(elementoActual); // Comprueba si el elemento abuelo contiene al elemento actual en su jerarquía
mostrarInformacion(
  `- ¿Abuelo contiene al elemento actual? ${contieneElemento}`
); // Muestra el resultado de la comprobación

// Agregar evento click al elemento actual
elementoActual.addEventListener("click", () => {
  // Añade un evento de clic al elemento actual
  resaltarElemento(elementoActual); // Resalta el elemento actual cuando se hace clic en él
});

// Mensaje inicial
mostrarInformacion(
  "\nHaz clic en los elementos para resaltarlos y ver las relaciones DOM."
); // Muestra un mensaje instructivo para el usuario
