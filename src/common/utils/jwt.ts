import { TokenPayloadInterface } from '../types/token-payload.interface';
import { LoginUserDto } from '../../users/dto/login-user.dto';

export function createJWTPayload(user: LoginUserDto): TokenPayloadInterface {
  return {
    email: user.email,
  };
}
