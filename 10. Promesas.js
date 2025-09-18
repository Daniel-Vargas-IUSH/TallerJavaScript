let productos = [
  { id: 1, nombre: "Laptop" },
  { id: 2, nombre: "Celular" }
];

function getProducto(id) {
  // La funcion devuelve una promesa
  return new Promise((resolve, reject) => {
    // Simulamos una busqueda que toma 1 segundo
    setTimeout(() => {
      const producto = productos.find(p => p.id === id);

      if (producto) {
        // Si el producto existe, la promesa se resuelve
        resolve(producto);
      } else {
        // Si no existe, la promesa se rechaza con un error
        reject(new Error("Producto no encontrado."));
      }
    }, 1000); 
  });
}

// Ejemplo 1: El producto existe (la promesa se resuelve)
getProducto(1)
  .then(producto => {
    console.log("Éxito:", producto.nombre); // Salida: exito: Laptop
  })
  .catch(error => {
    console.log("Error:", error.message);
  });

// Ejemplo 2: El producto no existe (la promesa se rechaza)
getProducto(3)
  .then(producto => {
    console.log("Éxito:", producto.nombre);
  })
  .catch(error => {
    console.log("Error:", error.message); // Salida: Error: Producto no encontrado
  });