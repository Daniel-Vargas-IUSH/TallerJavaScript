let posts = [
  { id: 1, titulo: "Mi primer post", contenido: "Contenido 1" },
  { id: 2, titulo: "Post sobre JavaScript", contenido: "Contenido 2" }
];

// 1. Obtener todos los posts
function obtenerPosts() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(posts);
    }, 500);
  });
}

// 2. Obtener un post por ID
function obtenerPostPorId(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = posts.find(p => p.id === id);
      if (post) {
        resolve(post);
      } else {
        reject(new Error("Post no encontrado."));
      }
    }, 500);
  });
}

// 3. Agregar un nuevo post
function agregarPost(nuevoPost) {
  return new Promise(resolve => {
    setTimeout(() => {
      posts.push(nuevoPost);
      resolve({ mensaje: "Post agregado con éxito.", nuevoPost });
    }, 500);
  });
}


// Obtener y mostrar todos los posts
obtenerPosts().then(todosLosPosts => {
  console.log("Todos los posts:", todosLosPosts);
});

// Obtener un post existente
obtenerPostPorId(2)
  .then(post => console.log("Post encontrado:", post))
  .catch(error => console.error("Error:", error.message));

// Obtener un post que no existe
obtenerPostPorId(3)
  .then(post => console.log("Post encontrado:", post))
  .catch(error => console.error("Error:", error.message));

// Agregar un nuevo post
let nuevoPost = { id: 3, titulo: "Post sobre promesas", contenido: "Contenido 3" };
agregarPost(nuevoPost)
  .then(resultado => {
    console.log(resultado.mensaje);
    // Verificamos que el post se haya agregado
    console.log("Posts después de agregar:", posts);
  });