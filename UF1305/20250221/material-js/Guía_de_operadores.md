# Cheat Sheet: Operadores en JavaScript

## 1. Operadores Aritméticos

- **Suma (+)**: Suma dos valores.
  ```js
  let resultado = 5 + 3; // 8
  ```
- **Resta (-)**: Resta un valor de otro.
  ```js
  let resultado = 10 - 4; // 6
  ```
- **Multiplicación (\*)**: Multiplica dos valores.
  ```js
  let resultado = 6 * 2; // 12
  ```
- **División (/)**: Divide un valor entre otro.
  ```js
  let resultado = 9 / 3; // 3
  ```
- **Módulo (%)**: Devuelve el resto de una división.
  ```js
  let resultado = 10 % 3; // 1
  ```
- **Exponenciación (**)\*\*: Eleva un número a una potencia.
  ```js
  let resultado = 2 ** 3; // 8
  ```

## 2. Operadores de Asignación

- **Asignación (=)**: Asigna un valor a una variable.
  ```js
  let x = 10;
  ```
- **Suma y asignación (+=)**: Suma un valor a una variable y reasigna.
  ```js
  let x = 5;
  x += 3; // x = 8
  ```
- **Resta y asignación (-=)**: Resta un valor a una variable y reasigna.
  ```js
  let x = 5;
  x -= 2; // x = 3
  ```
- **Multiplicación y asignación (\*=)**: Multiplica y reasigna.
  ```js
  let x = 4;
  x *= 2; // x = 8
  ```
- **División y asignación (/=)**: Divide y reasigna.
  ```js
  let x = 8;
  x /= 2; // x = 4
  ```

## 3. Operadores de Comparación

- **Igualdad (==)**: Compara valores sin considerar tipo.
  ```js
  console.log(5 == "5"); // true
  ```
- **Igualdad estricta (===)**: Compara valores y tipos.
  ```js
  console.log(5 === "5"); // false
  ```
- **Diferente (!=)**: Compara si los valores son distintos.
  ```js
  console.log(5 != "5"); // false
  ```
- **Diferente estricto (!==)**: Compara si los valores y tipos son distintos.
  ```js
  console.log(5 !== "5"); // true
  ```
- **Mayor que (>)**: Comprueba si un valor es mayor que otro.
  ```js
  console.log(10 > 5); // true
  ```
- **Menor que (<)**: Comprueba si un valor es menor que otro.
  ```js
  console.log(3 < 7); // true
  ```
- **Mayor o igual (>=)**: Comprueba si un valor es mayor o igual a otro.
  ```js
  console.log(5 >= 5); // true
  ```
- **Menor o igual (<=)**: Comprueba si un valor es menor o igual a otro.
  ```js
  console.log(4 <= 6); // true
  ```

## 4. Operadores Lógicos

- **AND (&&)**: Devuelve true si ambas condiciones son verdaderas.
  ```js
  console.log(true && false); // false
  ```
- **OR (||)**: Devuelve true si al menos una condición es verdadera.
  ```js
  console.log(true || false); // true
  ```
- **NOT (!)**: Invierte un valor booleano.
  ```js
  console.log(!true); // false
  ```

## 5. Operadores de Incremento y Decremento

- **Incremento (++)**: Aumenta un valor en 1.
  ```js
  let x = 5;
  x++; // x = 6
  ```
- **Decremento (--):** Disminuye un valor en 1.
  ```js
  let x = 5;
  x--; // x = 4
  ```

## 6. Operadores de Concatenación

- **Concatenación (+)**: Une dos cadenas de texto.
  ```js
  let saludo = "Hola " + "Mundo"; // 'Hola Mundo'
  ```

## 7. Operadores Ternarios

- **Condición ? Valor si true : Valor si false**.
  ```js
  let edad = 18;
  let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
  console.log(mensaje); // 'Mayor de edad'
  ```
