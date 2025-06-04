export class CursoAltaDto{    
        nombre: string;
        duracion: number;
        fechaInicio: Date;    
        precio: number;
    
        constructor(
            nombre?: string,
            duracion?: number,
            fechaInicio?: Date,
            precio?: number
        ) {
            this.nombre = nombre;
            this.duracion = duracion;
            this.fechaInicio = fechaInicio;
            this.precio = precio;
        }
}