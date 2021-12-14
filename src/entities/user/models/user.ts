
import { Table, Column, Model, HasMany, PrimaryKey } from 'sequelize-typescript';
import { Cat } from 'src/entities/cat/models/cat';

@Table({
    tableName: 'users',
    timestamps: true
})
export class User extends Model<User> {
  
  @Column({primaryKey: true})
  override id: number;

  @Column
  name: string;

  @Column
  age: number;

  // @HasMany(() => Cat)
  // cats: Cat[];
}
