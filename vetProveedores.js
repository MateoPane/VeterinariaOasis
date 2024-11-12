"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vetProveedores = void 0;
var vetProveedores = /** @class */ (function () {
    function vetProveedores() {
        this.proveedores = [];
    }
    vetProveedores.prototype.alta = function (proveedores) {
        this.proveedores.push(proveedores);
        console.log("Proveedor agregado: ".concat(proveedores.obtenerInformacion()));
    };
    vetProveedores.prototype.baja = function (id) {
        var indice = -1;
        for (var i = 0; i < this.proveedores.length; i++) {
            if (this.proveedores[i].id === id) {
                indice = i;
                break;
            }
        }
        if (indice !== -1) {
            var proveedorEliminado = this.proveedores.splice(indice, 1)[0];
            console.log("Proveedor eliminado: ".concat(proveedorEliminado.obtenerInformacion()));
        }
        else {
            console.log("Proveedor no encontrado para eliminar");
        }
    };
    vetProveedores.prototype.modificarProveedor = function (nuevoNombre, id, nuevoTelefono) {
        var proveedorAModificar;
        this.proveedores.forEach(function (proveedor) {
            if (proveedor.id === id) {
                proveedorAModificar = proveedor;
            }
        });
        if (proveedorAModificar) {
            proveedorAModificar.nombre = nuevoNombre;
            proveedorAModificar.numeroTelefono = nuevoTelefono;
            console.log("Proveedor modificado: ".concat(proveedorAModificar.obtenerInformacion()));
        }
        else {
            console.log("No se encuentra el proveedor");
        }
    };
    vetProveedores.prototype.listaProv = function () {
        this.proveedores.forEach(function (proveedor) {
            return console.log(proveedor.obtenerInformacion());
        });
    };
    return vetProveedores;
}());
exports.vetProveedores = vetProveedores;
