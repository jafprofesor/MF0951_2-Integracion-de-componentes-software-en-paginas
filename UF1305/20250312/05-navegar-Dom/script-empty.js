document.addEventListener("DOMContentLoaded", () => {
// Función para mostrar información de navegación

function mostrarInformacion(mensaje) {
    // TODO: Implementar esta función para mostrar mensajes en el panel de información
    // 1. Obtener el elemento con id 'info-navegacion'
    // 2. Agregar el mensaje como un nuevo párrafo al panel
    
    let mensajeInfo = document.getElementById('info-navegacion');
    mensajeInfo.createElement('p');
    document.textContent = 'Info para contactar con nosotros'; 
}

// Función para resaltar un elemento
function resaltarElemento(elemento) {
    // TODO: Implementar esta función para resaltar el elemento clickeado
    // 1. Remover la clase 'highlight' de todos los elementos que la tengan
    // 2. Agregar la clase 'highlight' al elemento clickeado si existe
}

// TODO: Obtener el elemento actual con id 'elemento-actual'

// 1. Navegar hacia arriba (padres)
// TODO: Implementar navegación hacia los padres
// - Obtener y mostrar el padre directo usando parentElement
// - Obtener y mostrar el abuelo usando closest('.abuelo')
// - Agregar eventos click para resaltar estos elementos

// 2. Navegar hacia abajo (hijos)
// TODO: Implementar navegación hacia los hijos
// - Obtener y mostrar la cantidad de hijos del padre usando children
// - Obtener y mostrar el primer hijo usando firstElementChild
// - Obtener y mostrar el último hijo usando lastElementChild
// - Agregar eventos click para resaltar estos elementos

// 3. Navegar lateralmente (hermanos)
// TODO: Implementar navegación entre hermanos
// - Obtener y mostrar el hermano siguiente usando nextElementSibling
// - Obtener y mostrar el hermano anterior usando previousElementSibling
// - Agregar eventos click para resaltar estos elementos si existen

// 4. Verificación de elementos
// TODO: Implementar verificaciones de elementos
// - Verificar si el elemento actual coincide con el selector '.elemento-actual' usando matches
// - Verificar si el abuelo contiene al elemento actual usando contains

// TODO: Agregar evento click al elemento actual para resaltarlo

// TODO: Mostrar mensaje inicial invitando a hacer clic en los elementos

});