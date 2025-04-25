/*
Clase - Ejercicios: Navegar entre Elementos del DOM en JavaScript
*/

// 1. Métodos de relación en el DOM
let relationMethods = {
  obtenerPadres: ["parentElement", "closest"],
  obtenerHijos: ["children", "firstElementChild", "lastElementChild"],
  obtenerHermanos: ["nextElementSibling", "previousElementSibling"],
};
console.log(relationMethods);

// 2. Obtener el elemento padre
const padre = miElemento.parentElement;
console.log(padre);

// 3. Obtener el ancestro más cercano que coincide con un selector CSS
const ancestroCercano = miElemento.closest(".mi-clase");
console.log(ancestroCercano);

// 4. Obtener los hijos de un elemento
const hijos = miElemento.children;
console.log(hijos);

const primerHijo = miElemento.firstElementChild;
console.log(primerHijo);

const ultimoHijo = miElemento.lastElementChild;
console.log(ultimoHijo);

// 5. Obtener los hermanos de un elemento
const siguienteHermano = miElemento.nextElementSibling;
console.log(siguienteHermano);

const hermanoAnterior = miElemento.previousElementSibling;
console.log(hermanoAnterior);

// 6. Métodos de verificación y selección
let verificationMethods = {
  matches: "Verifica si un elemento coincide con un selector CSS.",
  contains: "Verifica si un nodo está contenido dentro de otro.",
};
console.log(verificationMethods);

// 7. Uso de matches para comprobar si un elemento coincide con un selector
const coincide = miElemento.matches(".mi-clase");
console.log(coincide);

// 8. Uso de contains para verificar si un nodo está dentro de otro
const contiene = contenedor.contains(miElemento);
console.log(contiene);
