// Lo primero que hace el navegador es cargar el html, luego el css y luego el javascrpt
// DOMContentLoaded es un evento que se dispara cuando el html ha sido cargado por completo
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario-backend"); // Obtener el formulario
  const resultado = document.getElementById("resultado"); // Obtener el div donde se mostrará el resultado
  const spinner = document.getElementById("spinner"); // Obtener el spinner que estará oculto por defecto y sirve para mostrar cuando se está cargando el formulario

  formulario.addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar que se envíe el formulario

    // Mostrar spinner
    spinner.style.display = "block"; // Mostrar el spinner
    resultado.style.display = "none"; // Ocultar el div donde se mostrará el resultado

    // Recoger datos del formulario
    const formData = new FormData(formulario); // FormData es un objeto que permite recoger los datos del formulario
    const datos = {}; // Objeto donde se guardarán los datos del formulario

    for (let [key, value] of formData.entries()) {
      // Recorrer los datos del formulario
      datos[key] = value; // Guardar los datos en el objeto
    }

    // Enviar datos al servidor
    fetch("/api/registro", {
      // fetch es una función que permite enviar datos al servidor
      method: "POST", // Método POST
      headers: {
        // Cabeceras
        "Content-Type": "application/json", // Tipo de datos
      },
      body: JSON.stringify(datos), // Datos
    })
      .then((response) => {
        // then es una función que se ejecuta cuando se recibe la respuesta del servidor
        if (!response.ok) {
          // Si la respuesta no es correcta
          throw new Error("Error en la respuesta del servidor"); // Lanzar un error
        }
        return response.json(); // Convertir la respuesta a JSON
      })
      .then((data) => {
        // then es una función que se ejecuta cuando se recibe la respuesta del servidor
        // Ocultar spinner
        spinner.style.display = "none"; // Ocultar el spinner

        // Mostrar mensaje de éxito
        resultado.textContent = data.message; // Mostrar el mensaje de éxito
        resultado.className = "resultado exito"; // Añadir la clase exito
        resultado.style.display = "block"; // Mostrar el div donde se mostrará el resultado

        // Limpiar formulario
        formulario.reset(); // Limpiar el formulario
      })
      .catch((error) => {
        // catch es una función que se ejecuta cuando se produce un error
        // Ocultar spinner
        spinner.style.display = "none"; // Ocultar el spinner

        // Mostrar mensaje de error
        resultado.textContent = "Error: " + error.message; // Mostrar el mensaje de error
        resultado.className = "resultado error"; // Añadir la clase error
        resultado.style.display = "block"; // Mostrar el div donde se mostrará el resultado
      });
  });
});
