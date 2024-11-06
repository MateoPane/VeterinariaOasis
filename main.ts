import { Mascota } from "./Mascota";
import { Veterinaria } from "./Veterinaria";

const veterinaria = new Veterinaria();

const mascota = new Mascota(1, 1, "Morea", "Perro");
const mascota2 = new Mascota(2, 2, "Tommy", "Lagarto");
const mascota3 = new Mascota(3, 3, "Pepo", "Gato");

veterinaria.alta(mascota);
veterinaria.alta(mascota2);
veterinaria.alta(mascota3);

veterinaria.listMasc();

veterinaria.baja(2);
veterinaria.modificarMasc(1, 5, "Uma", "Perro");

veterinaria.listMasc();
