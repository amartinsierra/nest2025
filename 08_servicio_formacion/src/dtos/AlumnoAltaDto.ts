import { IsEmail, IsInt, IsNotEmpty, IsString, Length, Max, Min } from "class-validator";

export class AlumnoAltaDto{   
       @IsNotEmpty()
       @IsString()    
       usuario: string; 
       @IsString()
       @Length(6)   
       password:string;    
       nombre: string;
       @IsEmail()
       email: string;
       @IsInt()
       @Min(18)
       @Max(99)
       edad: number;
   
       constructor(
           usuario?: string, 
           password?:string,       
           nombre?: string,
           email?: string,
           edad?: number
       ) {
           this.usuario = usuario;
           this.password=password;
           this.nombre = nombre;
           this.email = email;
           this.edad = edad;
       } 
}