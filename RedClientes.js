"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedClientes = void 0;
class RedClientes {
    constructor() {
        this.clientes = [];
        this.idCounter = 1;
    }
    generarId() {
        let id = Math.floor(Math.random() * 9000) + 1000;
        // Verifica si el ID ya existe en la lista de proveedores
        while (this.clientes.find((cliente) => cliente.id === id)) {
            id = Math.floor(Math.random() * 9000) + 1000; // Genera un nuevo ID si ya existe
        }
        return id;
    }
    // Función para agregar un nuevo cliente
    agregarCliente(nombre, telefono) {
        const nuevoCliente = {
            id: this.generarId(),
            nombre,
            telefono,
            esVIP: false,
            visitas: 0,
        };
        this.clientes.push(nuevoCliente);
        return nuevoCliente;
    }
    // Función para eliminar un cliente por ID
    eliminarCliente(id) {
        const index = this.clientes.findIndex((cliente) => cliente.id === id);
        if (index !== -1) {
            this.clientes.splice(index, 1);
            return true;
        }
        return false;
    }
    // Función para modificar datos de un cliente
    modificarCliente(id, nombre, telefono) {
        const cliente = this.clientes.find((cliente) => cliente.id === id);
        if (cliente) {
            if (nombre)
                cliente.nombre = nombre;
            if (telefono)
                cliente.telefono = telefono;
            return true;
        }
        return false;
    }
    // Función para registrar una visita y actualizar el estado VIP
    registrarVisita(id) {
        const cliente = this.clientes.find((cliente) => cliente.id === id);
        if (cliente) {
            cliente.visitas += 1;
            if (cliente.visitas >= 5) {
                cliente.esVIP = true;
            }
            return true;
        }
        return false;
    }
    // Función para listar todos los clientes
    listarClientes() {
        return this.clientes;
    }
}
exports.RedClientes = RedClientes;
