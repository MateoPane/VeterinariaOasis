import { proveedor } from "./proveedor";

export class vetProveedores {
  public proveedores: proveedor[] = [];

  public alta(proveedores: proveedor): void {
    this.proveedores.push(proveedores);
    console.log(`Proveedor agregado: ${proveedores.obtenerInformacion()}`);
  }

  public baja(id: number): void {
    let indice = -1;
    for (let i = 0; i < this.proveedores.length; i++) {
      if (this.proveedores[i].id === id) {
        indice = i;
        break;
      }
    }
    if (indice !== -1) {
      const proveedorEliminado = this.proveedores.splice(indice, 1)[0];
      console.log(
        `Proveedor eliminado: ${proveedorEliminado.obtenerInformacion()}`
      );
    } else {
      console.log("Proveedor no encontrado para eliminar");
    }
  }

  public modificarProveedor(
    nuevoNombre: string,
    id: number,
    nuevoTelefono: number
  ): void {
    let proveedorAModificar: proveedor | undefined;
    this.proveedores.forEach((proveedor) => {
      if (proveedor.id === id) {
        proveedorAModificar = proveedor;
      }
    });

    if (proveedorAModificar) {
      proveedorAModificar.nombre = nuevoNombre;
      proveedorAModificar.numeroTelefono = nuevoTelefono;
      console.log(
        `Proveedor modificado: ${proveedorAModificar.obtenerInformacion()}`
      );
    } else {
      console.log("No se encuentra el proveedor");
    }
  }
  public listaProv(): void {
    this.proveedores.forEach((proveedor) =>
      console.log(proveedor.obtenerInformacion())
    );
  }
}
