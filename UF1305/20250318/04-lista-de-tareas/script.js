
let btnAnadir = document.getElementById('add-task'); // seleccionamos boton añadir
let nombreTarea = document.getElementById('new-task'); //seleccionamos tarea a realizar INPUT    
let prioridadTarea = document.getElementById('priority'); //seleccionamos boton prioridad    
let resultado = document.getElementById('task-list'); // seleccionamos la UL del resultado 

resultado.classList.add ('resultado');//añadimos clase css


//escuchador del boton para las tareas
btnAnadir.addEventListener('click', function () {
    
    if (nombreTarea.value) {
        let nuevoLI = document.createElement('li'); // creamos LI en la UL = RESULTADO
        nuevoLI.classList.add('nuevoLi'); //añadimos clase css
        nuevoLI.textContent = `La tarea es: ${nombreTarea.value}. La prioridad es: ${prioridadTarea.value}`; // Añadir texto con la tarea y prioridad

        //crear boton "borrar" dentro del LI
        let botonBorrar = document.createElement ('button'); //crear boton en la LI
        botonBorrar.textContent = 'Borrar Tarea'; //texto boton borrar tarea
        botonBorrar.classList.add ('btnBorrar');  // añadimos clase css
        nuevoLI.appendChild(botonBorrar); //boton insertado en la lI

        //crear boton 'editar' dentro del LI para funcion editar tareas
        let botonEditar = document.createElement ('button');
        botonEditar.classList.add('btnEditar'); //añadimos clase css
        botonEditar.textContent = 'Guardar';
        nuevoLI.appendChild(botonEditar);

        //campos nuevos para modificar Tarea, prioridad, Fecha
        let nuevaEleccion = document.createElement('input');
        nuevaEleccion.value = 'Cambios en tareas a realizar';
        nuevoLI.appendChild(nuevaEleccion);

        //campos select prioridades nuevas
        let nuevasPrioridades = document.createElement('select');
        // Crear algunas opciones
        nuevasPrioridades = [
        { value: 'baja', texto: 'Alta' },
        { value: 'media', texto: 'Media' },
        { value: 'alta', texto: 'Alta' }
        ];
        // Añadir las opciones al <select>
        opciones.forEach(opcion => {
        const option = document.createElement('option');
        option.value = opcion.value; // Establecer el valor de la opción
        option.textContent = opcion.texto; // Establecer el texto visible
       nuevoLI.appendChild(nuevasPrioridades); // Añadir la opción al <select>
});

        //escuchador para marcar como tarea completada
        nuevoLI.addEventListener('click', function () {
            if(nuevoLI.textDecoration === 'line-through') { //tarea no terminada
                nuevoLI.style.cssText = 'texttDecoration;none;'
                 
            }else {     
                //estilo terminada la tarea
                nuevoLI.classList.toggle('tareaRealizada'); //añadimos clase css                
            }
        })
        //escuchador para eliminar la tarea
        botonBorrar.addEventListener('click', function () {
        resultado.removeChild(nuevoLI); //elimina el LI de la lista


    });

    //añadir un nuevo LI a la lista
    resultado.appendChild(nuevoLI);

    //limpiar el campo de texto despues de añadir tarea
    nombreTarea.value = '';
    } else {

    }      
});



    




/*--------------*/
/*
resultado.textContent = 'La tarea es: '+nombreTarea.value +' .La prioridad es: '+ prioridadTarea.value + ' '; 
    resultado.appendChild(nuevoLI);

resultado.style.cssText = 'display:flex; justify-content:center';//estilos para poner el boton en linea

let botonBorrar = document.createElement ('button'); //crear boton en la LI
botonBorrar.textContent = 'Borrar Tarea'; //texto boton borrar tarea
nuevoLI.appendChild(botonBorrar); //boton insertado en la lI

botonBorrar.addEventListener('click', function() { //escuchador para borrar el texto de actividades
    if (resultado) {
    resultado.removeChild(resultado.firstChild);
    nuevoLI.remove();
    }
    }
);

*/
