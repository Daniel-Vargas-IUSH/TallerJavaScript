// La funcion evalua el numero y devuelve un texto
function verificarNumero(numero) {
  return numero < 0
    ? "Negativo"
    : numero === 0
    ? "Cero"
    : "Positivo";
}

// Ejemplos para probar la funcion:
console.log(verificarNumero(10));  
console.log(verificarNumero(0));   
console.log(verificarNumero(-5));  