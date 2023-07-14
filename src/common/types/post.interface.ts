import { UsersEntity } from '../../users/users.entity';

export interface PostInterface {
  id?: number;
  title: string;
  text: string;
  postedDate: string;
  createdBy: number | UsersEntity;
}
