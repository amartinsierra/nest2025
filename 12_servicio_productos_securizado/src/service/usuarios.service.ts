import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuariosService {
  private readonly users = [
     { id: 1, username: 'admin', password: 'admin', role: 'admin' },
     { id: 2, username: 'usuario1', password: 'usuario1', role: 'user' },
     { id: 3, username: 'usuario2', password: 'usuario2', role: 'user' }
  ];
  async findByUserName(username:string):Promise<any>{
    return this.users.find(u=>u.username==username);
  }

}
