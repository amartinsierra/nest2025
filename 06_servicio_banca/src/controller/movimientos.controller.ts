import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movimiento } from 'src/model/Movimiento';
import { MovimientosService } from 'src/service/movimientos.service';

@Controller('movimientos')
export class MovimientosController {
  constructor(private readonly movimientosService: MovimientosService) {}
  @Get('fechas')
  buscarPorFechas(@Query("fecha1") fecha1:Date,@Query("fecha2") fecha2:Date){
    console.log("fecha1: "+fecha1);
    console.log("fecha2: "+fecha2);
    return this.movimientosService.findByFechas(fecha1,fecha2);
  }
  @Get("movscuenta/:idCuenta")
  buscarPorCuenta(@Param("idCuenta") idCuenta:number){
    return this.movimientosService.findByIdCuenta(idCuenta);
  }
  @Post('alta')
  alta(@Body() movimiento:Movimiento){
    this.movimientosService.save(movimiento);
  }
  @Get("porSaldoMin/:saldoMin")
  buscarPorSaldoSuperior(@Param("saldoMin") saldoMin:number){
    return this.movimientosService.findByCuentasSaldoMin(saldoMin);
  }
}
