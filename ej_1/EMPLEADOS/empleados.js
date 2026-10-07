
let empleados = [];


export function agregarEmpleado(empleado) {
    empleados.push(empleado);
}


export function eliminarEmpleado(id) {
    empleados = empleados.filter(emp => emp.id !== id);
}


export function buscarPorDepartamento(departamento) {
    return empleados.filter(emp => emp.departamento === departamento);
}


export function calcularSalarioPromedio() {
    if (empleados.length === 0) return 0; 
    
    const sumaTotal = empleados.reduce((acumulador, emp) => acumulador + emp.salario, 0);
    return sumaTotal / empleados.length;
}

 
export function obtenerEmpleadosOrdenadosPorSalario() {
  
    return [...empleados].sort((a, b) => b.salario - a.salario);
}