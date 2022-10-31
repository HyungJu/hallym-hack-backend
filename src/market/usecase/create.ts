import { UseCase } from './usecase';
import { MarketInputDto, MarketOutputDto } from '../dto/market';
import { InjectRepository } from '@nestjs/typeorm';
import { MarketEntity } from '../market.entity';
import { Repository } from 'typeorm';

export class CreateUseCase implements UseCase<MarketInputDto, MarketOutputDto> {
  constructor(
    @InjectRepository(MarketEntity)
    private readonly marketRepository: Repository<MarketEntity>,
  ) {}

  async execute(input: MarketInputDto): Promise<MarketOutputDto> {
    const market = await this.marketRepository.save(input);

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
