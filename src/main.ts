import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import {AppModule} from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Global Pipes
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  
  // CORS
  app.enableCors({
    origin: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:8080'],
    credentials: true,
  });
  
  // API Prefix
  // app.setGlobalPrefix('api/v1');
  
  await app.listen(process.env.PORT || 8080);
}

bootstrap();