import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { USER_EMAIL_NOT_VALID } from '../users.const';

export class CreateUserDto {
  @IsEmail({}, { message: USER_EMAIL_NOT_VALID })
  public email: string;

  @IsString()
  @MinLength(3)
  @MaxLength(10)
  public name: string;

  @IsString()
  @MinLength(3)
  public password: string;
}
