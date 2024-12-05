"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mascota = void 0;
class Mascota {
    constructor(idDuenio, nombre, especie) {
        this.idDuenio = idDuenio;
        this.nombre = nombre;
        this.especie = this.especieExotica(especie);
        this.id = 0;
    }
    especieExotica(especie) {
        if (especie.toLowerCase() !== "perro" && especie.toLowerCase() !== "gato") {
            return "exotica";
        }
        return especie;
    }
    datosAnimal(clienteNombre) {
        return `Id: ${this.id}, Nombre: ${this.nombre}, Especie: ${this.especie}, Dueño: ${clienteNombre}`;
    }
}
exports.Mascota = Mascota;
