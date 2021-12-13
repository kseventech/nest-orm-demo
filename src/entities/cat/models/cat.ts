
import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  tableName: 'cats',
  timestamps: true
})
export class Cat extends Model<Cat> {
  @Column
  name: string;

  @Column
  age: number;

  @Column
  breed: string;
}
