import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormConfig } from './config/typeorm.config';
import { CatModule } from './entities/cat/cat.module';
import { UserModule } from './entities/user/user.module';

@Module({
  imports: [TypeOrmModule.forRootAsync({ useClass: TypeormConfig }), CatModule, UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
