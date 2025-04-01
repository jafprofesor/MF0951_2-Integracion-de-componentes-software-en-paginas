document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario-login");
  const resultado = document.getElementById("resultado");
  const spinner = document.getElementById("spinner");

  // Verificar si ya hay una sesión activa
  verificarSesion();

  // Validación del formulario al enviar
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    // Limpiar errores previos
    limpiarErrores();

    // Validar campos
    let esValido = true;

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if (!email.value.trim()) {
      mostrarError("email", "El email es obligatorio");
      esValido = false;
    }

    if (!password.value) {
      mostrarError("password", "La contraseña es obligatoria");
      esValido = false;
    }

    if (!esValido) {
      return;
    }

    // Mostrar spinner
    spinner.style.display = "block";
    resultado.style.display = "none";

    // Recoger datos del formulario
    const formData = new FormData(formulario);
    const datos = {};

    for (let [key, value] of formData.entries()) {
      datos[key] = value;
    }

    // Enviar datos al servidor
    fetch("/api/login", {
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

          // Redireccionar al panel después de un breve retraso
          setTimeout(() => {
            window.location.href = "/panel";
          }, 1000);
        } else {
          // Mostrar errores de validación
          if (data.errores) {
            for (const campo in data.errores) {
              if (campo === "general") {
                mostrarError("general", data.errores[campo]);
              } else {
                mostrarError(campo, data.errores[campo]);
              }
            }
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

  // Función para verificar si hay una sesión activa
  function verificarSesion() {
    fetch("/api/verificar-sesion")
      .then((response) => response.json())
      .then((data) => {
        if (data.autenticado) {
          // Si hay sesión activa, redirigir al panel
          window.location.href = "/panel";
        }
      })
      .catch((error) => {
        console.error("Error al verificar sesión:", error);
      });
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
    }
  }

  // Función para limpiar errores
  function limpiarErrores() {
    const errores = document.querySelectorAll(".error");
    const inputs = document.querySelectorAll("input");

    errores.forEach((error) => (error.textContent = ""));
    inputs.forEach((input) => input.classList.remove("input-error"));

    resultado.textContent = "";
    resultado.className = "resultado";
    resultado.style.display = "none";
  }
});
