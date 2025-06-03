import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CursoResultadoDto } from 'src/dtos/CursoResultadoDto';
import { Curso } from 'src/model/Curso';
import { Repository } from 'typeorm';


@Injectable()
export class CursosService {
  constructor(@InjectRepository(Curso) private readonly cursosRepository:Repository<Curso>){
    
  }

  async findAll():Promise<CursoResultadoDto[]>{
    return (await this.cursosRepository.find()) //Curso[]
    .map(c=>new CursoResultadoDto(c.idCurso,c.nombre,c.duracion,c.fechaInicio,c.precio));
  }
}
