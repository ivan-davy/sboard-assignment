import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import { fillObject } from '../common/utils/fill-object';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  public async create(@Body() dto: CreateUserDto) {
    const newUser = await this.usersService.register(dto);
    return fillObject(LoggedUserRdo, newUser);
  }

  @HttpCode(200)
  @Post('login')
  public async login(@Body() dto: LoginUserDto) {
    const verifiedUser = await this.usersService.verifyUser(dto);
    return fillObject(LoggedUserRdo, verifiedUser);
  }
}
