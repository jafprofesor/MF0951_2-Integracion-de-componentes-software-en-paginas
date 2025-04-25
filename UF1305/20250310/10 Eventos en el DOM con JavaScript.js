/*
Clase XX - Ejercicios: Eventos en el DOM con JavaScript
*/

// 1. ¿Qué son los eventos en el DOM?
let eventosDefinition = {
  descripcion:
    "Un evento en JavaScript es una acción o suceso específico al que podemos reaccionar.",
  uso: "Se utilizan para capturar interacciones del usuario y responder dinámicamente.",
};
console.log(eventosDefinition);

// 2. Tipos comunes de eventos
let eventosTipos = {
  ventana: ["load", "resize", "scroll", "unload"],
  carga: ["DOMContentLoaded", "load"],
  mouse: [
    "click",
    "dblclick",
    "mousedown",
    "mouseup",
    "mousemove",
    "mouseover",
    "mouseout",
  ],
  teclado: ["keydown", "keypress", "keyup"],
  formulario: ["submit", "change", "focus", "blur", "input"],
};
console.log(eventosTipos);

// 3. Uso de addEventListener (escuchador de eventos)
const boton = document.getElementById("mi-boton");
boton.addEventListener("click", function () {
  console.log("Botón clickeado");
});

// 4. Propiedades del evento
boton.addEventListener("click", (evento) => {
  console.log("Tipo de evento:", evento.type);
  console.log("Elemento que disparó el evento:", evento.target);
  evento.preventDefault();
});

// 5. Métodos del evento (un metodo es una función que pertenece a un objeto)
boton.addEventListener("click", (evento) => {
  evento.preventDefault(); // Previene la acción por defecto
  evento.stopPropagation(); // Detiene la propagación del evento
  console.log("Evento detenido");
});

// 6. Propagación de eventos (se usan para controlar el flujo de eventos)
let propagacionEventos = {
  capturing:
    "El evento comienza en el documento raíz y viaja hacia el objetivo.",
  bubbling: "El evento viaja desde el objetivo hacia el documento raíz.",
};
console.log(propagacionEventos);
// 7. Eventos delegados (se usa para mejorar el rendimiento)
const lista = document.getElementById("mi-lista");
lista.addEventListener("click", (evento) => {
  if (evento.target.tagName === "LI") {
    evento.target.classList.toggle("activo");
  }
});
