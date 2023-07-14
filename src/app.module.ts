import { Module } from '@nestjs/common';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';
import {UsersController} from './users/users.controller';
import {UsersService} from './users/users.service';

@Module({
  imports: [],
  controllers: [PostsController, UsersController],
  providers: [PostsService, UsersService],
})
export class AppModule {}
