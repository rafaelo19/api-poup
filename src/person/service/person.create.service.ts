import { PersonDto } from '../dto/person.dto';
import { Inject, Injectable } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonEntity } from '../entity/person.entity';
import { mappingDtoInEntity } from '../../util/mappingConvertDtoInEntity';
import { UserService } from '../../user/service/user.service';
import { UserEntity } from '../../user/entity/user.entity';

@Injectable()
export class PersonCreateService {
  constructor(
    @Inject(PersonService) private readonly personService: PersonService,
    @Inject(UserService) private readonly userService: UserService,
  ) {}

  async createPerson(personDto: PersonDto): Promise<PersonEntity> {
    let person = new PersonEntity();
    person = mappingDtoInEntity(personDto, person);

    let user = new UserEntity();
    user = mappingDtoInEntity(personDto.usuario, user);
    person.user = user;
    return await this.personService.insert(person);
  }
}
