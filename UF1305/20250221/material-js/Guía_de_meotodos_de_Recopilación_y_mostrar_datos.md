# Cheat Sheet: Entrada y Salida de Datos en JavaScript

## 1. Métodos para Recopilar Datos

### 1.1 prompt()

- **¿Qué es?**: Muestra una ventana emergente para que el usuario ingrese un dato.
- **Ejemplo**:
  ```js
  let nombre = prompt("Ingrese su nombre:");
  console.log("Hola, " + nombre);
  ```

### 1.2 Confirmación con confirm()

- **¿Qué es?**: Muestra un cuadro de diálogo con opciones "Aceptar" o "Cancelar".
- **Ejemplo**:
  ```js
  let respuesta = confirm("¿Desea continuar?");
  console.log("Respuesta:", respuesta);
  ```

### 1.3 Lectura de eventos en formularios

- **¿Qué es?**: Captura el valor ingresado en un campo de entrada HTML.
- **Ejemplo**:
  ```html
  <input type="text" id="usuario" placeholder="Ingrese su usuario" />
  <button onclick="obtenerValor()">Enviar</button>
  <script>
    function obtenerValor() {
      let valor = document.getElementById("usuario").value;
      console.log("Usuario:", valor);
    }
  </script>
  ```

## 2. Métodos para Mostrar Datos

### 2.1 console.log()

- **¿Qué es?**: Muestra información en la consola del navegador.
- **Ejemplo**:
  ```js
  console.log("Mensaje en la consola");
  ```

### 2.2 alert()

- **¿Qué es?**: Muestra una ventana emergente con un mensaje.
- **Ejemplo**:
  ```js
  alert("¡Bienvenido al sitio web!");
  ```

### 2.3 document.write()

- **¿Qué es?**: Inserta contenido directamente en la página web.
- **Ejemplo**:
  ```js
  document.write("<h2>Hola, mundo</h2>");
  ```

### 2.4 Modificación del DOM con innerText y innerHTML

- **¿Qué es?**: Modifica el contenido de elementos HTML.
- **Ejemplo**:
  ```html
  <p id="mensaje">Texto original</p>
  <button onclick="cambiarTexto()">Cambiar Texto</button>
  <script>
    function cambiarTexto() {
      document.getElementById("mensaje").innerText = "Texto modificado";
    }
  </script>
  ```
