export class Pais{
    nombre:string;
    continente:string;
    poblacion:number;
    capital:string;
    bandera:string;
    constructor(nombre?:string, continente?:string, poblacion?:number, capital?:string, bandera?:string){
        this.nombre=nombre;
        this.continente=continente;
        this.poblacion=poblacion;
        this.capital=capital;
        this.bandera=bandera;
    }
}