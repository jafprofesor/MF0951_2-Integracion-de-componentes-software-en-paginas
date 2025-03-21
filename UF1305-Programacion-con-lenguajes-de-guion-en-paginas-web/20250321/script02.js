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
  const cantidad = parseInt(document.getElementById(`cantidad${id}`).value); // el parseInt es para que el valor del input sea un número
  if (cantidad > 0) {
    const preciosArray = [10, 20, 30, 40, 50];
    const precio = preciosArray[id - 1];
    //const precio = [10, 20, 30, 40, 50][id - 1]; // el [id - 1] es para que el id empiece en 1 y no en 0, y así coincida con el índice del array [0, 1, 2, 3, 4]
    const articulo = { id, cantidad, precio }; // el precio se obtiene del array [10, 20, 30, 40, 50] y el id se obtiene del input
    // {} indica que es un objeto, los objetos se escriben entre {} y los arrays se escriben entre []
    // la diferencia entre un array y un objeto es que un array es una lista de elementos y un objeto es una lista de propiedades y valores
    // el id se obtiene del input y el precio se obtiene del array, y el id y el precio se guardan en el objeto articulo, y el articulo se guarda en el array carrito
    carrito.push(articulo); // el push es para añadir el artículo al array
    alert(`Añadido ${cantidad} unidad(es) del Artículo ${id} al carrito.`);
  } else {
    alert("Por favor, introduce una cantidad válida.");
  }
}
// Función para mostrar el carrito
function mostrarCarrito() {
  const popup = document.getElementById("carritoPopup");
  const listaCarrito = document.getElementById("listaCarrito"); //
  const totalCarrito = document.getElementById("totalCarrito");

  // Limpiar la lista del carrito
  listaCarrito.innerHTML = "";

  // Calcular el total y mostrar los artículos en el carrito
  let total = 0;
  carrito.forEach((articulo) => {
    // el forEach es para recorrer el array carrito
    // Calcular el subtotal y mostrar el artículo en la lista
    const subtotal = articulo.cantidad * articulo.precio; // el subtotal es la cantidad multiplicada por el precio
    total += subtotal; // el total es la suma de los subtotales
    // Crear un elemento li para mostrar el artículo en la lista
    const li = document.createElement("li");
    li.textContent = `Artículo ${articulo.id}: ${articulo.cantidad} x ${articulo.precio}€ = ${subtotal}€`; // el textContent es para que el texto se muestre en el li
    listaCarrito.appendChild(li);
  });

  // Mostrar el total
  totalCarrito.textContent = `Total: ${total}€`;

  // Mostrar el popup
  popup.style.display = "flex"; // el display flex es para que el popup se muestre en la pantalla
}
// Función para cerrar el carrito
function cerrarCarrito() {
  const popup = document.getElementById("carritoPopup");
  popup.style.display = "none"; // el display none es para que el popup se oculte de la pantalla
}
