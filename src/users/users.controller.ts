import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly postsService: UsersService) {}

  @Get('/')
  getHello(): string {
    return this.postsService.getHello();
  }
}
