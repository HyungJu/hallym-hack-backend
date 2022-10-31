import { Module } from '@nestjs/common';
import { GetAllUseCase } from './usecase/get-all';
import { GetOneUseCase } from './usecase/get-one';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateCoupon } from './usecase/create';
import { CouponController } from './coupon.controller';
import { CouponEntity } from './coupon.entity';
import { GetAllByStoreId } from './usecase/get-all-by-store-id';

@Module({
  controllers: [CouponController],
  imports: [TypeOrmModule.forFeature([CouponEntity])],
  providers: [GetAllUseCase, GetOneUseCase, CreateCoupon, GetAllByStoreId],
  exports: [GetAllByStoreId, CreateCoupon],
})
export class CouponModule {}
