import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidoAltaDto } from 'src/dtos/PedidoAltaDto';
import { PedidoDatosDto } from 'src/dtos/PedidoDatosDto';
import { Pedido } from 'src/model/Pedido';
import { Producto } from 'src/model/Producto';
import { Repository } from 'typeorm';


@Injectable()
export class PedidosService {
  constructor(@InjectRepository(Pedido) private pedidosRepository:Repository<Pedido>,
              @InjectRepository(Producto) private productosRepository:Repository<Producto>){
      
  }
  
  async catalogoPedidos():Promise<PedidoDatosDto[]>{
    const resultados:Pedido[]=await this.pedidosRepository.createQueryBuilder("pedido")
                      .innerJoinAndSelect("pedido.producto","p")
                      .getMany();
    return resultados.map(m=>new PedidoDatosDto(m.producto.producto,m.unidades,m.total,m.fechaPedido));
  }

  async altaPedido(pedido:PedidoAltaDto):Promise<boolean>{
    //buscamos el producto que tenga ese nombre y si no existe o no hay stock suficiente
    //no podemos dar de alta y devolvemos false
    const prod:Producto=await this.productosRepository.findOneBy({producto:pedido.producto});
    if(!prod || prod.stock<pedido.unidades){
      return false;
    }
    
    if(prod){
      //si llega aquí, hay stock suficiente y actualizamos el stock del producto
      prod.stock=prod.stock-pedido.unidades;
      this.productosRepository.save(prod);
      //por último, guardamos el pedido
      const pedidoNuevo:Pedido=new Pedido(0,pedido.unidades,pedido.unidades*prod.precioUnitario,new Date(),prod);
      this.pedidosRepository.save(pedidoNuevo);
      return true;
    }

  }
}
