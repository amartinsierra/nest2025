import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Alumno } from 'src/model/Alumno';
import { Curso } from 'src/model/Curso';
import { Repository } from 'typeorm';

@Injectable()
export class MatriculasService {
    constructor(@InjectRepository(Curso) private readonly cursosRepository:Repository<Curso>,
                @InjectRepository(Alumno) private readonly alumnosRepository:Repository<Alumno>){
        
      }
    async matricular(usuario:string,idCurso:number):Promise<boolean>{
        const alumno:Alumno=await this.alumnosRepository.createQueryBuilder("alumno")
                            .where("alumno.usuario=:usuario",{usuario:usuario})
                            .getOne();
        const curso:Curso=await this.cursosRepository.createQueryBuilder("curso")
                            .innerJoinAndSelect("curso.alumnos","a")
                            .where("curso.idCurso=:idCurso",{idCurso:idCurso})
                            .getOne();
        if(!alumno || !curso){
            return false;
        }
        //añadimos el alumno al curso y actualizamos el curso
        curso.alumnos.push(alumno);
        await this.cursosRepository.save(curso);
        return true;
    }
}
