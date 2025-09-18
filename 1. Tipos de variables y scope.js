// EJEMPLO DE var 
var carro = "Toyota"; // Variable global

if (true) {
  var moto = "Honda";
  console.log("Dentro del if, la moto es:", moto); 
}

console.log("Afuera del if, la moto sigue siendo:", moto); 

// EJEMPLO DE let
let nombre = "Juan"; // Variable global

if (true) {
  let apellido = "Perez";
  console.log("Dentro del if, el apellido es:", apellido); 
}

try {
  console.log("Afuera del if, el apellido es:", apellido); 
} catch (error) {
  console.log("Afuera del if, no se puede ver el apellido.");
}

// EJEMPLO DE const

const edad = 30; // Variable global

if (true) {
  const ciudad = "Medellin";
  console.log("Dentro del if, la ciudad es:", ciudad); 
}

try {
  console.log("Afuera del if, la ciudad es:", ciudad); 
} catch (error) {
  console.log("Afuera del if, no se puede ver la ciudad.");
}

// Intento de cambio:
try {
  const numero = 123;
  numero = 456; // Error
} catch (error) {
  console.log("¡No puedes cambiar una variable const!");
}
