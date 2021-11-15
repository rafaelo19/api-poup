import { Injectable, Inject } from '@nestjs/common';
import { PersonEntity } from '../entity/person.entity';
import { PersonRepository } from '../repository/person.repository';
import { PersonDto } from '../dto/person.dto';
import { mappingObject } from '../../util/mapping.object';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class PersonService {
  constructor(
    @Inject(PersonRepository)
    private readonly personRepository: PersonRepository,
  ) {}

  async insert(person: PersonEntity): Promise<PersonEntity> {
    return await this.personRepository.insertPerson(person);
  }

  async getById(id: string): Promise<PersonEntity> {
    return await this.personRepository.getById(id);
  }

  async getPersonAndUserById(id: string): Promise<PersonEntity> {
    return await this.personRepository.getPersonAndUserById(id);
  }

  async getByIdController(id: string): Promise<PersonDto> {
    const person = await this.getById(id);
    return mappingObject(person, new PersonDto());
  }

  async getPersonAndUserByIdController(id: string): Promise<PersonDto> {
    const person = await this.getPersonAndUserById(id);
    const personDto = mappingObject(person, new PersonDto());
    personDto.user = mappingObject(person.user, new UserDto());
    return personDto;
  }
}
