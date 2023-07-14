import { Expose } from 'class-transformer';

export class LoggedUserRdo {
  //@Transform((value) => value.obj._id.toString())
  @Expose({ name: '_id' })
  public id: number;

  @Expose()
  public email: string;

  @Expose()
  public name: string;

  @Expose()
  public accessToken: string;
}
