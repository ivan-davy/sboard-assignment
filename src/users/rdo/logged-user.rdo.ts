import { Expose } from 'class-transformer';

export class LoggedUserRdo {
  @Expose()
  public id: number;

  @Expose()
  public email: string;

  @Expose()
  public name: string;

  @Expose()
  public accessToken: string;
}
