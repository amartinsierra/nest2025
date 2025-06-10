import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './model/Producto';
import { Pedido } from './model/Pedido';
import { PedidosProductosController } from './controller/pedidos-productos.controller';
import { ProductosService } from './service/productos.service';
import { PedidosService } from './service/pedidos.service';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'nestuser',
    password: 'nestpass',
    database: 'tiendavirtual',
    entities: [Pedido,Producto],
    synchronize: false,
  }), TypeOrmModule.forFeature([Pedido,Producto])],
  controllers: [PedidosProductosController],
  providers: [PedidosService,ProductosService],
})
export class AppModule {}
