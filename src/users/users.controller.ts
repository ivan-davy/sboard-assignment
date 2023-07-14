import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import { fillObject } from '../common/utils/fill-object';
import { JwtGuard } from './auth/jwt.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  public async create(@Body() dto: CreateUserDto) {
    const newUser = await this.usersService.register(dto);
    return fillObject(LoggedUserRdo, newUser);
  }

  @UseGuards(JwtGuard)
  @HttpCode(200)
  @Post('login')
  public async login(@Req() user: LoggedUserRdo) {
    return this.usersService.createUserToken(user);
  }

  @HttpCode(HttpStatus.OK)
  @Post('refresh')
  public async refreshToken(@Req() user: LoggedUserRdo) {
    return this.usersService.createUserToken(user);
  }
}
