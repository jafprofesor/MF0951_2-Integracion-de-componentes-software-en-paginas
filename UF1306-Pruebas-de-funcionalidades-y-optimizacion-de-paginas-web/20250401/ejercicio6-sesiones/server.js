const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");

// Crear aplicación Express
const app = express();

// Configurar middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Configurar sesiones
app.use(
  session({
    secret: "clave_secreta_del_curso",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // En producción debería ser true si se usa HTTPS
      maxAge: 1000 * 60 * 60, // 1 hora
    },
  })
);

// Base de datos simulada de usuarios
const usuarios = [
  {
    id: 1,
    email: "usuario@ejemplo.com",
    password: "Password1!",
    nombre: "Usuario Ejemplo",
  },
  {
    id: 2,
    email: "admin@ejemplo.com",
    password: "Admin123!",
    nombre: "Administrador",
  },
];

// Middleware para verificar si el usuario está autenticado
const estaAutenticado = (req, res, next) => {
  if (req.session.usuario) {
    next();
  } else {
    res.status(401).json({
      success: false,
      message: "No autorizado. Debe iniciar sesión.",
    });
  }
};

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Ruta para el panel de control (protegida)
app.get("/panel", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "panel.html"));
});

// Ruta para verificar si el usuario está autenticado
app.get("/api/verificar-sesion", (req, res) => {
  if (req.session.usuario) {
    res.json({
      autenticado: true,
      usuario: {
        id: req.session.usuario.id,
        nombre: req.session.usuario.nombre,
        email: req.session.usuario.email,
      },
    });
  } else {
    res.json({
      autenticado: false,
    });
  }
});

// Ruta para iniciar sesión
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // Validar campos
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Todos los campos son obligatorios",
      errores: {
        email: !email ? "El email es obligatorio" : "",
        password: !password ? "La contraseña es obligatoria" : "",
      },
    });
  }

  // Buscar usuario
  const usuario = usuarios.find((u) => u.email === email);

  // Verificar si el usuario existe y la contraseña es correcta
  if (!usuario || usuario.password !== password) {
    return res.status(401).json({
      success: false,
      message: "Credenciales incorrectas",
      errores: {
        general: "Email o contraseña incorrectos",
      },
    });
  }

  // Crear sesión
  req.session.usuario = {
    id: usuario.id,
    email: usuario.email,
    nombre: usuario.nombre,
  };

  // Responder con éxito
  res.json({
    success: true,
    message: "Inicio de sesión exitoso",
    usuario: {
      id: usuario.id,
      nombre: usuario.nombre,
      email: usuario.email,
    },
  });
});

// Ruta para cerrar sesión
app.post("/api/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Error al cerrar sesión",
      });
    }

    res.json({
      success: true,
      message: "Sesión cerrada correctamente",
    });
  });
});

// Ruta para obtener datos del usuario (protegida)
app.get("/api/usuario", estaAutenticado, (req, res) => {
  res.json({
    success: true,
    usuario: {
      id: req.session.usuario.id,
      nombre: req.session.usuario.nombre,
      email: req.session.usuario.email,
    },
  });
});

// Puerto del servidor
const PORT = process.env.PORT || 3000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
