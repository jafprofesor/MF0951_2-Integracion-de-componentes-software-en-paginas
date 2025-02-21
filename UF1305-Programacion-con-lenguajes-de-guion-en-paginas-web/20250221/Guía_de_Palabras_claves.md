# Cheat Sheet: Palabras Clave en JavaScript

## 1. Declaración de Variables

### 1.1 var

- **¿Qué es?**: Declara una variable global o de función.
- **Ejemplo**:
  ```js
  var nombre = "Juan";
  console.log(nombre);
  ```

### 1.2 let

- **¿Qué es?**: Declara una variable de bloque con posibilidad de reasignación.
- **Ejemplo**:
  ```js
  let edad = 25;
  edad = 30;
  console.log(edad);
  ```

### 1.3 const

- **¿Qué es?**: Declara una variable de bloque que no puede ser reasignada.
- **Ejemplo**:
  ```js
  const PI = 3.14;
  console.log(PI);
  ```

## 2. Control de Flujo

### 2.1 if...else

- **¿Qué es?**: Evalúa una condición y ejecuta código dependiendo del resultado.
- **Ejemplo**:
  ```js
  if (edad >= 18) {
    console.log("Mayor de edad");
  } else {
    console.log("Menor de edad");
  }
  ```

### 2.2 switch

- **¿Qué es?**: Evalúa una variable y ejecuta un bloque de código según su valor.
- **Ejemplo**:
  ```js
  switch (dia) {
    case "Lunes":
      console.log("Inicio de semana");
      break;
    case "Viernes":
      console.log("Último día laboral");
      break;
  }
  ```

## 3. Bucles e Iteraciones

### 3.1 for

- **¿Qué es?**: Ejecuta código un número determinado de veces.
- **Ejemplo**:
  ```js
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  ```

### 3.2 while

- **¿Qué es?**: Ejecuta código mientras una condición sea verdadera.
- **Ejemplo**:
  ```js
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  ```

### 3.3 do...while

- **¿Qué es?**: Ejecuta código al menos una vez antes de evaluar la condición.
- **Ejemplo**:
  ```js
  let j = 0;
  do {
    console.log(j);
    j++;
  } while (j < 5);
  ```

## 4. Funciones

### 4.1 function

- **¿Qué es?**: Declara una función reutilizable.
- **Ejemplo**:
  ```js
  function saludar(nombre) {
    return "Hola " + nombre;
  }
  console.log(saludar("Ana"));
  ```

### 4.2 return

- **¿Qué es?**: Devuelve un valor desde una función.
- **Ejemplo**:
  ```js
  function suma(a, b) {
    return a + b;
  }
  console.log(suma(2, 3));
  ```

### 4.3 async / await

- **¿Qué es?**: Permite trabajar con código asíncrono de manera más legible.
- **Ejemplo**:
  ```js
  async function obtenerDatos() {
    let respuesta = await fetch("https://api.example.com");
    let datos = await respuesta.json();
    console.log(datos);
  }
  ```

## 5. Manejo de Errores

### 5.1 try...catch

- **¿Qué es?**: Maneja errores en bloques de código.
- **Ejemplo**:
  ```js
  try {
    let resultado = 10 / 0;
    console.log(resultado);
  } catch (error) {
    console.log("Se ha producido un error", error);
  }
  ```

### 5.2 throw

- **¿Qué es?**: Lanza un error manualmente.
- **Ejemplo**:
  ```js
  function validarNumero(num) {
    if (num < 0) {
      throw "Número no válido";
    }
  }
  ```
