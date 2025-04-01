const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose"); // Importar mongoose para conectar a MongoDB
const { body, validationResult } = require("express-validator"); // Importar express-validator para validaciones
const bcrypt = require("bcryptjs"); // Importar bcryptjs para encriptar contraseñas

// Crear aplicación Express
const app = express();

// Configurar middleware, rutas y conexión a MongoDB
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Conectar a MongoDB, reemplaza "tu_url_de_mongodb" con la URL de tu base de datos
mongoose
  .connect("mongodb://localhost:27017/validacion_formularios", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error al conectar a MongoDB:", err));

// Definir esquema de usuario
const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
    min: 18,
    max: 100,
  },
  telefono: {
    type: String,
    required: true,
  },
  pais: {
    type: String,
    required: true,
  },
  intereses: {
    type: [String],
    required: true,
  },
  fechaRegistro: {
    type: Date,
    default: Date.now,
  },
});

// Crear modelo de usuario, para interactuar con la base de datos
const Usuario = mongoose.model("Usuario", usuarioSchema);

// Ruta principal del servidor
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Ruta para listar usuarios (usuarios.html)
app.get("/usuarios", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "usuarios.html"));
});

// Validaciones para el registro de usuario con express-validator
const validacionesRegistro = [
  body("nombre")
    .trim()
    .isLength({ min: 3, max: 50 })
    .withMessage("El nombre debe tener entre 3 y 50 caracteres"),

  body("email")
    .trim()
    .isEmail()
    .withMessage("Ingrese un email válido")
    .custom(async (email) => {
      const usuarioExistente = await Usuario.findOne({ email });
      if (usuarioExistente) {
        throw new Error("El email ya está registrado");
      }
      return true;
    }),

  body("password")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
    .withMessage(
      "La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial"
    ),

  body("confirmarPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Las contraseñas no coinciden");
    }
    return true;
  }),

  body("edad")
    .isInt({ min: 18, max: 100 })
    .withMessage("La edad debe estar entre 18 y 100 años"),

  body("telefono")
    .matches(/^(\d{3}-\d{3}-\d{3}|\d{9})$/)
    .withMessage("El teléfono debe tener formato 123-456-789 o 123456789"),

  body("pais").notEmpty().withMessage("Seleccione un país"),

  body("intereses")
    .isArray({ min: 1 })
    .withMessage("Seleccione al menos un interés"),

  body("terminos")
    .equals("true")
    .withMessage("Debe aceptar los términos y condiciones"),
];

// Ruta para registrar usuario
app.post("/api/usuarios", validacionesRegistro, async (req, res) => {
  try {
    // Verificar errores de validación
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      const erroresFormateados = {};
      errores.array().forEach((error) => {
        erroresFormateados[error.path] = error.msg;
      });

      return res.status(400).json({
        success: false,
        message: "Error de validación",
        errores: erroresFormateados,
      });
    }

    // Extraer datos del cuerpo de la petición
    const { nombre, email, password, edad, telefono, pais, intereses } =
      req.body;

    // Encriptar contraseña
    const salt = await bcrypt.genSalt(10);
    const passwordEncriptada = await bcrypt.hash(password, salt);

    // Crear nuevo usuario
    const nuevoUsuario = new Usuario({
      nombre,
      email,
      password: passwordEncriptada,
      edad,
      telefono,
      pais,
      intereses,
    });

    // Guardar usuario en la base de datos
    await nuevoUsuario.save();

    // Responder con éxito
    res.status(201).json({
      success: true,
      message: "Usuario registrado correctamente",
      usuario: {
        id: nuevoUsuario._id,
        nombre: nuevoUsuario.nombre,
        email: nuevoUsuario.email,
      },
    });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({
      success: false,
      message: "Error al registrar usuario",
      error: error.message,
    });
  }
});

// Ruta para obtener todos los usuarios
app.get("/api/usuarios", async (req, res) => {
  try {
    // Obtener usuarios de la base de datos (excluyendo la contraseña)
    const usuarios = await Usuario.find().select("-password");

    res.json({
      success: true,
      usuarios,
    });
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({
      success: false,
      message: "Error al obtener usuarios",
      error: error.message,
    });
  }
});

// Puerto del servidor
const PORT = process.env.PORT || 3000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
