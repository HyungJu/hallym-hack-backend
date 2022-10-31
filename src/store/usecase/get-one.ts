import { UseCase } from './usecase';
import { StoreOutputDto } from '../dto/store';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreEntity } from '../store.entity';
import { Repository } from 'typeorm';

export class GetOneUseCase implements UseCase<number, StoreOutputDto> {
  constructor(
    @InjectRepository(StoreEntity)
    private readonly storeRepository: Repository<StoreEntity>,
  ) {}

  async execute(id: number): Promise<StoreOutputDto> {
    const store = await this.storeRepository.findOne({ where: { id } });

    if (!store) throw new Error('Store not found');

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
