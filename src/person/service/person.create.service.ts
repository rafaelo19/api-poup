import { PersonDto } from "../dto/person.dto";
import {Inject, Injectable} from "@nestjs/common";
import { PersonService } from "./person.service";
import { PersonEntity } from "../entity/person.entity";
import { convertDtoInEntity } from "../../util/convertDtoEntity";

@Injectable()
export class PersonCreateService {
    constructor(
        @Inject(PersonService) private readonly personService: PersonService,
    ) {
    }

    async createPerson (personDto: PersonDto) {
        let person = new PersonEntity();
        person = convertDtoInEntity(personDto, person);
        person = await this.personService.insert(person);
    }
}