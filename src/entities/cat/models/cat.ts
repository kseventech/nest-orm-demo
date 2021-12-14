import { Table, Column, Model, BelongsTo, DataType, ForeignKey } from 'sequelize-typescript';
import { User } from 'src/entities/user/models/user';

@Table({
  tableName: 'cats',
  timestamps: true,
})
export class Cat extends Model<Cat> {

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  age: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  breed: string;

  @ForeignKey(() => User)
  @Column({
      type: DataType.INTEGER,
      allowNull: false,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
