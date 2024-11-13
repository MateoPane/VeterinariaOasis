"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinaria = void 0;
var Veterinaria = /** @class */ (function () {
    function Veterinaria() {
        this.clientes = [];
        this.idCounter = 1;
    }
    // Función para agregar un nuevo cliente
    Veterinaria.prototype.agregarCliente = function (nombre, telefono) {
        var nuevoCliente = {
            id: this.idCounter++,
            nombre: nombre,
            telefono: telefono,
            esVIP: false,
            visitas: 0,
        };
        this.clientes.push(nuevoCliente);
        return nuevoCliente;
    };
    // Función para eliminar un cliente por ID
    Veterinaria.prototype.eliminarCliente = function (id) {
        var index = this.clientes.findIndex(function (cliente) { return cliente.id === id; });
        if (index !== -1) {
            this.clientes.splice(index, 1);
            return true;
        }
        return false;
    };
    // Función para modificar datos de un cliente
    Veterinaria.prototype.modificarCliente = function (id, nombre, telefono) {
        var cliente = this.clientes.find(function (cliente) { return cliente.id === id; });
        if (cliente) {
            if (nombre)
                cliente.nombre = nombre;
            if (telefono)
                cliente.telefono = telefono;
            return true;
        }
        return false;
    };
    // Función para registrar una visita y actualizar el estado VIP
    Veterinaria.prototype.registrarVisita = function (id) {
        var cliente = this.clientes.find(function (cliente) { return cliente.id === id; });
        if (cliente) {
            cliente.visitas += 1;
            if (cliente.visitas >= 5) {
                cliente.esVIP = true;
            }
            return true;
        }
        return false;
    };
    // Función para listar todos los clientes
    Veterinaria.prototype.listarClientes = function () {
        return this.clientes;
    };
    return Veterinaria;
}());
exports.Veterinaria = Veterinaria;
