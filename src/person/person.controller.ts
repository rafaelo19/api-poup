import { Controller, Post, Get, Body, Param, Inject } from '@nestjs/common';
import { PersonDto } from './dto/person.dto';
import { PersonService } from './service/person.service';
import { FindPersonPipe } from './pipe/find.person.pipe';
import { PersonCreateService } from './service/person.create.service';
import {
  PersonCreateServiceInterface,
  PersonServiceControllerInterface,
} from './service/person.service.interface';

@Controller({ path: '/persons' })
export class PersonController {
  constructor(
    @Inject(PersonService)
    private readonly personService: PersonServiceControllerInterface,
    @Inject(PersonCreateService)
    private readonly personCreate: PersonCreateServiceInterface,
  ) {}

  @Post()
  postPerson(@Body() personDto: PersonDto) {
    this.personCreate.personCreate(personDto);
  }

  @Get('/:id')
  getById(@Param('id', FindPersonPipe) id: string): Promise<PersonDto> {
    return this.personService.getByIdController(id);
  }

  @Get('/:id/users')
  getPersonAndUserById(
    @Param('id', FindPersonPipe) id: string,
  ): Promise<PersonDto> {
    return this.personService.getPersonAndUserByIdController(id);
  }
}
