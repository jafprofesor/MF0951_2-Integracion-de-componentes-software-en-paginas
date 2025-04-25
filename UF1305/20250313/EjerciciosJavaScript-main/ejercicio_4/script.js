// EJERCICIO 4: Agregar elementos a una lista
// Enunciado: Cuando el usuario haga clic en el botón, se debe agregar un nuevo <li> a la lista.

// PASOS:
// 1. Seleccionar la lista y el botón con document.getElementById.
// 2. Agregar un event listener al botón para detectar el evento 'click'.
// 3. Crear un nuevo elemento <li> con document.createElement.
// 4. Agregarle texto con textContent y añadirlo a la lista con appendChild.

let lista = document.getElementById ('lista');  //seleccionamos id lista
let boton = document.getElementById ('boton');  //seleccionamos id boton para agregar items

boton.addEventListener('click', () => {  //boton añadir elemento
    let nuevoElemento = document.createElement('li');

    nuevoElemento.textContent = ' ' + 'Nuevo elemento de la Lista' + ' ';
    lista.appendChild(nuevoElemento).style.cssText = 'background:moccasin;border:5px solid #ffffff;width:50%;margin:0 auto;padding:1rem;';
    lista.style.cssText = 'color:purple;list-style:none;padding:1rem;font-size:1.5rem;';
 
}); //fin de CREAR elemento

let contenedor = document.body; //seleccionamos body para crear un boton
let botonBorrar = document.createElement('button');  //creamos boton borrar
botonBorrar.textContent ='Borrar elementos'; //texto del boton
contenedor.appendChild(botonBorrar);  //agregamos boton al body

botonBorrar.addEventListener('click',  () => {

    let nuevoElemento = document.getElementById('lista');
    if (lista.firstChild) {
        lista.removeChild(nuevoElemento.firstChild);
    }
}); //fin BORRAR elemento 




/*-------------------------------------------------------------------------------------
let botonBorrar = document.getElementById('boton-borrar'); //boton borrar elemento

botonBorrar.addEventListener('click', () => { //para borrar elementos
let nuevoElemento = document.getElementById('lista');
    if (lista.firstChild) {
        lista.removeChild(nuevoElemento.firstChild);
    }
});

/*
let boton = document.getElementById('btn-agregar');//creamos BOTON para agregar div

boton.addEventListener('click', () => { //el escuchador y la funcion flecha
   let nuevoDiv = document.createElement('div'); //variable para crear los div
   document.getElementById('contenedor-dinamico').appendChild(nuevoDiv);
   nuevoDiv.textContent = "Hola, soy un nuevo Div";
});
/*Boton borrar Div
let botonBorrar = document.getElementById('btn-borrar');

botonBorrar.addEventListener('click', () => {
   let contenedor = document.getElementById('contenedor-dinamico');
   if (contenedor.firstChild) {
      contenedor.removeChild(contenedor.firstChild);
   }
});

*/