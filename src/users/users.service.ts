import { ConflictException, Inject, Injectable } from '@nestjs/common';
import crypto from 'crypto';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { USER_EXISTS } from './users.const';
import { UserInterface } from '../common/types/user.interface';

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
    const blogUser = {
      email,
      name,
      passwordHash: '',
    };

    const existUser = await this.usersRepository.findByEmail(email);
    if (existUser) {
      throw new ConflictException(USER_EXISTS);
    }

    const userEntity = await new BlogUserEntity(blogUser).setPassword(password);
    return await this.usersRepository.create(userEntity);
  }

  public async verifyUser(dto: LoginUserDto) {
    const { email, password } = dto;
    const existUser = await this.blogUserRepository.findByEmail(email);

    if (!existUser) {
      throw new NotFoundException(AUTH_USER_NOT_FOUND);
    }

    const blogUserEntity = new BlogUserEntity(existUser);
    if (!(await blogUserEntity.comparePassword(password))) {
      throw new UnauthorizedException(AUTH_USER_PASSWORD_WRONG);
    }

    return blogUserEntity.toObject();
  }

  public async createUserToken(user: UserInterface) {
    const accessTokenPayload = createJWTPayload(user);

    return {
      accessToken: await this.jwtService.signAsync(accessTokenPayload),
    };
  }
}
