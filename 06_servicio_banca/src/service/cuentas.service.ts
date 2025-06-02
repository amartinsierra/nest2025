import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/model/Cliente';
import { Cuenta } from 'src/model/Cuenta';
import { Movimiento } from 'src/model/Movimiento';
import { In, MoreThan, Repository } from 'typeorm';


@Injectable()
export class CuentasService {
  constructor(@InjectRepository(Movimiento) private movimientosRepository:Repository<Movimiento>,
              @InjectRepository(Cuenta) private cuentasRepository:Repository<Cuenta>,
              @InjectRepository(Cliente) private clientesRepository:Repository<Cliente>){
    
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

  //cuentas asociada al titular cuyo dni se proporciona como parámetro

  async findByDni(dni:number):Promise<Cuenta[]>{
    const cliente:Cliente=await this.clientesRepository.findOne({
      where:{
        dni:dni
      },
      relations:["cuentas"]
    });

    if(cliente){
      return cliente.cuentas;
    }else{
      return [];
    }
    
  }

  //recibe un objeto cuenta y una array con los dni´s de los titulares
  //que debe tener esa cuenta. El método dará de alta dicha cuenta
  //y le asignará esos titulares
  async altaCuenta(cuenta:Cuenta,titulares:number[]):Promise<Cuenta>{
    const clientes:Cliente[]=await this.clientesRepository.findBy({dni:In(titulares)});
    cuenta.clientes=clientes;
    return this.cuentasRepository.save(cuenta);
  }
}
