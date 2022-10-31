import { UseCase } from './usecase';
import { CouponOutputDto } from '../dto/coupon';
import { InjectRepository } from '@nestjs/typeorm';
import { CouponEntity } from '../coupon.entity';
import { Repository } from 'typeorm';

export class GetAllByStoreId implements UseCase<number, CouponOutputDto[]> {
  constructor(
    @InjectRepository(CouponEntity)
    private readonly couponRepository: Repository<CouponEntity>,
  ) {}

  async execute(storeId: number): Promise<CouponOutputDto[]> {
    const coupon = await this.couponRepository.find({
      where: {
        storeId,
      },
    });

    if (!coupon) throw new Error('Coupon not found');

    return coupon.map((coupon) => {
      return {
        id: coupon.id,
        name: coupon.name,
        image: coupon.image,
        expireAt: coupon.expireAt,
        storeId: coupon.storeId,
      };
    });
  }
}
