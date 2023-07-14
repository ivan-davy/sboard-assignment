import { Expose } from 'class-transformer';
import { PostsEntity } from '../posts.entity';

export class PostRdo {
  @Expose()
  public id: number;

  @Expose()
  public title: string;

  @Expose()
  public text: string;

  @Expose()
  public postedDate: string;

  @Expose()
  public createdBy: PostsEntity;

  @Expose()
  public color: string;
}
