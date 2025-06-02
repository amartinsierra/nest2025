import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/model/Cliente';
import { Cuenta } from 'src/model/Cuenta';
import { Repository } from 'typeorm';

@Injectable()
export class ClientesService {
  constructor(@InjectRepository(Cliente) private readonly clientesRepository:Repository<Cliente>){
    
  }

  async findByNumeroCuenta(numeroCuenta:number):Promise<Cliente[]>{
    return this.clientesRepository.createQueryBuilder("cliente")
      .innerJoin("cliente.cuentas","c")
      .where("c.numeroCuenta=:numCuenta",{numCuenta:numeroCuenta})
      .getMany();
  }
  

}
