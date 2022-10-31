import { UseCase } from './usecase';
import { MarketOutputDto } from '../dto/market';
import { InjectRepository } from '@nestjs/typeorm';
import { MarketEntity } from '../market.entity';
import { Repository } from 'typeorm';

export class GetOneUseCase implements UseCase<number, MarketOutputDto> {
  constructor(
    @InjectRepository(MarketEntity)
    private readonly marketRepository: Repository<MarketEntity>,
  ) {}

  async execute(id: number): Promise<MarketOutputDto> {
    const market = await this.marketRepository.findOne({
      where: { id },
      relations: ['stores'],
    });

    if (!market) throw new Error('Market not found');

    return {
      id: market.id,
      name: market.name,
      description: market.description,
      lat: market.lat,
      lng: market.lng,
      address: market.address,
      stores: market.stores,
    };
  }
}
