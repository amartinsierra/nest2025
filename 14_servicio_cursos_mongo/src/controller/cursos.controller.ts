import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Curso } from 'src/model/curso.schema';
import { CursosService } from 'src/service/cursos.service';


@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}
  @Post('guardar')
  guardar(@Body() curso:Curso ){
    return this.cursosService.guardar(curso);
  }
  @Get('catalogo')
  catalogo(){
    return this.cursosService.todos();
  } 
}
