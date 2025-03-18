// Cargar tareas almacenadas en localStorage al cargar la página
window.addEventListener("load", loadTasks);

/**
 * Cargar tareas desde localStorage y mostrarlas en la lista.
 */
function loadTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = ""; // Clear the list before loading tasks
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.className = `task ${task.completed ? "completed" : ""}`;
    listItem.setAttribute("data-index", index);
    listItem.innerHTML = `${task.text} (Prioridad: ${task.priority}, Vence: ${task.dueDate}) <button onclick="editTask(this)">Editar</button> <button onclick="removeTask(this)">Eliminar</button>`;
    listItem.addEventListener("click", function (event) {
      // Only toggle completion if clicking on the li element itself, not its children
      if (event.target === listItem) {
        task.completed = !task.completed;
        listItem.classList.toggle("completed");
        saveTasks();
      }
    });
    taskList.appendChild(listItem);
  });
}

/**
 * Guardar tareas en localStorage.
 */
function saveTasks() {
  const taskList = document.getElementById("task-list");
  const tasks = [];
  const taskElements = taskList.querySelectorAll(".task");
  const oldTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
  taskElements.forEach((taskElement, index) => {
    const dataIndex = parseInt(taskElement.getAttribute("data-index"));
    
    // Make sure we're getting the correct task with all its properties
    if (dataIndex >= 0 && dataIndex < oldTasks.length) {
      const task = {...oldTasks[dataIndex]}; // Create a copy to avoid reference issues
      
      // Update the data-index attribute to match the new index
      taskElement.setAttribute("data-index", index);
      
      // Update completion status based on the element's class
      task.completed = taskElement.classList.contains("completed");
      
      // Add the task to the tasks array
      tasks.push(task);
    }
  });
  
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

/**
 * Añadir una nueva tarea a la lista.
 */
document.getElementById("add-task").addEventListener("click", function () {
  const taskInput = document.getElementById("new-task");
  const prioritySelect = document.getElementById("priority");
  const dueDateInput = document.getElementById("due-date");
  const taskText = taskInput.value.trim();
  const priority = prioritySelect.value;
  const dueDate = dueDateInput.value;

  if (taskText !== "") {
    const taskList = document.getElementById("task-list");
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const task = { text: taskText, priority, dueDate, completed: false };
    tasks.push(task);
    const listItem = document.createElement("li");
    listItem.className = "task";
    listItem.setAttribute("data-index", tasks.length - 1);
    listItem.innerHTML = `${taskText} (Prioridad: ${priority}, Vence: ${dueDate}) <button onclick="editTask(this)">Editar</button> <button onclick="removeTask(this)">Eliminar</button>`;
    listItem.addEventListener("click", function (event) {
      if (event.target.tagName === "LI") {
        task.completed = !task.completed;
        listItem.classList.toggle("completed");
        saveTasks();
      }
    });
    taskList.appendChild(listItem);
    taskInput.value = "";
    prioritySelect.value = "low";
    dueDateInput.value = "";
    saveTasks();
  }
});

/**
 * Eliminar una tarea de la lista.
 * @param {HTMLElement} button - El botón de eliminar que fue clickeado.
 */
function removeTask(button) {
  const listItem = button.parentElement;
  const index = listItem.getAttribute("data-index");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  listItem.remove();
  saveTasks();
}

/**
 * Editar una tarea existente.
 * @param {HTMLElement} button - El botón de editar que fue clickeado.
 */
function editTask(button) {
  const listItem = button.parentElement;
  const taskText = listItem.textContent
    .replace("Editar", "")
    .replace("Eliminar", "")
    .split(" (Prioridad: ")[0]
    .trim();
  const priority = listItem.textContent.includes("Baja")
    ? "low"
    : listItem.textContent.includes("Media")
    ? "medium"
    : "high";
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const index = listItem.getAttribute("data-index");
  const dueDate = tasks[index].dueDate;

  // Crear campos de entrada para el texto, la prioridad y la fecha de vencimiento
  const taskInput = document.createElement("input");
  taskInput.type = "text";
  taskInput.value = taskText;

  const prioritySelect = document.createElement("select");
  prioritySelect.innerHTML = `
        <option value="low" ${
          priority === "low" ? "selected" : ""
        }>Baja</option>
        <option value="medium" ${
          priority === "medium" ? "selected" : ""
        }>Media</option>
        <option value="high" ${
          priority === "high" ? "selected" : ""
        }>Alta</option>
    `;

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.value = dueDate;

  // Función para actualizar la tarea
  function actualizarTarea() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const index = listItem.getAttribute("data-index");
    tasks[index] = {
      text: taskInput.value,
      priority: prioritySelect.value,
      dueDate: dueDateInput.value,
      completed: tasks[index].completed,
    };
    listItem.textContent = `${taskInput.value} (Prioridad: ${prioritySelect.value}, Vence: ${dueDateInput.value}) `;
    const editBtn = document.createElement("button");
    editBtn.textContent = "Editar";
    editBtn.addEventListener("click", function () {
      editTask(this);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.addEventListener("click", function () {
      removeTask(this);
    });

    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);
    listItem.addEventListener("click", function (event) {
      if (event.target.tagName === "LI") {
        tasks[index].completed = !tasks[index].completed;
        listItem.classList.toggle("completed");
        saveTasks();
      }
    });
    saveTasks();
  }

  let saveTimeout;

  // Crear un botón para guardar los cambios
  const saveButton = document.createElement("button");
  saveButton.textContent = "Guardar";
  saveButton.className = "save-button";
  saveButton.addEventListener("click", function () {
    actualizarTarea();
  });

  // Crear un botón para cancelar la edición
  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancelar";
  cancelButton.className = "cancel-button";
  cancelButton.addEventListener("click", function () {
    // Restaurar el contenido original del elemento de la lista
    loadTasks();
  });

  // Manejo específico para el campo de fecha
  dueDateInput.addEventListener("change", function () {
    // No actualizar automáticamente, solo cuando se presione el botón guardar
    clearTimeout(saveTimeout);
  });

  // Manejo unificado de eventos para todos los inputs
  [taskInput, prioritySelect, dueDateInput].forEach((input) => {
    // Eliminar la actualización automática en los eventos de input
    input.addEventListener("focus", () => clearTimeout(saveTimeout));
    input.addEventListener("blur", () => {
      // No actualizar automáticamente al perder el foco
      clearTimeout(saveTimeout);
    });
  });

  // Mantener botones funcionales
  listItem.querySelectorAll("button").forEach((button) => {
    button.addEventListener("mousedown", (e) => {
      e.stopPropagation();
    });
  });

  // Reemplazar el contenido del elemento de la lista con los campos de entrada
  listItem.textContent = "";
  listItem.appendChild(taskInput);
  listItem.appendChild(prioritySelect);
  listItem.appendChild(dueDateInput);
  listItem.appendChild(saveButton);
  listItem.appendChild(cancelButton);
  taskInput.focus();
}

/**
 * Filtrar tareas para mostrar todas, solo las completadas o solo las pendientes.
 * @param {string} filter - El filtro a aplicar: 'all', 'completed', 'pending'.
 */
function filterTasks(filter) {
  const taskList = document.getElementById("task-list");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
  // Clear and rebuild the task list with filtered tasks
  taskList.innerHTML = "";
  
  tasks.forEach((task, index) => {
    // Skip this task if it doesn't match the filter
    if (filter === "completed" && !task.completed) return;
    if (filter === "pending" && task.completed) return;
    
    const listItem = document.createElement("li");
    listItem.className = `task ${task.completed ? "completed" : ""}`;
    listItem.setAttribute("data-index", index);
    listItem.innerHTML = `${task.text} (Prioridad: ${task.priority}, Vence: ${task.dueDate}) <button onclick="editTask(this)">Editar</button> <button onclick="removeTask(this)">Eliminar</button>`;
    
    listItem.addEventListener("click", function (event) {
      if (event.target === listItem) {
        // Update the task in the original tasks array
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks[index].completed = !tasks[index].completed;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        
        // Update the UI
        listItem.classList.toggle("completed");
      }
    });
    
    taskList.appendChild(listItem);
  });
}

/**
 * Ordenar tareas por prioridad o fecha de vencimiento.
 * @param {string} criteria - El criterio de ordenación: 'priority' o 'dueDate'.
 */
function sortTasks(criteria) {
  const taskList = document.getElementById("task-list");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
  // Create a copy of the tasks array to avoid modifying the original
  const sortedTasks = [...tasks];
  
  sortedTasks.sort((a, b) => {
    if (criteria === "priority") {
      const priorities = { low: 1, medium: 2, high: 3 };
      return priorities[b.priority] - priorities[a.priority];
    } else if (criteria === "dueDate") {
      // Handle empty dates by treating them as latest
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;
      return new Date(a.dueDate) - new Date(b.dueDate);
    }
    return 0; // Default return for when no criteria matches
  });
  
  // Save the sorted tasks without modifying their properties
  localStorage.setItem("tasks", JSON.stringify(sortedTasks));
  
  // Reload the tasks to display them in the new order
  loadTasks();
}

// Eventos para los botones de filtro
document
  .getElementById("all-filter")
  .addEventListener("click", () => filterTasks("all"));
document
  .getElementById("completed-filter")
  .addEventListener("click", () => filterTasks("completed"));
document
  .getElementById("pending-filter")
  .addEventListener("click", () => filterTasks("pending"));

// Eventos para los botones de ordenación
document
  .getElementById("sort-priority")
  .addEventListener("click", () => sortTasks("priority"));
document
  .getElementById("sort-due-date")
  .addEventListener("click", () => sortTasks("dueDate"));
