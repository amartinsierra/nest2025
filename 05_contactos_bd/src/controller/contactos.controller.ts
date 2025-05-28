import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { Contacto } from 'src/model/Contacto';
import { ContactosService } from 'src/service/contactos.service';
import {Response } from 'express'; 

@Controller('contactos')
export class ContactosController {
  constructor(private readonly contactosService: ContactosService) {}

  @Post("alta")
  async create(@Body() contacto: Contacto,@Res() response:Response) {
    const resultado:boolean=await this.contactosService.save(contacto);
    if(resultado){
      response.status(200).send();
    }else{
      response.status(409).send();
    }
  }

  @Get("todos")
  findAll() {
    console.log("todosssssssssssssssssssssssss");
    return this.contactosService.findAll();
  }

  @Get('buscar/:name')
  findOne(@Param('name') name: string) {
    return this.contactosService.findByNombre(name);
  }

  @Delete('eliminar/:email')
  remove(@Param('email') email: string) {
    return this.contactosService.deleteByEmail(email);
  }
}
