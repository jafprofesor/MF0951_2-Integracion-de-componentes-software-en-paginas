// 1. Seleccionar un elemento por su ID y cambiar su contenido:
// HTML: <div id="miDiv">Contenido original</div>
const miDiv = document.getElementById("miDiv");
miDiv.textContent = "Contenido actualizado";
// 2. Seleccionar todos los elementos con una clase específica y cambiar su color de fondo:
// HTML: <div class="miClase">Elemento 1</div><div class="miClase">Elemento 2</div>
const elementosClase = document.getElementsByClassName("miClase");
for (let i = 0; i < elementosClase.length; i++) {
  elementosClase[i].style.backgroundColor = "yellow";
}
// 3. Seleccionar todos los elementos de una etiqueta específica y ocultarlos:
// HTML: <p>Parrafo 1</p><p>Parrafo 2</p>
const elementosTag = document.getElementsByTagName("p");
for (let i = 0; i < elementosTag.length; i++) {
  elementosTag[i].style.display = "none";
}
// 4. Seleccionar el primer elemento que coincide con un selector CSS y cambiar su texto:
// HTML: <div class="miClase">Elemento 1</div><div class="miClase">Elemento 2</div>
const primerElemento = document.querySelector(".miClase");
primerElemento.textContent = "Primer elemento actualizado";
// 5. Seleccionar todos los elementos que coinciden con un selector CSS y agregarles una clase:
// HTML: <div class="miClase">Elemento 1</div><div class="miClase">Elemento 2</div>
const todosLosElementos = document.querySelectorAll(".miClase");
todosLosElementos.forEach((elemento) => {
  elemento.classList.add("nuevaClase");
});
// 6. Crear un nuevo elemento y agregarlo al DOM:
// HTML: <div id="contenedor"></div>
const nuevoElemento = document.createElement("p");
nuevoElemento.textContent = "Nuevo párrafo";
document.getElementById("contenedor").appendChild(nuevoElemento);
// 7. Eliminar un elemento del DOM:
// HTML: <div id="miDiv">Contenido</div>
const miDiv = document.getElementById("miDiv");
miDiv.remove();
// 8. Cambiar el atributo de un elemento seleccionado por su ID:
// HTML: <img id="miImagen" src="imagen1.jpg">
const miImagen = document.getElementById("miImagen");
miImagen.src = "imagen2.jpg";
// 9. Agregar un evento de clic a un elemento seleccionado por su clase:
// HTML: <button class="miBoton">Haz clic</button>
const miBoton = document.querySelector(".miBoton");
miBoton.addEventListener("click", () => {
  alert("Botón clickeado");
});
// 10. Seleccionar todos los elementos de una etiqueta específica y cambiar su estilo de fuente:
// HTML: <h1>Título 1</h1><h1>Título 2</h1>
const titulos = document.getElementsByTagName("h1");
for (let i = 0; i < titulos.length; i++) {
  titulos[i].style.fontFamily = "Arial, sans-serif";
}
// 11. Seleccionar todos los elementos que coinciden con un selector CSS y cambiar su tamaño de fuente:
// HTML: <p class="miParrafo">Parrafo 1</p><p class="miParrafo">Parrafo 2</p>
const parrafos = document.querySelectorAll(".miParrafo");
parrafos.forEach((parrafo) => {
  parrafo.style.fontSize = "20px";
});
// 12. Crear un nuevo elemento con un atributo personalizado y agregarlo al DOM:
// HTML: <div id="contenedor"></div>
const nuevoElemento = document.createElement("div");
nuevoElemento.textContent = "Nuevo elemento";
nuevoElemento.setAttribute("data-atributo", "valor");
document.getElementById("contenedor").appendChild(nuevoElemento);
