import { TokenPayloadInterface } from '../types/token-payload.interface';
import { UserInterface } from '../types/user.interface';

export function createJWTPayload(user: UserInterface): TokenPayloadInterface {
  return {
    id: user.id,
    email: user.email,
  };
}
