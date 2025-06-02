import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/model/Cliente';
import { Cuenta } from 'src/model/Cuenta';
import { Movimiento } from 'src/model/Movimiento';
import { DataSource, In, MoreThan, Repository } from 'typeorm';


@Injectable()
export class CuentasService {
  constructor( @InjectRepository(Cuenta) private cuentasRepository:Repository<Cuenta>,
   @InjectRepository(Cliente) private clientesRepository:Repository<Cliente>,
   private dataSource:DataSource
){
    
  }
  async findByMovimientosFecha(fecha:Date):Promise<Cuenta[]>{
    return this.cuentasRepository.createQueryBuilder("cuenta")
      .innerJoin("cuenta.movimientos","m")
      .where("m.fecha>=:f",{f:fecha})
      .distinct(true)
      .getMany();
    
  }
  async findByExtraccionMin(cantidad:number):Promise<Cuenta[]>{
    return this.cuentasRepository.createQueryBuilder("cuenta")
      .innerJoin("cuenta.movimientos","m")
      .where("m.cantidad>=:cant",{cant:cantidad})
      .andWhere("m.operacion='extracción'")
      .distinct(true)
      .getMany();
    
  }

  //cuentas asociada al titular cuyo dni se proporciona como parámetro

  async findByDni(dni:number):Promise<Cuenta[]>{
    return this.cuentasRepository.createQueryBuilder("cuenta")
    .innerJoin("cuenta.clientes","c")
    .where("c.dni=:dni",{dni:dni})
    .getMany();
    
  }

  //recibe un objeto cuenta y una array con los dni´s de los titulares
  //que debe tener esa cuenta. El método dará de alta dicha cuenta
  //y le asignará esos titulares
  async altaCuenta(cuenta:Cuenta,titulares:number[]):Promise<Cuenta>{
    const clientes:Cliente[]=await this.clientesRepository.findBy({dni:In(titulares)});
    cuenta.clientes=clientes;
    return this.cuentasRepository.save(cuenta);
  }


  //saldo medio cuentas
  saldoMedio():Promise<any>{
    return this.dataSource.query("select avg(saldo) as saldo from cuentas");
  }
  //lo dejo, pero no se debe hacer así!!!
  altaNuevaCuenta(cuenta:Cuenta):void{
    this.dataSource.query("insert into cuentas values(?,?,?)",[cuenta.numeroCuenta,cuenta.saldo,cuenta.tipoCuenta]);
  }
}
