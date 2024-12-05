import { Mascota } from "./Mascota";

interface Cliente {
  id: number;
  nombre: string;
  telefono: string;
  esVIP: boolean;
  visitas: number;
  mascotas?: Mascota[];
}
export { Cliente };
