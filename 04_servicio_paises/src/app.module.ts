import { Module } from '@nestjs/common';
import { PaisesController } from './controller/paises.controller';
import { PaisesService } from './service/paises.service';


@Module({
  imports: [],
  controllers: [PaisesController],
  providers: [PaisesService],
})
export class AppModule {}
