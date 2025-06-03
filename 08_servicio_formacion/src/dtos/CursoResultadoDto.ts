export class CursoResultadoDto{    
        idCurso: number;    
        nombre: string;
        duracion: number;
        fechaInicio: Date;    
        precio: number;
    
        constructor(
            idCurso?: number,
            nombre?: string,
            duracion?: number,
            fechaInicio?: Date,
            precio?: number
        ) {
            this.idCurso = idCurso;
            this.nombre = nombre;
            this.duracion = duracion;
            this.fechaInicio = fechaInicio;
            this.precio = precio;
        }
}