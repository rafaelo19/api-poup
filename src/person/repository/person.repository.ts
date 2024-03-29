import { Repository } from 'typeorm';
import { PersonEntity } from '../entity/person.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonServiceInterface } from '../service/person.service.interface';

@Injectable()
export class PersonRepository implements PersonServiceInterface {
  constructor(
    @InjectRepository(PersonEntity)
    private readonly personRepository: Repository<PersonEntity>,
  ) {}

  async insert(person: PersonEntity): Promise<PersonEntity> {
    try {
      return await this.personRepository.save(person);
    } catch (error) {
      console.log(error.message);
    }
  }

  async getById(id: string): Promise<PersonEntity> {
    try {
      return await this.personRepository.findOne(id);
    } catch (error) {
      console.log(error.message);
    }
  }

  async getPersonAndUserById(id: string): Promise<PersonEntity> {
    try {
      return await this.personRepository.findOne(id, { relations: ['user'] });
    } catch (error) {
      console.log(error.message);
    }
  }
}
