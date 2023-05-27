import { UserDto } from './user.dto';
import { Exclude, Expose } from 'class-transformer';

export class PersonDto {
  @Expose({ name: 'name' })
  nome: string = null;

  @Expose({ name: 'identify' })
  identificacao: string = null;

  @Exclude()
  usuario: UserDto = null;
}
