/* styles01.css */
function calcularTotal() {
  const precios = [10, 20, 30, 40, 50];
  let total = 0;

  for (let i = 0; i < precios.length; i++) {
    const cantidad = parseInt(
      document.getElementById(`cantidad${i + 1}`).value
    );
    total += cantidad * precios[i];
  }

  document.getElementById("total").textContent = `Total: ${total}€`;
}
