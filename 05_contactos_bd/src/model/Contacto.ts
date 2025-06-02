import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("contactos")
export class Contacto{
    @PrimaryGeneratedColumn("identity")
    idContacto:number;
    @Column()
    nombre:string;
    @Column()
    email:string;
    @Column({nullable:true})
    telefono:string;
    constructor(idContacto?:number,nombre?:string,email?:string,telefono?:string){
        this.idContacto=idContacto;
        this.nombre=nombre;
        this.email=email;
        this.telefono=telefono;
    }
}