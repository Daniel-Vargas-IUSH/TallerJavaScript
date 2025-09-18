// El arreglo que actua como nuestra base de datos"en memoria
let tareas = [];

// Funcion para Crear (Create) una nueva tarea.
function crearTarea(titulo) {
  const nuevaTarea = {
    id: Date.now(), // Un ID unico simple basado en la fecha
    titulo: titulo,
    completada: false
  };
  tareas.push(nuevaTarea);
  return nuevaTarea;
}

// Funcion para Leer (Read) todas las tareas
function obtenerTareas() {
  return tareas;
}

// Funcion para actualizar (Update) el estado de una tarea
function actualizarTarea(id, nuevoTitulo) {
  const tarea = tareas.find(t => t.id === id);
  if (tarea) {
    tarea.titulo = nuevoTitulo;
    return tarea;
  }
  return null; // Retornamos null si no se encuentra la tarea
}

// Funcion para Eliminar (Delete) una tarea
function eliminarTarea(id) {
  const indice = tareas.findIndex(t => t.id === id);
  if (indice !== -1) {
    return tareas.splice(indice, 1); // Elimina 1 elemento en el indice
  }
  return null;
}


// C: Creamos un par de tareas
let tarea1 = crearTarea("Comprar leche");
crearTarea("Pagar servicios");
console.log("Tareas después de crear:", obtenerTareas());

// U: Actualizamos una tarea
actualizarTarea(tarea1.id, "Comprar pan y leche");
console.log("Tareas después de actualizar:", obtenerTareas());

// D: Eliminamos una tarea
eliminarTarea(tarea1.id);
console.log("Tareas después de eliminar:", obtenerTareas());

// R: Leemos las tareas
console.log("Tareas finales:", obtenerTareas());