export class Mascota {
  public id: number;
  public idDuenio: number;
  public nombre: string;
  public especie: string;

  constructor(idDuenio: number, nombre: string, especie: string) {
    this.idDuenio = idDuenio;
    this.nombre = nombre;
    this.especie = this.especieExotica(especie);
    this.id = 0;
  }

  public especieExotica(especie: string): string {
    if (especie.toLowerCase() !== "perro" && especie.toLowerCase() !== "gato") {
      return "exotica";
    }
    return especie;
  }
  public datosAnimal(): string {
    return `Id: ${this.id}, Nombre: ${this.nombre}, Especie: ${this.especie}, Dueño: ${this.idDuenio}`;
  }
}
