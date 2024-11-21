"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proveedor = void 0;
class proveedor {
    //constructor
    constructor(nombre, id, numeroTelefono) {
        this.nombre = nombre;
        this.id = id;
        this.numeroTelefono = numeroTelefono;
    }
    //METODOS
    obtenerInformacion() {
        return `id: ${this.id}, nombre: ${this.nombre}, numeroTelefono: ${this.numeroTelefono}`;
    }
}
exports.proveedor = proveedor;
