import { Controller, Post, Get, Body, Param } from "@nestjs/common";
import {PersonDto} from "./dto/person.dto";
import { PersonService } from "./person.service";
import {PersonEntity} from "./entity/person.entity";

@Controller({path: '/persons'})
export class PersonController {
    constructor(private personService: PersonService) {
    }

    @Post()
    postPerson (@Body() personDto : PersonDto) {
        this.personService.insert(personDto)
    }

    @Get("/:id")
    getById(@Param("id") id: string): Promise<PersonEntity> {
        return this.personService.getById(id)
    }
}