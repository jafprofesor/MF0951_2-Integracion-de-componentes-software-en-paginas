/* styles01.css */
// Esta función calcula el total de la compra multiplicando el precio de cada producto
// por su cantidad seleccionada. Recorre un array de precios fijos, obtiene las cantidades
// ingresadas por el usuario a través de campos de entrada HTML (input), realiza las
// multiplicaciones correspondientes, suma todos los subtotales y muestra el resultado
// final en euros en un elemento HTML con id "total".
function calcularTotal() {
  const precios = [10, 20, 30, 40, 50]; // Precios de los productos
  let total = 0; // Inicializar el total a 0

  for (let i = 0; i < precios.length; i++) {
    const cantidad = parseInt(
      // Convertir a número entero
      document.getElementById(`cantidad${i + 1}`).value // Obtener el valor del campo de entrada
    );
    total += cantidad * precios[i]; // Calcular el subtotal y sumarlo al total
  }
  // Mostrar el total en el elemento HTML
  document.getElementById("total").textContent = `Total: ${total}€`;
}
