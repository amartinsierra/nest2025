import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Venta } from "./Venta";

@Entity("clientes")
export class Cliente{
    @PrimaryGeneratedColumn()
    idCliente:number;
    @Column()
    usuario:string;
    @Column()
    password:string;
    @Column()
    email:string;
    @Column()
    telefono:number;
    @OneToMany(()=>Venta,v=>v.cliente)
    ventas:Venta[];
    //constructor con parámetros opcionales
    constructor(idCliente?:number, usuario?:string, password?:string, email?:string, telefono?:number){
        this.idCliente = idCliente || 0;
        this.usuario = usuario || '';
        this.password = password || '';
        this.email = email || '';
        this.telefono = telefono || 0;
    }
}