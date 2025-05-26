import { Module } from '@nestjs/common';

import { ContactosController } from './controller/contactos.controller';
import { ContactosService } from './service/contactos.service';
import { Contacto } from './model/Contacto';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  username: 'nestuser',
  password: 'nestpass',
  database: 'agenda',
  entities: [Contacto],
  synchronize: false,
  }),TypeOrmModule.forFeature([Contacto])],
  controllers: [ContactosController],
  providers: [ContactosService],
})
export class AppModule {}
