import { IsHexColor, IsString, MaxLength, MinLength } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @MinLength(5)
  @MaxLength(20)
  public title: string;

  @IsString()
  @MinLength(5)
  @MaxLength(200)
  public text: string;

  @IsHexColor()
  public color: string;
}
