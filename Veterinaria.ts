import { Cliente } from "./Interface";
class RedClientes {
    private clientes: Cliente[] = [];
    private idCounter: number = 1;

    // Método para agregar un nuevo cliente
    agregarCliente(nombre: string, telefono: string): Cliente {
        const nuevoCliente: Cliente = {
            id: this.idCounter++,
            nombre,
            telefono,
            visitas: 0,
            esVIP: false
        };
        this.clientes.push(nuevoCliente);
        return nuevoCliente;
    }

    // Método para modificar los datos de un cliente
    modificarCliente(id: number, nombre: string, telefono: string): boolean {
        const cliente = this.clientes.find(cliente => cliente.id === id);
        if (cliente) {
            cliente.nombre = nombre;
            cliente.telefono = telefono;
            return true;
        }
        return false;
    }

    // Método para registrar visitas y actualizar estado VIP
    registrarVisita(id: number): boolean {
        const cliente = this.clientes.find(cliente => cliente.id === id);
        if (cliente) {
            cliente.visitas += 1;
            if (cliente.visitas > 5) {
                cliente.esVIP = true;
            }
            return true;
        }
        return false;
    }

    // Método para eliminar un cliente por su ID
    eliminarCliente(id: number): boolean {
        const index = this.clientes.findIndex(cliente => cliente.id === id);
        if (index !== -1) {
            this.clientes.splice(index, 1);
            return true;
        }
        return false;
    }

    // Método para listar todos los clientes
    listarClientes(): Cliente[] {
        return this.clientes;
    }
}
export { RedClientes };
