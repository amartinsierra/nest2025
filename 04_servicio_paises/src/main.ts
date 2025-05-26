import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //permite llamadas desde orígenes desconocidos (el front)
  app.enableCors();
  //configuración swagger
  const config = new DocumentBuilder()
    .setTitle('API de  paises')
    .setDescription('Documentación del API de paises')
    .setVersion('1.0')
    .addTag('paises')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('ayuda/api', app, document);


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
