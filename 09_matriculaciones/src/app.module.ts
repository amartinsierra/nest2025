import { Module } from '@nestjs/common';
import { MatriculacionController } from './controller/matriculacion.controller';
import { MatriculacionService } from './service/matriculacion.service';
import { Curso } from './model/Curso';
import { Alumno } from './model/Alumno';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Matricula } from './model/Matricula';
import { ConfigModule, ConfigService } from '@nestjs/config';

//module
@Module({
  imports: [ConfigModule.forRoot({
         isGlobal: true, // hace que esté disponible en toda la app
        }),
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (config: ConfigService) => ({
          
          type: 'mysql',
          host: config.get('URL_BD'),
          port: parseInt(config.get('PORT_BD')),
          username: config.get('USER_BD'),
          password: config.get('PASSWORD'),
          database: 'formacion',
          entities: [Curso,Alumno,Matricula],
          synchronize: false, 
        })
        
        ,
      })
  
        , TypeOrmModule.forFeature([Curso,Alumno,Matricula])],
  controllers: [MatriculacionController],
  providers: [MatriculacionService],
})
export class AppModule {}
