"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sucursales = void 0;
class Sucursales {
    constructor() {
        this.veterinarias = [];
    }
    generarId() {
        let id = Math.floor(Math.random() * 9000) + 1000;
        // Usando find para buscar si existe un ID en veterinarias
        while (this.veterinarias.find((veterinaria) => veterinaria.id === id)) {
            id = Math.floor(Math.random() * 9000) + 1000;
        }
        return id;
    }
    alta(nombre, direccion) {
        const id = this.generarId();
        const nuevaVeterinaria = { id, nombre, direccion };
        this.veterinarias.push(nuevaVeterinaria);
        console.log(`Veterinaria ${nombre} dada de alta con ID: ${id}`);
    }
    modificarDatos(id, nuevoNombre, nuevaDireccion) {
        const veterinaria = this.veterinarias.find((v) => v.id === id);
        if (veterinaria) {
            veterinaria.nombre = nuevoNombre;
            veterinaria.direccion = nuevaDireccion;
            console.log(`Datos de ${veterinaria.nombre} actualizados.`);
        }
        else {
            console.log("Veterinaria no encontrada con ese ID.");
        }
    }
    baja(id) {
        const index = this.veterinarias.findIndex((v) => v.id === id);
        if (index !== -1) {
            const [eliminada] = this.veterinarias.splice(index, 1);
            console.log(`Veterinaria ${eliminada.nombre} eliminada.`);
        }
        else {
            console.log("Veterinaria no encontrada con ese ID.");
        }
    }
    mostrarVeterinarias() {
        if (this.veterinarias.length === 0) {
            console.log("No hay veterinarias registradas.");
            return;
        }
        console.log("Lista de Veterinarias:");
        this.veterinarias.forEach((v) => {
            console.log(`ID: ${v.id}, Nombre: ${v.nombre}, Dirección: ${v.direccion}`);
        });
    }
}
exports.Sucursales = Sucursales;
