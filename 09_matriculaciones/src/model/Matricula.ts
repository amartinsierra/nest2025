import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Alumno } from "./Alumno";
import { Curso } from "./Curso";

@Entity("matriculas")
export class Matricula{
    @PrimaryColumn()
    idCurso:number;
    @PrimaryColumn()
    usuario:string;
    @ManyToOne(()=>Alumno,a=>a.matriculas)
    @JoinColumn({name:"usuario",referencedColumnName:"usuario"})
    alumno:Alumno;
    @ManyToOne(()=>Curso,c=>c.matriculas)
    @JoinColumn({name:"idCurso",referencedColumnName:"idCurso"})
    curso:Curso;

    @Column()
    nota:number;

    constructor(alumno?:Alumno,curso?:Curso,nota?:number){
        this.curso=curso;
        this.nota=nota;
        this.alumno=alumno;
        this.idCurso=curso.idCurso;
        this.usuario=alumno.usuario
    }
}