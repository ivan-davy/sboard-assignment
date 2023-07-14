import { IsEmail, IsString, MinLength } from 'class-validator';
import { USER_EMAIL_NOT_VALID } from '../users.const';

export class LoginUserDto {
  @IsEmail({}, { message: USER_EMAIL_NOT_VALID })
  public email: string;

  @IsString()
  @MinLength(3)
  public password: string;
}
