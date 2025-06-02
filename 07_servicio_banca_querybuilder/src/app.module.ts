import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Movimiento } from './model/Movimiento';
import { Cuenta } from './model/Cuenta';
import { Cliente } from './model/Cliente';
import { MovimientosController } from './controller/movimientos.controller';
import { CuentasController } from './controller/cuentas.controller';
import { MovimientosService } from './service/movimientos.service';
import { CuentasService } from './service/cuentas.service';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'nestuser',
    password: 'nestpass',
    database: 'bancabd',
    entities: [Movimiento,Cuenta,Cliente],
    synchronize: false,
  }), TypeOrmModule.forFeature([Movimiento,Cuenta,Cliente])],
  controllers: [MovimientosController,CuentasController],
  providers: [MovimientosService,CuentasService],
})
export class AppModule {}
