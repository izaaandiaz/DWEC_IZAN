import { obtenerLibros, agregarLibro, ordenarPorPaginas, hayLibrosLargos, todosSonLibrosCortos } from './biblioteca.js';

console.log("--- COLECCIÓN INICIAL DE LIBROS ---");
console.log(obtenerLibros());

const libroNuevo = {
    titulo: "Harry Potter y la piedra filosofal",
    autor: "J.K. Rowling",
    paginas: 254
};

agregarLibro(libroNuevo);

console.log("\n--- COLECCIÓN DESPUÉS DE AGREGAR UN NUEVO LIBRO ---");
console.log(obtenerLibros());

ordenarPorPaginas();

console.log("\nColección de libros ordenada de menor a mayor número de páginas:");
console.log(obtenerLibros());

console.log("\n--- PRUEBAS DE LONGITUD DE LIBROS ---");

console.log("¿Hay libros con más de 500 páginas?:", hayLibrosLargos(500));
console.log("¿Hay libros con más de 1000 páginas?:", hayLibrosLargos(1000));

console.log("¿Todos los libros tienen menos de 900 páginas?:", todosSonLibrosCortos(900));
console.log("¿Todos los libros tienen menos de 300 páginas?:", todosSonLibrosCortos(300));