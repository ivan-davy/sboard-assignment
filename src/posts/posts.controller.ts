import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(
      private readonly postsService: PostsService
  ) {}

  @Get('/')
  public getHello(): string {
    return this.postsService.getHello();
  }
}
