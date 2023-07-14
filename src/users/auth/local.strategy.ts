import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable } from '@nestjs/common';
import { UsersEntity } from '../users.entity';
import { UsersService } from '../users.service';

const USERNAME_FIELD_NAME = 'email';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: UsersService) {
    super({ usernameField: USERNAME_FIELD_NAME });
  }

  public async validate(email: string, password: string): Promise<UsersEntity> {
    return this.authService.verifyUser({ email, password });
  }
}
