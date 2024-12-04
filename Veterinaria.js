"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinaria = void 0;
class Veterinaria {
    constructor() {
        this.mascotas = [];
    }
    generarId() {
        let id = Math.floor(Math.random() * 9000) + 1000;
        // Verifica si el ID ya existe en la lista de proveedores
        while (this.mascotas.find((mascota) => mascota.id === id)) {
            id = Math.floor(Math.random() * 9000) + 1000; // Genera un nuevo ID si ya existe
        }
        return id;
    }
    alta(mascotas) {
        const idExistente = this.mascotas.find((mascota) => mascota.id === mascotas.id);
        const idDuenioExistente = this.mascotas.find((mascota) => mascota.idDuenio === mascotas.idDuenio);
        if (idExistente) {
            console.log(`Ya existe una Mascota con este id ${mascotas.id}`);
            return;
        }
        else if (idDuenioExistente) {
            console.log(`El Dueño con Id ${mascotas.idDuenio} ya tiene una mascota registrada.`);
            return;
        }
        const id = this.generarId();
        mascotas.id = id;
        this.mascotas.push(mascotas);
        console.log(`Mascota agregada: ${mascotas.datosAnimal()}`);
    }
    baja(id) {
        let index = -1;
        for (let i = 0; i < this.mascotas.length; i++) {
            if (this.mascotas[i].id === id) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            const mascotaEliminada = this.mascotas.splice(index, 1)[0];
            console.log(`Mascota eliminada: ${mascotaEliminada.datosAnimal()}`);
        }
        else {
            console.log("Mascota no encontrada para eliminar");
        }
    }
    modificarMasc(id, idDuenioNuevo, nombreNuevo, especieNuevo) {
        let mascotaAModificar;
        this.mascotas.forEach((mascota) => {
            if (mascota.id === id) {
                mascotaAModificar = mascota;
            }
        });
        if (mascotaAModificar) {
            mascotaAModificar.idDuenio = idDuenioNuevo;
            mascotaAModificar.nombre = nombreNuevo;
            mascotaAModificar.especie = especieNuevo;
            console.log(`Mascota modificada: ${mascotaAModificar.datosAnimal()}`);
        }
        else {
            console.log("No se encontro la mascota");
        }
    }
    listMasc() {
        if (this.mascotas.length === 0) {
            console.log("No hay mascotas registradas.");
            return;
        }
        console.log("Listado de mascotas:");
        this.mascotas.forEach((mascota) => console.log(mascota.datosAnimal()));
    }
}
exports.Veterinaria = Veterinaria;
