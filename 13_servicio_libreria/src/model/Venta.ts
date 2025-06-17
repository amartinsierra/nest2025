import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./Cliente";
import { Libro } from "./Libro";
@Entity("ventas")
export class Venta{
    @PrimaryGeneratedColumn()
    idVenta:number;
    @ManyToOne(() => Cliente, cliente => cliente.ventas)
    @JoinColumn({ name: 'idCliente' , referencedColumnName: 'idCliente' })
    cliente:Cliente;
    @ManyToOne(() => Libro, libro => libro.ventas)
    @JoinColumn({ name: 'idLibro' , referencedColumnName: 'isbn' })
    libro:Libro;
    @Column({ type: 'timestamp'})
    fecha:Date;
    //constructor con parámetros opcionales
    constructor(idVenta?:number, cliente?:Cliente, libro?:Libro, fecha?:Date){
        this.idVenta = idVenta || 0;
        this.cliente = cliente || new Cliente();
        this.libro = libro || new Libro();
        this.fecha = fecha || new Date();
    }
}