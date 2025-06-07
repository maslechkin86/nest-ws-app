// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
    credentials: true,
  });
  
  try {
    await app.listen(4000, '0.0.0.0');
    console.log('Server is running on http://localhost:4000');
  } catch (error) {
    console.error('Failed to start server:', error);
    throw error;
  }
}
bootstrap();