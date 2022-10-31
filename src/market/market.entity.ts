import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StoreEntity } from '../store/store.entity';

@Entity()
export class MarketEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  lat!: number;

  @Column()
  lng!: number;

  @Column()
  address!: string;

  @OneToMany((type) => StoreEntity, (store) => store.market)
  stores!: StoreEntity[];
}
