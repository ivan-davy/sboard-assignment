import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { TokenPayloadInterface } from '../common/types/token-payload.interface';
import { CreatePostDto } from './dto/create/create-post.dto';
import { fillObject } from '../common/utils/fill-object';
import { PostRdo } from './rdo/post.rdo';
import { UpdatePostDto } from './dto/update/update-post.dto';
import { JwtGuard } from '../users/auth/jwt.guard';
import { CurrentUser } from '../common/utils/current-user.decorator';
import { NOT_CREATOR } from './posts.const';
import { PostsService } from './posts.service';
import { UsersEntity } from '../users/users.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UseGuards(JwtGuard)
  @Post('')
  public async create(
    @CurrentUser() currentUser: TokenPayloadInterface,
    @Body() dto: CreatePostDto,
  ) {
    const newPost = await this.postsService.create(dto, currentUser);
    return fillObject(PostRdo, newPost);
  }

  @Get('')
  async show() {
    const posts = await this.postsService.get();
    const results = posts.map((post) => fillObject(PostRdo, post));
    return results
      .map((post, index) => ({
        ...post,
        createdById: (posts[index].createdBy as UsersEntity).id,
        createdBy: (posts[index].createdBy as UsersEntity).name,
      }))
      .reverse();
  }

  @Get(':id')
  async showById(@Param('id') id: number) {
    const post = await this.postsService.getById(id);
    delete (post.createdBy as UsersEntity).passwordHash;
    return post;
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  public async update(
    @CurrentUser() currentUser: TokenPayloadInterface,
    @Param('id') id: number,
    @Body() dto: UpdatePostDto,
  ) {
    const author = (await this.postsService.getById(id))
      .createdBy as UsersEntity;
    if (author.id !== currentUser.id) {
      throw new UnauthorizedException(NOT_CREATOR);
    }
    const updatedPost = await this.postsService.update(id, dto);
    return fillObject(PostRdo, updatedPost);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  public async delete(
    @CurrentUser() currentUser: TokenPayloadInterface,
    @Param('id') id: number,
  ) {
    const author = (await this.postsService.getById(id))
      .createdBy as UsersEntity;
    if (author.id !== currentUser.id) {
      throw new UnauthorizedException(NOT_CREATOR);
    }
    await this.postsService.remove(id);
    return {};
  }
}
