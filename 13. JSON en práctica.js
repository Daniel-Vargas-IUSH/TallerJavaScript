// 1. Crear un objeto de JavaScript
const usuario = {
  nombre: "Daniel",
  edad: 25,
  ciudad: "Medellín"
};

// 2. Convertir el objeto a una cadena JSON
const usuarioJSON = JSON.stringify(usuario);
console.log("Objeto convertido a JSON (texto):", usuarioJSON);

// 3. Guardar la cadena JSON en el almacenamiento local del navegador
localStorage.setItem("datosUsuario", usuarioJSON);
console.log("Datos guardados en localStorage.");


// 4. Recuperar la cadena JSON de localStorage
const datosRecuperados = localStorage.getItem("datosUsuario");
console.log("Datos recuperados de localStorage (aún son texto):", datosRecuperados);

// 5. Convertir la cadena JSON de vuelta a un objeto de JavaScript
const usuarioRecuperado = JSON.parse(datosRecuperados);
console.log("Datos convertidos de vuelta a objeto:", usuarioRecuperado);

// Podemos acceder a sus propiedades
console.log("Nombre del usuario:", usuarioRecuperado.nombre);