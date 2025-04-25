/*
Clase - Ejercicios: Seleccionar Elementos del DOM en JavaScript
*/

// 1. Métodos de selección de elementos en el DOM
let selectionMethods = {
  porIdentificadores: [
    "getElementById",
    "getElementsByClassName",
    "getElementsByTagName",
  ],
  porSelectoresCSS: ["querySelector", "querySelectorAll"],
};
console.log(selectionMethods);

// 2. Diferencia en los resultados de selección
let selectionResults = {
  HTMLElement: "Un único elemento seleccionado.",
  HTMLCollection: "Colección dinámica de elementos del mismo tipo.",
  NodeList: "Lista estática de nodos (pueden ser de distintos tipos).",
};
console.log(selectionResults);

// 3. Comprobación de HTMLCollection (dinámico) vs. NodeList (estático)
let htmlCollection = document.getElementsByTagName("div");
console.log(htmlCollection.length); // Número de divs inicial

let nodeList = document.querySelectorAll("div");
console.log(nodeList.length); // Número de divs inicial

let newDiv = document.createElement("div");
document.body.appendChild(newDiv);

console.log(htmlCollection.length); // Se actualiza dinámicamente
console.log(nodeList.length); // Permanece estático

// 4. Métodos basados en identificadores, clases y etiquetas
let getElementMethods = {
  byId: "getElementById - Selecciona un elemento único por su ID.",
  byClass:
    "getElementsByClassName - Selecciona todos los elementos con una clase específica.",
  byTag:
    "getElementsByTagName - Selecciona todos los elementos con una etiqueta específica.",
};
console.log(getElementMethods);

// 5. Uso de getElementById
const miElemento = document.getElementById("mi-id");

// 6. Uso de getElementsByClassName
const elementosClase = document.getElementsByClassName("mi-clase");

// 7. Uso de getElementsByTagName
const elementosTag = document.getElementsByTagName("p");

// 8. Métodos basados en selectores CSS
let cssSelectorMethods = {
  querySelector:
    "Devuelve el primer elemento que coincide con el selector CSS.",
  querySelectorAll:
    "Devuelve todos los elementos que coinciden con el selector CSS en una NodeList.",
};
console.log(cssSelectorMethods);

// 9. Uso de querySelector
const primerElemento = document.querySelector(".mi-clase");

// 10. Uso de querySelectorAll
const todosLosElementos = document.querySelectorAll("div.mi-clase");
// 11. Diferencias entre getElementById y querySelector
let differences = {
  getElementById: "Devuelve un elemento HTML.",
  querySelector: "Devuelve un objeto Element.",
};
console.log(differences);
