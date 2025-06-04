import { Module } from '@nestjs/common';
import { MatriculacionController } from './controller/matriculacion.controller';
import { MatriculacionService } from './service/matriculacion.service';
import { Curso } from './model/Curso';
import { Alumno } from './model/Alumno';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Matricula } from './model/Matricula';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'nestuser',
    password: 'nestpass',
    database: 'formacion',
    entities: [Curso,Alumno,Matricula],
    synchronize: false,
  }), TypeOrmModule.forFeature([Curso,Alumno,Matricula])],
  controllers: [MatriculacionController],
  providers: [MatriculacionService],
})
export class AppModule {}
