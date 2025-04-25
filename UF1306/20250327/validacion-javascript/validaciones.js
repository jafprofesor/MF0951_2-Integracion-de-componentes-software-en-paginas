// Ejercicio 1
// Crea una función que valide si un campo de texto está vacío
function validarCampoVacio(texto) {
  // Verifica que el texto sin espacios tenga longitud mayor que cero
  return texto.trim().length > 0;
}
// Ejercicio 2
// V
function validarEdad(edad) {
  const edadNum = Number(edad);
  // Comprueba si es número y está dentro del rango permitido
  return !isNaN(edadNum) && edadNum >= 18 && edadNum <= 99;
}
// Ejercicio 3
// Crea una función que valide si un correo electrónico tiene un formato válido
function validarEmail(email) {
  // Patrón básico para validar formato de correo electrónico
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
// Ejercicio 4
// Implementa una función que valide la longitud mínima de un campo contraseña (mínimo 8 caracteres)
function validarLongitudContrasena(pass) {
  // Comprueba que la contraseña tenga al menos 8 caracteres
  return pass.length >= 8;
}
// Ejercicio 5
// Realiza una función que valide que dos campos de contraseña coincidan (contraseña y repetir contraseña)
function validarCoincidencia(pass1, pass2) {
  // Verifica si las contraseñas coinciden exactamente
  return pass1 === pass2;
}
// Ejercicio 6
// Crea una validación personalizada para un número de teléfono con exactamente 9 dígitos numéricos
function validarTelefono(telefono) {
  // Elimina caracteres no numéricos y verifica longitud exacta
  const telLimpio = telefono.replace(/\D/g, "");
  return telLimpio.length === 9;
}
// Ejercicio 7
// Valida un nombre asegurando que no tenga números ni caracteres especiales (solo letras y espacios).
function validarNombre(nombre) {
  // Acepta solo letras mayúsculas, minúsculas y espacios
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(nombre);
}
// Ejercicio 8
// Implementa validación en tiempo real (on-the-fly) en JavaScript, resaltando el borde del campo en rojo si es incorrecto.
document.getElementById("campo").addEventListener("input", function () {
  // Cambia borde a rojo si el campo está vacío, normal si está lleno
  this.style.borderColor = this.value.trim() === "" ? "red" : "";
});
// Ejercicio 9
// Realiza una función que valide un código postal (5 dígitos numéricos).
function validarCodigoPostal(cp) {
  // Comprueba exactamente 5 dígitos numéricos
  return /^\d{5}$/.test(cp);
}
// Ejercicio 10
// Crea una función general que valide múltiples campos a la vez (nombre, edad, email) y devuelva mensajes específicos por cada error detectado.
function validarFormulario(nombre, edad, email) {
  let errores = [];
  // Revisa individualmente cada campo y genera errores específicos
  if (!nombre.trim()) errores.push("Nombre no puede estar vacío.");
  if (!(Number(edad) >= 1 && Number(edad) <= 120))
    errores.push("Edad debe ser entre 1 y 120.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errores.push("Email no válido.");
  return errores;
}
// Ejercicio 11
// Crea una función que valide si una cadena ingresada es una URL válida
function validarURL(url) {
  const regex = /^(http|https):\/\/[^\s$.?#].[^\s]*$/;
  return regex.test(url);
}
// Ejercicio 12
// Crea una función que valide si el valor introducido es un número entero positivo
function validarEnteroPositivo(numero) {
  const num = Number(numero);
  return Number.isInteger(num) && num > 0;
}
// Ejercicio 13
// Valida que una fecha esté en formato día/mes/año (DD/MM/AAAA).
function validarFecha(fecha) {
  const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  return regex.test(fecha);
}
// Ejercicio 14
// Verifica si el usuario ha seleccionado una opción válida distinta al valor por defecto
function validarSeleccion(valorSeleccionado, valorPorDefecto) {
  return valorSeleccionado !== valorPorDefecto;
}
// Ejercicio 15
// Valida que una cadena no contenga espacios en blanco
function validarSinEspacios(texto) {
  return !texto.includes(" ");
}
// Ejercicio 16
// Valida que un campo numérico permita números con hasta dos decimales
function validarNumeroDecimal(numero) {
  const regex = /^\d+(\.\d{1,2})?$/;
  return regex.test(numero);
}
// Ejercicio 17
// Valida que el nombre de usuario sea solo letras y números
function validarUsuario(usuario) {
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(usuario);
}
// Ejercicio 18
// Crea una función que valide si el texto ingresado contiene al menos una mayúscula
function contieneMayuscula(texto) {
  const regex = /[A-Z]/;
  return regex.test(texto);
}
// Ejercicio 19
// Valida que un DNI español tenga el formato correcto (ej.: 12345678Z)
function validarDNI(dni) {
  const regex = /^\d{8}[A-Za-z]$/;
  return regex.test(dni);
}
// Ejercicio 20
// Valida que un checkbox obligatorio (como términos y condiciones) esté seleccionado
function validarCheckboxObligatorio(checkbox) {
  return checkbox.checked;
}
// Ejercicio 21
// Crea una función que valide si un número es múltiplo de 3
function esMultiploDeTres(numero) {
  return numero % 3 === 0;
}
// Ejercicio 22
// Valida que una cadena tenga una longitud mínima y máxima permitida
function validarLongitudCadena(texto, min, max) {
  const longitud = texto.length;
  return longitud >= min && longitud <= max;
}
