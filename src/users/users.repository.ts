import { Injectable } from '@nestjs/common';
import { UsersEntity } from './users.entity';
import { UserInterface } from '../common/types/user.interface';
import { CrudRepositoryInterface } from '../common/types/crud-repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersRepository
  implements CrudRepositoryInterface<UsersEntity, string, UserInterface>
{
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
    private jwtService: JwtService,
  ) {}

  public async create(item: UsersEntity): Promise<UserInterface> {
    const newBlogUser = new this.usersModel({ ...item });
    return newBlogUser.save();
  }

  public async modifySubscriptions(id: string): Promise<UserInterface> {
    return this.blogUserModel.findByIdAndUpdate(
      id,
      { subscribedTo: [id.toString()] },
      { new: true },
    );
  }

  public async destroy(id: string): Promise<void> {
    this.blogUserModel.deleteOne({ id });
  }

  public async findById(id: string): Promise<UserInterface | null> {
    return this.blogUserModel.findOne({ _id: id }).exec();
  }

  public async findByEmail(email: string): Promise<UserInterface | null> {
    return this.blogUserModel.findOne({ email }).exec();
  }

  public async update(id: string, item: UsersEntity): Promise<UserInterface> {
    return this.blogUserModel
      .findByIdAndUpdate(id, item.toObject(), { new: true })
      .exec();
  }

  public async getSubscribersByUserId(userId: string) {
    return await this.blogUserModel
      .aggregate([
        {
          $match: { subscribedTo: { $elemMatch: { $gte: userId } } },
        },
      ])
      .exec();
  }

  public async subscribe(
    userId: string,
    currentUserId: string,
    action: number,
  ): Promise<string[]> {
    let currentUser: UserInterface = await this.findById(currentUserId);
    if (action == SubscribeToUserQueryActionEnum.Sub) {
      currentUser.subscribedTo.push(userId);
    } else {
      currentUser.subscribedTo = currentUser.subscribedTo.filter(
        (item) => item !== userId || item === currentUserId,
      );
    }
    currentUser.subscribedTo = [...new Set(currentUser.subscribedTo)];
    return (await this.update(currentUserId, new UsersEntity(currentUser)))
      .subscribedTo;
  }
}
