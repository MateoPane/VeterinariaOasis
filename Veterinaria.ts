import { Mascota } from "./Mascota";

export class Veterinaria {
  public mascotas: Mascota[] = [];

  public alta(mascotas: Mascota): void {
    const idExistente = this.mascotas.find(
      (mascota) => mascota.id === mascotas.id
    );
    const idDuenioExistente = this.mascotas.find(
      (mascota) => mascota.idDuenio === mascotas.idDuenio
    );

    if (idExistente) {
      console.log(`Ya existe una Mascota con este id ${mascotas.id}`);
      return;
    } else if (idDuenioExistente) {
      console.log(
        `El Dueño con Id ${mascotas.idDuenio} ya tiene una mascota registrada.`
      );
      return;
    }

    this.mascotas.push(mascotas);
    console.log(`Mascota agregada: ${mascotas.datosAnimal()}`);
  }

  public baja(id: number): void {
    let index = -1;
    for (let i = 0; i < this.mascotas.length; i++) {
      if (this.mascotas[i].id === id) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
      const mascotaEliminada = this.mascotas.splice(index, 1)[0];
      console.log(`Mascota eliminada: ${mascotaEliminada.datosAnimal()}`);
    } else {
      console.log("Mascota no encontrada para eliminar");
    }
  }

  public modificarMasc(
    id: number,
    idDuenioNuevo: number,
    nombreNuevo: string,
    especieNuevo: string
  ): void {
    let mascotaAModificar: Mascota | undefined;
    this.mascotas.forEach((mascota) => {
      if (mascota.id === id) {
        mascotaAModificar = mascota;
      }
    });
    if (mascotaAModificar) {
      mascotaAModificar.idDuenio = idDuenioNuevo;
      mascotaAModificar.nombre = nombreNuevo;
      mascotaAModificar.especie = especieNuevo;
      console.log(`Mascota modificada: ${mascotaAModificar.datosAnimal()}`);
    } else {
      console.log("No se encontro la mascota");
    }
  }

  public listMasc(): void {
    console.log("Listado de mascotas:");
    this.mascotas.forEach((mascota) => console.log(mascota.datosAnimal()));
  }
}
