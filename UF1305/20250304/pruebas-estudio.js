//tipos de datos
let nombre = "Dani"; //string
let edad = 61;//number
let esEstudiante = true; //boolenao
let esProfesor = false;//booleano

console.log 
('nombre es: '+ typeof nombre + '\n' +
'edad es: ' + typeof edad + '\n' +
'esEstudiante es: ' + typeof esEstudiante + '\n' +
'esProfesor es: ' + typeof esProfesor + '\n'
);

//operadores
let num1 = 10;
let num2 = 2;
let suma = num1 + num2;
let resta = num1 - num2;
let multiplica = num1 * num2;
let division = num1 / num2;
console.log(
    'La suma es: ' + suma + '\n'+
    'la resta es: ' + resta + '\n'+
    'la multiplicación es: ' + multiplica + '\n' +
    'la divsión es: ' + division 
    );

//string
let saludo = "Bienvenidos al curso de JavaScript";
let tuNombre = 'Dani';
console.log('hola ' + tuNombre +" " + saludo + '\n');//concatenar variables string

let saludoConcatena = 'hola ' +`${tuNombre}` + `${saludo}`; //opcion con variables
console.log("(con variables: )" + saludoConcatena + '\n');

//bucle if edad
let tuEdad = 20;
if (tuEdad > 18) {
    console.log("Eres Mayor de edad, puedes pasar");
}
else {
    console.log("Lo siento, eres menor, NO puedes pasar");
}
console.log("Tu edad es: " + tuEdad + " años" + '\n');

//array colores
let colores = ['rojo ', 'verde ', 'azul '];
console.log('Los colores son: ' + colores);
console.log("el segundo color es: " + colores[1] + '\n')

//array PUSH añadir, POP Eliminar
colores.push('rosa ', 'naranja ');//PUSH--> añadir al final
console.log("colores añadidos: " + colores + '\n');

let objetosOficinas = ['posit', 'boli', 'lapiz', 'libreta'];
console.log('lista principal: ' + objetosOficinas);
objetosOficinas.push('clips', 'calculadora');//PUSH añadir
console.log('añadiendo al final :' + objetosOficinas +'\n');


let frutas = ['naranaja', 'limón', 'manzana', 'platano'];
frutas.push('melocotón', 'uvas');//PUSH añade
console.log('con PUSH añade al final: ' + frutas + '\n');

frutas.pop()//ELIMINA
console.log('con POP resta-quita el último: ' + frutas +'\n');//POP elimina el último

//SET valores únicos//ARRAY
let herramientas = ['alicates', 'llave', 'allen', 'martillo', 'llave', 'sierra'];
console.log('ARRAY-las herramientas son: ' + herramientas + '\n'); //el array sin modificar)
/* extraño, no salió lo que esperaba
herramientas = new Set(herramientas + '\n');//Array lo convertimos en Set-no permite duplicados
console.log(herramientas);
*/
let herramientasSet = new Set(herramientas); //convertimos el array en set
console.log(herramientasSet);
console.log('\n');


//Mapas - asignar notas a estudiantes
let alumnosNotas = new Map ([
    ["Juan", 8],
    ["Luis", 7],
    ["Iván", 8.5]
]);
console.log(alumnosNotas);//muestra el Map de alumnosNotas
console.log('\n');

alumnosNotas.forEach((nota, nombre) => { //con ForEach
    console.log(`El alumno es: ${nombre}, Su nota es: ${nota}`);
});
console.log('\n');//siguiente line-<br>

for (let [nombre2,nota2] of alumnosNotas) { //con un For
    console.log(`Alumno: ${nombre2}, Nota: ${nota2}`);
}

//for numero
/*let numeros = [10, 20, 30, 40, 50];
  for (i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);//muestra el contenido del array gracias al for
    console.log(`Array posición  ${i} `);//asi nos muestra la posicion

  }*/
let numeros = [5,10,15, 20, 25];
for (i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
    console.log(`Posición ${[i]} `);
}


//function multiplicar
function multiplicar (num1, num2) {
    return num1 * num2;
}
let resultado = multiplicar (3, 5);
console.log('el resultado es: ' + resultado);

//convertir STRING y NUMEROS
let texto = "Cadena de texto";
let textoCambiarNumero = Number (texto);
console.log('texto cambiado a: ' + typeof texto);

let numero = 100;
let numeroCambiaTexto = toString (numero);
console.log('numero cambiado a: '+ typeof numero);

//Usuario Activo y Permiso
function comprobar (usuarioActivo,usuarioPermiso) {
    if (usuarioActivo == true && usuarioPermiso == true) {
        return "Tienes permiso, todo correcto";
    }
    else {
        return "NO tienes permiso, algo ha fallado";
    }
}
console.log(comprobar (true, true));

//comprobar en arrays (INCLUDES)
/*let ciudades = ['Málaga', 'Barcelona', 'Sevilla', 'Zaragoza', 'Vigo'];
for (i = 0; i < ciudades.length; i++) {
    console.log(ciudades.includes('Madrid'));
    console.log(ciudades.includes('Málaga', 'Barcelona','Sevilla' ))
}*/

let CIudades = ['Málaga', 'Barcelona', 'Sevilla', 'Zaragoza', 'Bilbao'];
console.log(CIudades.includes(
    'Málaga','Barcelona', 'Sevilla', 'Zaragoza', 'Bilbao') +' ciudad: SI están');

console.log(CIudades.includes('Madrid') +' ciudad: No está');
console.log('\n');//salto de carro, separacion-----------
//-------------------

let Ciudades =['Málaga', 'Barcelona', 'Sevilla', 'Zaragoza', 'Bilbao'];
let CiudadBuscar = 'Madrid';
if (Ciudades.includes(CiudadBuscar)) {
    console.log(`la ciudad ${CiudadBuscar} SI está en el grupo`);
}
else {
    console.log(`la ciudad ${CiudadBuscar} NO se encuentra en el Array`)
}

console.log('\n');//salto de carro, separacion-----------

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
let coches = new Map ([
    ['Seat', 6000],
    ['Audi', 12000 ],
    ['VolksWagen', 8000],
    ['Kia', 9000]
]);

coches.forEach((precio, coches) => {
    console.log(coches +' '  + precio + ' €');
});

console.log('\n');//salto de carro, separacion-----------

let camisetas = new Map ([
    ['Adidas: ', 19.80 + '€' ],
    ['Nike: ', 20.5 + '€'],
    ['Puma: ', 15.20 + '€'],
    ['Rebook: ', 12.50 + '€']
]);

camisetas.forEach((precio, camisetas) =>{
    console.log(camisetas + precio);
});

console.log('\n');//salto de carro, separacion-----------

//Bucle While
let contador = 1;
while (contador <= 5) {
    console.log(contador);
    contador++;
}

console.log('\n');//salto de carro, separacion-----------

//FUNCTION comprobar año si es bisiesto
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
console.log(esBisiesto(2000)); // true

console.log('\n');//salto de carro, separacion-----------

//FUNCTION reduce() en Array -calcular suma total
let sumarNumeros = [2, 4, 6, 8];
function sumar (receptor, valorActual) {
    return receptor + valorActual;
}

let sumaTotal = sumarNumeros.reduce((sumar));
console.log('los numeros son: ' + sumarNumeros);
console.log('la suma total es: ' + sumaTotal);