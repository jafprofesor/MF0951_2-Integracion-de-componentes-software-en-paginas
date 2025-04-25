/*
Clase XX - Ejercicios: Integración de JavaScript en una Web
*/

// 1. Explicación de las tecnologías web fundamentales
let webTechnologies = {
  html: "Estructura el contenido",
  css: "Da estilo a la presentación",
  javascript: "Aporta la lógica y la interacción",
};
console.log(webTechnologies);

// 2. Métodos para añadir JavaScript a una web
let integrationMethods = {
  inline: "Evitar siempre",
  internal: "Útil en páginas pequeñas",
  external: "Método recomendado",
};
console.log(integrationMethods);

// 3. Ejemplo de Script en línea (NO RECOMENDADO)
let inlineScript = `<button onclick="alert('¡Hola, mundo!')">Haz clic aquí</button>`;
console.log(inlineScript);

// 4. Ejemplo de Script Interno
let internalScript = `
<script>
  document.getElementById("miBoton").addEventListener("click", function() {
    alert("¡Hola, mundo desde un script interno!");
  });
</script>
`;
console.log(internalScript);

// 5. Ejemplo de Script Externo (RECOMENDADO)
let externalScript = `<script src="scripts/miScript.js" defer></script>`;
console.log(externalScript);

// 6. Ubicación de los Scripts en el documento HTML
let scriptPlacement = {
  head: "Cargado antes de renderizar la página, puede bloquear el renderizado",
  body: "El contenido HTML se carga primero, preferible usar defer o async",
};
console.log(scriptPlacement);

// 7. Uso de Defer y Async
let scriptLoading = {
  noAttribute: "HTML se pausa hasta ejecutar el script",
  defer: "Se descarga en paralelo y se ejecuta después del HTML",
  async: "Se descarga en paralelo y se ejecuta tan pronto como se descargue",
};
console.log(scriptLoading);

// 8. Ejemplo de Módulo de JavaScript
let moduleScript = `<script type="module" src="module.js"></script>`;
console.log(moduleScript);
