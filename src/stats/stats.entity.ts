import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StatsEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  storeId: number;

  @Column()
  couponId: number;

  @Column()
  createdAt: Date;
}
