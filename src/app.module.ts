import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarketModule } from './market/market.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarketEntity } from './market/market.entity';
import { StoreEntity } from './store/store.entity';
import { CouponEntity } from './coupon/coupon.entity';
import { CouponModule } from './coupon/coupon.module';
import { StoreModule } from './store/store.module';
import { StatsModule } from './stats/stats.module';
import { StatsEntity } from './stats/stats.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MarketModule,
    CouponModule,
    StoreModule,
    StatsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: +process.env.MYSQL_PORT,
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [MarketEntity, StoreEntity, CouponEntity, StatsEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
