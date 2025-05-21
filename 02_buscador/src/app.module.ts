import { Module } from '@nestjs/common';
import { BuscadorController } from './controller/buscador.controller';
import { BuscadorService } from './service/buscador.service';


@Module({
  imports: [],
  controllers: [BuscadorController],
  providers: [BuscadorService],
})
export class AppModule {}
