import { Veterinaria } from './Veterinaria';


const miVeterinaria = new Veterinaria();

// Agregar clientes
const cliente1 = miVeterinaria.agregarCliente('Juan Pérez', '123456789');
const cliente2 = miVeterinaria.agregarCliente('María Gómez', '987654321');

// Registrar visitas
miVeterinaria.registrarVisita(cliente1.id);
miVeterinaria.registrarVisita(cliente1.id);
miVeterinaria.registrarVisita(cliente1.id);
miVeterinaria.registrarVisita(cliente1.id);
miVeterinaria.registrarVisita(cliente1.id); // Juan debería ser VIP ahora

// Modificar cliente
miVeterinaria.modificarCliente(cliente2.id, 'María López', '111222333');

// Eliminar cliente
miVeterinaria.eliminarCliente(cliente1.id);

// Listar clientes
console.log(miVeterinaria.listarClientes());
