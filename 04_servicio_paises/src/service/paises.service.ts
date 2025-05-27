


import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { Pais } from 'src/model/Pais';



@Injectable()
export class PaisesService {
  //urlGlobal:string="https://restcountries.com/v2/all"; 
  urlGlobal:string; 
  constructor(private configService: ConfigService){
    this.urlGlobal=this.configService.get<string>('URL_BASE');
    console.log(this.urlGlobal);
  }
  
  async findByContinente(continente:string):Promise<Pais[]>{
   const response=await axios.get(this.urlGlobal);
   const paises:Pais[]=response.data
   .filter(p=>p.region==continente)
   .map(p=>new Pais(p.name,p.region,p.population,p.capital,p.flag));
   return paises;
    
  }
  async findAllContinentes():Promise<string[]>{
    const response=await axios.get(this.urlGlobal);
    const regions:string[]=response.data   //el JSON de la respuesta
    .map(p=>p.region);//Array de string con los nombres de continentes, pero duplicados
    return [...new Set(regions)]; //sin diuplicados
  }
    
  
  
  async findPoblacionMax():Promise<Pais>{
    const response=await axios.get(this.urlGlobal);
    const paises:Pais[]=response.data
        .map(p=>new Pais(p.name,p.region,p.population,p.capital,p.flag));
    return paises.reduce((aux,actual)=>{
      if(actual.poblacion>aux.poblacion){
        return actual;
      }else{
        return aux;
      }   
    });
  }
}
