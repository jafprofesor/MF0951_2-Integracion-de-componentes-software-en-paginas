// Lo primero que hacemos es escuchar el evento DOMContentLoaded, que se dispara cuando el DOM ha sido completamente cargado.
document.addEventListener("DOMContentLoaded", function () {
  
  const formulario = document.getElementById("formulario-avanzado"); // Obtener el formulario por su ID
  const resultado = document.getElementById("resultado"); // Obtener el elemento donde se mostrará el resultado
  const password = document.getElementById("password"); // Obtener el campo de contraseña

  password.style.cssText = 'width:90%;'; //reducir el ancho para que se vea el ojo

  // Validación en tiempo real para la contraseña
  password.addEventListener("input", validarRequisitosPassword); // Escuchar eventos de entrada en el campo de contraseña

  // Validación en tiempo real para todos los campos
  const inputs = document.querySelectorAll(
    // Seleccionar todos los elementos input
    'input:not([type="radio"]):not([type="checkbox"])' // Excluir los campos de radio y checkbox
  );
  inputs.forEach((input) => {
    // Iterar sobre cada campo de entrada
    input.addEventListener("blur", function () {
      // Escuchar eventos de pérdida de foco en el campo de entrada
      validarCampo(this); // Llamar a la función de validación del campo
    });
  });

  // Validación del formulario al enviar
  formulario.addEventListener("submit", function (e) {
    // Escuchar eventos de envío del formulario
    e.preventDefault(); // Prevenir el envío del formulario

    // Reiniciar errores
    limpiarErrores(); // Limpiar cualquier mensaje de error anterior

    // Validar todos los campos
    let esValido = true; // Variable para rastrear si el formulario es válido

    // Validar nombre
    const nombre = document.getElementById("nombre"); // Obtener el campo de nombre
    if (!validarNombreCompleto(nombre.value)) {
      // Si el nombre no es válido
      mostrarError("nombre", "Ingrese nombre y apellido"); // Mostrar mensaje de error
      esValido = false; // Marcar que el formulario no es válido
    }

    // Validar email
    const email = document.getElementById("email"); // Obtener el campo de email
    if (!validarEmail(email.value)) {
      // Si el email no es válido
      mostrarError("email", "Ingrese un email válido"); // Mostrar mensaje de error
      esValido = false; // Marcar que el formulario no es válido
    }

    // Validar teléfono
    const telefono = document.getElementById("telefono"); // Obtener el campo de teléfono
    if (!validarTelefono(telefono.value)) {
      // Si el teléfono no es válido
      mostrarError("telefono", "Ingrese un teléfono válido"); // Mostrar mensaje de error
      esValido = false; // Marcar que el formulario no es válido
    }

    // Validar contraseña
    if (!validarPassword(password.value)) {
      // Si la contraseña no es válida
      mostrarError("password", "La contraseña no cumple con los requisitos"); // Mostrar mensaje de error
      esValido = false; // Marcar que el formulario no es válido
    }

    // Validar confirmación de contraseña
    const confirmarPassword = document.getElementById("confirmar-password"); // Obtener el campo de confirmación de contraseña
    if (password.value !== confirmarPassword.value) {
      // Si las contraseñas no coinciden
      mostrarError("confirmar-password", "Las contraseñas no coinciden"); // Mostrar mensaje de error
      esValido = false; // Marcar que el formulario no es válido
    }

    // Validar fecha de nacimiento
    const fechaNacimiento = document.getElementById("fecha-nacimiento"); // Obtener el campo de fecha de nacimiento
    if (!fechaNacimiento.value) {
      // Si la fecha de nacimiento no está seleccionada
      mostrarError("fecha-nacimiento", "Seleccione una fecha de nacimiento"); // Mostrar mensaje de error
      esValido = false; // Marcar que el formulario no es válido
    } else if (!esMayorDeEdad(fechaNacimiento.value)) {
      // Si el usuario no es mayor de edad
      mostrarError("fecha-nacimiento", "Debe ser mayor de 18 años"); // Mostrar mensaje de error
      esValido = false; // Marcar que el formulario no es válido
    }

    // Validar género
    const generoSeleccionado = document.querySelector(
      // Seleccionar el elemento de género seleccionado
      'input[name="genero"]:checked' // Seleccionar el elemento de género seleccionado
    );
    if (!generoSeleccionado) {
      // Si no se seleccionó ningún género
      mostrarError("genero", "Seleccione un género"); // Mostrar mensaje de error
      esValido = false; // Marcar que el formulario no es válido
    }

    // Validar país
    const pais = document.getElementById("pais"); // Obtener el campo de país
    if (!pais.value) {
      // Si no se seleccionó ningún país
      mostrarError("pais", "Seleccione un país"); // Mostrar mensaje de error
      esValido = false; // Marcar que el formulario no es válido
    }

    // Validar términos
    const terminos = document.getElementById("terminos"); // Obtener el campo de términos
    if (!terminos.checked) {
      // Si los términos no están marcados
      mostrarError("terminos", "Debe aceptar los términos y condiciones"); // Mostrar mensaje de error
      esValido = false; // Marcar que el formulario no es válido
    }

    // Si todo es válido, mostrar mensaje de éxito
    if (esValido) {
      // Si el formulario es válido
      resultado.textContent = "¡Registro completado con éxito!"; // Mostrar mensaje de éxito
      resultado.className = "resultado exito"; // Añadir clase CSS para el resultado exitoso
      formulario.reset(); // Limpiar el formulario
      resetearRequisitosPassword(); // Resetear los requisitos de contraseña
    }
  });

  // Función para validar un campo específico
  function validarCampo(campo) {
    // Función para validar un campo específico
    switch (
      campo.id // Validar diferentes campos según su ID
    ) {
      case "nombre": // Validar campo de nombre
        if (!validarNombreCompleto(campo.value)) {
          // Si el nombre no es válido
          mostrarError("nombre", "Ingrese nombre y apellido"); // Mostrar mensaje de error
        } else {
          marcarCampoValido(campo); // Marcar el campo como válido
        }
        break;
      case "email": // Validar campo de email
        if (!validarEmail(campo.value)) {
          // Si el email no es válido
          mostrarError("email", "Ingrese un email válido"); // Mostrar mensaje de error
        } else {
          marcarCampoValido(campo); // Marcar el campo como válido
        }
        break;
      case "telefono": // Validar campo de teléfono
        if (!validarTelefono(campo.value)) {
          // Si el teléfono no es válido
          mostrarError("telefono", "Ingrese un teléfono válido"); // Mostrar mensaje de error
        } else {
          marcarCampoValido(campo); // Marcar el campo como válido
        }
        break;
      case "confirmar-password": // Validar campo de confirmación de contraseña
        const password = document.getElementById("password"); // Obtener el campo de contraseña
        if (campo.value !== password.value) {
          // Si las contraseñas no coinciden
          mostrarError("confirmar-password", "Las contraseñas no coinciden"); // Mostrar mensaje de error
        } else {
          marcarCampoValido(campo); // Marcar el campo como válido
        }
        break;
      case "fecha-nacimiento": // Validar campo de fecha de nacimiento
        if (!campo.value) {
          // Si no se seleccionó ninguna fecha
          mostrarError(
            // Si no se seleccionó ninguna fecha
            "fecha-nacimiento",
            "Seleccione una fecha de nacimiento"
          ); // Mostrar mensaje de error
        } else if (!esMayorDeEdad(campo.value)) {
          // Si el usuario no es mayor de edad
          mostrarError("fecha-nacimiento", "Debe ser mayor de 18 años"); // Mostrar mensaje de error
        } else {
          marcarCampoValido(campo); // Marcar el campo como válido
        }
        break;
    }
  }

  // Función para validar nombre completo
  function validarNombreCompleto(nombre) {
    const palabras = nombre.trim().split(/\s+/); // Dividir el nombre en palabras
    return (
      palabras.length >= 2 && palabras[0].length > 0 && palabras[1].length > 0 // Verificar que haya al menos 2 palabras y que cada palabra tenga al menos 1 carácter
    );
  }

  // Función para validar email
  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el formato del email
    return regex.test(email); // Devolver true si el email es válido, false en caso contrario
  }

  // Función para validar teléfono
  function validarTelefono(telefono) {
    const regex = /^(\d{3}-\d{3}-\d{3}|\d{9})$/; // Expresión regular para validar el formato del teléfono
    return regex.test(telefono); // Devolver true si el teléfono es válido, false en caso contrario
  }

  // Función para validar contraseña
  function validarPassword(password) {
    const tieneMinimo8Caracteres = password.length >= 8; // Verificar que tenga al menos 8 caracteres
    const tieneMayuscula = /[A-Z]/.test(password); // Verificar que tenga al menos 1 mayúscula
    const tieneMinuscula = /[a-z]/.test(password); // Verificar que tenga al menos 1 minúscula
    const tieneNumero = /\d/.test(password); // Verificar que tenga al menos 1 número
    const tieneEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(password); // Verificar que tenga al menos 1 carácter especial

    return (
      tieneMinimo8Caracteres &&
      tieneMayuscula &&
      tieneMinuscula &&
      tieneNumero &&
      tieneEspecial // Devolver true si la contraseña es válida, false en caso contrario
    );
  }

  // Función para validar requisitos de contraseña en tiempo real
  function validarRequisitosPassword() {
    const password = this.value; // Obtener el valor del campo de contraseña

    // Validar longitud
    const reqLongitud = document.getElementById("req-longitud"); // Obtener el elemento del requisito de longitud
    if (password.length >= 8) {
      reqLongitud.classList.add("requisito-valido"); // Agregar clase CSS para indicar que el requisito es válido
    } else {
      reqLongitud.classList.remove("requisito-valido"); // Quitar clase CSS para indicar que el requisito no es válido
    }

    // Validar mayúscula
    const reqMayuscula = document.getElementById("req-mayuscula"); // Obtener el elemento del requisito de mayúscula
    if (/[A-Z]/.test(password)) {
      // Verificar si la contraseña contiene al menos 1 mayúscula
      reqMayuscula.classList.add("requisito-valido"); // Agregar clase CSS para indicar que el requisito es válido
    } else {
      reqMayuscula.classList.remove("requisito-valido"); // Quitar clase CSS para indicar que el requisito no es válido
    }

    // Validar minúscula
    const reqMinuscula = document.getElementById("req-minuscula"); // Obtener el elemento del requisito de minúscula
    if (/[a-z]/.test(password)) {
      // Verificar si la contraseña contiene al menos 1 minúscula
      reqMinuscula.classList.add("requisito-valido"); // Agregar clase CSS para indicar que el requisito es válido
    } else {
      reqMinuscula.classList.remove("requisito-valido"); // Quitar clase CSS para indicar que el requisito no es válido
    }

    // Validar número
    const reqNumero = document.getElementById("req-numero"); // Obtener el elemento del requisito de número
    if (/\d/.test(password)) {
      // Verificar si la contraseña contiene al menos 1 número
      reqNumero.classList.add("requisito-valido"); // Agregar clase CSS para indicar que el requisito es válido
    } else {
      reqNumero.classList.remove("requisito-valido"); // Quitar clase CSS para indicar que el requisito no es válido
    }

    // Validar carácter especial
    const reqEspecial = document.getElementById("req-especial"); // Obtener el elemento del requisito de carácter especial
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      // Verificar si la contraseña contiene al menos 1 carácter especial
      reqEspecial.classList.add("requisito-valido"); // Agregar clase CSS para indicar que el requisito es válido
    } else {
      reqEspecial.classList.remove("requisito-valido"); // Quitar clase CSS para indicar que el requisito no es válido
    }
  }

  // Función para resetear los requisitos de contraseña
  function resetearRequisitosPassword() {
    document
      .getElementById("req-longitud") // Obtener el elemento del requisito de longitud
      .classList.remove("requisito-valido"); // Quitar clase CSS para indicar que el requisito no es válido
    document
      .getElementById("req-mayuscula") // Obtener el elemento del requisito de mayúscula
      .classList.remove("requisito-valido"); // Quitar clase CSS para indicar que el requisito no es válido
    document
      .getElementById("req-minuscula") // Obtener el elemento del requisito de minúscula
      .classList.remove("requisito-valido"); // Quitar clase CSS para indicar que el requisito no es válido
    document.getElementById("req-numero").classList.remove("requisito-valido"); // Quitar clase CSS para indicar que el requisito no es válido
    document
      .getElementById("req-especial") // Obtener el elemento del requisito de carácter especial
      .classList.remove("requisito-valido"); // Quitar clase CSS para indicar que el requisito no es válido
  }

  // Función para verificar si es mayor de edad
  function esMayorDeEdad(fechaNacimiento) {
    const hoy = new Date(); // Obtener la fecha actual
    const fechaNac = new Date(fechaNacimiento); // Obtener la fecha de nacimiento
    let edad = hoy.getFullYear() - fechaNac.getFullYear(); // Calcular la edad
    const mes = hoy.getMonth() - fechaNac.getMonth(); // Calcular los meses

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
      // Si aún no ha cumplido años
      edad--; // Restar 1 año
    }

    return edad >= 18; // Devolver true si es mayor de edad, false en caso contrario
  }

  // Función para mostrar errores
  function mostrarError(campo, mensaje) {
    const errorElement = document.getElementById(`error-${campo}`); // Obtener el elemento del mensaje de error
    const inputElement = document.getElementById(campo); // Obtener el elemento del campo

    if (errorElement) {
      // Si existe el elemento del mensaje de error
      errorElement.textContent = mensaje; // Mostrar el mensaje de error
    }

    if (inputElement) {
      // Si existe el elemento del campo
      inputElement.classList.add("input-error"); // Agregar clase CSS para indicar que el campo tiene un error
      inputElement.classList.remove("input-valido"); // Quitar clase CSS para indicar que el campo no tiene un error
    }
  }

  // Función para marcar campo como válido
  function marcarCampoValido(campo) {
    // Función para marcar campo como válido
    const errorElement = document.getElementById(`error-${campo.id}`); // Obtener el elemento del mensaje de error

    if (errorElement) {
      // Si existe el elemento del mensaje de error
      errorElement.textContent = ""; // Limpiar el mensaje de error
    }

    campo.classList.remove("input-error"); // Quitar clase CSS para indicar que el campo tiene un error
    campo.classList.add("input-valido"); // Agregar clase CSS para indicar que el campo no tiene un error
  }

  // Función para limpiar errores
  function limpiarErrores() {
    const errores = document.querySelectorAll(".error"); // Obtener todos los elementos con la clase "error"
    const inputs = document.querySelectorAll("input, select"); // Obtener todos los elementos de tipo "input" y "select"

    errores.forEach((error) => (error.textContent = "")); // Limpiar el texto de cada elemento con la clase "error"

    inputs.forEach((input) => {
      // Quitar las clases CSS para indicar que los campos no tienen un error o son válidos
      input.classList.remove("input-error"); // Quitar clase CSS para indicar que el campo tiene un error
      input.classList.remove("input-valido"); // Quitar clase CSS para indicar que el campo no tiene un error
    });

    resultado.textContent = ""; // Limpiar el texto del elemento con el ID "resultado"
    resultado.className = "resultado"; // Restablecer la clase CSS del elemento con el ID "resultado"
  }

// Inicializamos el estado de la contraseña como oculta
let visorPass = true;

function verPassword() {
  const passwordField = document.getElementById('password');

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


});
