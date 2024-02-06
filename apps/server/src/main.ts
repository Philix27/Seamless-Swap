import { NestFactory } from '@nestjs/core';
import { TrpcRouter } from './trpc';
import { AppModule } from './app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const trpc = app.get(TrpcRouter);
  trpc.applyMiddleware(app);
  await app.listen(process.env.PORT || 4400);
}
bootstrap();
