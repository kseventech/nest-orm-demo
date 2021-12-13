import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormConfig } from './config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRootAsync({ useClass: TypeormConfig })],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
