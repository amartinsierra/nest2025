import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cuenta } from 'src/model/Cuenta';
import { Movimiento } from 'src/model/Movimiento';
import { MoreThan, Repository } from 'typeorm';


@Injectable()
export class CuentasService {
  constructor(@InjectRepository(Movimiento) private movimientosRepository:Repository<Movimiento>){
    
  }
  async findByMovimientosFecha(fecha:Date):Promise<Cuenta[]>{
    const movimientos:Movimiento[]=await this.movimientosRepository.find({
      where:{
        fecha:fecha
      },
      relations:["cuenta"]
    });//Movimiento[]
    return [...new Set(movimientos.map(m=>m.cuenta))];
  }
  async findByExtraccionMin(cantidad:number):Promise<Cuenta[]>{
    const movimientos:Movimiento[]=await this.movimientosRepository.find({
      where:{
        cantidad:MoreThan(cantidad),
        operacion:"extracción"
      },
      relations:["cuenta"]
    });//Movimiento[]
    return movimientos.map(m=>m.cuenta);
  }
}
