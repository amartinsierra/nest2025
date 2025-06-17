import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Venta } from "./Venta";

@Entity("libros")
export class Libro{
    @PrimaryColumn()
    isbn:number;
    @Column()
    titulo:string;
    @Column()
    autor:string;
    @Column()
    precio:number;
    @Column()
    paginas:number;
    @OneToMany(()=>Venta,v=>v.cliente)
    ventas:Venta[];
    //constructor con parámetros opcionales
    constructor(isbn?:number, titulo?:string, autor?:string, precio?:number, paginas?:number){
        this.isbn = isbn || 0;
        this.titulo = titulo || '';
        this.autor = autor || '';
        this.precio = precio || 0;
        this.paginas = paginas || 0;
    }
}