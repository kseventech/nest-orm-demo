import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { SequelizeConfig } from './config/sequelize.config';
import { UserModule } from './entities/user/user.module';
import { CatModule } from './entities/cat/cat.module';

@Module({
  imports: [
    SequelizeModule.forRootAsync({ useClass: SequelizeConfig }),
    UserModule,
    CatModule
  ],
  controllers: [AppController],
})
export class AppModule {}
