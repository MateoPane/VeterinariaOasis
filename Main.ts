import { RedClientes } from "./Veterinaria";

const miRedClientes = new RedClientes();
const cliente1 = miRedClientes.agregarCliente('Juan Pérez', '123456789'); 
const cliente2 = miRedClientes.agregarCliente('María Gómez', '987654321');

for (let i = 0; i < 6; i++) { miRedClientes.registrarVisita(cliente1.id); }

miRedClientes.modificarCliente(cliente1.id, 'Juan López', '111222333');
console.log(miRedClientes.listarClientes());