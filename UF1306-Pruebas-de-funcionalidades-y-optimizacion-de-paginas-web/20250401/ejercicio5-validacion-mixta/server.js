// Importa el framework Express para crear el servidor web
const express = require("express");
// Importa el middleware body-parser para analizar los cuerpos de las solicitudes HTTP
const bodyParser = require("body-parser");
// Importa el middleware cors para permitir solicitudes de origen cruzado
const cors = require("cors");
// Importa el módulo path para manejar rutas de archivos
const path = require("path");
// Importa la biblioteca Joi para validación de datos
const Joi = require("joi");

// Crea una instancia de la aplicación Express
const app = express();

// Habilita CORS para permitir peticiones desde diferentes dominios
app.use(cors());
// Configura body-parser para analizar solicitudes con formato JSON
app.use(bodyParser.json());
// Configura body-parser para analizar solicitudes con datos de formulario codificados en URL
app.use(bodyParser.urlencoded({ extended: true }));
// Configura Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, "public")));

// Define un esquema de validación usando Joi para validar los datos del usuario
const esquemaUsuario = Joi.object({
  // Valida que el nombre sea una cadena entre 3 y 30 caracteres
  nombre: Joi.string().min(3).max(30).required().messages({
    "string.empty": "El nombre es obligatorio",
    "string.min": "El nombre debe tener al menos 3 caracteres",
    "string.max": "El nombre no puede tener más de 30 caracteres",
  }),

  // Valida que el email tenga un formato válido
  email: Joi.string().email().required().messages({
    "string.empty": "El email es obligatorio",
    "string.email": "El email debe tener un formato válido",
  }),

  // Valida que la contraseña cumpla con un patrón específico de seguridad
  password: Joi.string()
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
      )
    )
    .required()
    .messages({
      "string.empty": "La contraseña es obligatoria",
      "string.pattern.base":
        "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial",
    }),

  // Valida que la confirmación de contraseña coincida con la contraseña
  confirmarPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .messages({
      "string.empty": "Debes confirmar la contraseña",
      "any.only": "Las contraseñas no coinciden",
    }),

  // Valida que la edad sea un número entero entre 18 y 100
  edad: Joi.number().integer().min(18).max(100).required().messages({
    "number.base": "La edad debe ser un número",
    "number.integer": "La edad debe ser un número entero",
    "number.min": "Debes ser mayor de 18 años",
    "number.max": "La edad no puede ser mayor de 100 años",
    "any.required": "La edad es obligatoria",
  }),

  // Valida que el teléfono tenga un formato específico
  telefono: Joi.string()
    .pattern(new RegExp("^(\\d{3}-\\d{3}-\\d{3}|\\d{9})$"))
    .required()
    .messages({
      "string.empty": "El teléfono es obligatorio",
      "string.pattern.base":
        "El teléfono debe tener formato 123-456-789 o 123456789",
    }),

  // Valida que se haya seleccionado un país
  pais: Joi.string().required().messages({
    "string.empty": "El país es obligatorio",
  }),

  // Valida que se haya seleccionado al menos un interés
  intereses: Joi.array().min(1).required().messages({
    "array.min": "Debes seleccionar al menos un interés",
    "any.required": "Debes seleccionar al menos un interés",
  }),

  // Valida que se hayan aceptado los términos y condiciones
  terminos: Joi.boolean().valid(true).required().messages({
    "any.only": "Debes aceptar los términos y condiciones",
    "any.required": "Debes aceptar los términos y condiciones",
  }),
});

// Array que simula una base de datos con emails ya registrados
const emailsRegistrados = ["usuario@ejemplo.com", "test@test.com"];

// Define la ruta principal que sirve el archivo index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Define una ruta para verificar si un email ya existe en la base de datos
app.post("/api/verificar-email", (req, res) => {
  // Extrae el email del cuerpo de la solicitud
  const { email } = req.body;

  // Simula una demora en la respuesta para imitar una consulta a base de datos
  setTimeout(() => {
    // Verifica si el email ya existe en el array de emails registrados
    const emailExiste = emailsRegistrados.includes(email);

    // Envía una respuesta JSON con el resultado de la verificación
    res.json({
      existe: emailExiste,
      message: emailExiste ? "El email ya está registrado" : "Email disponible",
    });
  }, 500);
});

// Define una ruta para procesar el formulario de registro
app.post("/api/registro", (req, res) => {
  // Obtiene los datos del cuerpo de la solicitud
  const datos = req.body;

  // Verifica si el email ya existe en la base de datos
  if (emailsRegistrados.includes(datos.email)) {
    // Si el email ya existe, devuelve un error
    return res.status(400).json({
      success: false,
      message: "Error de validación",
      errores: {
        email: "El email ya está registrado",
      },
    });
  }

  // Valida los datos recibidos contra el esquema definido
  const { error, value } = esquemaUsuario.validate(datos, {
    abortEarly: false, // Permite recopilar todos los errores, no solo el primero
  });

  if (error) {
    // Si hay errores de validación, crea un objeto con todos los errores
    const errores = {};
    error.details.forEach((err) => {
      const campo = err.path[0];
      errores[campo] = err.message;
    });

    // Devuelve una respuesta con los errores de validación
    return res.status(400).json({
      success: false,
      message: "Error de validación",
      errores: errores,
    });
  }

  // Si la validación es exitosa, muestra los datos en la consola del servidor
  console.log("Datos validados:", value);

  // Simula un procesamiento de los datos con un retraso
  setTimeout(() => {
    // Añade el nuevo email a la lista de emails registrados
    emailsRegistrados.push(datos.email);

    // Envía una respuesta exitosa
    res.json({
      success: true,
      message: "Registro procesado correctamente",
      data: value,
    });
  }, 1000);
});

// Define el puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;

// Inicia el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
