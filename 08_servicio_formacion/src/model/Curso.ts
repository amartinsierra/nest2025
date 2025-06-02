//curso
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Alumno } from "./Alumno";

@Entity('cursos') // Nombre de la tabla en la base de datos
export class Curso {

    @PrimaryGeneratedColumn()
    idCurso: number;

    @Column()
    nombre: string;

    @Column()
    duracion: number;

    @Column()
    fechaInicio: Date;

    @Column()
    precio: number;

    @ManyToMany(() => Alumno, alumno => alumno.cursos)
    @JoinTable({ 
        name: "matriculas",
        joinColumn: {
            name: "idCurso",
            referencedColumnName: "idCurso" // Nombre de la columna que relaciona la tabla de unión
        },
        inverseJoinColumn: {
            name: "usuario",
            referencedColumnName: "usuario"
        }
    })
    alumnos: Alumno[];

    constructor(
        idCurso: number,
        nombre: string,
        duracion: number,
        fechaInicio: Date,
        precio: number
    ) {
        this.idCurso = idCurso;
        this.nombre = nombre;
        this.duracion = duracion;
        this.fechaInicio = fechaInicio;
        this.precio = precio;
    }
}