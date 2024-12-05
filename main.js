"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
const Veterinaria_1 = require("./Veterinaria");
const vetProveedores_1 = require("./vetProveedores");
const proveedor_1 = require("./proveedor");
const Mascota_1 = require("./Mascota");
const RedClientes_1 = require("./RedClientes");
const Sucursales_1 = require("./Sucursales");
const miRedClientes = new RedClientes_1.RedClientes();
const miVeterinaria = new Veterinaria_1.Veterinaria(miRedClientes);
const miVetProveedores = new vetProveedores_1.vetProveedores();
const miSucursales = new Sucursales_1.Sucursales();
function mostrarMenu() {
    console.log(`
  === SISTEMA DE GESTIÓN ===
  1. Gestión de Clientes
  2. Gestión de Proveedores
  3. Gestión de Mascotas
  4. Gestión de Sucursales
  5. Salir
  `);
}
function gestionClientes() {
    let opcion;
    do {
        console.log(`
      === GESTIÓN DE CLIENTES ===
      1. Agregar Cliente
      2. Modificar Cliente
      3. Eliminar Cliente
      4. Registrar Visita
      5. Listar Clientes
      6. Volver al Menú Principal
      `);
        opcion = readlineSync.questionInt("Seleccione una opción: ");
        switch (opcion) {
            case 1: {
                const nombre = readlineSync.question("Nombre del cliente: ");
                const telefono = readlineSync.question("Teléfono del cliente: ");
                const nuevoCliente = miRedClientes.agregarCliente(nombre, telefono);
                console.log(`Cliente agregado: ${JSON.stringify(nuevoCliente)}`);
                break;
            }
            case 2: {
                const id = readlineSync.questionInt("ID del cliente a modificar: ");
                const nuevoNombre = readlineSync.question("Nuevo nombre (deje vacío para no modificar): ");
                const nuevoTelefono = readlineSync.question("Nuevo teléfono (deje vacío para no modificar): ");
                const modificado = miRedClientes.modificarCliente(id, nuevoNombre || undefined, nuevoTelefono || undefined);
                if (modificado) {
                    console.log("Cliente modificado exitosamente.");
                }
                else {
                    console.log("Cliente no encontrado.");
                }
                break;
            }
            case 3: {
                const id = readlineSync.questionInt("ID del cliente a eliminar: ");
                const eliminado = miRedClientes.eliminarCliente(id);
                if (eliminado) {
                    console.log("Cliente eliminado exitosamente.");
                }
                else {
                    console.log("Cliente no encontrado.");
                }
                break;
            }
            case 4: {
                const id = readlineSync.questionInt("ID del cliente para registrar visita: ");
                const visitaRegistrada = miRedClientes.registrarVisita(id);
                if (visitaRegistrada) {
                    console.log("Visita registrada exitosamente.");
                }
                else {
                    console.log("Cliente no encontrado.");
                }
                break;
            }
            case 5:
                console.log("Listado de clientes:");
                const clientes = miRedClientes.listarClientes();
                clientes.forEach((cliente) => {
                    console.log(`ID: ${cliente.id}, Nombre: ${cliente.nombre}, Teléfono: ${cliente.telefono}, VIP: ${cliente.esVIP}, Visitas: ${cliente.visitas}`);
                });
                break;
            case 6:
                console.log("Volviendo al menú principal...");
                break;
            default:
                console.log("Opción inválida.");
        }
    } while (opcion !== 6);
}
function gestionMascotas() {
    let opcion;
    do {
        console.log(`
      === GESTIÓN DE MASCOTAS ===
      1. Agregar Mascota
      2. Modificar Mascota
      3. Eliminar Mascota
      4. Listar Mascotas
      5. Volver al Menú Principal
      `);
        opcion = readlineSync.questionInt("Seleccione una opción: ");
        switch (opcion) {
            case 1: {
                const idDuenio = readlineSync.questionInt("ID del dueño: ");
                const nombre = readlineSync.question("Nombre de la mascota: ");
                const especie = readlineSync.question("Especie de la mascota: ");
                const nuevaMascota = new Mascota_1.Mascota(idDuenio, nombre, especie);
                miVeterinaria.altaMascota(nuevaMascota, miRedClientes);
                break;
            }
            case 4:
                console.log("Listado de mascotas:");
                if (miVeterinaria.mascotas.length === 0) {
                    console.log("No hay mascotas registradas.");
                }
                else {
                    miVeterinaria.mascotas.forEach((mascota) => {
                        const cliente = miRedClientes
                            .listarClientes()
                            .find((cliente) => cliente.id === mascota.idDuenio);
                        const clienteNombre = cliente ? cliente.nombre : "Desconocido";
                        console.log(mascota.datosAnimal(clienteNombre));
                    });
                }
                break;
            case 5:
                console.log("Volviendo al menú principal...");
                break;
            default:
                console.log("Opción inválida.");
        }
    } while (opcion !== 5);
}
function gestionProveedores() {
    let opcion;
    do {
        console.log(`
    === GESTIÓN DE PROVEEDORES ===
    1. Agregar Proveedor
    2. Modificar Proveedor
    3. Eliminar Proveedor
    4. Listar Proveedores
    5. Volver al Menú Principal
    `);
        opcion = readlineSync.questionInt("Seleccione una opción: ");
        switch (opcion) {
            case 1: {
                const nombre = readlineSync.question("Nombre del proveedor: ");
                const telefono = readlineSync.questionInt("Teléfono del proveedor: ");
                miVetProveedores.altaProveedor(new proveedor_1.proveedor(nombre, telefono));
                break;
            }
            case 2: {
                const id = readlineSync.questionInt("ID del proveedor a modificar: ");
                const nombre = readlineSync.question("Nuevo nombre: ");
                const telefono = readlineSync.questionInt("Nuevo teléfono: ");
                miVetProveedores.modificarProveedor(nombre, id, telefono);
                break;
            }
            case 3: {
                const id = readlineSync.questionInt("ID del proveedor a eliminar: ");
                miVetProveedores.bajaProveedor(id);
                break;
            }
            case 4:
                miVetProveedores.listaProveedores();
                break;
            case 5:
                console.log("Volviendo al menú principal...");
                break;
            default:
                console.log("Opción inválida.");
        }
    } while (opcion !== 5);
}
function gestionSucursales() {
    let opcion;
    do {
        console.log(`
            === GESTIÓN DE SUCURSALES ===
            1. Agregar Sucursal
            2. Modificar Sucursal
            3. Eliminar Sucursal
            4. Listar Sucursales
            5. Volver al Menú Principal
            `);
        opcion = readlineSync.questionInt("Seleccione una opción: ");
        switch (opcion) {
            case 1:
                const nombre = readlineSync.question("Nombre de la Sucursal: ");
                const direccion = readlineSync.question("Direccion de la Sucursal: ");
                miSucursales.altaSucursal(nombre, direccion);
                break;
            case 2:
                const idSucursal = readlineSync.questionInt("ID de la Sucursal a modificar: ");
                const nombreSucursal = readlineSync.question("Nuevo nombre de la Sucursal: ");
                const direccionSucursal = readlineSync.question("Nueva direccion de la Sucursal: ");
                miSucursales.modificarDatos(idSucursal, nombreSucursal, direccionSucursal);
                break;
            case 3:
                const idSucursales = readlineSync.questionInt("ID de la Sucursal a eliminar: ");
                miSucursales.bajaSucursal(idSucursales);
                break;
            case 4:
                miSucursales.mostrarVeterinarias();
                break;
            case 5:
                console.log("Volviendo al menú principal...");
                break;
            default:
                console.log("Opción inválida.");
        }
    } while (opcion !== 5);
}
let opcionPrincipal;
do {
    mostrarMenu();
    opcionPrincipal = readlineSync.questionInt("Seleccione una opción: ");
    switch (opcionPrincipal) {
        case 1:
            gestionClientes();
            break;
        case 2:
            gestionProveedores();
            break;
        case 3:
            gestionMascotas();
            break;
        case 4:
            gestionSucursales();
        case 5:
            console.log("Saliendo del sistema...");
            break;
        default:
            console.log("Opción inválida.");
    }
} while (opcionPrincipal !== 5);
// Mensaje final al salir
console.log("Gracias por usar el sistema de gestión veterinaria.");
console.log("Recuerde guardar los cambios si es necesario.");
console.log("¡Hasta pronto!");
