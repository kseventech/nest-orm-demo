import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatModule } from './entities/cat/cat.module';
import { UserModule } from './entities/user/user.module';
import { PrismaModule } from 'nestjs-prisma'

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    CatModule
  ],
  controllers: [AppController],
})
export class AppModule {}
