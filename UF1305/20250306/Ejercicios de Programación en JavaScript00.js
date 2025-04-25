// usuario y contraseña
let usuario = "admin";
let pass = 1234;

if (usuario == "admin" && pass == 1234) {
  console.log("Acceso concedido");
} else {
  console.log("Acceso denegado");
}

// ejercicio 2 slug-sin espacios y minusculas
function slug(entrada) {
  return entrada
    .toLowerCase()
    .replace(/\s+/g, "-")
    .normalize("NFD")
    .replace(/\u0300-\u056f]/g, "");
}
let entrada = slug("Aprendiendo JavaScript desde cero");
console.log(entrada);

//creacion Map para cambiar idioma y color
let mapaIdCo = new Map();

mapaIdCo = new Map([
  ["color", "oscuro"],
  ["idioma", "español"],
]);

console.log(mapaIdCo);
mapaIdCo.set("color", "claro");

console.log(mapaIdCo);
console.log(mapaIdCo.get("idioma"));
mapaIdCo.set("edad", "18");
console.log(mapaIdCo);

//filtro de productos menor de 50 €
const productos = [
  { nombre: "Teclado", precio: 30 },
  { nombre: "Ratón", precio: 25 },
  { nombre: "Monitor", precio: 200 },
  { nombre: "USB", precio: 15 },
];

//vamos a hacerlo con for
//function filtrarProductos(productos, precio )

//funcion pasar mayusculas, minusculas, capitales
//function convertir (texto) {

//}

//const usuarioRegistrados = new Set ("juan", "maria", "pedro");

//function comprobar (usuarios) {

//}

/*contador caracteres
function contador (texto) {
return texto.length <=160 ? "descripcion válida" : "excede el limiet caracyteres";
} // falta codigo
*/
//simulacion carrito
let carrito = [
  { nombre: "teclado", precio: 30 },
  { nombre: "raton", precio: 30 },
  { nombre: "monitor", precio: 200 },
];

function calcularTotal(carrito) {
  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].nombre !== nombreProducto) {
      nuevoCarrito.push(carrito[i]);
    }
  }
  return nuevoCarrito;
}
console.log(carrito);

//genera comentarios bueno-malo
let comentarios = [
  "Este producto es muy bueno",
  "la calidad es mala",
  "Me encantó, es un buen producto",
  "No me gustó, es malo",
];

function coment(comentarios) {
  let coment2 = 0;
  for (let i = 0; i < comentarios.length; i++) {
    if (comentarios.include("bueno", "buena")) {
      console.log(`hay ${cmentarios}`);
    }
  }
}
