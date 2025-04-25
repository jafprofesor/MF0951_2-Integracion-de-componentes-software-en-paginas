0// EJERCICIO 3: Cambiar imagen
// Enunciado: Al hacer clic en el botón, la imagen debe cambiar de src.

// PASOS:
// 1. Seleccionar la imagen y el botón con document.getElementById.
// 2. Agregar un event listener al botón para detectar el evento 'click'.
// 3. Dentro del evento, modificar el atributo src de la imagen con setAttribute.

let imagenCambia = false;
let imagen = document.getElementById('imagen');
imagen.style.cssText = 'width:50%;';
let boton = document.getElementById('boton');

boton.addEventListener('click', () => {
imagen.setAttribute('src', 'imagen2.png');

if (imagenCambia) {
    imagen.src = 'imagen1.png'; 
}
else {
    imagen.src='imagen2.png';
}
imagenCambia = !imagenCambia;
});
//intentar con if else true false que vuelva a mostra la imagen original


