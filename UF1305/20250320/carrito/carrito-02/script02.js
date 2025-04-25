// Este código implementa un carrito de compras básico en JavaScript:
//
// 1. Mantiene un array 'carrito' que almacena los artículos seleccionados
//
// 2. Incluye tres funciones principales:
//    - añadirAlCarrito(): Permite agregar artículos especificando cantidad
//    - mostrarCarrito(): Muestra un popup con los artículos y el total
//    - cerrarCarrito(): Oculta el popup del carrito
//
// 3. Cada artículo en el carrito tiene:
//    - id: Identificador único del producto
//    - cantidad: Número de unidades seleccionadas
//    - precio: Precio unitario del artículo
//
// 4. El código maneja la interfaz visual mediante:
//    - Manipulación del DOM para mostrar/ocultar elementos
//    - Creación dinámica de elementos para la lista del carrito
//    - Cálculo automático de subtotales y total
let carrito = [];
// Función para añadir un artículo al carrito
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
// Función para mostrar el carrito
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
// Función para cerrar el carrito
function cerrarCarrito() { 
  const popup = document.getElementById("carritoPopup");
  popup.style.display = "none";
}
