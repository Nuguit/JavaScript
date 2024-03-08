document.addEventListener ("DOMContentLoaded"), function() {
    const contenedortareas = document.getElementById("contenedor");}

//Nueva Tarea

function crearTarea(nombre, descripcion) {
    const tareaElemento = document.createElement('li');
    tareaElemento.className = 'tarea';
    tareaElemento.innerHTML = `
        <strong>${nombre}</strong>
        <p>${descripcion}</p>
        <button onclick="completeTask(this)">Completada</button>
    `;
    contenedorTareas.appendChild(tareaElemento);
}

//Botón Tarea Completada

function tareaCompletada(button) {
    const tareaElemento = button.parentElement;
    contenedorTareas.removeChild(tareaElemento);
}


//Formulario 

const formulario = document.getElementById("formulario");

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const tituloInput = document.getElementById("Tarea");
    const descripcionInput = document.getElementById("Descripción");
    const titulo = tituloInput.value.trim();
    const descripcion = descripcionInput.value.trim();

    if (titulo && descripcion) {
        crearTarea(titulo, descripcion);
        } else {
        alert('Por favor, completa ambos campos del formulario.');
    }
});

//Todas las tareas completadas 

const completadasBoton = document.getElementById("completadas");

completadasBoton.addEventListener('click'), function() {
    const todascompletadas = document.querySelectorAll('.tarea');
    todascompletadas.forEach(tarea)=> {
        contenedorTareas.removeChild(tarea);
    }
}