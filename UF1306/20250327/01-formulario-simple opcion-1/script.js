//Variables para los Elementos ID
let boton = document.querySelector('button');
let nombre =document.getElementById('nombre'); 
let errorNombre = document.getElementById('error-nombre');
let edad = document.getElementById('edad');
let errorEdad = document.getElementById('error-edad');
let campoValidado = `color:limeGreen;text-right:center;font-weight:bold;`;

//function campo NOMBRE
boton.addEventListener('click', function comprobarNombre (evento) { 
    evento.preventDefault(); //prevenir-evitar envío por defecto

    let nombreValue = nombre.value.trim(); //con trim() elimina espacios principio-fin

    if (nombreValue.length > 0 && /^[A-Za-z\s]+$/.test(nombreValue)) { //operador && longitus y solo tletras
        errorNombre.textContent = 'Campo validado. Es correcto'; 
        errorNombre.style.cssText=campoValidado; //estilo que se ira aplicando cuando esté OK
        
    }
    else {
        errorNombre.textContent= 'El campo NOMBRE no puede estar vacío ni contener números.';
    }
});


//function campo EDAD
boton.addEventListener('click', function comprobarEdad (evento) {
    evento.preventDefault(); //prevenir-evitar envio por defecto

    let edadValue = edad.trim();


    if (edadValue.length < 18 && edadValue.length > 99) {
        errorEdad.textContent = 'Correcto';
    }
});

 