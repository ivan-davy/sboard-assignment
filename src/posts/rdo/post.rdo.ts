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
  public createdById: number | { id: number; name: string; email: string };

  @Expose()
  public color: string;
}
