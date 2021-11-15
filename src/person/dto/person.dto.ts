import { UserDto } from './user.dto';
import { Expose } from 'class-transformer';

export class PersonDto {
  @Expose({ name: 'name' })
  nome: string = null;

  @Expose({ name: 'identify' })
  identificacao: string = null;

  @Expose({ name: 'user' })
  usuario: UserDto = null;
}
