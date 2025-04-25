let alumnos = new Map([
  //notas de alumnos, MAP
  ["juan", 8],
  ["Luis", 7],
  ["Teo", 9],
]);
console.log(alumnos);
console.log(alumnos.get("Teo"));

//bucle for
let numeros = [10, 20, 30, 40, 50];
for (i = 0; i < numeros.length; i++) {
  console.log(`posicion ${i}`); //asi nos muestra la posicion
  console.log(numeros[i]);
}

//funciones

function multiplicar(num1, num2) {
  return num1 * num2;
}
let total = multiplicar(2, 5);
console.log('el resultado de la multiplicar es: '+ total);


function multiplicarDosNumeros (numero1, numero2) {
  return numero1 * numero2;
}
let resultado =multiplicarDosNumeros(10, 6);
console.log('el resultado es: '+ resultado +'\n');

/*--------------*/
let numero = 100;
let numeroCambiarTexto = numero.toString();
console.log(typeof numeroCambiarTexto);

let texto = "prueba";
let textoCambiarNumero = Number(texto);
console.log(typeof texto);

/*-------------*/
let usuarioActivo = false;
let tienePermiso = true;
/*
if (usuarioActivo == true && tienePermiso == true) {
  console.log("Está todo correcto");
} else {
  console.log("Algo falla");
}
*/
function comprobar(usuarioActivo1, tienePermiso1) {
  if (usuarioActivo1 == true && tienePermiso1 == true) {
    return "Está todo correcto 2";
  } else {
    return "Algo falla 2";
  }
}
console.log(comprobar(false, false));

/*-----------------*/
let ciudades = ["Málaga", "Sevilla", "Valencia", "Orense"];

console.log(ciudades.includes("Málaga")); //true
console.log(ciudades.includes("Sevilla")); //true
console.log(ciudades.includes("Valencia")); //true
console.log(ciudades.includes("Madrid")); //false

let ciudades2 = ["Málaga", "Sevilla", "Valencia", "Orense", "Zaragoza"];
console.log(ciudades2.splice(2, 1));
console.log(ciudades2);

let ciudades3 = ["Málaga3", "Sevilla3", "Valencia3", "Orense3", "Zaragoza3"];
ciudades.sort((a, b) => a - b);
console.log(ciudades3);

//ordenar numeros ARRAY con SORT
let numerosOrdenar = [2, 10, 4, 12, 8, 6];
console.log(numerosOrdenar.sort())

let ordenarNumeros = [2, 10, 4, 12, 8, 6];
ordenarNumeros.sort((a,b) => a-b);
console.log('Numeros ordenados: '+ ordenarNumeros);

console.log('\n');//salto de carro, separacion
//Numero aleatorio 1-100 MATH.RANDOM
let numeroAleatorio = Math.floor(Math.random() * 100) +1 ;
console.log('Numero aleatorio: ' + numeroAleatorio);

console.log('\n');//salto de carro, separacion-----------

//Recorrer un MAP con funcion ForEach
let productos = new Map ([ //forEach
  ['zapatos: ', 12.5 +'€'],
  ['camisa: ', 14.5 +'€'],
  ['pantalon: ', 19.5 + '€'],
  ['falda: ', 12.8 +'€']
])

productos.forEach((precio, productos) => {
  console.log(productos + precio,)
});

console.log('\n');//salto de carro, separacion-----------

let coches = new Map ([
  ['Seat', 6000],
  ['Audi', 12000 ],
  ['VolksWagen', 8000],
  ['Kia', 9000]
]);

coches.forEach((precio, coches) => { //forEach
  console.log(coches +' '  + precio + ' €');
});

console.log('\n');//salto de carro, separacion-----------

let camisetas = new Map ([
  ['Adidas: ', 19.80 + '€' ],
  ['Nike: ', 20.5 + '€'],
  ['Puma: ', 15.20 + '€'],
  ['Rebook: ', 12.50 + '€']
]);

camisetas.forEach((precio, camisetas) =>{ //forEach
  console.log(camisetas + precio);
});

console.log('\n');//salto de carro, separacion-----------