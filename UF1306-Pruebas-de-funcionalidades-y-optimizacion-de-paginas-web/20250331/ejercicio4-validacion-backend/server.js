const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const Joi = require("joi");

// Crear aplicación Express
const app = express();

// Configurar middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Esquema de validación con Joi
const esquemaUsuario = Joi.object({
  nombre: Joi.string().min(3).max(30).required().messages({
    "string.empty": "El nombre es obligatorio",
    "string.min": "El nombre debe tener al menos 3 caracteres",
    "string.max": "El nombre no puede tener más de 30 caracteres",
  }),

  email: Joi.string().email().required().messages({
    "string.empty": "El email es obligatorio",
    "string.email": "El email debe tener un formato válido",
  }),

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

  edad: Joi.number().integer().min(18).max(100).required().messages({
    "number.base": "La edad debe ser un número",
    "number.integer": "La edad debe ser un número entero",
    "number.min": "Debes ser mayor de 18 años",
    "number.max": "La edad no puede ser mayor de 100 años",
    "any.required": "La edad es obligatoria",
  }),

  telefono: Joi.string()
    .pattern(new RegExp("^(\\d{3}-\\d{3}-\\d{3}|\\d{9})$"))
    .required()
    .messages({
      "string.empty": "El teléfono es obligatorio",
      "string.pattern.base":
        "El teléfono debe tener formato 123-456-789 o 123456789",
    }),

  pais: Joi.string().required().messages({
    "string.empty": "El país es obligatorio",
  }),

  terminos: Joi.boolean().valid(true).required().messages({
    "any.only": "Debes aceptar los términos y condiciones",
    "any.required": "Debes aceptar los términos y condiciones",
  }),
});

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Ruta para procesar el formulario
app.post("/api/registro", (req, res) => {
  const datos = req.body;

  // Validar datos con Joi
  const { error, value } = esquemaUsuario.validate(datos, {
    abortEarly: false,
  });

  if (error) {
    // Crear objeto con errores
    const errores = {};
    error.details.forEach((err) => {
      const campo = err.path[0];
      errores[campo] = err.message;
    });

    return res.status(400).json({
      success: false,
      message: "Error de validación",
      errores: errores,
    });
  }

  // Si la validación es exitosa, procesamos los datos
  console.log("Datos validados:", value);

  // Simulamos una respuesta exitosa
  setTimeout(() => {
    res.json({
      success: true,
      message: "Registro procesado correctamente",
      data: value,
    });
  }, 1000);
});

// Puerto del servidor
const PORT = process.env.PORT || 3000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
