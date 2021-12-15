import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cat } from './models/cat';

@Module({
  imports: [SequelizeModule.forFeature([Cat])],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
