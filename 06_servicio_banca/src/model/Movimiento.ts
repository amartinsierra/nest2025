import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';
@Entity("movimientos")
export class Movimiento{
    @PrimaryGeneratedColumn()
    idMovimiento:number;
    @Column()
    idCuenta:number;
    @Column({type:"datetime"})
    fecha:Date;
    @Column()
    cantidad:number;
    @Column()
    operacion:string;
    // Constructor para inicializar los campos de la clase con todos los parámetros opcionales
    constructor(idMovimiento?:number, idCuenta?:number, fecha?:Date, cantidad?:number, operacion?:string){  
        this.idMovimiento = idMovimiento || 0; // Si no se proporciona, se inicializa a 0
        this.idCuenta = idCuenta || 0; // Si no se proporciona, se inicializa a 0
        this.fecha = fecha || new Date(); // Si no se proporciona, se inicializa a la fecha actual
        this.cantidad = cantidad || 0; // Si no se proporciona, se inicializa a 0
        this.operacion = operacion || ''; // Si no se proporciona, se inicializa a una cadena vacía
    }
}