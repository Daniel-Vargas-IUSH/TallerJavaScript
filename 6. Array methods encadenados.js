let numeros = [3, 8, 12, 5, 20, 7];

// Filtramos los numeros mayores que 6 y luego mapeamos para duplicarlos
let resultado = numeros
  .filter(num => num > 6)
  .map(num => num * 2);

console.log(resultado);
// Salida: [16, 24, 40, 14]