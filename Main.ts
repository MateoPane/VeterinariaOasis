import { proveedor } from "./proveedor";
import { vetProveedores } from "./vetProveedores";

const VeterinariaProveedores = new vetProveedores();

const proveedor1 = new proveedor("Distribuidora Pedrigee", 1, 2284111111);
const proveedor2 = new proveedor("Distribuidora Agraria", 2, 2284222222);
const proveedor3 = new proveedor("Distribuidora Dogui", 3, 2284333333);

VeterinariaProveedores.alta(proveedor1);
VeterinariaProveedores.alta(proveedor2);
VeterinariaProveedores.alta(proveedor3);

VeterinariaProveedores.listaProv();
VeterinariaProveedores.baja(2);
VeterinariaProveedores.modificarProveedor(
  "Distribuidora mejorada",
  1,
  2284444444
);
VeterinariaProveedores.listaProv();
