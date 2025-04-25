# Cheat Sheet: Variables en JavaScript

## 1. Tipos de Variables en JavaScript

### 1.1 var

- **¿Qué es?**: Variable global o de función, puede ser redeclarada y reasignada.
- **Ejemplo**:
  ```js
  var nombre = "Juan";
  nombre = "Carlos"; // Se puede reasignar
  console.log(nombre); // Carlos
  ```

### 1.2 let

- **¿Qué es?**: Variable de bloque, puede ser reasignada pero no redeclarada en el mismo ámbito.
- **Ejemplo**:
  ```js
  let edad = 25;
  edad = 30; // Se puede reasignar
  console.log(edad); // 30
  ```

### 1.3 const

- **¿Qué es?**: Variable de bloque que no puede ser reasignada.
- **Ejemplo**:
  ```js
  const PI = 3.14;
  // PI = 3.1416; // Error: No se puede reasignar
  console.log(PI); // 3.14
  ```

## 2. Tipos de Datos en Variables

### 2.1 Números

- **¿Qué es?**: Representa valores numéricos.
- **Ejemplo**:
  ```js
  let numero = 42;
  console.log(numero); // 42
  ```

### 2.2 Cadenas de Texto (Strings)

- **¿Qué es?**: Representa texto, se usa con comillas simples o dobles.
- **Ejemplo**:
  ```js
  let mensaje = "Hola, mundo";
  console.log(mensaje); // Hola, mundo
  ```

### 2.3 Booleanos

- **¿Qué es?**: Representa valores verdadero o falso.
- **Ejemplo**:
  ```js
  let activo = true;
  let inactivo = false;
  console.log(activo); // true
  ```

### 2.4 Undefined

- **¿Qué es?**: Indica que una variable ha sido declarada pero no tiene valor asignado.
- **Ejemplo**:
  ```js
  let x;
  console.log(x); // undefined
  ```

### 2.5 Null

- **¿Qué es?**: Representa la ausencia de un valor.
- **Ejemplo**:
  ```js
  let vacio = null;
  console.log(vacio); // null
  ```

### 2.6 Arreglos (Arrays)

- **¿Qué es?**: Colección ordenada de valores.
- **Ejemplo**:
  ```js
  let colores = ["rojo", "verde", "azul"];
  console.log(colores[0]); // rojo
  ```

### 2.7 Objetos

- **¿Qué es?**: Conjunto de propiedades y valores.
- **Ejemplo**:
  ```js
  let persona = {
    nombre: "Ana",
    edad: 28,
  };
  console.log(persona.nombre); // Ana
  ```
