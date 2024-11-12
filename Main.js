"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Veterinaria_1 = require("./Veterinaria");
var miVeterinaria = new Veterinaria_1.Veterinaria();
// Agregar clientes
var cliente1 = miVeterinaria.agregarCliente('Juan Pérez', '123456789');
var cliente2 = miVeterinaria.agregarCliente('María Gómez', '987654321');
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
