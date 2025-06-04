export class MatriculaDatosDto{
    nombre:string;
    email:string;
    curso:string;
    nota:number;
   constructor(
        nombre?:string,
        email?:string,
        curso?:string,
        nota?:number
    ) {
        this.nombre = nombre;
        this.email = email;
        this.curso = curso;
        this.nota = nota;
    }
}