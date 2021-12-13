
import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Cat } from 'src/entities/cat/models/cat';

@Table({
    tableName: 'users',
    timestamps: true
})
export class User extends Model<User> {
  @Column
  name: string;

  @Column
  age: number;

  @HasMany(() => Cat)
  cats: Cat[];
}
