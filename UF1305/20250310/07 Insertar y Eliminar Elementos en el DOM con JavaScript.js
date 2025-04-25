/*
Clase - Ejercicios: Insertar y Eliminar Elementos en el DOM con JavaScript
*/

// 1. Métodos para manipular la estructura del DOM
let domModificationMethods = {
  insertar: ["createElement", "appendChild", "insertBefore"],
  reemplazar: ["replaceChild"],
  eliminar: ["removeChild", "remove", "innerHTML"],
};
console.log(domModificationMethods);

// 2. Crear y añadir elementos al DOM
const nuevoElemento = document.createElement("div");
nuevoElemento.textContent = "Este es un nuevo div";
console.log(nuevoElemento);

// 3. Insertar elemento al final
const contenedor = document.getElementById("contenedor");
contenedor.appendChild(nuevoElemento);
console.log(contenedor);

// 4. Insertar antes de un elemento existente
const referencia = document.getElementById("referencia");
contenedor.insertBefore(nuevoElemento, referencia);
console.log(contenedor);

// 5. Reemplazar un elemento existente
const oldElement = document.getElementById("old");
contenedor.replaceChild(nuevoElemento, oldElement);
console.log(contenedor);

// 6. Eliminar un elemento hijo
const hijo = document.getElementById("hijo");
contenedor.removeChild(hijo);
console.log(contenedor);

// 7. Eliminar un elemento directamente
const elemento = document.getElementById("mi-elemento");
elemento.remove();
console.log("Elemento eliminado");

// 8. Eliminar todos los hijos de un nodo
contenedor.innerHTML = "";
console.log("Contenedor vaciado");

// 9. Usar fragmentos de documento para optimización
const fragmento = document.createDocumentFragment();
for (let i = 0; i < 3; i++) {
  const nuevoDiv = document.createElement("div");
  nuevoDiv.textContent = `Elemento ${i + 1}`;
  fragmento.appendChild(nuevoDiv);
}
contenedor.appendChild(fragmento);
console.log("Fragmento añadido al contenedor");
