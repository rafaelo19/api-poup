import {Repository} from 'typeorm';
import {PersonEntity} from "../entity/person.entity";
import {PersonDto} from "../dto/person.dto";
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import { v4 as uuid } from 'uuid';

@Injectable()
export class PersonRepository {

    constructor(
        @InjectRepository(PersonEntity)
        private readonly personRepository: Repository<PersonEntity>
    ) {}

    async getById(id: string): Promise<PersonEntity> {
        try {
            return await this.personRepository.findOne(id)
        } catch (error) {
            console.log(error.message)
        }
    }

    async insertPerson(personDto: PersonDto): Promise<PersonEntity> {
        const {nome, identificacao} = personDto
        const id = uuid()
        const person = new PersonEntity(id, nome,identificacao)

        try {
            return await this.personRepository.save(person)
        } catch (error) {
            console.log(error.message)
        }
    }
}
