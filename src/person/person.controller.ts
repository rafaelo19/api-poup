import {Controller, Post, Get, Body, Param} from "@nestjs/common";
import {PersonDto} from "./dto/person.dto";
import { PersonService } from "./person.service";
import {PersonEntity} from "./entity/person.entity";
import {GetPersonPipe} from "./pipe/get-person.pipe";

@Controller({path: '/persons'})
export class PersonController {
    constructor(private personService: PersonService) {
    }

    @Post()
    postPerson (@Body() personDto : PersonDto) {
        this.personService.insert(personDto)
    }

    @Get("/:id")
    getById(@Param("id", GetPersonPipe) id: string, @Body() data: any): Promise<PersonEntity> {
        return this.personService.getById(id)
    }
}