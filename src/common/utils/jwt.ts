import { UserInterface } from '../types/user.interface';
import { TokenPayloadInterface } from '../types/token-payload.interface';

export function createJWTPayload(user: UserInterface): TokenPayloadInterface {
  return {
    sub: user.id,
    email: user.email,
    name: user.name,
  };
}
