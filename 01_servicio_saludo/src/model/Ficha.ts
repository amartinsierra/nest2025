export class Ficha{
    nombre:string;
    edad:number;
    email:string;
    constructor(nombre?:string, edad?:number,email?:string){
        this.nombre=nombre;
        this.edad=edad;
        this.email=email;
    }
}