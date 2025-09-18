// Funciones que se pasaran como 'callbacks'
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

// La funcion principal que recibe la operación como un 'callback'
function operar(a, b, callback) {
  return callback(a, b);
}

// Usando la funcion 'operar' con cada 'callback'
let resultadoSuma = operar(5, 3, sumar);
console.log("5 + 3 =", resultadoSuma); // Salida: 8

let resultadoResta = operar(10, 4, restar);
console.log("10 - 4 =", resultadoResta); // Salida: 6

let resultadoMultiplicacion = operar(2, 6, multiplicar);
console.log("2 * 6 =", resultadoMultiplicacion); // Salida: 12