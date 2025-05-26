import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { PaisesService } from 'src/service/paises.service';


@Controller('paises')
export class PaisesController {
  constructor(private readonly paisesService: PaisesService) {}
  @Get('continentes')
  continentes(){
    return this.paisesService.findAllContinentes();
  }
  @ApiOperation({summary:"lista de continentes",description:"a partir del nombre del continente, devuelve la lista de paises"})
  @Get('paisesContinente/:continente')
  paisesContinente(@Param("continente") continente:string){
    return this.paisesService.findByContinente(continente);
  }
  @Get('paisMasPoblado')
  paisMasPoblado(){
    return this.paisesService.findPoblacionMax();
  }
}
