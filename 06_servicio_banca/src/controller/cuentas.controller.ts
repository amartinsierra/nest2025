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
import { CuentasService } from 'src/service/cuentas.service';
import {Response} from 'express';
import { Cliente } from 'src/model/Cliente';
import { Cuenta } from 'src/model/Cuenta';

@Controller('cuentas')
export class CuentasController {
  constructor(private readonly cuentasService: CuentasService) {}
  @Get("buscarPorFecha/:fecha")
  buscarPorFecha(@Param("fecha") fecha:Date){
    return this.cuentasService.findByMovimientosFecha(fecha);
  }
  @Get("buscarPorCantidad/:cantidad")
  buscarPorCantidad(@Param("cantidad") cantidad:number){
    return this.cuentasService.findByExtraccionMin(cantidad);
  }

  //endpoint que a partir del dni del cliente devuelva sus cuentas. 
  //si ese cliente no existe o no tiene cuentas, se devuelve un 409
  @Get("buscarPorDni/:dni")
  async buscarPorDni(@Param("dni") dni:number, @Res() response:Response){
    const cuentas:Cuenta[]=await this.cuentasService.findByDni(dni);
    if(cuentas.length>0){
      response.status(200).json(cuentas);
    }else{
      response.status(409).json([]);
    }
  }
  @Post('alta')
  altaCuenta(@Body() datos:any){
    const cuenta:Cuenta=datos.cuenta;
    const dnis:number[]=datos.dnis;
    this.cuentasService.altaCuenta(cuenta,dnis);
  }
}
