import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CursoDatosDto } from 'src/dtos/CursoDatosDto';
import { MatriculaDatosDto } from 'src/dtos/MatriculaDatosDto';
import { Curso } from 'src/model/Curso';
import { Matricula } from 'src/model/Matricula';
import { Repository } from 'typeorm';


@Injectable()
export class MatriculacionService {
  constructor(@InjectRepository(Matricula) private readonly matriculasRepository:Repository<Matricula>,
              @InjectRepository(Curso) private readonly cursosRepository:Repository<Curso>){
    
  }

  async findByCurso(idCurso:number):Promise<MatriculaDatosDto[]>{
    const matriculas:Matricula[]=await this.matriculasRepository.createQueryBuilder("matricula")
      .innerJoinAndSelect("matricula.curso","c")
      .innerJoinAndSelect("matricula.alumno","a")
      .where("c.idCurso=:idCurso",{idCurso:idCurso})
      .getMany();
    return matriculas.map(m=>new MatriculaDatosDto(m.alumno.nombre,m.alumno.email,m.curso.nombre,m.nota));
  }
  async findCursosAll():Promise<CursoDatosDto[]>{
    const cursos:Curso[]=await this.cursosRepository.find();
    return cursos.map(c=>new CursoDatosDto(c.idCurso,c.nombre));
  }
}
