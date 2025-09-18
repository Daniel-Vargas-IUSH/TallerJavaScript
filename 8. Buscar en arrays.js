let usuarios = [
  { id: 1, nombre: "Luis" },
  { id: 2, nombre: "Ana" },
  { id: 3, nombre: "Pedro" }
];

function encontrarUsuarioPorId(idBuscado) {
  // .find() busca al usuario, si no lo encuentra, devuelve 'undefined'
  const usuarioEncontrado = usuarios.find(usuario => usuario.id === idBuscado);
  
  // Si usuarioEncontrado existe, lo retorna; de lo contrario, retorna un objeto vacio
  return usuarioEncontrado || {};
}

// Ejemplo 1: El usuario con id 2 si existe
let usuario1 = encontrarUsuarioPorId(2);
console.log(usuario1);


// Ejemplo 2: El usuario con id 4 no existe
let usuario2 = encontrarUsuarioPorId(4);
console.log(usuario2);
