"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vetProveedores = void 0;
class vetProveedores {
    constructor() {
        this.proveedores = [];
    }
    generarId() {
        let id = Math.floor(Math.random() * 9000) + 1000;
        // Verifica si el ID ya existe en la lista de proveedores
        while (this.proveedores.find((proveedor) => proveedor.id === id)) {
            id = Math.floor(Math.random() * 9000) + 1000; // Genera un nuevo ID si ya existe
        }
        return id;
    }
    altaProveedor(proveedor) {
        const id = this.generarId(); // Genera un ID único aleatorio
        proveedor.id = id;
        this.proveedores.push(proveedor);
        console.log(`Proveedor agregado: ${proveedor.obtenerInformacion()}`);
    }
    bajaProveedor(id) {
        let indice = -1;
        for (let i = 0; i < this.proveedores.length; i++) {
            if (this.proveedores[i].id === id) {
                indice = i;
                break;
            }
        }
        if (indice !== -1) {
            const proveedorEliminado = this.proveedores.splice(indice, 1)[0];
            console.log(`Proveedor eliminado: ${proveedorEliminado.obtenerInformacion()}`);
        }
        else {
            console.log("Proveedor no encontrado para eliminar");
        }
    }
    modificarProveedor(nuevoNombre, id, nuevoTelefono) {
        let proveedorAModificar;
        this.proveedores.forEach((proveedor) => {
            if (proveedor.id === id) {
                proveedorAModificar = proveedor;
            }
        });
        if (proveedorAModificar) {
            proveedorAModificar.nombre = nuevoNombre;
            proveedorAModificar.numeroTelefono = nuevoTelefono;
            console.log(`Proveedor modificado: ${proveedorAModificar.obtenerInformacion()}`);
        }
        else {
            console.log("No se encuentra el proveedor");
        }
    }
    listaProveedores() {
        if (this.proveedores.length === 0) {
            console.log("No hay proveedores registrados.");
            return;
        }
        console.log("Lista de proveedores: ");
        this.proveedores.forEach((provee) => {
            console.log(provee.obtenerInformacion());
        });
    }
}
exports.vetProveedores = vetProveedores;
