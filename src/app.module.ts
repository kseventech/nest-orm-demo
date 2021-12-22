import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatModule } from './entities/cat/cat.module';
import { UserModule } from './entities/user/user.module';

@Module({
  imports: [
    UserModule,
    CatModule
  ],
  controllers: [AppController],
})
export class AppModule {}
