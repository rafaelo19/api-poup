import {Repository} from 'typeorm';
import {PersonEntity} from "../entity/person.entity";
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";

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

    async insertPerson(person: PersonEntity): Promise<PersonEntity> {
        try {
            return await this.personRepository.save(person)
        } catch (error) {
            console.log(error.message)
        }
    }
}
