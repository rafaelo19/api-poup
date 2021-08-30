import { Injectable, Inject } from "@nestjs/common";
import { PersonEntity } from "./entity/person.entity";
import { PersonRepository } from "./repository/person.repository";
import { PersonDto} from "./dto/person.dto";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PersonService {

    constructor(
        @Inject(PersonRepository)
        private readonly personRepository: PersonRepository,
    ) {}

    async getById(id: string): Promise<PersonEntity> {
        return await this.personRepository.getById(id)
    }

    async insert (personDto: PersonDto): Promise<PersonEntity> {
        return await this.personRepository.insertPerson(personDto);
    }

}