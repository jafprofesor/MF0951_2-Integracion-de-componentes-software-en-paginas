


let btnAnadir = document.getElementById('add-task'); // seleccionamos botón añadir
let nombreTarea = document.getElementById('new-task'); // seleccionamos tarea a realizar (INPUT)    
let prioridadTarea = document.getElementById('priority'); // seleccionamos la prioridad    
let resultado = document.getElementById('task-list'); // seleccionamos la UL donde irá la lista de tareas

// Escuchador del botón para añadir tareas
btnAnadir.addEventListener('click', function () {
    // Verificar que hay un nombre de tarea ingresado
    if (nombreTarea.value) {
        let nuevoLI = document.createElement('li'); // Crear un nuevo elemento LI
        nuevoLI.textContent = `La tarea es: ${nombreTarea.value}. La prioridad es: ${prioridadTarea.value}`; // Añadir texto con la tarea y prioridad

        // Crear botón "Borrar" dentro del LI
        let botonBorrar = document.createElement('button'); 
        botonBorrar.textContent = 'Borrar Tarea'; 
        botonBorrar.style.marginLeft = "10px"; // Espaciado entre el texto de la tarea y el botón
        nuevoLI.appendChild(botonBorrar); // Añadir el botón al LI

        // Escuchador para eliminar la tarea
        botonBorrar.addEventListener('click', function () {
            resultado.removeChild(nuevoLI); // Eliminar el LI de la lista
        });

        // Añadir el nuevo LI al UL (lista de tareas)
        resultado.appendChild(nuevoLI); 

        // Limpiar el campo de texto después de añadir la tarea
        nombreTarea.value = "";
    } else {
        
    }
});
