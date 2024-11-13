export class Mascota {
  public id: number;
  public idDuenio: number;
  public nombre: string;
  public especie: string;

  constructor(id: number, idDuenio: number, nombre: string, especie: string) {
    this.id = id;
    this.idDuenio = idDuenio;
    this.nombre = nombre;
    this.especie = this.especieExotica(especie);
  }

  public especieExotica(especie: string): string {
    if (especie.toLowerCase() !== "perro" && especie.toLowerCase() !== "gato") {
      return "exotica.";
    }
    return especie;
  }
  public datosAnimal(): string {
    return `Id: ${this.id}, Nombre: ${this.nombre}, Especie: ${this.especie}, Dueño: ${this.idDuenio}`;
  }
}
