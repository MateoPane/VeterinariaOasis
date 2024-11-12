"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proveedor = void 0;
var proveedor = /** @class */ (function () {
    //constructor
    function proveedor(nombre, id, numeroTelefono) {
        this.nombre = nombre;
        this.id = id;
        this.numeroTelefono = numeroTelefono;
    }
    //METODOS
    proveedor.prototype.obtenerInformacion = function () {
        return "id: ".concat(this.id, ", nombre: ").concat(this.nombre, ", numeroTelefono: ").concat(this.numeroTelefono);
    };
    return proveedor;
}());
exports.proveedor = proveedor;
