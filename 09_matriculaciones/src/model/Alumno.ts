//Alumno
import { Column, Entity, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";
import { Curso } from "./Curso";
import { Matricula } from "./Matricula";

@Entity('alumnos') // Nombre de la tabla en la base de datos
export class Alumno {

    @PrimaryColumn()
    usuario: string;

    @Column()
    password: string;

    @Column()
    nombre: string;

    @Column()
    email: string;

    @Column()
    edad: number;

    @OneToMany(()=>Matricula,m=>m.alumno)
    matriculas:Matricula[];


    constructor(
        usuario: string,
        password: string,
        nombre: string,
        email: string,
        edad: number
    ) {
        this.usuario = usuario;
        this.password = password;
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
    }
}