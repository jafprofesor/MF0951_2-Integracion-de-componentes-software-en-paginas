// Este script implementa un carrito de compras con las siguientes funcionalidades:
//
// 1. Gestión del Carrito:
//    - Permite añadir artículos con cantidades específicas
//    - Almacena ID, cantidad y precio de cada artículo
//    - Calcula subtotales y total de la compra
//
// 2. Persistencia de Datos:
//    - Guarda el carrito en localStorage del navegador
//    - Recupera el carrito al recargar la página
//
// 3. Interfaz de Usuario:
//    - Muestra popup con lista detallada de artículos
//    - Permite cerrar y vaciar el carrito
//    - Validación de cantidades ingresadas
//
// 4. Funciones Principales:
//    - añadirAlCarrito(): Agrega artículos
//    - mostrarCarrito(): Visualiza contenido
//    - cerrarCarrito(): Oculta el popup
//    - guardarCarrito(): Persiste en localStorage
//    - cargarCarrito(): Recupera datos guardados
//    - vaciarCarrito(): Elimina todos los artículos
let carrito = []; // Array para almacenar los artículos en el carrito
// Función para añadir un artículo al carrito
function añadirAlCarrito(id) {
  const cantidad = parseInt(document.getElementById(`cantidad${id}`).value); // Obtener la cantidad ingresada
  if (cantidad > 0) {
    const precio = [10, 20, 30, 40, 50][id - 1]; // Obtener el precio del artículo
    const articulo = { id, cantidad, precio }; // Crear un objeto con el artículo
    carrito.push(articulo); // Agregar el artículo al carrito
    guardarCarrito(); // Guardar el carrito en localStorage
    alert(`Añadido ${cantidad} unidad(es) del Artículo ${id} al carrito.`); // Mostrar mensaje de éxito
  } else {
    alert("Por favor, introduce una cantidad válida.");
  }
}
// Función para mostrar el carrito
function mostrarCarrito() {
  const popup = document.getElementById("carritoPopup"); // Cambiado de "popup" a "carritoPopup"
  const listaCarrito = document.getElementById("listaCarrito"); // Cambiado de "lista" a "listaCarrito"
  const totalCarrito = document.getElementById("totalCarrito"); // Cambiado de "total" a "totalCarrito"

  listaCarrito.innerHTML = ""; // Limpiar la lista antes de mostrar los artículos
  let total = 0;

  carrito.forEach((articulo) => {
    const subtotal = articulo.cantidad * articulo.precio; // Calcula el subtotal
    total += subtotal; // Suma el subtotal al total
    const li = document.createElement("li"); // Cambiado de "li" a "li"
    li.textContent = `Artículo ${articulo.id}: ${articulo.cantidad} x ${articulo.precio}€ = ${subtotal}€`; // Asignación de texto al elemento
    listaCarrito.appendChild(li); // Añade el elemento al DOM
  });

  totalCarrito.textContent = `Total: ${total}€`; // Asignación de texto al elemento
  popup.style.display = "flex"; // Cambiado de "block" a "flex"
}
// Función para cerrar el carrito
function cerrarCarrito() {
  const popup = document.getElementById("carritoPopup"); // Cambiado de "popup" a "carritoPopup"
  popup.style.display = "none";
}

// Cargar el carrito desde localStorage al iniciar la página
function cargarCarrito() {
  const carritoGuardado = localStorage.getItem("carrito"); // Obtener el carrito guardado en localStorage
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado); // Parsear el carrito desde JSON, parsear es para que el carrito se convierta en un array
  }
}

// Guardar el carrito en localStorage
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito)); // Guardar el carrito en localStorage
}

// Vaciar el carrito
function vaciarCarrito() {
  carrito = [];
  guardarCarrito(); // Guardar el carrito vacío en localStorage
  mostrarCarrito(); // Mostrar el carrito vacío
  alert("El carrito ha sido vaciado."); // Mostrar mensaje de éxito
}

// Cargar el carrito al iniciar la página
cargarCarrito(); // Cargar el carrito desde localStorage
