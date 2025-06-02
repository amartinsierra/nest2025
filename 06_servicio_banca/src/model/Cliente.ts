import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { Cuenta } from "./Cuenta";

@Entity("clientes")
export class Cliente{
    @PrimaryColumn()
    dni:number;
    @Column()
    nombre:string;
    @Column()
    direccion:string;
    @Column()
    telefono:number;
    @ManyToMany(()=>Cuenta,cuenta=>cuenta.clientes)
    cuentas:Cuenta[];
    constructor(dni?:number, nombre?:string, direccion?:string, telefono?:number){
        this.dni = dni || 0; // Si no se proporciona, se inicializa a 0
        this.nombre = nombre || ''; // Si no se proporciona, se inicializa a una cadena vacía
        this.direccion = direccion || ''; // Si no se proporciona, se inicializa a una cadena vacía
        this.telefono = telefono || 0; // Si no se proporciona, se inicializa a 0
    }
}