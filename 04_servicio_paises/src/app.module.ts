import { Module } from '@nestjs/common';
import { PaisesController } from './controller/paises.controller';
import { PaisesService } from './service/paises.service';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // hace que esté disponible en toda la app
    })],
  controllers: [PaisesController],
  providers: [PaisesService],
})
export class AppModule {}
