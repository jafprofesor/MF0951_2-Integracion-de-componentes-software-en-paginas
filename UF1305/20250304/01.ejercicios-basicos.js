let nombre = "Dani"; // variable string
let numero = 61; // variable nunmero
let estudiante = true; // variable booleano
let profesor = false; // variable booleano
console.log(typeof nombre, typeof numero, typeof estudiante, typeof profesor);
console.log("Datos: ", nombre, numero, estudiante, profesor);

//operadores
let num1 = 10;
let num2 = 2;

let suma = num1 + num2; //suma
console.log(suma);

let resta = num1 - num2; //resta
console.log(resta);

let multiplicacion = num1 * num2; //multiplica
console.log(multiplicacion);

let division = num1 / num2; //division
console.log(division);

//saludos
let nombre2 = "Luke Skywalker";
let saludo = "Bienvenido al curso jedi, joven Padawan";
let saludo2 = `hola ${nombre2}`;
console.log(saludo + " " + nombre2);
console.log(saludo2);

//consulta edad
let edad = 14;
if (edad > 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor, no puedes pasar");
}
console.log(edad);

//array colorers
let colores = ["rojo", "verde", "azul"];
console.log(colores[1]);

let colores2 = new Array();
colores2.push("rosa", "lila");
console.log(colores2);

//metodos con el Array
let frutas = ["naranja", "limon", "manzana"];
frutas.push("cereza", 13, true); //añade al final--AÑADIR
console.log(frutas);
frutas.pop(); //elimina del final--ELIMINA FINAL
/*si lo ponemos en una variable puedes guardarlo  
ejemplo: let frutaQuitada = frutas.pop();*/
console.log(frutas);
frutas.shift(); //elimina el principoio-ELIMINA PRINCIPIO
console.log(frutas);

//Eliminar duplicados
let herramientas = [
  "alicates",
  "llave inglesa",
  "alicates",
  "destornillador",
  "allen",
];
console.log(herramientas);
let nuevoSet = new Set(herramientas); //elimina el repetido: alicates
console.log(nuevoSet);
