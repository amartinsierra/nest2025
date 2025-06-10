export class ProductoDto {
    nombre: string;
    precio: number;
    disponibilidad: string;
    constructor(nombre?: string, precio?: number, disponibilidad?: string) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponibilidad = disponibilidad;
    }   
}