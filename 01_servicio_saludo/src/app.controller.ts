import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Ficha } from './model/Ficha';

@Controller("saludos")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("general")
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("personal/:name")
  getHelloPersonal(@Param("name") nombre:string):string{
    return this.appService.getHello()+": "+nombre;
  }
  @Get("completo")
  getHelloCompleto(@Query("name") nombre:string,@Query("age") edad:number):string{
    return this.appService.getHello()+" te llamas: "+nombre+" y tienes "+edad+" años";
  }
  @Get("ficha/:name/:age")
  getFicha(@Param("name") nombre:string,@Param("age") edad:number):Ficha{
    return new Ficha(nombre,edad,"profe@gmail.com");
  }
  @Post("alta")
  altaFicha(@Body() ficha:Ficha):void{
    console.log(ficha.nombre+"-"+ficha.edad+"-"+ficha.email);
  }
}
