import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GetAllUseCase } from './usecase/get-all';
import { GetOneUseCase } from './usecase/get-one';
import { MarketInputDto } from './dto/market';
import { CreateUseCase } from './usecase/create';

@Controller('market')
export class MarketController {
  constructor(
    private readonly getAllUseCase: GetAllUseCase,
    private readonly getOneUseCase: GetOneUseCase,
    private readonly createUseCase: CreateUseCase,
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
  async create(@Body() input: MarketInputDto) {
    return this.createUseCase.execute(input);
  }
}
