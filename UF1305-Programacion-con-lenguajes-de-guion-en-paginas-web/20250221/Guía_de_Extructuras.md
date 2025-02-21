# Cheat Sheet: Estructuras en JavaScript

## 1. Estructuras de Control de Flujo

### 1.1 if...else

- **¿Qué es?**: Permite ejecutar código si se cumple una condición.
- **Ejemplo**:
  ```js
  let edad = 18;
  if (edad >= 18) {
    console.log("Eres mayor de edad");
  } else {
    console.log("Eres menor de edad");
  }
  ```

### 1.2 switch

- **¿Qué es?**: Evalúa una variable y ejecuta un bloque de código según su valor.
- **Ejemplo**:
  ```js
  let dia = "Lunes";
  switch (dia) {
    case "Lunes":
      console.log("Es el inicio de la semana");
      break;
    case "Viernes":
      console.log("Es el último día laboral");
      break;
    default:
      console.log("Día no reconocido");
  }
  ```

## 2. Estructuras de Bucles

### 2.1 for

- **¿Qué es?**: Ejecuta un bloque de código un número determinado de veces.
- **Ejemplo**:
  ```js
  for (let i = 0; i < 5; i++) {
    console.log("Número:", i);
  }
  ```

### 2.2 while

- **¿Qué es?**: Ejecuta un bloque de código mientras una condición sea verdadera.
- **Ejemplo**:
  ```js
  let i = 0;
  while (i < 5) {
    console.log("Número:", i);
    i++;
  }
  ```

### 2.3 do...while

- **¿Qué es?**: Similar a while, pero ejecuta el código al menos una vez.
- **Ejemplo**:
  ```js
  let j = 0;
  do {
    console.log("Número:", j);
    j++;
  } while (j < 5);
  ```

## 3. Estructuras de Funciones

### 3.1 Función Declarada

- **¿Qué es?**: Bloque de código reutilizable con nombre.
- **Ejemplo**:
  ```js
  function saludar(nombre) {
    return "Hola " + nombre;
  }
  console.log(saludar("Ana"));
  ```

### 3.2 Función Flecha

- **¿Qué es?**: Sintaxis más compacta para funciones.
- **Ejemplo**:
  ```js
  const suma = (a, b) => a + b;
  console.log(suma(2, 3));
  ```

### 3.3 Función Anónima

- **¿Qué es?**: Función sin nombre, almacenada en una variable.
- **Ejemplo**:
  ```js
  let multiplicar = function (a, b) {
    return a * b;
  };
  console.log(multiplicar(2, 4));
  ```
