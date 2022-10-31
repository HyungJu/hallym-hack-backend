import { UseCase } from './usecase';
import { CouponOutputDto } from '../dto/coupon';
import { InjectRepository } from '@nestjs/typeorm';
import { CouponEntity } from '../coupon.entity';
import { Repository } from 'typeorm';

export class GetOneUseCase implements UseCase<number, CouponOutputDto> {
  constructor(
    @InjectRepository(CouponEntity)
    private readonly couponRepository: Repository<CouponEntity>,
  ) {}

  async execute(id: number): Promise<CouponOutputDto> {
    const coupon = await this.couponRepository.findOne({ where: { id } });

    if (!coupon) throw new Error('Coupon not found');

    return {
      id: coupon.id,
      name: coupon.name,
      image: coupon.image,
      expireAt: coupon.expireAt,
      storeId: coupon.storeId,
    };
  }
}
