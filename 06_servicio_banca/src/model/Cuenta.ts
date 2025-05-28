import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Movimiento } from "./Movimiento";

@Entity("cuentas")
export class Cuenta{
    @PrimaryColumn()
    numeroCuenta:number;
    @Column()
    saldo:number;
    @Column()
    tipoCuenta:string;
    @OneToMany(()=>Movimiento,movimiento=>movimiento.cuenta)
    movimientos:Movimiento[];
    constructor(numeroCuenta?:number,saldo?:number,tipoCuenta?:string){
        this.numeroCuenta=numeroCuenta;
        this.saldo=saldo;
        this.tipoCuenta=tipoCuenta;
    }
}