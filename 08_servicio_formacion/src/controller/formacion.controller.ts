import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { AlumnosService } from 'src/service/alumnos.service';
import { CursosService } from 'src/service/cursos.service';
import { MatriculasService } from 'src/service/matriculas.service';
import {Response} from 'express';
import { MatriculaNuevaDto } from 'src/dtos/MatriculaNuevaDto';

import { CursoResultadoDto } from 'src/dtos/CursoResultadoDto';
import { AlumnoResultadoDto } from 'src/dtos/AlumnoResultadoDto';
import { CursoAltaDto } from 'src/dtos/CursoAltaDto';
import { AlumnoAltaDto } from 'src/dtos/AlumnoAltaDto';

@Controller('formacion')
export class FormacionController {
  constructor(private readonly alumnosService: AlumnosService,
    private readonly cursosService: CursosService,
    private readonly matriculasService: MatriculasService
  ) {}
  @Get('cursos')
  cursos(){
    return this.cursosService.findAll();
  }
  @Get('noMatriculados/:idCurso')
  alumnosNoMatriculados(@Param("idCurso") idCurso:number):Promise<AlumnoResultadoDto[]>{
    return this.alumnosService.findByNoMatriculadoEnCurso(idCurso);
  }
 /* @Post('matricular/:idCurso/:usuario')
  async matricular(@Param("idCurso")idCurso:number,@Param("usuario")usuario:string,@Res() response:Response){
    const resultado:boolean=await this.matriculasService.matricular(usuario,idCurso);
    if(resultado){
      response.status(200).send();
    }else{
      response.status(409).send();
    }
  }*/
  @Post('matricular')
  async matricular(@Body() datos:MatriculaNuevaDto,@Res() response:Response){
    const resultado:boolean=await this.matriculasService.matricular(datos);
    if(resultado){
      response.status(200).send();
    }else{
      response.status(409).send();
    }
  }
  @Post('nuevoCurso')
  nuevoCurso(@Body()curso:CursoAltaDto){
    return this.cursosService.save(curso);
  }
  @Post('nuevoAlumno')
  nuevoAlumno(@Body() alumno:AlumnoAltaDto){
    return this.alumnosService.save(alumno);
  }
}
