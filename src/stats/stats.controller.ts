import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StatsService } from './stats.service';

@Controller('stats')
export class StatsController {
  constructor(private statsService: StatsService) {}

  @Post('/')
  async registerStats(@Body() dto: { storeId: number; couponId: number }) {
    return this.statsService.registerStats(dto);
  }

  @Get('/stores/:storeId')
  async getStats(@Param('storeId') storeId: number) {
    return this.statsService.getStats(storeId);
  }
}
