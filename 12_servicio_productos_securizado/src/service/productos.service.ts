import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductoDto } from 'src/dtos/ProductoDto';
import { Producto } from 'src/model/Producto';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService {
  constructor(@InjectRepository(Producto) private productosRepository:Repository<Producto>){
    
  }

  async alta(producto:ProductoDto):Promise<boolean>{
    //buscamos un producto con ese código
    const prod:Producto=await this.productosRepository.createQueryBuilder("producto")
    .where("codigoProducto=:cod",{cod:producto.codigoProducto})
    .getOne();
    //si existe, no se puede dar de alta y devolvemos false
    //si no existe, se da de alta y devolvemos true
    if(prod){
      return false;
    }else{
      this.productosRepository.save(producto);
      return true;
    }
  }
  async catalogo():Promise<ProductoDto[]>{
    const resultado:Producto[]=await this.productosRepository.find();
    return resultado.map(p=>new ProductoDto(p.codigoProducto,p.producto,p.precioUnitario,p.stock));  
  }
}
