import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Cat {
  @PrimaryColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  age: number;

  @Column()
  breed: string;

  @Column()
  test: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt: Date;
}
