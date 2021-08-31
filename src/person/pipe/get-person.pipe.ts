import { Injectable, PipeTransform, HttpException, HttpStatus } from '@nestjs/common';
import { PersonService } from "../person.service";
import { MessageException } from "../../shared/enum/message-exception";

@Injectable()
export class GetPersonPipe implements PipeTransform {

    constructor(private personService: PersonService) {
    }

    async transform(value: string): Promise<any> {
        if (!await this.personService.getById(value)) {
            throw new HttpException(MessageException.PERSON_NOT_FOUND, HttpStatus.NOT_FOUND)
        }
        return value
    }
}