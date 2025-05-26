import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PaisesService } from 'src/service/paises.service';


@Controller('paises')
export class PaisesController {
  constructor(private readonly paisesService: PaisesService) {}
  @Get('continentes')
  continentes(){
    return this.paisesService.findAllContinentes();
  }

  @Get('paisesContinente/:continente')
  paisesContinente(@Param("continente") continente:string){
    return this.paisesService.findByContinente(continente);
  }
  @Get('paisMasPoblado')
  paisMasPoblado(){
    return this.paisesService.findPoblacionMax();
  }
}
