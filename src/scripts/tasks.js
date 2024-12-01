import { Notyf } from 'notyf';  // Importa Notyf

const notyf = new Notyf({
  duration: 3500, // Tiempo que el Toast estará visible (ms)
  position: { x: 'right', y: 'bottom' }, // Posición en la pantalla
  types: [
    {
      type: 'success',
      background: '#FF8000', // Color del Toast
      icon: {
        className: 'material-icons',
        tagName: 'i',
        text: 'check_circle', // Icono para el Toast
      },
    },
  ],
});

// Función para agregar tareas
document.getElementById('add-task').addEventListener('click', function () {
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Capturar el valor de las tareas (permitir separación por comas o saltos de línea)
  const taskNames = taskInput.value.trim().split(/[\n,;]+/).map(task => task.trim()).filter(task => task !== "");

  // Validar si hay tareas para agregar
  if (taskNames.length > 0) {
    taskNames.forEach(taskName => {
      // Crear el elemento <li>
      const listItem = document.createElement('li');
      listItem.className = "p-3 bg-gray-100 rounded-lg shadow-md flex items-center gap-4";

      // Crear el checkbox
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = "h-5 w-5 text-blue-600 cursor-pointer";

      // Agregar el evento al checkbox
      checkbox.addEventListener('change', function () {
        if (this.checked) {
          // Mostrar el Toast con Notyf
          notyf.success(`Tarea "${taskName}" completada`);
          listItem.remove(); // Eliminar la tarea de la lista
        }
      });

      // Crear el texto de la tarea
      const taskText = document.createElement('span');
      taskText.textContent = taskName;
      taskText.className = "text-gray-800";

      // Agregar checkbox y texto al <li>
      listItem.appendChild(checkbox);
      listItem.appendChild(taskText);

      // Agregar el <li> al <ul>
      taskList.appendChild(listItem);
    });

    // Limpiar el input después de agregar las tareas
    taskInput.value = "";
  }
});
