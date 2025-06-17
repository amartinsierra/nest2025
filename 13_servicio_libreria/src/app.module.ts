import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibreriaController } from './controller/libreria.controller';
import { Cliente } from './model/Cliente';
import { Libro } from './model/Libro';
import { Venta } from './model/Venta';
import { ClientesService } from './service/clientes.service';
import { ComprasService } from './service/compras.service';
import { LibrosService } from './service/libros.service';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'nestuser',
    password: 'nestpass',
    database:'libros',
    entities: [Cliente, Libro, Venta], // Tablas de la base de datos 
    synchronize: false,
  }),
    
  TypeOrmModule.forFeature([Cliente, Libro, Venta])],
  controllers: [ LibreriaController],
  providers: [ClientesService, LibrosService,ComprasService ],
})
export class AppModule {}
