import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Cuenta } from 'src/model/Cuenta';
import { CuentasService } from 'src/service/cuentas.service';
import { Response } from 'express';

@Controller('cuentas')
export class CuentasController {
  constructor(private readonly cuentasService: CuentasService) {}
  @Post('alta')
  guardar(@Body() cuenta:Cuenta, @Res() response:Response):void{
    const resultado:boolean=this.cuentasService.save(cuenta);
    if(resultado){
      //devolvemos código 200
      response.status(200).send();
    }else{
      //devolvemos código 409
      response.status(409).send();
    }
  }
  @Get('buscarnum/:num')
  buscarPorNumero(@Param("num") numeroCuenta:string, @Res() response:Response):Response{
    const cuenta:Cuenta=this.cuentasService.findByNumeroCuenta(numeroCuenta);
    if(cuenta){
      return response.status(200).json(cuenta);
    }else{
      return response.status(419).json(new Cuenta());
    }
  }
  @Get('buscarsaldo/:saldo')
  buscarPorSaldo(@Param("saldo") saldoMin:number):Cuenta[]{
    return this.cuentasService.findBySaldoMin(saldoMin);
  }
  @Get('buscartipo/:tipo')
  buscarPorTipo(@Param("tipo") tipo:string):Cuenta[]{
    return this.cuentasService.findByTipo(tipo);
  }
  @Delete('eliminar/:num')
  eliminarPorNumero(@Param("num") numeroCuenta:string):void{
    this.cuentasService.deleteByNumeroCuenta(numeroCuenta);
  }
}
