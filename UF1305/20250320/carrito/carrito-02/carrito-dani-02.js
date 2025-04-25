// Este código implementa un carrito de compras básico en JavaScript:
//
// 1. Mantiene un array 'carrito' que almacena los artículos seleccionados
//
// 2. Incluye tres funciones principales:
//    - añadirAlCarrito(): Permite agregar artículos especificando cantidad
//    - mostrarCarrito(): Muestra un popup con los artículos y el total
//    - cerrarCarrito(): Oculta el popup del carrito
//
// 3. Cada artículo en el carrito tiene:
//    - id: Identificador único del producto
//    - cantidad: Número de unidades seleccionadas
//    - precio: Precio unitario del artículo
//
// 4. El código maneja la interfaz visual mediante:
//    - Manipulación del DOM para mostrar/ocultar elementos
//    - Creación dinámica de elementos para la lista del carrito
//    - Cálculo automático de subtotales y total

let carrito = []; //crear array carrito, donde se volcarán datos de las funciones

//funcion añadtir al carrito (Alert)
function añadirAlCarrito(id) { 

let preciosArray = [10, 20, 30, 40, 50];
let precio = preciosArray [id-1]; //el [id-1] es para seleccionar los elemntos de preciosArray (empiza en 0)
let cantidad = document.getElementById(`cantidad${id}`).value;
let articulo = {id, cantidad, precio}; //objeto
carrito.push(articulo); //Con PUSH añadimos el objeto articulo con sus elementos al array

alert (`Has seleccionado del articulo Nº ${id} \nla cantidad de: ${cantidad} articulos`);
}

//funcion mostrar carrito (PopUp)
function mostrarCarrito () {
    let ventanaEmergente = document.getElementById('carritoPopup');
    let listaCarrito = document.getElementById('listaCarrito');
    let totalCarrito = document.getElementById('totalCarrito');

    //limpiar la lista del carrito, que no haya texto
    listaCarrito.innerHTML = ''; //innerHTML y las comillas sin espacios borrar (li, o lo que haya)

//calcular el total y mostrar articulos en el carrito
let total = 0; 
carrito.forEach (function (articulo) {
    let subtotal = articulo.cantidad * articulo.precio;
    total = total + subtotal;
    let li = document.createElement('li');

    li.innerText = `
    Articulo: Nº ${articulo.id} 
    Cantidad: ${articulo.cantidad}
    Precio unidad: ${articulo.precio} € 
    Precio Total:  ${subtotal} €`;

    li.style.cssText = 'text-align: left;';
    listaCarrito.appendChild(li);
    });

    //mostrar el total
    totalCarrito.textContent = `El Total es: ${total}`;

    //mostar ventana emergente-PopUp
    ventanaEmergente.style.cssText = 'display:flex;';
}

//funcion para cerrar carrito
function cerrarCarrito() {
    let ventanaEmergente = document.getElementById('carritoPopup');
    ventanaEmergente.style.cssText = 'display:none';
}
