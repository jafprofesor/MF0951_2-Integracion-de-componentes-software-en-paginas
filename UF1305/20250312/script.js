// Ejemplo 1: Obtener el elemento padre y cambiar su color de fondo
const hijo1 = document.getElementById("hijo1"); // Selecciona el elemento con ID "hijo1" y lo guarda en una constante
const padre1 = hijo1.parentElement; // Accede al elemento padre del elemento "hijo1"
padre1.style.backgroundColor = "lightblue"; // Cambia el color de fondo del elemento padre a azul claro

// Ejemplo 2: Obtener el ancestro más cercano que coincide con un selector CSS
const nieto = document.getElementById("nieto"); // Selecciona el elemento con ID "nieto"
const ancestroCercano = nieto.closest(".abuelo"); // Busca el ancestro más cercano que tenga la clase "abuelo"
ancestroCercano.style.backgroundColor = "lightgreen"; // Cambia el color de fondo del ancestro encontrado a verde claro

// Ejemplo 3: Obtener todos los hijos de un elemento y cambiar su color de texto
const contenedor3 = document.getElementById("contenedor3"); // Selecciona el elemento con ID "contenedor3"
const hijos3 = contenedor3.children; // Obtiene una colección HTML con todos los hijos directos del contenedor3
for (let i = 0; i < hijos3.length; i++) {
  // Itera sobre cada hijo usando un bucle for
  hijos3[i].style.color = "red"; // Cambia el color del texto de cada hijo a rojo
}

// Ejemplo 4: Obtener el primer y último hijo de un elemento
const contenedor4 = document.getElementById("contenedor4"); // Selecciona el elemento con ID "contenedor4"
const primerHijo4 = contenedor4.firstElementChild; // Obtiene el primer hijo elemento del contenedor4
const ultimoHijo4 = contenedor4.lastElementChild; // Obtiene el último hijo elemento del contenedor4
primerHijo4.textContent = "Primer hijo actualizado"; // Cambia el contenido de texto del primer hijo
ultimoHijo4.textContent = "Último hijo actualizado"; // Cambia el contenido de texto del último hijo

// Ejemplo 5: Obtener y ocultar hermanos de un elemento
const elemento5 = document.getElementById("elemento5"); // Selecciona el elemento con ID "elemento5"
const siguienteHermano5 = elemento5.nextElementSibling; // Obtiene el siguiente hermano elemento
const hermanoAnterior5 = elemento5.previousElementSibling; // Obtiene el hermano elemento anterior

// Agregamos botones para mostrar/ocultar los hermanos
const btnToggle5 = document.createElement("button"); // Crea un nuevo elemento botón
btnToggle5.textContent = "Mostrar/Ocultar Hermanos"; // Establece el texto del botón
btnToggle5.onclick = () => {
  // Define una función para el evento click del botón
  if (siguienteHermano5.style.display === "none") {
    // Comprueba si los hermanos están ocultos
    siguienteHermano5.style.display = ""; // Muestra el hermano siguiente (restablece a valor por defecto)
    hermanoAnterior5.style.display = ""; // Muestra el hermano anterior (restablece a valor por defecto)
    btnToggle5.textContent = "Ocultar Hermanos"; // Cambia el texto del botón
  } else {
    siguienteHermano5.style.display = "none"; // Oculta el hermano siguiente
    hermanoAnterior5.style.display = "none"; // Oculta el hermano anterior
    btnToggle5.textContent = "Mostrar Hermanos"; // Cambia el texto del botón
  }
};
elemento5.parentElement.insertBefore(btnToggle5, elemento5); // Inserta el botón antes del elemento5 en el DOM
// elemento5 es el elemento padre del botón
// parentElement es el elemento padre del elemento5
// insertBefore es un método que permite insertar un nuevo nodo antes de un nodo de referencia en el DOM
// btnToggle5 es el botón que se insertará antes del elemento5

// Ejemplo 6: Verificar si un elemento coincide con un selector CSS
const miElemento6 = document.getElementById("miElemento6"); // Selecciona el elemento con ID "miElemento6"
const coincide6 = miElemento6.matches(".mi-clase"); // Verifica si el elemento tiene la clase "mi-clase"
const resultado6 = document.getElementById("resultado6"); // Selecciona el elemento donde se mostrará el resultado
resultado6.textContent = coincide6
  ? "El elemento coincide con el selector .mi-clase" // Texto si coincide
  : "El elemento no coincide con el selector"; // Texto si no coincide

// Ejemplo 7: Verificar si un nodo está contenido dentro de otro
const contenedor7 = document.getElementById("contenedor7"); // Selecciona el elemento con ID "contenedor7"
const miElemento7 = document.getElementById("miElemento7"); // Selecciona el elemento con ID "miElemento7"
const contiene7 = contenedor7.contains(miElemento7); // Verifica si miElemento7 está dentro de contenedor7
const resultado7 = document.getElementById("resultado7"); // Selecciona el elemento donde se mostrará el resultado
resultado7.textContent = contiene7
  ? "El contenedor contiene el elemento" // Texto si contiene el elemento
  : "El contenedor no contiene el elemento"; // Texto si no contiene el elemento

// Ejemplo 8: Agregar un nuevo hijo y verificar la lista de hijos
const contenedor8 = document.getElementById("contenedor8"); // Selecciona el elemento con ID "contenedor8"
const btnAgregar8 = document.createElement("button"); // Crea un nuevo elemento botón
btnAgregar8.textContent = "Agregar Nuevo Hijo"; // Establece el texto del botón
btnAgregar8.onclick = () => {
  // Define una función para el evento click del botón
  const nuevoHijo = document.createElement("p"); // Crea un nuevo elemento párrafo
  nuevoHijo.textContent = `Nuevo Hijo ${contenedor8.children.length + 1}`; // Establece el texto del nuevo párrafo
  contenedor8.appendChild(nuevoHijo); // Añade el nuevo párrafo como hijo del contenedor8
  resultado8.textContent = `Número de hijos: ${contenedor8.children.length}`; // Actualiza el texto con el número de hijos
};
contenedor8.parentElement.insertBefore(btnAgregar8, contenedor8); // Inserta el botón antes del contenedor8 en el DOM
const resultado8 = document.getElementById("resultado8"); // Selecciona el elemento donde se mostrará el resultado
resultado8.textContent = `Número de hijos: ${contenedor8.children.length}`; // Inicializa el texto con el número actual de hijos

// Ejemplo 9: Eliminar el primer hijo y verificar la lista
const contenedor9 = document.getElementById("contenedor9"); // Selecciona el elemento con ID "contenedor9"
const btnEliminar9 = document.createElement("button"); // Crea un nuevo elemento botón
btnEliminar9.textContent = "Eliminar Primer Hijo"; // Establece el texto del botón
btnEliminar9.onclick = () => {
  // Define una función para el evento click del botón
  if (contenedor9.children.length > 0) {
    // Verifica si hay hijos para eliminar
    const primerHijo = contenedor9.firstElementChild; // Obtiene el primer hijo elemento
    contenedor9.removeChild(primerHijo); // Elimina el primer hijo del contenedor
    resultado9.textContent = `Número de hijos restantes: ${contenedor9.children.length}`; // Actualiza el texto con el número de hijos
  } else {
    resultado9.textContent = "No hay más hijos para eliminar"; // Muestra mensaje si no hay hijos
  }
};
contenedor9.parentElement.insertBefore(btnEliminar9, contenedor9); // Inserta el botón antes del contenedor9 en el DOM
const resultado9 = document.getElementById("resultado9"); // Selecciona el elemento donde se mostrará el resultado
resultado9.textContent = `Número de hijos: ${contenedor9.children.length}`; // Inicializa el texto con el número actual de hijos

// Ejemplo 10: Modificar el contenido del hermano siguiente
const elemento10 = document.getElementById("elemento10"); // Selecciona el elemento con ID "elemento10"
const hermanoSiguiente10 = elemento10.nextElementSibling; // Obtiene el siguiente hermano elemento
if (hermanoSiguiente10) {
  // Verifica si existe un hermano siguiente
  hermanoSiguiente10.textContent = "Hermano siguiente actualizado"; // Cambia el contenido de texto del hermano siguiente
  hermanoSiguiente10.style.color = "blue"; // Cambia el color del texto a azul
}
