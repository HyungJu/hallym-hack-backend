import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GetAllUseCase } from './usecase/get-all';
import { GetOneUseCase } from './usecase/get-one';
import { CreateUseCase } from './usecase/create';
import { StoreInputDto } from './dto/store';
import { GetAllByStoreId } from '../coupon/usecase/get-all-by-store-id';
import { CreateCoupon } from '../coupon/usecase/create';
import { CouponInputDto } from '../coupon/dto/coupon';

@Controller('store')
export class StoreController {
  constructor(
    private readonly getAllUseCase: GetAllUseCase,
    private readonly getOneUseCase: GetOneUseCase,
    private readonly createUseCase: CreateUseCase,
    private readonly getAllByStoreId: GetAllByStoreId,
    private readonly createCoupon: CreateCoupon,
  ) {}

  @Get('/')
  async getAll() {
    return this.getAllUseCase.execute();
  }

  @Get('/:id')
  async getOne(@Param('id') id: number) {
    return this.getOneUseCase.execute(id);
  }

  @Post('/')
  async create(@Body() input: StoreInputDto) {
    return this.createUseCase.execute(input);
  }

  @Get('/:id/coupon')
  async getCoupons(@Param('id') id: number) {
    return this.getAllByStoreId.execute(id);
  }

  @Post('/:id/coupon')
  async addCoupon(@Param('id') id: number, @Body() input: CouponInputDto) {
    const store = await this.getOne(id);
    return this.createCoupon.execute({ ...input, storeId: id });
  }
}
