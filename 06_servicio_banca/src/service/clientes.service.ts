import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/model/Cliente';
import { Cuenta } from 'src/model/Cuenta';
import { Repository } from 'typeorm';

@Injectable()
export class ClientesService {
  constructor(@InjectRepository(Cuenta) private readonly cuentasRepository:Repository<Cuenta>){
    
  }

  async findByNumeroCuenta(numeroCuenta:number):Promise<Cliente[]>{
    const cuenta:Cuenta=await this.cuentasRepository.findOne({
      where:{
        numeroCuenta:numeroCuenta
      },
      relations:["clientes"],
    });
    return cuenta.clientes;
  }
  

}
