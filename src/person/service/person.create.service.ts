import { PersonDto } from '../dto/person.dto';
import { Inject, Injectable } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonEntity } from '../entity/person.entity';
import { mappingObject } from '../../util/mapping.object';
import { UserService } from '../../user/service/user.service';
import { UserEntity } from '../../user/entity/user.entity';
import {PersonCreateServiceInterface} from "./person.service.interface";

@Injectable()
export class PersonCreateService implements PersonCreateServiceInterface {
  constructor(
    @Inject(PersonService) private readonly personService: PersonService,
    @Inject(UserService) private readonly userService: UserService,
  ) {}

  async personCreate(personDto: PersonDto): Promise<PersonEntity> {
    let person = new PersonEntity();
    person = mappingObject(personDto, person);

    let user = new UserEntity();
    user = mappingObject(personDto.usuario, user);
    person.user = user;
    return await this.personService.insert(person);
  }
}
