/*
Clase XX - Ejercicios: Modificar Estilos y CSS del DOM con JavaScript
*/

// 1. Métodos para modificar estilos en el DOM
let cssModificationMethods = {
  modificarDirecto: "Usar style.propiedad para cambiar estilos directamente.",
  manipularClases:
    "Usar classList para agregar, eliminar o alternar clases CSS.",
  modificarVariablesCSS: "Modificar variables CSS dinámicamente.",
  obtenerEstilosComputados:
    "Leer estilos aplicados mediante getComputedStyle().",
};
console.log(cssModificationMethods);

// 2. Modificación directa de estilos
const elemento = document.getElementById("mi-elemento");
elemento.style.color = "blue";
elemento.style.backgroundColor = "yellow";
elemento.style.fontSize = "18px";
elemento.style.width = "200px";
elemento.style.height = "100px";
elemento.style.margin = "10px";
elemento.style.padding = "15px";
elemento.style.border = "2px solid black";
elemento.style.borderRadius = "5px";
elemento.style.boxShadow = "2px 2px 10px gray";
console.log("Estilos modificados directamente");

// 3. Manipulación de clases CSS
const claseElemento = document.getElementById("mi-elemento");
claseElemento.classList.add("activo");
console.log("Clase 'activo' añadida");

claseElemento.classList.remove("invisible");
console.log("Clase 'invisible' eliminada");

claseElemento.classList.toggle("resaltado");
console.log("Clase 'resaltado' alternada");

// 4. Modificar variables CSS
document.documentElement.style.setProperty("--color-principal", "lightcoral");
console.log("Variable CSS '--color-principal' modificada");

// 5. Obtener estilos computados
const estiloComputado = window.getComputedStyle(elemento);
console.log("Color de fondo calculado:", estiloComputado.backgroundColor);

// 6. Aplicar transición con CSS
const transicionElemento = document.getElementById("mi-elemento");
transicionElemento.style.backgroundColor = "blue";
console.log("Transición de color activada");
