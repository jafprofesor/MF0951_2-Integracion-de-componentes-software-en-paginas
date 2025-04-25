
//let total = document.getElementById('total');
function calcularTotal() {

//function calcularTotal()
let precio = [10, 20, 30, 40, 50];

/*let cantidad1 = document.getElementById('cantidad1').value;
//let resultado1 = cantidad1 * precio [0];

let cantidad2 = document.getElementById('cantidad2').value;
//let resultado2 = cantidad2 * precio [1];

let cantidad3 = document.getElementById('cantidad3').value;
//let resultado3 = cantidad3 * precio [2];

let cantidad4 = document.getElementById('cantidad4').value;
//let resultado4 = cantidad4 * precio [3];

let cantidad5 = document.getElementById('cantidad5').value;
//let resultado5 = cantidad5 * precio [4];

//TotalCompra.textContent = `${resultado1 + resultado2 + resultado3 + resultado4 + resultado5} €`;*/
let total = 0;
for (let i= 0; i < precio.length ; i++) {
     total += document.getElementById(`cantidad${i+1}`).value * precio[i];
    };

    document.getElementById('total').textContent= total;
}
