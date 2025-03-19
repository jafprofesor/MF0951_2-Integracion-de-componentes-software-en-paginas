// script.js
let carrito = [];

function añadirAlCarrito(id) {
  const cantidad = parseInt(document.getElementById(`cantidad${id}`).value);
  if (cantidad > 0) {
    const precio = [10, 20, 30, 40, 50][id - 1];
    const articulo = { id, cantidad, precio };
    carrito.push(articulo);
    alert(`Añadido ${cantidad} unidad(es) del Artículo ${id} al carrito.`);
  } else {
    alert("Por favor, introduce una cantidad válida.");
  }
}

function mostrarCarrito() {
  const popup = document.getElementById("carritoPopup");
  const listaCarrito = document.getElementById("listaCarrito");
  const totalCarrito = document.getElementById("totalCarrito");

  // Limpiar la lista del carrito
  listaCarrito.innerHTML = "";

  // Calcular el total y mostrar los artículos en el carrito
  let total = 0;
  carrito.forEach((articulo) => {
    const subtotal = articulo.cantidad * articulo.precio;
    total += subtotal;
    const li = document.createElement("li");
    li.textContent = `Artículo ${articulo.id}: ${articulo.cantidad} x ${articulo.precio}€ = ${subtotal}€`;
    listaCarrito.appendChild(li);
  });

  // Mostrar el total
  totalCarrito.textContent = `Total: ${total}€`;

  // Mostrar el popup
  popup.style.display = "flex";
}

function cerrarCarrito() {
  const popup = document.getElementById("carritoPopup");
  popup.style.display = "none";
}
