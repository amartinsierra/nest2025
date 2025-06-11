import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "./Producto";
@Entity("pedidos")
export class Pedido {
    @PrimaryGeneratedColumn()
    idPedido:number;
    @Column()
    unidades:number;
    @Column()
    total:number;
    @Column()
    fechaPedido:Date;
    @ManyToOne(()=>Producto,producto=>producto.pedidos)
    @JoinColumn({name:"codigoProducto",referencedColumnName:"codigoProducto"})
    producto:Producto;
    constructor(idPedido?:number, unidades?:number, total?:number, fechaPedido?:Date, producto?:Producto) {
        this.idPedido = idPedido;
        this.unidades = unidades;
        this.total = total;
        this.fechaPedido = fechaPedido;
        this.producto = producto;
    }
}