"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinaria = void 0;
var Veterinaria = /** @class */ (function () {
    function Veterinaria() {
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
    };
    return Veterinaria;
}());
exports.Veterinaria = Veterinaria;
