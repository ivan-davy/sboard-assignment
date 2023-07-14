import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create/create-post.dto';
import { TokenPayloadInterface } from '../common/types/token-payload.interface';
import { UpdatePostDto } from './dto/update/update-post.dto';
import { PostInterface } from '../common/types/post.interface';
import { NOT_FOUND_ERROR } from './posts.const';
import { PostsEntity } from './posts.entity';
import * as dayjs from 'dayjs';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostsEntity)
    private readonly postsRepository: Repository<PostsEntity>,
  ) {}

  public async create(dto: CreatePostDto, user: TokenPayloadInterface) {
    const blogPost = {
      ...dto,
      createdBy: user.id,
      postedDate: dayjs().toISOString(),
    };

    return this.postsRepository.save(blogPost);
  }

  public async update(postId: number, dto: UpdatePostDto) {
    //const post = await this.getById(postId);
    //const updatedPost = { ...post, ...dto, id: post.id };

    await this.postsRepository.update(postId, dto);
    return this.postsRepository.findOne({ where: { id: postId } });
  }

  public async getById(postId: number) {
    const post = await this.postsRepository.findOne({
      where: { id: postId },
      relations: ['createdBy'],
    });
    if (!post) {
      throw new NotFoundException(NOT_FOUND_ERROR);
    }

    return post;
  }

  async get(): Promise<PostInterface[]> {
    return await this.postsRepository.find();
  }

  public async remove(postId: number) {
    return this.postsRepository.delete(postId);
  }
}
