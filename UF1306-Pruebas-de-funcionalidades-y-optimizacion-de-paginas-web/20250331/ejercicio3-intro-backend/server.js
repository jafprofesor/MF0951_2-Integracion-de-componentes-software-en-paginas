// Lo primero que hacemos es importar las dependencias necesarias.
const express = require("express"); // Importamos Express para crear la aplicación web
const bodyParser = require("body-parser"); // Importamos body-parser para analizar el cuerpo de las solicitudes
const cors = require("cors"); // Importamos cors para manejar las solicitudes CORS que son solicitudes que se realizan desde un dominio diferente al del servid
const path = require("path"); // Importamos path para manejar las rutas de archivos y directorios

// Crear aplicación Express
const app = express();

// Configurar middleware para manejar solicitudes CORS y analizar el cuerpo de las solicitudes
app.use(cors()); // Habilitar CORS para todas las rutas
app.use(bodyParser.json()); // Analizar el cuerpo de las solicitudes como JSON
app.use(bodyParser.urlencoded({ extended: true })); // Analizar el cuerpo de las solicitudes como URL-encoded
app.use(express.static(path.join(__dirname, "public"))); // Servir archivos estáticos desde el directorio "public"

// Ruta principal para la aplicación
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html")); // Enviar el archivo "index.html" como respuesta
});

// Ruta para procesar el formulario de registro
app.post("/api/registro", (req, res) => {
  const datos = req.body;

  // Simulamos un procesamiento en el servidor
  console.log("Datos recibidos:", datos); // Imprimimos los datos recibidos en la consola

  // Simulamos una respuesta exitosa
  setTimeout(() => {
    res.json({
      success: true,
      message: "Registro procesado correctamente",
      data: datos,
    });
  }, 1000);
});

// Puerto del servidor
const PORT = process.env.PORT || 3000; // Definimos el puerto en el que se ejecutará el servidor

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`); // Imprimimos un mensaje en la consola indicando que el servidor está en funcionamiento
});
