document.addEventListener("DOMContentLoaded", function () {
  const listaUsuarios = document.getElementById("lista-usuarios");
  const spinner = document.getElementById("spinner");

  // Cargar usuarios al cargar la página
  cargarUsuarios();

  // Función para cargar usuarios desde la API
  function cargarUsuarios() {
    // Mostrar spinner
    spinner.style.display = "block";

    fetch("/api/usuarios")
      .then((response) => response.json())
      .then((data) => {
        // Ocultar spinner
        spinner.style.display = "none";

        if (data.success) {
          // Mostrar usuarios
          mostrarUsuarios(data.usuarios);
        } else {
          // Mostrar mensaje de error
          listaUsuarios.innerHTML = `
                        <div class="error-mensaje">
                            Error al cargar usuarios: ${data.message}
                        </div>
                    `;
        }
      })
      .catch((error) => {
        // Ocultar spinner
        spinner.style.display = "none";

        // Mostrar mensaje de error
        listaUsuarios.innerHTML = `
                    <div class="error-mensaje">
                        Error al cargar usuarios: ${error.message}
                    </div>
                `;
      });
  }

  // Función para mostrar usuarios en la página
  function mostrarUsuarios(usuarios) {
    // Limpiar contenido actual
    listaUsuarios.innerHTML = "";

    if (usuarios.length === 0) {
      listaUsuarios.innerHTML = `
                <p class="no-usuarios">No hay usuarios registrados aún.</p>
            `;
      return;
    }

    // Crear tarjeta para cada usuario
    usuarios.forEach((usuario) => {
      const usuarioCard = document.createElement("div");
      usuarioCard.className = "usuario-card";

      // Formatear fecha
      const fechaRegistro = new Date(usuario.fechaRegistro);
      const fechaFormateada =
        fechaRegistro.toLocaleDateString() +
        " " +
        fechaRegistro.toLocaleTimeString();

      // Crear HTML para los intereses
      const interesesHTML = usuario.intereses
        .map(
          (interes) =>
            `<span class="interes-tag">${formatearInteres(interes)}</span>`
        )
        .join("");

      // Crear HTML para la tarjeta
      usuarioCard.innerHTML = `
                <h3>${usuario.nombre}</h3>
                <div class="usuario-info">
                    <p><strong>Email:</strong> ${usuario.email}</p>
                    <p><strong>Edad:</strong> ${usuario.edad} años</p>
                    <p><strong>Teléfono:</strong> ${usuario.telefono}</p>
                    <p><strong>País:</strong> ${obtenerNombrePais(
                      usuario.pais
                    )}</p>
                    <p><strong>Fecha de registro:</strong> ${fechaFormateada}</p>
                    <p>
                        <strong>Intereses:</strong>
                        <div class="intereses-lista">
                            ${interesesHTML}
                        </div>
                    </p>
                </div>
            `;

      listaUsuarios.appendChild(usuarioCard);
    });
  }

  // Función para formatear interés
  function formatearInteres(interes) {
    const intereses = {
      programacion: "Programación",
      diseno: "Diseño",
      marketing: "Marketing",
      datos: "Análisis de datos",
    };

    return intereses[interes] || interes;
  }

  // Función para obtener nombre del país
  function obtenerNombrePais(codigoPais) {
    const paises = {
      es: "España",
      mx: "México",
      ar: "Argentina",
      co: "Colombia",
      pe: "Perú",
      cl: "Chile",
    };

    return paises[codigoPais] || codigoPais;
  }
});
