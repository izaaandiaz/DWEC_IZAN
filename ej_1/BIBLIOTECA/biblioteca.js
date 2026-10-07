const libros = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", paginas: 417 },
    { titulo: "1984", autor: "George Orwell", paginas: 328 },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", paginas: 863 },
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry", paginas: 96 },
    { titulo: "Fahrenheit 451", autor: "Ray Bradbury", paginas: 158 },
    { titulo: "Crimen y castigo", autor: "Fiódor Dostoyevski", paginas: 671 },
    { titulo: "Orgullo y prejuicio", autor: "Jane Austen", paginas: 432 },
    { titulo: "El Hobbit", autor: "J.R.R. Tolkien", paginas: 310 },
    { titulo: "La metamorfosis", autor: "Franz Kafka", paginas: 80 },
    { titulo: "Los juegos del hambre", autor: "Suzanne Collins", paginas: 374 }
];

export function obtenerLibros() {
    return libros;
}


export function agregarLibro(libro) {
    libros.push(libro);
}

export function ordenarPorPaginas() {
    libros.sort((a, b) => a.paginas - b.paginas);
}

export function hayLibrosLargos(limitePaginas) {
    
    return libros.some(libro => libro.paginas > limitePaginas);
}

export function todosSonLibrosCortos(limitePaginas) {
   
    return libros.every(libro => libro.paginas < limitePaginas);
}