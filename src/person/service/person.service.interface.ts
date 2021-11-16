import {PersonEntity} from "../entity/person.entity";
import {PersonDto} from "../dto/person.dto";

export interface PersonServiceInterface {

    insert(person: PersonEntity): Promise<PersonEntity>

    getById(id: string): Promise<PersonEntity>
}

export interface PersonServiceControllerInterface extends PersonServiceInterface
{
    getByIdController(id: string): Promise<PersonDto>

    getPersonAndUserByIdController(id: string): Promise<PersonDto>
}


export interface PersonCreateServiceInterface {
    personCreate(personDto: PersonDto): Promise<PersonEntity>
}