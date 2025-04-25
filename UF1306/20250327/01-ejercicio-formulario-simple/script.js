// Lo primero que hacemos es escuchar el evento DOMContentLoaded, que se dispara cuando el DOM ha sido completamente cargado.
document.addEventListener("DOMContentLoaded", function () {

//Variables para los Elementos ID
let boton = document.querySelector('button');
let styleValidado = `color:limeGreen;font-weight:bold;`;

//function campo NOMBRE
let nombre =document.getElementById('nombre'); 
let errorNombre = document.getElementById('error-nombre');

boton.addEventListener('click', function  (event) { 
    event.preventDefault(); //prevenir-evitar envío por defecto

    let nombreValue = nombre.value.trim(); //con trim() elimina espacios principio-fin

    if (nombreValue.length === 0) { //comparación/asignación y longitud
        errorNombre.textContent = 'Campo NOMBRE: es obligatorio.';     
    }

    else if (!/^[A-Za-z\s]+$/.test(nombreValue)) { // condición: contien números
        errorNombre.textContent = 'Campo NOMBRE: No admite números';
    }

    else {
        errorNombre.textContent= 'NOMBRE: Todo correcto';
        errorNombre.style.cssText=styleValidado; //estilo validate OK 
    }
});



//function campo EDAD
let edad = document.getElementById('edad');
let errorEdad = document.getElementById('error-edad');

boton.addEventListener('click', function comprobarEdad (event) {
     event.preventDefault(); //prevenir-evitar envio por defecto

    let edadValue = edad.value.trim(); //con trim() elimina espacios principio-fin

    let edadNumero = parseInt(edadValue, 10);  //convertir a numero

    //validar si el campo está vacio o no es un numero
    if (edadValue.length === 0 || isNaN(edadNumero)) {
        errorEdad.textContent = 'EDAD: introduce un número valido';
    }

    else if (edadNumero < 18 || edadNumero > 99) {
        errorEdad.textContent = 'EDAD: Incorrecto la edad debe estar entre 18 y 99 años';
    }
    else {
        errorEdad.textContent = 'EDAD: todo correcto';
        errorEdad.style.cssText=styleValidado; //estilo validate OK
    }

});

//funcion EMAIL

let email = document.getElementById('email'); // seleccionamos EMAIL
let errorEmail = document.getElementById('error-email'); // Errores de EMAIL

boton.addEventListener('click', function comprobarEmail (event) {
    event.preventDefault(); //prevenir-evitar envio por defecto
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // expresion regular

if (!emailRegex.test(email.value)) {
    email != /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    errorEmail.textContent = 'E-MAIL: no es un correo válido';
}
else {
    errorEmail.textContent ='E-MAIL: Todo correcto';
    errorEmail.style.cssText=styleValidado; //estilo validate OK
}

});

//Funcion passwword
let pass = document.getElementById('password');
pass.style.cssText = 'width:90%;';
let errorPass = document.getElementById('error-password');

boton.addEventListener('click', function comprobarPassword () {
    let password = pass.value

    if (password.length < 8) {
        errorPass.textContent = 'La contraseña debe tener al menos 8 caracteres';
        return;   
    }
    
    if (!/\d/.test(password)) {
        errorPass.textContent = 'La contraseña debe tener al menos 1 número';
        return;
     }

    if (!/[A-Z]/.test(password)) {
        errorPass.textContent = 'La contraseña debe tener al menos una letra mayúscula';
        return;
    }
    //si todo es valido
    errorPass.textContent = 'La password es correcta';
    errorPass.style.cssText=styleValidado;   

});

/* ************************************************************* */
//Ver y ocultar contraseña y ver el texto
let verContrasena = true;
window.verPassword = function verPassword() {
    if (verContrasena == true) { //afirmamos que el campo PASSWORD es verdadero, si existe
        document.getElementById('password').type = 'password';
        document.getElementById('ver-pass').src = 'eye.png';
        verContrasena = false; //cambiamos a FALSE y si no es asi slate el IF
    } else {
        document.getElementById('password').type = 'text';
        document.getElementById('ver-pass').src = 'eye.png';
        verContrasena = true; //lo cambiamos de nuevo y vuelve a ser TRUE
    }
}


});