"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proveedor = void 0;
class proveedor {
    //constructor
    constructor(nombre, numeroTelefono) {
        this.nombre = nombre;
        this.numeroTelefono = numeroTelefono;
        this.id = 0;
    }
    //METODOS
    obtenerInformacion() {
        return `id: ${this.id}, nombre: ${this.nombre}, numeroTelefono: ${this.numeroTelefono}`;
    }
}
exports.proveedor = proveedor;
