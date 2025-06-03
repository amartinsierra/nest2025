export class AlumnoResultadoDto{       
       usuario: string;   
       password: string;   
       nombre: string;
       email: string;
       edad: number;
   
       constructor(
           usuario?: string,
           password?: string,
           nombre?: string,
           email?: string,
           edad?: number
       ) {
           this.usuario = usuario;
           this.password = password;
           this.nombre = nombre;
           this.email = email;
           this.edad = edad;
       } 
}