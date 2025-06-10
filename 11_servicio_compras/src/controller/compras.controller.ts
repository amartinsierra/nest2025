import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { ComprasService } from 'src/service/compras.service';
import {Response} from 'express';
import { PedidoDto } from 'src/dtos/PedidoDto';

@Controller('compras')
export class ComprasController {
  constructor(private readonly comprasService: ComprasService) {}
  @Get('catalogo')
  buscarProductos(@Query("min") min:number,@Query("max") max:number){
    return this.comprasService.buscarProductos(min,max);
  }
  @Post("altaPedido")
  async nuevoPedido(@Body() pedido:PedidoDto,@Res() response:Response){
    const resp:boolean=await this.comprasService.altaPedido(pedido);
    if(resp){
      response.status(200).send();
    }else{
      response.status(409).send();
    }
  }
}
