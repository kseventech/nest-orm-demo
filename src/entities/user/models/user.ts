
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'users',
    timestamps: true
})
export class User extends Model<User> {

  @Column
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  age: number;
}
