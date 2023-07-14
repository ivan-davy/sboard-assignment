import {
  IsHexColor,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdatePostDto {
  @IsString()
  @IsOptional()
  @MinLength(5)
  @MaxLength(20)
  public title?: string;

  @IsOptional()
  @IsString()
  @MinLength(5)
  @MaxLength(200)
  public text?: string;

  @IsOptional()
  @IsHexColor()
  public color?: string;
}
