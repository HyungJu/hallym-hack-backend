import { Controller, Get, Param } from '@nestjs/common';
import { GetAllUseCase } from './usecase/get-all';
import { GetOneUseCase } from './usecase/get-one';
import { CreateCoupon } from './usecase/create';

@Controller('coupon')
export class CouponController {
  constructor(
    private readonly getAllUseCase: GetAllUseCase,
    private readonly getOneUseCase: GetOneUseCase,
    private readonly createUseCase: CreateCoupon,
  ) {}

  @Get('/')
  async getAll() {
    return this.getAllUseCase.execute();
  }

  @Get('/:id')
  async getOne(@Param('id') id: number) {
    return this.getOneUseCase.execute(id);
  }
}
