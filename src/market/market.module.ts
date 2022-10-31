import { Module } from '@nestjs/common';
import { MarketController } from './market.controller';
import { GetAllUseCase } from './usecase/get-all';
import { GetOneUseCase } from './usecase/get-one';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarketEntity } from './market.entity';
import { CreateUseCase } from './usecase/create';

@Module({
  controllers: [MarketController],
  imports: [TypeOrmModule.forFeature([MarketEntity])],
  providers: [GetAllUseCase, GetOneUseCase, CreateUseCase],
})
export class MarketModule {}
