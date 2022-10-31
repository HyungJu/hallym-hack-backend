import { UseCase } from './usecase';
import { CouponOutputDto } from '../dto/coupon';
import { InjectRepository } from '@nestjs/typeorm';
import { CouponEntity } from '../coupon.entity';
import { Repository } from 'typeorm';

export class GetAllUseCase implements UseCase<void, CouponOutputDto[]> {
  constructor(
    @InjectRepository(CouponEntity)
    private readonly couponRepository: Repository<CouponEntity>,
  ) {}

  async execute(input: void): Promise<CouponOutputDto[]> {
    const coupon = await this.couponRepository.find();

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
