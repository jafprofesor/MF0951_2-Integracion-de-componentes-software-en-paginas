# Cheat Sheet: Sintaxis en JavaScript

## 1. Reglas Generales de Sintaxis

- **JavaScript distingue entre mayúsculas y minúsculas**:
  ```js
  let nombre = "Juan";
  let Nombre = "Pedro"; // Son diferentes variables
  ```
- **Ignora espacios en blanco y saltos de línea**:
  ```js
  let edad = 25; // Correcto
  let edad = 25; // También válido pero no recomendado
  ```
- **Se recomienda usar punto y coma (;) al final de las instrucciones**:
  ```js
  let x = 10;
  console.log(x);
  ```

## 2. Convenciones de Nomenclatura

- **CamelCase**: Se usa para nombrar variables y funciones.
  ```js
  let miVariable = "Ejemplo";
  function calcularSuma() {}
  ```
- **Guiones bajos (\_)**: Se pueden usar en nombres de variables.
  ```js
  let nombre_usuario = "Carlos";
  ```
- **Constantes en mayúsculas**:
  ```js
  const MAX_VELOCIDAD = 120;
  ```

## 3. Declaraciones y Asignaciones

### 3.1 Declarar una variable

- **¿Qué es?**: Crear una variable para almacenar datos.
- **Ejemplo**:
  ```js
  let nombre = "Juan";
  var edad = 30;
  const PI = 3.14;
  ```

### 3.2 Asignación de valores

- **¿Qué es?**: Asignar o cambiar el valor de una variable.
- **Ejemplo**:
  ```js
  let x = 10;
  x = 20; // Se reasigna el valor
  ```

## 4. Control de Flujo

### 4.1 if...else

- **¿Qué es?**: Estructura condicional para ejecutar código si una condición es verdadera.
- **Ejemplo**:
  ```js
  if (x > 10) {
    console.log("Mayor a 10");
  } else {
    console.log("Menor o igual a 10");
  }
  ```

### 4.2 switch

- **¿Qué es?**: Evalúa múltiples condiciones en una sola estructura.
- **Ejemplo**:
  ```js
  let dia = "Lunes";
  switch (dia) {
    case "Lunes":
      console.log("Inicio de semana");
      break;
    case "Viernes":
      console.log("Último día laboral");
      break;
    default:
      console.log("Día no reconocido");
  }
  ```

## 5. Bucles e Iteraciones

### 5.1 for

- **¿Qué es?**: Ejecuta un bloque de código varias veces según una condición.
- **Ejemplo**:
  ```js
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  ```

### 5.2 while

- **¿Qué es?**: Ejecuta código mientras la condición sea verdadera.
- **Ejemplo**:
  ```js
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  ```

## 6. Funciones

### 6.1 function

- **¿Qué es?**: Declara una función que puede ejecutarse en cualquier momento.
- **Ejemplo**:
  ```js
  function saludar(nombre) {
    return "Hola " + nombre;
  }
  console.log(saludar("Ana"));
  ```

### 6.2 Arrow Functions

- **¿Qué es?**: Una manera más compacta de escribir funciones.
- **Ejemplo**:
  ```js
  const suma = (a, b) => a + b;
  console.log(suma(3, 4));
  ```

## 7. Manejo de Objetos y Arrays

### 7.1 Objetos

- **¿Qué es?**: Estructura que almacena datos en formato clave-valor.
- **Ejemplo**:
  ```js
  let persona = {
    nombre: "Carlos",
    edad: 35,
    saludar: function () {
      return "Hola, soy " + this.nombre;
    },
  };
  console.log(persona.saludar());
  ```

### 7.2 Arrays

- **¿Qué es?**: Una lista ordenada de elementos.
- **Ejemplo**:
  ```js
  let numeros = [1, 2, 3, 4, 5];
  console.log(numeros[2]); // Accede al tercer elemento
  ```

## 8. Manejo de Errores

### 8.1 try...catch

- **¿Qué es?**: Manejo de errores en código para evitar que la ejecución se detenga.
- **Ejemplo**:
  ```js
  try {
    let resultado = 10 / 0;
    console.log(resultado);
  } catch (error) {
    console.log("Se produjo un error:", error);
  }
  ```

## 9. Asincronismo

### 9.1 Promesas

- **¿Qué es?**: Código asíncrono que se ejecuta cuando una operación finaliza.
- **Ejemplo**:
  ```js
  let promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Operación completada"), 2000);
  });
  promesa.then((mensaje) => console.log(mensaje));
  ```

### 9.2 async / await

- **¿Qué es?**: Forma más legible de trabajar con promesas.
- **Ejemplo**:
  ```js
  async function obtenerDatos() {
    let respuesta = await fetch("https://api.example.com");
    let datos = await respuesta.json();
    console.log(datos);
  }
  ```

### ¡Referencia rápida sobre Sintaxis en JavaScript!
