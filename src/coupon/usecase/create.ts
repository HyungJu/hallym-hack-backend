import { UseCase } from './usecase';
import { CouponInputDto, CouponOutputDto } from '../dto/coupon';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CouponEntity } from '../coupon.entity';

export class CreateCoupon implements UseCase<CouponInputDto, CouponOutputDto> {
  constructor(
    @InjectRepository(CouponEntity)
    private readonly couponRepository: Repository<CouponEntity>,
  ) {}

  async execute(
    input: CouponInputDto & { storeId: number },
  ): Promise<CouponOutputDto> {
    const coupon = await this.couponRepository.save(input);

    return {
      id: coupon.id,
      name: coupon.name,
      image: coupon.image,
      expireAt: coupon.expireAt,
      storeId: coupon.storeId,
    };
  }
}
