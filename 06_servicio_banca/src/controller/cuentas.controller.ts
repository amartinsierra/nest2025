import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CuentasService } from 'src/service/cuentas.service';


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
}
