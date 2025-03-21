// script.js - Carrito de Compras (Shopping Cart)
//
// Este script implementa la funcionalidad de un carrito de compras con las siguientes características:
//
// - Gestión del carrito:
//   * Añadir productos con cantidad específica
//   * Eliminar productos individualmente
//   * Actualizar cantidades de productos
//   * Vaciar carrito completo
//
// - Persistencia de datos:
//   * Almacenamiento local usando localStorage
//   * Carga automática del carrito al iniciar
//
// - Interfaz de usuario:
//   * Visualización de productos en popup
//   * Contador de artículos en carrito
//   * Cálculo de subtotales y total
//   * Mensajes de confirmación
//
// - Proceso de compra:
//   * Finalización de compra con resumen
//   * Gestión de sesión de usuario

/*
Explicación de las funciones principales:

añadirAlCarrito(id):
- Añade un artículo al carrito con una cantidad específica
- Obtiene el precio del artículo según su ID
- Guarda el carrito y actualiza el contador
- Muestra mensaje de confirmación

mostrarCarrito():
- Muestra un popup con los artículos del carrito
- Calcula subtotales y total
- Permite modificar cantidades
- Incluye botones para eliminar artículos

cerrarCarrito():
- Oculta el popup del carrito

cargarCarrito():
- Carga el carrito desde localStorage al iniciar
- Actualiza el contador de artículos

guardarCarrito():
- Guarda el estado actual del carrito en localStorage

vaciarCarrito():
- Elimina todos los artículos del carrito
- Actualiza localStorage y la vista

eliminarDelCarrito(index):
- Elimina un artículo específico del carrito
- Actualiza localStorage y la vista
- Actualiza el contador

actualizarCantidad(index, nuevaCantidad):
- Modifica la cantidad de un artículo existente
- Valida que la cantidad sea positiva
- Actualiza localStorage y la vista

actualizarContadorCarrito():
- Actualiza el número total de artículos mostrado

finalizarCompra():
- Muestra resumen de la compra con subtotales
- Vacía el carrito tras confirmar
- Muestra mensaje de confirmación

cerrarSesion():
- Elimina todos los datos del carrito
- Limpia localStorage
- Reinicia el contador
*/

let carrito = []; // Array para almacenar los artículos del carrito
// Función para añadir un artículo al carrito
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
// Función para mostrar el carrito
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
    li.textContent = `Artículo ${articulo.id}: ${articulo.cantidad} x ${articulo.precio}€ = ${subtotal}€`; // Changed $ to €
    listaCarrito.appendChild(li);
  });

  totalCarrito.textContent = `Total: ${total}€`; // Changed $ to €
  popup.style.display = "flex";
}
// Función para cerrar el carrito
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
// Cargar el carrito desde localStorage al iniciar la página
function mostrarCarrito() {
  const popup = document.getElementById("carritoPopup");
  const listaCarrito = document.getElementById("listaCarrito");
  const totalCarrito = document.getElementById("totalCarrito");

  // Limpiar la lista del carrito
  listaCarrito.innerHTML = "";

  // Calcular el total y mostrar los artículos en el carrito
  let total = 0;
  carrito.forEach((articulo, index) => {
    const subtotal = articulo.cantidad * articulo.precio;
    total += subtotal;
    const li = document.createElement("li");
    li.textContent = `Artículo ${articulo.id}: ${articulo.cantidad} x ${articulo.precio}€ = ${subtotal}€`;

    // Botón para eliminar el artículo
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = () => eliminarDelCarrito(index);
    li.appendChild(botonEliminar);

    listaCarrito.appendChild(li);
  });

  // Mostrar el total
  totalCarrito.textContent = `Total: ${total}€`;

  // Mostrar el popup
  popup.style.display = "flex";
}
// Función para eliminar un artículo del carrito
function eliminarDelCarrito(index) {
  carrito.splice(index, 1); // Eliminar el artículo del carrito
  guardarCarrito(); // Actualizar el localStorage
  mostrarCarrito(); // Actualizar la vista del carrito
}
// Función para actualizar el carrito
function mostrarCarrito() {
  const popup = document.getElementById("carritoPopup");
  const listaCarrito = document.getElementById("listaCarrito");
  const totalCarrito = document.getElementById("totalCarrito");

  // Limpiar la lista del carrito
  listaCarrito.innerHTML = "";

  // Calcular el total y mostrar los artículos en el carrito
  let total = 0;
  carrito.forEach((articulo, index) => {
    const subtotal = articulo.cantidad * articulo.precio;
    total += subtotal;
    const li = document.createElement("li");

    // Texto del artículo
    li.appendChild(document.createTextNode(`Artículo ${articulo.id}: `));

    // Input para cantidad
    const inputCantidad = document.createElement("input");
    inputCantidad.type = "number";
    inputCantidad.value = articulo.cantidad;
    inputCantidad.min = 1;
    inputCantidad.style.width = "60px";
    inputCantidad.onchange = (e) => actualizarCantidad(index, e.target.value);
    li.appendChild(inputCantidad);

    // Precio y subtotal
    li.appendChild(
      document.createTextNode(` x ${articulo.precio}€ = ${subtotal}€ `)
    );

    // Botón eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = () => eliminarDelCarrito(index);
    li.appendChild(botonEliminar);

    listaCarrito.appendChild(li);
  });
  // Mostrar el total
  totalCarrito.textContent = `Total: ${total}€`;
  popup.style.display = "flex";
}

// Función para actualizar la cantidad de un artículo en el carrito
function actualizarCantidad(index, nuevaCantidad) {
  if (nuevaCantidad > 0) {
    carrito[index].cantidad = parseInt(nuevaCantidad);
    guardarCarrito(); // Actualizar el localStorage
    mostrarCarrito(); // Actualizar la vista del carrito
  } else {
    alert("La cantidad debe ser mayor que 0.");
  }
}
// Función para actualizar el contador del carrito
function actualizarContadorCarrito() {
  const contador = document.getElementById("contadorCarrito");
  contador.textContent = carrito.length;
}

// Llamar a esta función cada vez que se modifique el carrito
function añadirAlCarrito(id) {
  const cantidad = parseInt(document.getElementById(`cantidad${id}`).value);
  if (cantidad > 0) {
    const precio = [10, 20, 30, 40, 50][id - 1];
    const articulo = { id, cantidad, precio };
    carrito.push(articulo);
    guardarCarrito();
    actualizarContadorCarrito(); // Actualizar el contador
    alert(`Añadido ${cantidad} unidad(es) del Artículo ${id} al carrito.`);
  } else {
    alert("Por favor, introduce una cantidad válida.");
  }
}
// Función para eliminar un artículo del carrito
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  guardarCarrito();
  mostrarCarrito();
  actualizarContadorCarrito(); // Actualizar el contador
}

// Llamar a esta función al cargar la página
function cargarCarrito() {
  const carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
    actualizarContadorCarrito(); // Actualizar el contador
  }
}
// Función para finalizar la compra
function finalizarCompra() {
  if (carrito.length > 0) {
    alert("¡Gracias por tu compra! Tu pedido ha sido procesado.");
    vaciarCarrito(); // Vaciar el carrito
  } else {
    alert("El carrito está vacío. Añade artículos para finalizar la compra.");
  }
}
// Función para finalizar la compra
function finalizarCompra() {
  if (carrito.length > 0) {
    let resumen = "Resumen de la compra:\n";
    let total = 0;
    carrito.forEach((articulo) => {
      const subtotal = articulo.cantidad * articulo.precio;
      total += subtotal;
      resumen += `Artículo ${articulo.id}: ${articulo.cantidad} x ${articulo.precio}€ = ${subtotal}€\n`;
    });
    resumen += `Total: ${total}€`;
    alert(resumen);
    vaciarCarrito(); // Vaciar el carrito
  } else {
    alert("El carrito está vacío. Añade artículos para finalizar la compra.");
  }
}
// Función para cerrar sesión
function cerrarSesion() {
  localStorage.removeItem("carrito");
  carrito = [];
  actualizarContadorCarrito();
  alert("Sesión cerrada. El carrito ha sido vaciado.");
}

// Cargar el carrito al iniciar la página
cargarCarrito();
