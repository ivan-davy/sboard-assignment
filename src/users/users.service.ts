import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import {
  USER_EXISTS,
  USER_NOT_FOUND,
  USER_PASSWORD_WRONG,
} from './users.const';
import { UserInterface } from '../common/types/user.interface';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from '../common/config/jwt.config';
import { ConfigType } from '@nestjs/config';
import { createJWTPayload } from '../common/utils/jwt';
import { UsersEntity } from './users.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtOptions: ConfigType<typeof jwtConfig>,
  ) {}

  public async register(dto: CreateUserDto) {
    const { email, name, password } = dto;
    const user = {
      email,
      name,
      passwordHash: '',
    };

    const existUser = await this.usersRepository.findByEmail(email);
    if (existUser) {
      throw new ConflictException(USER_EXISTS);
    }

    const userEntity = await new UsersEntity(user).setPassword(password);
    return await this.usersRepository.create(userEntity);
  }

  public async verifyUser(dto: LoginUserDto) {
    const { email, password } = dto;
    const existUser = await this.usersRepository.findByEmail(email);

    if (!existUser) {
      throw new NotFoundException(USER_NOT_FOUND);
    }

    const userEntity = new UsersEntity(existUser);
    if (!(await userEntity.comparePassword(password))) {
      throw new UnauthorizedException(USER_PASSWORD_WRONG);
    }

    return userEntity.toObject();
  }

  public async createUserToken(user: UserInterface) {
    const accessTokenPayload = createJWTPayload(user);

    return {
      accessToken: await this.jwtService.signAsync(accessTokenPayload),
    };
  }
}
