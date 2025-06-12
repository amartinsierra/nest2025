import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/model/Usuario';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  constructor(@InjectRepository(Usuario) private usuariosRepository:Repository<Usuario>){}
 
  async findByUserName(username:string):Promise<any>{
    return this.usuariosRepository.findOneBy({username:username});
  }

}
