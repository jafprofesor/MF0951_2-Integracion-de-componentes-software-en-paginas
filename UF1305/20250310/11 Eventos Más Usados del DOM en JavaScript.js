/*
Clase XX - Ejercicios: Eventos Más Usados del DOM en JavaScript
*/

// 1. Eventos de ventana (estos eventos se pueden añadir a cualquier elemento del DOM)
window.addEventListener("resize", function () {
  console.log("Tamaño de ventana cambiado");
});

window.addEventListener("scroll", function () {
  console.log("Se ha hecho scroll en la página");
});

// 2. Eventos de carga y descarga de la página
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM completamente cargado y parseado");
});

window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
  event.returnValue = "";
  console.log("Antes de salir de la página");
});

// 3. Eventos de mouse (click, doble click, mouseover, mouseout)
document.getElementById("miBoton").addEventListener("click", function () {
  alert("Botón clickeado");
});

document.getElementById("miBoton").addEventListener("dblclick", function () {
  alert("Doble clic en el botón");
});

document
  .getElementById("miElemento")
  .addEventListener("mouseover", function () {
    console.log("Mouse sobre el elemento");
  });

document.getElementById("miElemento").addEventListener("mouseout", function () {
  console.log("Mouse fuera del elemento");
});

// 4. Eventos de drag and drop (arrastrar y soltar)
const elementoArrastrable = document.getElementById("arrastrable");
const contenedor = document.getElementById("contenedor");

elementoArrastrable.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData("text", event.target.id);
  console.log("Drag iniciado");
});

contenedor.addEventListener("dragover", function (event) {
  event.preventDefault();
  console.log("Elemento arrastrado sobre el contenedor");
});

contenedor.addEventListener("drop", function (event) {
  event.preventDefault();
  const id = event.dataTransfer.getData("text");
  const elemento = document.getElementById(id);
  contenedor.appendChild(elemento);
  console.log("Elemento soltado en el contenedor");
});

// 5. Eventos de teclado (permiten detectar las teclas presionadas)
document.addEventListener("keydown", function (event) {
  console.log(`Tecla presionada: ${event.key}`);
});

document.addEventListener("keyup", function (event) {
  console.log(`Tecla liberada: ${event.key}`);
});

// 6. Eventos de formulario (permiten validar los datos antes de enviar el formulario)
document
  .getElementById("miFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Formulario enviado");
  });

document.getElementById("miInput").addEventListener("focus", function () {
  console.log("Input enfocado");
});

document.getElementById("miInput").addEventListener("blur", function () {
  console.log("Input perdió el foco");
});

// 7. Métodos para añadir eventos (propiedad, atributo inline, addEventListener)
const boton = document.getElementById("miBoton");

// Atributo inline (No recomendado)
// <button onclick="miFuncion()">Haz clic aquí</button>

// Propiedad del elemento (Sobrescribe otros eventos)
boton.onclick = function () {
  console.log("Botón clickeado con propiedad onclick");
};

// Método addEventListener (Recomendado, permite añadir varios eventos)
boton.addEventListener("click", function () {
  console.log("Botón clickeado con addEventListener");
});

// 8. Remover eventos con removeEventListener
function manejarClick() {
  console.log("¡Botón clickeado!");
}

boton.addEventListener("click", manejarClick);
boton.removeEventListener("click", manejarClick);

// 9. Delegación de eventos (mejora el rendimiento al añadir un solo evento a un contenedor)
document.getElementById("miLista").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("Elemento de lista clickeado:", event.target.textContent);
  }
});

// 10. Eventos personalizados (se pueden crear eventos personalizados)
document.getElementById("miBoton").addEventListener("saludar", function () {
  console.log("Hola");
});

// 11. Capturing y Bubbling (captura y burbujeo de eventos, es decir, el orden en que se ejecutan los eventos)
document.getElementById("contenedor").addEventListener(
  "click",
  function () {
    console.log("Captura de clic en el contenedor");
  },
  true
);

document.getElementById("boton").addEventListener(
  "click",
  function () {
    console.log("Captura de clic en el botón");
  },
  true
);

document.getElementById("contenedor").addEventListener(
  "click",
  function () {
    console.log("Burbuja de clic en el contenedor");
  },
  false
);

document.getElementById("boton").addEventListener(
  "click",
  function () {
    console.log("Burbuja de clic en el botón");
  },
  false
);

// 12. Detener propagación de eventos (nos permite detener la propagación de eventos por que se ejecuten en otros elementos)
document.getElementById("boton").addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("Propagación detenida en el botón");
});

// 13. Uso de preventDefault (nos permite prevenir el comportamiento por defecto de un evento)
document.getElementById("miEnlace").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Enlace clickeado, pero sin redirección");
});

document
  .getElementById("miFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Validación antes de enviar el formulario");
  });

document
  .getElementById("campoTexto")
  .addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
      event.preventDefault();
      console.log("Tecla Backspace deshabilitada");
    }
  });
