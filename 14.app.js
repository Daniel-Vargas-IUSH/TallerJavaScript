// app.js

// Usamos 'import' para traer las funciones de 'math.js'.
import { sumar, restar } from './14.math.js';

let num1 = 10;
let num2 = 5;

// Usamos las funciones importadas
let resultadoSuma = sumar(num1, num2);
let resultadoResta = restar(num1, num2);

console.log(`El resultado de la suma es: ${resultadoSuma}`);
console.log(`El resultado de la resta es: ${resultadoResta}`);
