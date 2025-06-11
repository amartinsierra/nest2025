import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { AutenticacionService } from 'src/service/autenticacion.service';


@Controller('auth')
export class AutenticacionController {
  constructor(private readonly autenticacionService: AutenticacionService) {}
  //este es el controlador que autentica al usuario y genera un token con los 
  //datos del mismo
  @Post('login')
  async login(@Body()data){
    const user:any=await this.autenticacionService.validateUser(data.username,data.password);
    console.log("User: "+user);
    if(!user){
      throw new UnauthorizedException();
    }
    return this.autenticacionService.login(user);
  }
}
