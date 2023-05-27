import { Injectable, Inject } from '@nestjs/common';
import { PersonEntity } from '../entity/person.entity';
import { PersonRepository } from '../repository/person.repository';
import { PersonDto } from '../dto/person.dto';
import { mappingObject } from '../../infrastructure/util/mapping.object';
import { UserDto } from '../dto/user.dto';
import { PersonServiceControllerInterface } from './person.service.interface';
import { PersonRepositoryInterface } from '../repository/person.repository.interface';

@Injectable()
export class PersonService implements PersonServiceControllerInterface {
  constructor(
    @Inject(PersonRepository)
    private readonly personRepository: PersonRepositoryInterface,
  ) {}

  async insert(person: PersonEntity): Promise<PersonEntity> {
    return await this.personRepository.insert(person);
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
    return mappingObject(person.user, new UserDto());
  }
}
