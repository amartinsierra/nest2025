import { Injectable, OnModuleInit } from '@nestjs/common';
import axios from 'axios';
import { PedidoDto } from 'src/dtos/PedidoDto';
import { ProductoDto } from 'src/dtos/ProductoDto';


@Injectable()
export class ComprasService implements OnModuleInit{
  urlBase="http://localhost:3000/tienda";
  urlLogin="http://localhost:3000/auth/login";
  token:string;
  async onModuleInit(){
    //obtenemos el token al principio
    this.token=(await axios.post(this.urlLogin,{username:"usuario1",password:"usuario1"})).data.valorToken;
  }


  async buscarProductos(min:number,max:number):Promise<ProductoDto[]>{
    const response:any=await axios.get(`${this.urlBase}/productos`,{
      headers:{
        Authorization: `Bearer ${this.token}`
      }
    });
    const jsonFiltrado:any=response.data.filter(p=>p.precioUnitario>=min&&p.precioUnitario<=max);
    
    const productos:ProductoDto[]=jsonFiltrado.map(
      p=>{
        let disponibilidad:string="";
        if(p.stock>=0&&p.stock<=3){
          disponibilidad="baja"
        }
        if(p.stock>3&&p.stock<=10){
          disponibilidad="media"
        }
        if(p.stock>10){
          disponibilidad="alta";
        }
        return new ProductoDto(p.producto,p.precioUnitario,disponibilidad);
      }
    );
    return productos;

  }

  async altaPedido(pedido:PedidoDto):Promise<boolean>{
    try{
      await axios.post(`${this.urlBase}/altaPedido`,pedido);
      return true;
    }catch(err){
      return false;
    }
  }
}
