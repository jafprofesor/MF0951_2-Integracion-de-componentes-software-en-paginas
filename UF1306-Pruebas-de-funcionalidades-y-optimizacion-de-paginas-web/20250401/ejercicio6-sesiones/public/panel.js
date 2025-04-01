document.addEventListener("DOMContentLoaded", function () {
  const userDetails = document.getElementById("user-details");
  const btnLogout = document.getElementById("btn-logout");
  const spinner = document.getElementById("spinner");

  // Verificar si hay una sesión activa
  verificarSesion();

  // Cargar datos del usuario
  cargarDatosUsuario();

  // Configurar evento para cerrar sesión
  btnLogout.addEventListener("click", cerrarSesion);

  // Función para verificar si hay una sesión activa
  function verificarSesion() {
    fetch("/api/verificar-sesion")
      .then((response) => response.json())
      .then((data) => {
        if (!data.autenticado) {
          // Si no hay sesión activa, redirigir al login
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.error("Error al verificar sesión:", error);
        // En caso de error, redirigir al login por seguridad
        window.location.href = "/";
      });
  }

  // Función para cargar datos del usuario
  function cargarDatosUsuario() {
    // Mostrar spinner
    spinner.style.display = "block";

    fetch("/api/usuario")
      .then((response) => {
        if (!response.ok) {
          throw new Error("No autorizado");
        }
        return response.json();
      })
      .then((data) => {
        // Ocultar spinner
        spinner.style.display = "none";

        if (data.success) {
          // Mostrar datos del usuario
          const usuario = data.usuario;
          userDetails.innerHTML = `
                        <p><strong>ID:</strong> ${usuario.id}</p>
                        <p><strong>Nombre:</strong> ${usuario.nombre}</p>
                        <p><strong>Email:</strong> ${usuario.email}</p>
                    `;
        }
      })
      .catch((error) => {
        // Ocultar spinner
        spinner.style.display = "none";

        console.error("Error al cargar datos del usuario:", error);
        // En caso de error, redirigir al login
        window.location.href = "/";
      });
  }

  // Función para cerrar sesión
  function cerrarSesion() {
    // Mostrar spinner
    spinner.style.display = "block";

    fetch("/api/logout", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        // Ocultar spinner
        spinner.style.display = "none";

        if (data.success) {
          // Redirigir al login
          window.location.href = "/";
        }
      })
      .catch((error) => {
        // Ocultar spinner
        spinner.style.display = "none";

        console.error("Error al cerrar sesión:", error);
        // Intentar redirigir al login de todos modos
        window.location.href = "/";
      });
  }
});
