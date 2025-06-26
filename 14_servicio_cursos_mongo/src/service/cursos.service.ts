import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Curso, CursoDocument } from 'src/model/curso.schema';


@Injectable()
export class CursosService {
   constructor(
    @InjectModel(Curso.name) private cursoModel: Model<CursoDocument>
  ) {}
  guardar(curso:Curso):Promise<Curso>{
    const nuevo = new this.cursoModel(curso);
    return nuevo.save();
  }
  todos():Promise<Curso[]>{
    return this.cursoModel.find();
  }
}
