// EJEMPLO DE spread
// Objeto original de configuracion
const configBase = {
  servidor: "localhost",
  puerto: 3000
};

// 1. se clona el objeto
const configClon = { ...configBase };

// 2. se extiende el objeto con nuevas propiedades
const configProduccion = {
  ...configBase,
  puerto: 8080,
  baseDatos: "produccion"
};

console.log(configClon);        
console.log(configProduccion);  

// El objeto original no ha cambiado.
console.log(configBase);        


// EJEMPLO DE rest
// La funcion recibe una cantidad ilimitada de numeros
function calcularPromedio(...numeros) {
  // 'numeros' es un arreglo con todos los argumentos
  let sumaTotal = 0;
  for (const num of numeros) {
    sumaTotal += num;
  }
  return sumaTotal / numeros.length;
}

// Probamos la funcion con diferentes cantidades de numeros
console.log(calcularPromedio(10, 20, 30));     // Salida: 20
console.log(calcularPromedio(5, 5, 5, 5, 5));  // Salida: 5
console.log(calcularPromedio(100, 200));       // Salida: 150