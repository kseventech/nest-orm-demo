import { Table, Column, Model, BelongsTo } from 'sequelize-typescript';
import { User } from 'src/entities/user/models/user';

@Table({
  tableName: 'cats',
  timestamps: true,
})
export class Cat extends Model<Cat> {
  @Column
  name: string;

  @Column
  age: number;

  @Column
  breed: string;

  @BelongsTo(() => User)
  user: User;
}
