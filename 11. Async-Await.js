let productos = [
  { id: 1, nombre: "Laptop" },
  { id: 2, nombre: "Celular" }
];

function getProducto(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = productos.find(p => p.id === id);
      if (producto) {
        resolve(producto);
      } else {
        reject(new Error("Producto no encontrado."));
      }
    }, 1000);
  });
}

// Creamos una funcion asincrona para usar 'await'
async function obtenerYMostrarProducto(id) {
  try {
    // 'await' espera a que la promesa se resuelva
    const producto = await getProducto(id);
    console.log("Éxito:", producto.nombre);
  } catch (error) {
    // Si la promesa se rechaza, 'catch' captura el error
    console.log("Error:", error.message);
  }
}

// Ejemplo 1: El producto existe.
obtenerYMostrarProducto(1); 

// Ejemplo 2: El producto no existe
obtenerYMostrarProducto(3); 