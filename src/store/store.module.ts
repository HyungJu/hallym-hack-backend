import { Module } from '@nestjs/common';
import { GetAllUseCase } from './usecase/get-all';
import { GetOneUseCase } from './usecase/get-one';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUseCase } from './usecase/create';
import { StoreController } from './store.controller';
import { StoreEntity } from './store.entity';
import { MarketEntity } from '../market/market.entity';
import { CouponEntity } from '../coupon/coupon.entity';
import { CouponModule } from '../coupon/coupon.module';

@Module({
  controllers: [StoreController],
  imports: [
    TypeOrmModule.forFeature([MarketEntity, StoreEntity, CouponEntity]),
    CouponModule,
  ],
  providers: [GetAllUseCase, GetOneUseCase, CreateUseCase],
})
export class StoreModule {}
