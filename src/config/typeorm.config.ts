import { Injectable } from '@nestjs/common';
import { Cat } from 'src/entities/cat/models/cat.entity';
import { User } from 'src/entities/user/models/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

@Injectable()
export class TypeormConfig {
  async createTypeOrmOptions() {
    const options: PostgresConnectionOptions = {
      type: 'postgres',
      username: 'user_1',
      password: 'test1',
      database: 'typeorm-demo-db',
      entities: [User, Cat],
      synchronize: false,
      migrations: ['dist/src/db/migrations/*.js'],
      cli: {
        migrationsDir: 'src/db/migrations',
      },
    };
    return options;
  }
}
