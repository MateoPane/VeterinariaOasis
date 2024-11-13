"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinaria = void 0;
var Veterinaria = /** @class */ (function () {
    function Veterinaria() {
<<<<<<< HEAD
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
=======
        this.mascotas = [];
    }
    Veterinaria.prototype.alta = function (mascotas) {
        this.mascotas.push(mascotas);
        console.log("Mascota agregada: ".concat(mascotas.datosAnimal()));
    };
    Veterinaria.prototype.baja = function (id) {
        var index = -1;
        for (var i = 0; i < this.mascotas.length; i++) {
            if (this.mascotas[i].id === id) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            var mascotaEliminada = this.mascotas.splice(index, 1)[0];
            console.log("Mascota eliminada: ".concat(mascotaEliminada.datosAnimal()));
        }
        else {
            console.log("Mascota no encontrada para eliminar");
        }
    };
    Veterinaria.prototype.modificarMasc = function (id, idDuenioNuevo, nombreNuevo, especieNuevo) {
        var mascotaAModificar;
        this.mascotas.forEach(function (mascota) {
            if (mascota.id === id) {
                mascotaAModificar = mascota;
            }
        });
        if (mascotaAModificar) {
            mascotaAModificar.idDuenio = idDuenioNuevo;
            mascotaAModificar.nombre = nombreNuevo;
            mascotaAModificar.especie = especieNuevo;
            console.log("Mascota modificada: ".concat(mascotaAModificar.datosAnimal()));
        }
        else {
            console.log("No se encontro la mascota");
        }
    };
    Veterinaria.prototype.listMasc = function () {
        console.log("Listado de mascotas:");
        this.mascotas.forEach(function (mascota) { return console.log(mascota.datosAnimal()); });
>>>>>>> b2029e1d80db7ee8c148053ca251bc44cc62e4fe
    };
    return Veterinaria;
}());
exports.Veterinaria = Veterinaria;
