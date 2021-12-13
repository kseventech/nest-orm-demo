import { Injectable } from '@nestjs/common';
import { getMetadataArgsStorage } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

@Injectable()
export class TypeormConfig {
  async createTypeOrmOptions() {
    const options: PostgresConnectionOptions = {
      type: 'postgres',
      username: 'user_1',
      password: 'test1',
      database: 'orm-demo-db',
      entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
      synchronize: false,
      migrations: ['dist/src/db/migrations/*.js'],
      cli: {
        migrationsDir: 'src/db/migrations',
      },
    };
    return options;
  }
}
