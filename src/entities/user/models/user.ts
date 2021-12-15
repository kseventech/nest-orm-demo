import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'Users',
  timestamps: true,
  modelName: 'Users',
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
  age: number;
}
