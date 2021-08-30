import { Module } from "@nestjs/common";
import { PersonController } from "./person.controller";
import { PersonService } from "./person.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonRepository } from "./repository/person.repository";
import { PersonEntity } from "./entity/person.entity";


@Module({
    imports: [
        TypeOrmModule.forFeature([PersonEntity])
    ],
    controllers: [PersonController],
    providers: [PersonService, PersonRepository],
    exports: [PersonService]
})

export class PersonModule {}