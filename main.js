"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var proveedor_1 = require("./proveedor");
var vetProveedores_1 = require("./vetProveedores");
var VeterinariaProveedores = new vetProveedores_1.vetProveedores();
var proveedor1 = new proveedor_1.proveedor("Distribuidora Pedrigee", 1, 2284111111);
var proveedor2 = new proveedor_1.proveedor("Distribuidora Agraria", 2, 2284222222);
var proveedor3 = new proveedor_1.proveedor("Distribuidora Dogui", 3, 2284333333);
VeterinariaProveedores.alta(proveedor1);
VeterinariaProveedores.alta(proveedor2);
VeterinariaProveedores.alta(proveedor3);
VeterinariaProveedores.listaProv();
VeterinariaProveedores.baja(2);
VeterinariaProveedores.modificarProveedor("Distribuidora mejorada", 1, 2284444444);
VeterinariaProveedores.listaProv();