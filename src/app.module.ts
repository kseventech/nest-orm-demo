import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { SequelizeConfig } from './config/sequelize.config';

@Module({
  imports: [SequelizeModule.forRootAsync({ useClass: SequelizeConfig })],
  controllers: [AppController],
})
export class AppModule {}
