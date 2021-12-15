import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true,
  modelName: 'users',
})
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  name: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  test: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  age: number;
}
