import { StatsEntity } from './stats.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { StatsService } from './stats.service';
import { StatsController } from './stats.controller';

@Module({
  controllers: [StatsController],
  imports: [TypeOrmModule.forFeature([StatsEntity])],
  providers: [StatsService],
})
export class StatsModule {}
