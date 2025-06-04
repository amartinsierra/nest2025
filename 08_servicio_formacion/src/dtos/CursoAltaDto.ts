import { IsDate, IsInt, IsString, Length } from "class-validator";

export class CursoAltaDto{    
        @IsString()
        @Length(2,20)
        nombre: string;
        @IsInt()
        duracion: number;
        @IsDate()
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