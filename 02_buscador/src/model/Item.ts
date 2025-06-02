export class Item{
    url:string;
    tematica:string;
    descripcion:string;
    constructor(url?:string,tematica?:string,descripcion?:string){
        this.url=url;
        this.tematica=tematica;
        this.descripcion=descripcion;
    }
}