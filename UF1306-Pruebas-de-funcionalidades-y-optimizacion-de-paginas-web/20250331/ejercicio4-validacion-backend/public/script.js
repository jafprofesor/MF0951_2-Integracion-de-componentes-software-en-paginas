document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario-backend");
  const resultado = document.getElementById("resultado");
  const spinner = document.getElementById("spinner");

  // Limpiar errores al cambiar un campo
  const inputs = document.querySelectorAll("input, select");
  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      this.classList.remove("input-error");
      const errorElement = document.getElementById(`error-${this.name}`);
      if (errorElement) {
        errorElement.textContent = "";
      }
    });
  });

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    // Limpiar errores previos
    limpiarErrores();

    // Mostrar spinner
    spinner.style.display = "block";
    resultado.style.display = "none";

    // Recoger datos del formulario
    const formData = new FormData(formulario);
    const datos = {};

    for (let [key, value] of formData.entries()) {
      // Convertir checkbox a booleano
      if (key === "terminos") {
        datos[key] = true;
      } else {
        datos[key] = value;
      }
    }

    // Si no está marcado el checkbox de términos, añadirlo como false
    if (!datos.terminos) {
      datos.terminos = false;
    }

    // Convertir edad a número
    if (datos.edad) {
      datos.edad = parseInt(datos.edad);
    }

    // Enviar datos al servidor
    fetch("/api/registro", {
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
        } else {
          // Mostrar errores de validación
          mostrarErroresValidacion(data.errores);

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

  // Función para mostrar errores de validación
  function mostrarErroresValidacion(errores) {
    for (const campo in errores) {
      const errorElement = document.getElementById(`error-${campo}`);
      const inputElement = document.getElementById(campo);

      if (errorElement) {
        errorElement.textContent = errores[campo];
      }

      if (inputElement) {
        inputElement.classList.add("input-error");
      }
    }
  }

  // Función para limpiar errores
  function limpiarErrores() {
    const errores = document.querySelectorAll(".error");
    const inputs = document.querySelectorAll("input, select");

    errores.forEach((error) => (error.textContent = ""));
    inputs.forEach((input) => input.classList.remove("input-error"));

    resultado.textContent = "";
    resultado.className = "resultado";
    resultado.style.display = "none";
  }
});
