import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UsersEntity } from '../users/users.entity';

@Entity()
export class PostsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column()
  color: string;

  @Column()
  postedDate: string;

  @ManyToOne(() => UsersEntity, (user) => user.id)
  createdBy: number | UsersEntity;
}
