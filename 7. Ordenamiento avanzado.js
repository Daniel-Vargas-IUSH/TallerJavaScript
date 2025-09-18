let productos = [
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 60 },
  { nombre: "Monitor", precio: 200 }
];

// Usamos .sort() con una funcion de comparacion para ordenar por precio
productos.sort((a, b) => a.precio - b.precio);

console.log(productos);
