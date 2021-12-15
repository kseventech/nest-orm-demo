import { Injectable } from '@nestjs/common';
import { SequelizeOptionsFactory, SequelizeModuleOptions } from '@nestjs/sequelize';
import { Cat } from 'src/entities/cat/models/cat';
import { User } from 'src/entities/user/models/user';

@Injectable()
export class SequelizeConfig implements SequelizeOptionsFactory {
  createSequelizeOptions(): SequelizeModuleOptions {
    return {
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user_1',
      password: 'test1',
      database: 'sequelize-demo-db',
      autoLoadModels: false,
      models: [User, Cat],
      synchronize: false,
    };
  }
}
