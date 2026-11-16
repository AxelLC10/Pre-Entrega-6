console.log("Pre-Entrega 6");

const productos = [
  { nombre: "Laptop", precio: 800, categoria: "Electronicos" },
  { nombre: "Teclado", precio: 50, categoria: "Electronicos" },
  { nombre: "Silla Gamer", precio: 200, categoria: "Muebles" },
  { nombre: "Monitor", precio: 300, categoria: "Electronicos" },
  { nombre: "Escritorio", precio: 150, categoria: "Muebles" }
] 

const productosNombres = productos.map(producto => producto.nombre.toUpperCase());

const electronicos = productos.filter(producto => producto.categoria === "Electronicos");


const totalvaloinventario = productos.reduce((acc, productos) => acc + productos.precio, 0);

console.log("Nombres:", productosNombres);
console.log("Solo Electrónica:", electronicos);
console.log("Valor Total:", totalvaloinventario);