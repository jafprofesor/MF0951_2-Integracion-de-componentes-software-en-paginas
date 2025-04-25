document.addEventListener("DOMContentLoaded", () => {

/*
Ejercicio: Seleccionar Elementos del DOM

Objetivo: Implementar diferentes métodos de selección de elementos del DOM y
demostrar la diferencia entre HTMLCollection y NodeList.

Tareas: 

1. Selección por ID
   - Seleccionar el elemento con id="parrafo-id"
   - Cambiar su contenido de texto
*/
const miParrafo = document.getElementById("parrafo-id"); //ojo al ELEMENT
miParrafo.textContent = "Contenido nuevo a traves de javascript";
/*--------

/*
2. Selección por Clase
   - Seleccionar todos los elementos con class="elemento-clase"
   - Agregar un borde a todos estos elementos
*/
let claseBorder = document.getElementsByClassName('elemento-clase');
for (i =0; i < claseBorder.length; i++) {
   claseBorder[i].style.border = '2px solid red';
   claseBorder[i].style.borderRadius = '8px';
}
/*-------

/*
3. Selección por Etiqueta
   - Seleccionar todos los elementos <span>
   - Cambiar el color de fondo de todos los spans
*/
let etiquetaSpan = document.getElementsByTagName('span');
for (let i = 0; i < etiquetaSpan.length; i++) {
   etiquetaSpan[i].style.backgroundColor ='coral';
   etiquetaSpan[i].style.fontStyle = 'italic';
}

/*-------
4. Uso de querySelector
   - Seleccionar el primer párrafo con class="parrafo-especial"
   - Cambiar su estilo
*/
let primerParrafo = document.querySelector('.parrafo-especial');
   /*primerParrafo.style.backgroundColor = 'orange'; tambien funciona esta manera de poner el estilo
   primerParrafo.style.color = '#000000';
   primerParrafo.style.textTransform = 'Uppercase';
   primerParrafo.style.fontStyle = 'normal';*/
   primerParrafo.style.cssText = 'background: orange; text-transform:uppercase;font-style:normal; color:#000000;';

/*-------
5. Uso de querySelectorAll
   - Seleccionar todos los párrafos con class="parrafo-especial"
   - Modificar el texto de todos ellos
*/
let cambiarParrafo = document.querySelectorAll('.parrafo-especial');
for (let i =0; i < cambiarParrafo.length; i++) {
   cambiarParrafo[0].textContent = 'Párrafo PRIMERO cambiado en JS';
   cambiarParrafo[1].textContent = 'Párrafo SEGUNDO Cambiado en JS';
}

/*
6. Demostración de HTMLCollection vs NodeList
   - Implementar la funcionalidad del botón para agregar divs
   - Mostrar la diferencia entre getElementsByClassName y querySelectorAll
*/

let boton = document.getElementById('btn-agregar');//creamos BOTON para agregar div

boton.addEventListener('click', () => { //el escuchador y la funcion flecha
   let nuevoDiv = document.createElement('div'); //variable para crear los div
   document.getElementById('contenedor-dinamico').appendChild(nuevoDiv);
   nuevoDiv.textContent = "Hola, soy un nuevo Div";
});

/*Boton borrar Div*/
let botonBorrar = document.getElementById('btn-borrar');

botonBorrar.addEventListener('click', () => {
   let contenedor = document.getElementById('contenedor-dinamico');
   if (contenedor.firstChild) {
      contenedor.removeChild(contenedor.firstChild);
   }
});

/*
Instrucciones:
1. Implementa cada una de las tareas anteriores
2. Utiliza los métodos de selección apropiados
3. Agrega comentarios explicando tu código


// 1. Selección por ID
// Implementa aquí la selección por ID

// 2. Selección por Clase
// Implementa aquí la selección por clase

// 3. Selección por Etiqueta
// Implementa aquí la selección por etiqueta

// 4. Uso de querySelector
// Implementa aquí la selección con querySelector

// 5. Uso de querySelectorAll
// Implementa aquí la selección con querySelectorAll

// 6. Demostración de HTMLCollection vs NodeList
// Implementa aquí la demostración de la diferencia entre HTMLCollection y NodeList

*/
});