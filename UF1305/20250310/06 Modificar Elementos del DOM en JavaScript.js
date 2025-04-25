/*
Clase - Ejercicios: Modificar Elementos del DOM en JavaScript
*/

// 1. Métodos para modificar elementos en el DOM
let modificationMethods = {
  modificarContenido: ["textContent", "innerHTML"],
  modificarAtributos: ["setAttribute", "getAttribute", "modificación directa"],
};
console.log(modificationMethods);

// 2. Modificar el contenido de los elementos
const elemento = document.getElementById("mi-elemento");
elemento.textContent = "Nuevo contenido de texto";
console.log(elemento.textContent);

elemento.innerHTML = "<strong>Texto en negrita</strong>";
console.log(elemento.innerHTML);

// 3. Seguridad al modificar innerHTML
console.warn(
  "Ten cuidado con la inserción de datos dinámicos para evitar vulnerabilidades de seguridad como ataques XSS."
);

// 4. Modificar atributos de los elementos
const setAttributeExample = document.getElementById("mi-elemento");
setAttributeExample.setAttribute("data-info", "valor");
console.log(setAttributeExample.getAttribute("data-info"));

// 5. Obtener el valor de un atributo
testAttribute = document.getElementById("mi-elemento");
console.log(testAttribute.getAttribute("data-info"));

// 6. Modificación directa de atributos
const imagen = document.getElementById("mi-imagen");
imagen.src = "nueva-foto.jpg";
console.log(imagen.src);
