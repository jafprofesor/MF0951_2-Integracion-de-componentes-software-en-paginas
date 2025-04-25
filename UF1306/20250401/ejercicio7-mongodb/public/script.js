document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario-registro");
  const resultado = document.getElementById("resultado");
  const spinner = document.getElementById("spinner");
  const passwordInput = document.getElementById("password");

  // Validación en tiempo real para la contraseña
  passwordInput.addEventListener("input", validarRequisitosPassword);

  // Validación en tiempo real para todos los campos
  const inputs = document.querySelectorAll(
    'input:not([type="checkbox"]):not([name="intereses"]), select'
  );
  inputs.forEach((input) => {
    input.addEventListener("blur", function () {
      validarCampo(this);
    });
  });

  // Validación del formulario al enviar
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    // Reiniciar errores
    limpiarErrores();

    // Validar todos los campos
    let esValido = true;

    // Validar campos individuales
    inputs.forEach((input) => {
      if (!validarCampo(input)) {
        esValido = false;
      }
    });

    // Validar intereses
    const interesesSeleccionados = document.querySelectorAll(
      'input[name="intereses"]:checked'
    );
    if (interesesSeleccionados.length === 0) {
      mostrarError("intereses", "Seleccione al menos un interés");
      esValido = false;
    }

    // Validar términos
    const terminos = document.getElementById("terminos");
    if (!terminos.checked) {
      mostrarError("terminos", "Debe aceptar los términos y condiciones");
      esValido = false;
    }

    // Si hay errores, no continuar
    if (!esValido) {
      return;
    }

    // Mostrar spinner
    spinner.style.display = "block";
    resultado.style.display = "none";

    // Recoger datos del formulario
    const formData = new FormData(formulario);
    const datos = {};

    // Procesar los datos del formulario
    for (let [key, value] of formData.entries()) {
      // Manejar checkboxes de intereses
      if (key === "intereses") {
        if (!datos[key]) {
          datos[key] = [];
        }
        datos[key].push(value);
      }
      // Manejar checkbox de términos
      else if (key === "terminos") {
        datos[key] = true;
      }
      // Manejar otros campos
      else {
        datos[key] = value;
      }
    }

    // Convertir edad a número
    if (datos.edad) {
      datos.edad = parseInt(datos.edad);
    }

    // Enviar datos al servidor
    fetch("/api/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    })
      .then((response) => response.json())
      .then((data) => {
        // Ocultar spinner
        spinner.style.display = "none";

        if (data.success) {
          // Mostrar mensaje de éxito
          resultado.textContent = data.message;
          resultado.className = "resultado exito";
          resultado.style.display = "block";

          // Limpiar formulario
          formulario.reset();
          resetearRequisitosPassword();
        } else {
          // Mostrar errores de validación
          if (data.errores) {
            mostrarErroresValidacion(data.errores);
          }

          // Mostrar mensaje de error general
          resultado.textContent = data.message;
          resultado.className = "resultado error-mensaje";
          resultado.style.display = "block";
        }
      })
      .catch((error) => {
        // Ocultar spinner
        spinner.style.display = "none";

        // Mostrar mensaje de error
        resultado.textContent = "Error: " + error.message;
        resultado.className = "resultado error-mensaje";
        resultado.style.display = "block";
      });
  });

  // Función para validar un campo específico
  function validarCampo(campo) {
    let esValido = true;

    // Validar según el tipo de campo
    switch (campo.id) {
      case "nombre":
        if (!campo.value.trim()) {
          mostrarError("nombre", "El nombre es obligatorio");
          esValido = false;
        } else if (campo.value.length < 3) {
          mostrarError("nombre", "El nombre debe tener al menos 3 caracteres");
          esValido = false;
        } else {
          marcarCampoValido(campo);
        }
        break;

      case "email":
        if (!campo.value.trim()) {
          mostrarError("email", "El email es obligatorio");
          esValido = false;
        } else if (!validarEmail(campo.value)) {
          mostrarError("email", "Ingrese un email válido");
          esValido = false;
        } else {
          marcarCampoValido(campo);
        }
        break;

      case "password":
        if (!campo.value) {
          mostrarError("password", "La contraseña es obligatoria");
          esValido = false;
        } else if (!validarPassword(campo.value)) {
          mostrarError(
            "password",
            "La contraseña no cumple con los requisitos"
          );
          esValido = false;
        } else {
          marcarCampoValido(campo);
        }
        break;

      case "confirmar-password":
        const password = document.getElementById("password").value;
        if (!campo.value) {
          mostrarError("confirmarPassword", "Debe confirmar la contraseña");
          esValido = false;
        } else if (campo.value !== password) {
          mostrarError("confirmarPassword", "Las contraseñas no coinciden");
          esValido = false;
        } else {
          marcarCampoValido(campo);
        }
        break;

      case "edad":
        if (!campo.value) {
          mostrarError("edad", "La edad es obligatoria");
          esValido = false;
        } else if (campo.value < 18 || campo.value > 100) {
          mostrarError("edad", "La edad debe estar entre 18 y 100 años");
          esValido = false;
        } else {
          marcarCampoValido(campo);
        }
        break;

      case "telefono":
        if (!campo.value.trim()) {
          mostrarError("telefono", "El teléfono es obligatorio");
          esValido = false;
        } else if (!validarTelefono(campo.value)) {
          mostrarError(
            "telefono",
            "Formato inválido. Use 123-456-789 o 123456789"
          );
          esValido = false;
        } else {
          marcarCampoValido(campo);
        }
        break;

      case "pais":
        if (!campo.value) {
          mostrarError("pais", "Seleccione un país");
          esValido = false;
        } else {
          marcarCampoValido(campo);
        }
        break;
    }

    return esValido;
  }

  // Función para validar email
  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Función para validar teléfono
  function validarTelefono(telefono) {
    const regex = /^(\d{3}-\d{3}-\d{3}|\d{9})$/;
    return regex.test(telefono);
  }

  // Función para validar contraseña
  function validarPassword(password) {
    const tieneMinimo8Caracteres = password.length >= 8;
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /\d/.test(password);
    const tieneEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return (
      tieneMinimo8Caracteres &&
      tieneMayuscula &&
      tieneMinuscula &&
      tieneNumero &&
      tieneEspecial
    );
  }

  // Función para validar requisitos de contraseña en tiempo real
  function validarRequisitosPassword() {
    const password = this.value;

    // Validar longitud
    const reqLongitud = document.getElementById("req-longitud");
    if (password.length >= 8) {
      reqLongitud.classList.add("requisito-valido");
    } else {
      reqLongitud.classList.remove("requisito-valido");
    }

    // Validar mayúscula
    const reqMayuscula = document.getElementById("req-mayuscula");
    if (/[A-Z]/.test(password)) {
      reqMayuscula.classList.add("requisito-valido");
    } else {
      reqMayuscula.classList.remove("requisito-valido");
    }

    // Validar minúscula
    const reqMinuscula = document.getElementById("req-minuscula");
    if (/[a-z]/.test(password)) {
      reqMinuscula.classList.add("requisito-valido");
    } else {
      reqMinuscula.classList.remove("requisito-valido");
    }

    // Validar número
    const reqNumero = document.getElementById("req-numero");
    if (/\d/.test(password)) {
      reqNumero.classList.add("requisito-valido");
    } else {
      reqNumero.classList.remove("requisito-valido");
    }

    // Validar carácter especial
    const reqEspecial = document.getElementById("req-especial");
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      reqEspecial.classList.add("requisito-valido");
    } else {
      reqEspecial.classList.remove("requisito-valido");
    }
  }

  // Función para resetear los requisitos de contraseña
  function resetearRequisitosPassword() {
    document
      .getElementById("req-longitud")
      .classList.remove("requisito-valido");
    document
      .getElementById("req-mayuscula")
      .classList.remove("requisito-valido");
    document
      .getElementById("req-minuscula")
      .classList.remove("requisito-valido");
    document.getElementById("req-numero").classList.remove("requisito-valido");
    document
      .getElementById("req-especial")
      .classList.remove("requisito-valido");
  }

  // Función para mostrar errores
  function mostrarError(campo, mensaje) {
    const errorElement = document.getElementById(`error-${campo}`);
    const inputElement = document.getElementById(campo);

    if (errorElement) {
      errorElement.textContent = mensaje;
    }

    if (inputElement) {
      inputElement.classList.add("input-error");
      inputElement.classList.remove("input-valido");
    }
  }

  // Función para mostrar errores de validación del servidor
  function mostrarErroresValidacion(errores) {
    for (const campo in errores) {
      const errorElement = document.getElementById(`error-${campo}`);
      const inputElement = document.getElementById(campo);

      if (errorElement) {
        errorElement.textContent = errores[campo];
      }

      if (inputElement) {
        inputElement.classList.add("input-error");
        inputElement.classList.remove("input-valido");
      }
    }
  }

  // Función para marcar campo como válido
  function marcarCampoValido(campo) {
    const errorElement = document.getElementById(
      `error-${campo.name || campo.id}`
    );

    if (errorElement) {
      errorElement.textContent = "";
    }

    campo.classList.remove("input-error");
    campo.classList.add("input-valido");
  }

  // Función para limpiar errores
  function limpiarErrores() {
    const errores = document.querySelectorAll(".error");
    const inputs = document.querySelectorAll("input, select");

    errores.forEach((error) => (error.textContent = ""));
    inputs.forEach((input) => {
      input.classList.remove("input-error");
    });

    resultado.textContent = "";
    resultado.className = "resultado";
    resultado.style.display = "none";
  }
});
