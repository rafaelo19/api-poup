import { Controller, Post, Get, Body, Param, Inject } from '@nestjs/common';
import { PersonDto } from './dto/person.dto';
import { PersonService } from './service/person.service';
import { PersonEntity } from './entity/person.entity';
import { GetPersonPipe } from './pipe/get-person.pipe';
import { PersonCreateService } from './service/person.create.service';

@Controller({ path: '/persons' })
export class PersonController {
  constructor(
    @Inject(PersonService) private readonly personService: PersonService,
    @Inject(PersonCreateService)
    private readonly personCreate: PersonCreateService,
  ) {}

  @Post()
  postPerson(@Body() personDto: PersonDto) {
    this.personCreate.createPerson(personDto);
  }

  @Get('/:id')
  getById(@Param('id', GetPersonPipe) id: string): Promise<PersonEntity> {
    return this.personService.getById(id);
  }
}
