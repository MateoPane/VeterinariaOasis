"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mascota = void 0;
class Mascota {
    constructor(id, idDuenio, nombre, especie) {
        this.id = id;
        this.idDuenio = idDuenio;
        this.nombre = nombre;
        this.especie = this.especieExotica(especie);
    }
    especieExotica(especie) {
        if (especie.toLowerCase() !== "perro" && especie.toLowerCase() !== "gato") {
            return "exotica";
        }
        return especie;
    }
    datosAnimal() {
        return `Id: ${this.id}, Nombre: ${this.nombre}, Especie: ${this.especie}, Dueño: ${this.idDuenio}`;
    }
}
exports.Mascota = Mascota;
