import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MatriculaDatosDto } from 'src/dtos/MatriculaDatosDto';
import { Curso } from 'src/model/Curso';
import { Matricula } from 'src/model/Matricula';
import { Repository } from 'typeorm';


@Injectable()
export class MatriculacionService {
  constructor(@InjectRepository(Matricula) private readonly matriculasRepository:Repository<Matricula>){
    
  }

  async findByCurso(idCurso:number):Promise<MatriculaDatosDto[]>{
    const matriculas:Matricula[]=await this.matriculasRepository.createQueryBuilder("matricula")
      .innerJoin("matricula.curso","c")
      .innerJoin("matricula.alumno","a")
      .where("c.idCurso=:idCurso",{idCurso:idCurso})
      .getMany();
    console.log(matriculas);
    return matriculas.map(m=>new MatriculaDatosDto(m.alumno.nombre,m.alumno.email,m.curso.nombre,m.nota));
  }
}
