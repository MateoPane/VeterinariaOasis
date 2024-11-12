import { Cliente } from './Interface';
class Veterinaria {
    private clientes: Cliente[] = [];
    private idCounter: number = 1;

    // Función para agregar un nuevo cliente
    agregarCliente(nombre: string, telefono: string): Cliente {
        const nuevoCliente: Cliente = {
            id: this.idCounter++,
            nombre,
            telefono,
            esVIP: false,
            visitas: 0,
        };
        this.clientes.push(nuevoCliente);
        return nuevoCliente;
    }

    // Función para eliminar un cliente por ID
    eliminarCliente(id: number): boolean {
        const index = this.clientes.findIndex(cliente => cliente.id === id);
        if (index !== -1) {
            this.clientes.splice(index, 1);
            return true;
        }
        return false;
    }

    // Función para modificar datos de un cliente
    modificarCliente(id: number, nombre?: string, telefono?: string): boolean {
        const cliente = this.clientes.find(cliente => cliente.id === id);
        if (cliente) {
            if (nombre) cliente.nombre = nombre;
            if (telefono) cliente.telefono = telefono;
            return true;
        }
        return false;
    }

    // Función para registrar una visita y actualizar el estado VIP
    registrarVisita(id: number): boolean {
        const cliente = this.clientes.find(cliente => cliente.id === id);
        if (cliente) {
            cliente.visitas += 1;
            if (cliente.visitas >= 5) {
                cliente.esVIP = true;
            }
            return true;
        }
        return false;
    }

    // Función para listar todos los clientes
    listarClientes(): Cliente[] {
        return this.clientes;
    }
}
export { Veterinaria };