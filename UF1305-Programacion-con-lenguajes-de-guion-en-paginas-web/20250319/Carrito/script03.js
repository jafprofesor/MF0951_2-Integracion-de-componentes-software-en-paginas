// script.js
let carrito = [];

function añadirAlCarrito(id) {
  const cantidad = parseInt(document.getElementById(`cantidad${id}`).value);
  if (cantidad > 0) {
    const precio = [10, 20, 30, 40, 50][id - 1];
    const articulo = { id, cantidad, precio };
    carrito.push(articulo);
    guardarCarrito(); // Guardar el carrito en localStorage
    alert(`Añadido ${cantidad} unidad(es) del Artículo ${id} al carrito.`);
  } else {
    alert("Por favor, introduce una cantidad válida.");
  }
}

function mostrarCarrito() {
  const popup = document.getElementById("carritoPopup");
  const listaCarrito = document.getElementById("listaCarrito");
  const totalCarrito = document.getElementById("totalCarrito");

  listaCarrito.innerHTML = "";
  let total = 0;

  carrito.forEach((articulo) => {
    const subtotal = articulo.cantidad * articulo.precio;
    total += subtotal;
    const li = document.createElement("li");
    li.textContent = `Artículo ${articulo.id}: ${articulo.cantidad} x ${articulo.precio}€ = ${subtotal}€`;
    listaCarrito.appendChild(li);
  });

  totalCarrito.textContent = `Total: ${total}€`;
  popup.style.display = "flex";
}

function cerrarCarrito() {
  const popup = document.getElementById("carritoPopup");
  popup.style.display = "none";
}

// Cargar el carrito desde localStorage al iniciar la página
function cargarCarrito() {
  const carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
  }
}

// Guardar el carrito en localStorage
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Vaciar el carrito
function vaciarCarrito() {
  carrito = [];
  guardarCarrito(); // Changed from localStorage.removeItem("carrito")
  mostrarCarrito();
  alert("El carrito ha sido vaciado.");
}

// Cargar el carrito al iniciar la página
cargarCarrito();
