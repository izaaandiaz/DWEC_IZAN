import { 
    agregarEmpleado, 
    eliminarEmpleado, 
    buscarPorDepartamento, 
    calcularSalarioPromedio, 
    obtenerEmpleadosOrdenadosPorSalario 
} from './empleados.js';

console.log("--- SIMULACIÓN DE GESTIÓN DE EMPLEADOS ---\n");


agregarEmpleado({ id: 1, nombre: "Carlos", departamento: "Desarrollo", salario: 3500 });
agregarEmpleado({ id: 2, nombre: "Lucía", departamento: "Marketing", salario: 2800 });
agregarEmpleado({ id: 3, nombre: "Marcos", departamento: "Desarrollo", salario: 4200 });
agregarEmpleado({ id: 4, nombre: "Elena", departamento: "Recursos Humanos", salario: 3100 });
agregarEmpleado({ id: 5, nombre: "Sofía", departamento: "Marketing", salario: 2950 });

console.log("Empleados añadidos correctamente al sistema.\n");

 
console.log("--- EMPLEADOS DEL DEPARTAMENTO DE DESARROLLO ---");
const equipoDesarrollo = buscarPorDepartamento("Desarrollo");
console.log(equipoDesarrollo);


console.log("\n--- SALARIO PROMEDIO DE LA EMPRESA ---");
const promedio = calcularSalarioPromedio();
console.log(`El salario promedio actual es de ${promedio}€`);


console.log("\n--- RANKING DE SALARIOS (MAYOR A MENOR) ---");
const ordenadosPorSalario = obtenerEmpleadosOrdenadosPorSalario();
console.log(ordenadosPorSalario);


console.log("\n--- ELIMINANDO AL EMPLEADO CON ID 2 (Lucía) ---");
eliminarEmpleado(2);
console.log(`Nuevo salario promedio tras la baja: ${calcularSalarioPromedio()}€`);