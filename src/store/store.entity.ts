import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MarketEntity } from '../market/market.entity';
import { CouponEntity } from '../coupon/coupon.entity';

@Entity()
export class StoreEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  image!: string;

  @Column()
  operationHour!: string;

  @ManyToOne((type) => MarketEntity, (market) => market.stores)
  @JoinColumn({ name: 'marketId' })
  market!: MarketEntity;

  @Column()
  marketId!: number;

  @OneToMany((type) => CouponEntity, (coupon) => coupon.store)
  coupons!: CouponEntity[];

  @Column({ default: false })
  isFeatured!: boolean;
}
