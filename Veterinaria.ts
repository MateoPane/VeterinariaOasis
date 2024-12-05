import { Mascota } from "./Mascota";
import { RedClientes } from "./RedClientes";

export class Veterinaria {
  public mascotas: Mascota[] = [];
  private redClientes: RedClientes;

  constructor(redClientes: RedClientes) {
    this.redClientes = redClientes;
  }

  private generarId(): number {
    let id = Math.floor(Math.random() * 9000) + 1000;
    // Verifica si el ID ya existe en la lista de proveedores, se genera un id a partir de 1000 a 9999
    while (this.mascotas.find((mascota) => mascota.id === id)) {
      id = Math.floor(Math.random() * 9000) + 1000; // Genera un nuevo ID si ya existe
    }
    return id;
  }

  public altaMascota(mascotas: Mascota, clientes: RedClientes): void {
    const cliente = clientes
      .listarClientes()
      .find((c) => c.id === mascotas.idDuenio);

    if (!cliente) {
      console.log(
        `Error: No existe un cliente con el ID ${mascotas.idDuenio}.`
      );
      return;
    }

    const idExistente = this.mascotas.find(
      (mascota) => mascota.id === mascotas.id
    );
    if (idExistente) {
      console.log(`Ya existe una mascota con el ID ${mascotas.id}`);
      return;
    }

    const id = this.generarId();
    mascotas.id = id;
    this.mascotas.push(mascotas);
    console.log(`Mascota agregada: ${mascotas.datosAnimal(cliente.nombre)}`);
  }

  public bajaMascota(id: number): void {
    const mascotaEliminada = this.mascotas.find((mascota) => mascota.id === id);
    if (!mascotaEliminada) {
      console.log(`Mascota con ID ${id} no encontrada.`);
      return;
    }
    this.mascotas = this.mascotas.filter((mascota) => mascota.id !== id);
    const cliente = this.redClientes
      .listarClientes()
      .find((c) => c.id === mascotaEliminada.idDuenio);
    const clienteNombre = cliente ? cliente.nombre : "Desconocido";
    console.log(
      `Mascota eliminada: ${mascotaEliminada.datosAnimal(clienteNombre)}`
    );
  }

  public modificarMascota(
    id: number,
    idDuenio: number,
    nombre: string,
    especie: string
  ): void {
    const mascotaAModificar = this.mascotas.find(
      (mascota) => mascota.id === id
    );

    if (!mascotaAModificar) {
      console.log(`No se encontró una mascota con el ID ${id}.`);
      return;
    }

    // Buscar el cliente asociado al nuevo `idDuenio`
    const cliente = this.redClientes
      .listarClientes()
      .find((cliente) => cliente.id === idDuenio);
    if (!cliente) {
      console.log(`No se encontró un cliente con el ID ${idDuenio}.`);
      return;
    }

    // Actualizar los datos de la mascota
    mascotaAModificar.idDuenio = idDuenio;
    mascotaAModificar.nombre = nombre;
    mascotaAModificar.especie = especie;

    console.log(
      `Mascota modificada: ${mascotaAModificar.datosAnimal(cliente.nombre)}`
    );
  }

  public listMascota(): void {
    if (this.mascotas.length === 0) {
      console.log("No hay mascotas registradas.");
    } else {
      this.mascotas.forEach((mascota) => {
        const cliente = this.redClientes
          .listarClientes()
          .find((c) => c.id === mascota.idDuenio);
        const clienteNombre = cliente ? cliente.nombre : "Desconocido";
        console.log(mascota.datosAnimal(clienteNombre));
      });
    }
  }
}
