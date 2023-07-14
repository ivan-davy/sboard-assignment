import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PostsEntity } from '../posts/posts.entity';

@Entity()
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  passwordHash: string;

  @OneToMany(() => PostsEntity, (post) => post.createdBy)
  posts: PostsEntity[];
}
