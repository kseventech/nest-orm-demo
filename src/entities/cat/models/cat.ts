import { Table, Column, Model, BelongsTo, DataType, ForeignKey } from 'sequelize-typescript';
import { User } from 'src/entities/user/models/user';

@Table({
  tableName: 'Cats',
  timestamps: true,
  modelName: 'Cats',
})
export class Cat extends Model<Cat> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  age: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
