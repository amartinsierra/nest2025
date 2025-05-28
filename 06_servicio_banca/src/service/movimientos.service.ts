import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movimiento } from 'src/model/Movimiento';
import { Between, CustomRepositoryCannotInheritRepositoryError, Repository } from 'typeorm';


@Injectable()
export class MovimientosService {
 constructor(@InjectRepository(Movimiento) private repository:Repository<Movimiento>){
  
 }

 save(movimiento:Movimiento):void{
  this.repository.save(movimiento);
 }

 findByIdCuenta(idCuenta:number):Promise<Movimiento[]>{
  return this.repository.findBy({idCuenta:idCuenta});
 }
 findByFechas(fecha1:Date,fecha2:Date):Promise<Movimiento[]>{
  return this.repository.findBy({fecha:Between(fecha1,fecha2)});
 }
}
