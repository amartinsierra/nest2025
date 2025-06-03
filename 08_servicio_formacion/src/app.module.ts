import { Module } from '@nestjs/common';

import { CursosService } from './service/cursos.service';
import { FormacionController } from './controller/formacion.controller';
import { AlumnosService } from './service/alumnos.service';
import { MatriculasService } from './service/matriculas.service';
import { Alumno } from './model/Alumno';
import { Curso } from './model/Curso';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'nestuser',
    password: 'nestpass',
    database: 'formacion',
    entities: [Curso,Alumno],
    synchronize: false,
  }), TypeOrmModule.forFeature([Curso,Alumno])],
  controllers: [FormacionController],
  providers: [CursosService,AlumnosService,MatriculasService],
})
export class AppModule {}
