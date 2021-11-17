import {PersonEntity} from "../entity/person.entity";

export interface PersonRepositoryInterface {

    insert(person: PersonEntity): Promise<PersonEntity>

    getById(id: string): Promise<PersonEntity>

    getPersonAndUserById(id: string): Promise<PersonEntity>
}