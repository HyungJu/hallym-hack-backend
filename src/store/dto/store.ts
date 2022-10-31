import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class StoreOutputDto {
  id!: number;
  name!: string;
  description!: string;
  image!: string;
  operationHour!: string;
  isFeatured!: boolean;
}

export class StoreInputDto {
  @IsString()
  name!: string;

  @IsString()
  description!: string;

  @IsString()
  image!: string;

  @IsString()
  operationHour!: string;

  @IsNumber()
  marketId: number;

  @IsBoolean()
  isFeatured!: boolean;
}
