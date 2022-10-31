import { IsLatitude, IsLongitude, IsString } from 'class-validator';
import { StoreOutputDto } from '../../store/dto/store';

export class MarketOutputDto {
  id!: number;
  name!: string;
  description!: string;
  lat!: number;
  lng!: number;
  address!: string;
  stores!: StoreOutputDto[];
}

export class MarketInputDto {
  @IsString()
  name!: string;

  @IsString()
  description!: string;

  @IsLatitude()
  lat!: number;

  @IsLongitude()
  lng!: number;

  @IsString()
  address!: string;
}
