import { Exclude, Expose } from 'class-transformer';

export class UserDto {
  @Expose({ name: 'login' })
  login: string = null;

  @Exclude()
  senha: string = null;
}
