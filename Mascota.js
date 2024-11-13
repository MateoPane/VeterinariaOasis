"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mascota = void 0;
var Mascota = /** @class */ (function () {
    function Mascota(id, idDuenio, nombre, especie) {
        this.id = id;
        this.idDuenio = idDuenio;
        this.nombre = nombre;
        this.especie = this.especieExotica(especie);
    }
    Mascota.prototype.especieExotica = function (especie) {
        if (especie.toLowerCase() !== "perro" && especie.toLowerCase() !== "gato") {
            return "exotica";
        }
        return especie;
    };
    Mascota.prototype.datosAnimal = function () {
        return "Id: ".concat(this.id, ", Nombre: ").concat(this.nombre, ", Especie: ").concat(this.especie, ", Due\u00F1o: ").concat(this.idDuenio);
    };
    return Mascota;
}());
exports.Mascota = Mascota;
