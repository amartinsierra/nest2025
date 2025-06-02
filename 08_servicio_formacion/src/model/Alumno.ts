//Alumno
import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { Curso } from "./Curso";

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

    @ManyToMany(() => Curso, curso => curso.alumnos)
    cursos: Curso[];


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