const curso = {
  titulo: "JavaScript",
  duracion: 40,
  temas: ["Funciones", "Objetos", "Asincronía"]
};

// Usamos la desestructuracion para obtener las tres variables.
const { titulo, duracion, temas: [primerTema] } = curso;

console.log(titulo);     // Salida: JavaScript
console.log(duracion);   // Salida: 40
console.log(primerTema); // Salida: Funciones