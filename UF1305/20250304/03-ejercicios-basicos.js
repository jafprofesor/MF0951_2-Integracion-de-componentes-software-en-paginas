//WHILE Crea un bucle while que imprima los números del 1 al 5.
inicio = 1;
while (inicio <= 5) {
    console.log(inicio);
    inicio++;
}

console.log('\n');//salto de carro, separacion-----------

//FUNCTION comprobar año es bisiesto o no
function esBisiesto(ano) {
    // Un año es bisiesto si es divisible por 4
    // Pero los años divisibles por 100 no son bisiestos, a menos que también sean divisibles por 400
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Ejemplos de uso
console.log(esBisiesto(2020)); // true
console.log(esBisiesto(2021)); // false
console.log(esBisiesto(1900)); // false
console.log(esBisiesto(2000)); //true

console.log('\n');//salto de carro, separacion-----------

//FUNCTION reduce() en Array -calcular suma total
let numerosSumar =[1, 2, 3, 4, 5];

function sumar (receptor, valorActual) {
    return receptor + valorActual;
}

let sumaTotal = numerosSumar.reduce((sumar));
console.log('los numeros son: ' + numerosSumar);
console.log('La suma total es: ' + sumaTotal);