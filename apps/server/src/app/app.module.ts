import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppModuleRegistry } from './app.registry';

@Module({
  imports: AppModuleRegistry,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
