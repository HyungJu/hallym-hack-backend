import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StoreEntity } from '../store/store.entity';

@Entity()
export class CouponEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  image!: string;

  @Column()
  name!: string;

  @Column()
  expireAt!: Date;

  @ManyToOne((type) => StoreEntity, (store) => store.coupons)
  @JoinColumn({ name: 'storeId' })
  store!: StoreEntity;

  @Column()
  storeId!: number;
}
