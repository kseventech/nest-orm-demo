import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatModule } from './entities/cat/cat.module';
import { UserModule } from './entities/user/user.module';
import typeormConfig from '../ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), CatModule, UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
