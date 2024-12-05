import * as readlineSync from "readline-sync";
import { Veterinaria } from "./Veterinaria";
import { vetProveedores } from "./vetProveedores";
import { proveedor } from "./proveedor";
import { Mascota } from "./Mascota";
import { RedClientes } from "./RedClientes";
import { Sucursales } from "./Sucursales";

const miRedClientes = new RedClientes();
const miVeterinaria = new Veterinaria(miRedClientes);
const miVetProveedores = new vetProveedores();
const miSucursales = new Sucursales();

function mostrarMenu(): void {
  console.log(`
  === SISTEMA DE GESTIÓN ===
  1. Gestión de Clientes
  2. Gestión de Proveedores
  3. Gestión de Mascotas
  4. Gestión de Sucursales
  5. Salir
  `);
}

function gestionClientes(): void {
  let opcion: number;
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
        const nuevoNombre = readlineSync.question(
          "Nuevo nombre (deje vacío para no modificar): "
        );
        const nuevoTelefono = readlineSync.question(
          "Nuevo teléfono (deje vacío para no modificar): "
        );
        const modificado = miRedClientes.modificarCliente(
          id,
          nuevoNombre || undefined,
          nuevoTelefono || undefined
        );
        if (modificado) {
          console.log("Cliente modificado exitosamente.");
        } else {
          console.log("Cliente no encontrado.");
        }
        break;
      }
      case 3: {
        const id = readlineSync.questionInt("ID del cliente a eliminar: ");
        const eliminado = miRedClientes.eliminarCliente(id);
        if (eliminado) {
          console.log("Cliente eliminado exitosamente.");
        } else {
          console.log("Cliente no encontrado.");
        }
        break;
      }
      case 4: {
        const id = readlineSync.questionInt(
          "ID del cliente para registrar visita: "
        );
        const visitaRegistrada = miRedClientes.registrarVisita(id);
        if (visitaRegistrada) {
          console.log("Visita registrada exitosamente.");
        } else {
          console.log("Cliente no encontrado.");
        }
        break;
      }
      case 5:
        console.log("Listado de clientes:");
        const clientes = miRedClientes.listarClientes();
        clientes.forEach((cliente) => {
          console.log(
            `ID: ${cliente.id}, Nombre: ${cliente.nombre}, Teléfono: ${cliente.telefono}, VIP: ${cliente.esVIP}, Visitas: ${cliente.visitas}`
          );
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

function gestionMascotas(): void {
  let opcion: number;
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
        const nuevaMascota = new Mascota(idDuenio, nombre, especie);
        miVeterinaria.altaMascota(nuevaMascota, miRedClientes);
        break;
      }
      case 4:
        console.log("Listado de mascotas:");
        if (miVeterinaria.mascotas.length === 0) {
          console.log("No hay mascotas registradas.");
        } else {
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

function gestionProveedores(): void {
  let opcion: number;
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
        miVetProveedores.altaProveedor(new proveedor(nombre, telefono));
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

function gestionSucursales(): void {
  let opcion: number;
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
        const idSucursal = readlineSync.questionInt(
          "ID de la Sucursal a modificar: "
        );
        const nombreSucursal = readlineSync.question(
          "Nuevo nombre de la Sucursal: "
        );
        const direccionSucursal = readlineSync.question(
          "Nueva direccion de la Sucursal: "
        );
        miSucursales.modificarDatos(
          idSucursal,
          nombreSucursal,
          direccionSucursal
        );
        break;
      case 3:
        const idSucursales = readlineSync.questionInt(
          "ID de la Sucursal a eliminar: "
        );
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

let opcionPrincipal: number;
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
