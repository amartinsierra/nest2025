import { Injectable } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AutenticacionService {
   constructor(private usersService: UsuariosService, private jwtService: JwtService ) {}
   //autentica al usuario. Es decir, comprueba que es un usuario válido
   async validateUser(username: string, password: string) {
    const user = await this.usersService.findByUserName(username);
    if(user){
      const valid:boolean=password.trim()==user.password;
      console.log(valid);
      //si el usuario es correcto, devolvemos un JSON
      //con sus propiedades, menos la contraseña
      
      if (valid) {
        /*const { password, ...result } = user;
        return result;*/
        const result={id:0,username:"",role:""};
        result.id=user.id;
        result.username=user.username;
        result.role=user.role;
        return result;
      }
    }
    
    return null;
  } 
  //genera el token a partir de los datos del usuario
  async login(user: any) {
    const payload = { username: user.username, sub: user.id, role: user.role };
    //const payload = {  sub: user.username, role: user.role };
    return {
    valorToken: this.jwtService.sign(payload),
    };
  }
}
