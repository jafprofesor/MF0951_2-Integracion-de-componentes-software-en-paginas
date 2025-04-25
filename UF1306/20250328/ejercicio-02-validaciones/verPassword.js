// Inicializamos el estado de la contraseña como oculta
/*let visorPass = true;

function verPassword() {
  let passwordField = document.getElementById('password');

  if (visorPass === true) {
    // Si está oculta, mostrar como texto
    passwordField.type = 'text';
    visorPass = false;
  } else {
    // Si está visible, ocultar la contraseña
    passwordField.type = 'password';
    visorPass = true;
  }
}
*/
//Ver y ocultar contraseña y ver el texto
let verContrasena = true;
function verPassword() {
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