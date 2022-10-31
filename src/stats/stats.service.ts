import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StatsEntity } from './stats.entity';

@Injectable()
export class StatsService {
  constructor(
    @InjectRepository(StatsEntity)
    private readonly statsRepository: Repository<StatsEntity>,
  ) {}

  async registerStats(dto: { storeId: number; couponId: number }) {
    const res = await this.statsRepository.save({
      storeId: dto.storeId,
      couponId: dto.couponId,
      createdAt: new Date(),
    });

    return true;
  }

  async getStats(storeId: number) {
    const res = await this.statsRepository.findAndCount({
      where: { storeId },
    });

    return res[1];
  }
}
