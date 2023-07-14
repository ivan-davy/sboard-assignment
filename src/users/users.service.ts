import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import {
  SALT_ROUNDS,
  USER_EXISTS,
  USER_NOT_FOUND,
  USER_PASSWORD_WRONG,
} from './users.const';
import { JwtService } from '@nestjs/jwt';
import { createJWTPayload } from '../common/utils/jwt';
import { UsersEntity } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { compare, genSalt, hash } from 'bcrypt';
import { UserInterface } from '../common/types/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
    private readonly jwtService: JwtService,
  ) {}

  public async register(dto: CreateUserDto) {
    const { email, name, password } = dto;
    const user = {
      email,
      name,
      passwordHash: '',
    };

    const existUser = await this.usersRepository.findOne({ where: { email } });
    if (existUser) {
      throw new ConflictException(USER_EXISTS);
    }

    const salt = await genSalt(SALT_ROUNDS);
    const passwordHash = await hash(password, salt);
    return await this.usersRepository.save({
      ...user,
      passwordHash,
    });
  }

  public async verifyUser(dto: LoginUserDto) {
    const { email, password } = dto;
    const existUser = await this.usersRepository.findOne({ where: { email } });

    if (!existUser) {
      throw new NotFoundException(USER_NOT_FOUND);
    }

    if (!(await compare(password, existUser.passwordHash))) {
      throw new UnauthorizedException(USER_PASSWORD_WRONG);
    }

    return {
      id: existUser.id,
      email: existUser.email,
      accessToken: await this.createUserToken(existUser),
    };
  }

  public async createUserToken(user: UserInterface) {
    const accessTokenPayload = createJWTPayload(user);

    return await this.jwtService.signAsync(accessTokenPayload);
  }
}
