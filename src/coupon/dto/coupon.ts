import { IsDateString, IsString } from 'class-validator';

export class CouponOutputDto {
  id!: number;
  image!: string;
  name!: string;
  expireAt!: Date;
  storeId: number;
}

export class CouponInputDto {
  @IsString()
  image!: string;
  @IsString()
  name!: string;
  @IsDateString()
  expireAt!: Date;
}
