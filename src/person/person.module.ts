import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { PersonService } from './service/person.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonRepository } from './repository/person.repository';
import { PersonEntity } from './entity/person.entity';
import { GetPersonPipe } from './pipe/get-person.pipe';
import { PersonCreateService } from './service/person.create.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([PersonEntity])],
  controllers: [PersonController],
  providers: [
    PersonService,
    PersonRepository,
    GetPersonPipe,
    PersonCreateService,
  ],
  exports: [PersonService],
})
export class PersonModule {}
