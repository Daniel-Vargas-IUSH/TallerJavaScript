// La clase define la estructura de las tareas
class Tarea {
  // El constructor se ejecuta al crear una nueva tarea
  constructor(titulo) {
    this.titulo = titulo;
    this.estado = "pendiente";
  }

  // Este metodo cambia el estado de la tarea
  toggleEstado() {
    this.estado = this.estado === "pendiente" ? "completada" : "pendiente";
  }
}

// Creamos una nueva instancia de la clase Tarea
const miTarea = new Tarea("Aprender sobre clases");

console.log("Estado inicial:", miTarea.estado); 

// Usamos el metodo para cambiar el estado
miTarea.toggleEstado();
console.log("Estado después de cambiar:", miTarea.estado); 

// Lo cambiamos de nuevo
miTarea.toggleEstado();
console.log("Estado después de otro cambio:", miTarea.estado); 
