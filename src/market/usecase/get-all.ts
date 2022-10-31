import { UseCase } from './usecase';
import { MarketOutputDto } from '../dto/market';
import { InjectRepository } from '@nestjs/typeorm';
import { MarketEntity } from '../market.entity';
import { Repository } from 'typeorm';

export class GetAllUseCase implements UseCase<void, MarketOutputDto[]> {
  constructor(
    @InjectRepository(MarketEntity)
    private readonly marketRepository: Repository<MarketEntity>,
  ) {}

  async execute(input: void): Promise<MarketOutputDto[]> {
    const market = await this.marketRepository.find({
      relations: ['stores'],
    });

    if (!market) throw new Error('Market not found');

    return market.map((market) => {
      return {
        id: market.id,
        name: market.name,
        description: market.description,
        lat: market.lat,
        lng: market.lng,
        address: market.address,
        stores: market.stores,
      };
    });
  }
}
