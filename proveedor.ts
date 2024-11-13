export class proveedor {
  //ATRIBUTOS
  public nombre: string;
  public id: number;
  public numeroTelefono: number;

  //constructor
  constructor(nombre: string, id: number, numeroTelefono: number) {
    this.nombre = nombre;
    this.id = id;
    this.numeroTelefono = numeroTelefono;
  }

  //METODOS
  public obtenerInformacion(): string {
    return `id: ${this.id}, nombre: ${this.nombre}, numeroTelefono: ${this.numeroTelefono}`;
  }
}
