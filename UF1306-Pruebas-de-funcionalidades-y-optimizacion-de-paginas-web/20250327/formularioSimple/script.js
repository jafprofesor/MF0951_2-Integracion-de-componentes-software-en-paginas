// Lo primero que hago es seleccionar el formulario y el punto donde poner el resultado
document.addEventListener("DOMContentLoaded", function () {
  // Espera a que el DOM esté listo
  const formulario = document.getElementById("formulario-basico"); // Selecciona el formulario
  const resultado = document.getElementById("resultado"); // Selecciona el punto donde poner el resultado

  formulario.addEventListener("submit", function (e) {
    // Cuando se envia el formulario
    e.preventDefault(); // Evita que se recargue la página

    // Reiniciar errores
    limpiarErrores(); // Limpia los errores

    // Validar campos
    let esValido = true; // Variable para saber si el formulario es válido

    // Validar nombre
    const nombre = document.getElementById("nombre"); // Selecciona el campo nombre
    if (!nombre.value.trim()) {
      // Si el campo nombre está vacío
      mostrarError("nombre", "El nombre es obligatorio"); // Muestra el error
      esValido = false; // El formulario no es válido
    }

    // Validar email
    const email = document.getElementById("email"); // Selecciona el campo email
    if (!email.value.trim()) {
      // Si el campo email está vacío
      mostrarError("email", "El email es obligatorio"); // Muestra el error
      esValido = false; // El formulario no es válido
    } else if (!validarEmail(email.value)) {
      // Si el email no es válido
      mostrarError("email", "El email no es válido"); // Muestra el error
      esValido = false; // El formulario no es válido
    }

    // Validar contraseña
    const password = document.getElementById("password"); // Selecciona el campo password
    if (!password.value) {
      // Si el campo password está vacío
      mostrarError("password", "La contraseña es obligatoria"); // Muestra el error
      esValido = false; // El formulario no es válido
    } else if (password.value.length < 8) {
      // Si la contraseña tiene menos de 8 caracteres
      mostrarError(
        // Muestra el error
        "password",
        "La contraseña debe tener al menos 8 caracteres" // Muestra el error
      );
      esValido = false; // El formulario no es válido
    }

    // Validar edad
    const edad = document.getElementById("edad"); // Selecciona el campo edad
    if (!edad.value) {
      // Si el campo edad está vacío
      mostrarError("edad", "La edad es obligatoria"); // Muestra el error
      esValido = false; // El formulario no es válido
    } else if (edad.value < 18 || edad.value > 100) {
      // Si la edad no está entre 18 y 100 años
      mostrarError("edad", "La edad debe estar entre 18 y 100 años"); // Muestra el error
      esValido = false; // El formulario no es válido
    }

    // Si todo es válido, mostrar mensaje de éxito
    if (esValido) {
      // Si el formulario es válido, es decir, si no hemos metido en la variable esValido false
      resultado.textContent = "¡Formulario enviado correctamente!"; // Muestra el mensaje de éxito
      resultado.className = "resultado exito"; // Añade la clase exito al elemento resultado
      formulario.reset(); // Limpia el formulario
    }
  });

  // Función para mostrar errores
  function mostrarError(campo, mensaje) {
    // Muestra el error
    const errorElement = document.getElementById(`error-${campo}`); // Selecciona el elemento donde mostrar el error
    const inputElement = document.getElementById(campo); // Selecciona el campo

    errorElement.textContent = mensaje; // Muestra el mensaje de error
    inputElement.classList.add("input-error"); // Añade la clase input-error al campo
  }

  // Función para limpiar errores
  function limpiarErrores() {
    const errores = document.querySelectorAll(".error"); // Selecciona todos los elementos con la clase error
    const inputs = document.querySelectorAll("input"); // Selecciona todos los campos

    errores.forEach((error) => (error.textContent = "")); // Limpia los mensajes de error
    inputs.forEach((input) => input.classList.remove("input-error")); // Elimina la clase input-error de todos los campos

    resultado.textContent = ""; // Limpia el mensaje de éxito
    resultado.className = "resultado"; // Elimina la clase exito del elemento resultado
  }

  // Función para validar email
  function validarEmail(email) {
    // Valida el email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el email
    return regex.test(email); // Devuelve true si el email es válido
  }
});
