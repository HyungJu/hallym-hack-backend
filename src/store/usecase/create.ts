import { UseCase } from './usecase';
import { StoreInputDto, StoreOutputDto } from '../dto/store';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoreEntity } from '../store.entity';
import { MarketEntity } from '../../market/market.entity';
import { HttpException } from '@nestjs/common';

export class CreateUseCase implements UseCase<StoreInputDto, StoreOutputDto> {
  constructor(
    @InjectRepository(StoreEntity)
    private readonly storeRepository: Repository<StoreEntity>,
    @InjectRepository(MarketEntity)
    private readonly marketRepository: Repository<MarketEntity>,
  ) {}

  async execute(input: StoreInputDto): Promise<StoreOutputDto> {
    const market = await this.marketRepository.findOne({
      where: { id: input.marketId },
    });
    if (!market) throw new HttpException('Market not found', 404);

    const store = await this.storeRepository.save({ ...input, market });

    return {
      id: store.id,
      name: store.name,
      description: store.description,
      operationHour: store.operationHour,
      image: store.image,
      isFeatured: store.isFeatured,
    };
  }
}
