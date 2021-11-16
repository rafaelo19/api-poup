import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Inject,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { PersonDto } from './dto/person.dto';
import { PersonService } from './service/person.service';
import { GetPersonPipe } from './pipe/get-person.pipe';
import { PersonCreateService } from './service/person.create.service';
import {PersonServiceController} from "./service/person.service.interface";

@Controller({ path: '/persons' })
@UseInterceptors(ClassSerializerInterceptor)
export class PersonController {
  constructor(
    @Inject(PersonService) private readonly personService: PersonServiceController,
    @Inject(PersonCreateService)
    private readonly personCreate: PersonCreateService,
  ) {}

  @Post()
  postPerson(@Body() personDto: PersonDto) {
    this.personCreate.personCreate(personDto);
  }

  @Get('/:id')
  getById(@Param('id', GetPersonPipe) id: string): Promise<PersonDto> {
    return this.personService.getByIdController(id);
  }

  @Get('/:id/users')
  getPersonAndUserById(
    @Param('id', GetPersonPipe) id: string,
  ): Promise<PersonDto> {
    return this.personService.getPersonAndUserByIdController(id);
  }
}
