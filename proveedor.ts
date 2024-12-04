export class proveedor {
  //ATRIBUTOS
  public nombre: string;
  public id: number;
  public numeroTelefono: number;

  //constructor
  constructor(nombre: string, numeroTelefono: number) {
    this.nombre = nombre;
    this.numeroTelefono = numeroTelefono;
    this.id = 0;
  }

  //METODOS
  public obtenerInformacion(): string {
    return `id: ${this.id}, nombre: ${this.nombre}, numeroTelefono: ${this.numeroTelefono}`;
  }
}
