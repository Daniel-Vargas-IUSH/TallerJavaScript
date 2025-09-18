// Creamos una función que recibe un objeto llamado 'usuario'
function mostrarInfo(usuario) {
  return `El usuario ${usuario.nombre} tiene el rol de ${usuario.rol}.`;
}

// Probamos la función con un ejemplo de usuario.
let datosUsuario = {
  nombre: "Ana",
  rol: "administrador"
};

console.log(mostrarInfo(datosUsuario));
