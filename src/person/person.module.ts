import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { PersonController } from './person.controller';
import { PersonService } from './service/person.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonRepository } from './repository/person.repository';
import { PersonEntity } from './entity/person.entity';
import { FindPersonPipe } from './pipe/find.person.pipe';
import { PersonCreateService } from './service/person.create.service';
import { UserModule } from '../user/user.module';
import { AuthModule } from '../auth/auth.module';
import { ResponseInterceptor } from '../infrastructure/interceptor/response.interceptor';
import {AuthMiddleware} from "../auth/middleware/auth.middleware";
import {AccountModule} from "../account/account.module";

@Module({
  imports: [UserModule, AccountModule, AuthModule, TypeOrmModule.forFeature([PersonEntity])],
  controllers: [PersonController],
  providers: [
    PersonService,
    PersonRepository,
    FindPersonPipe,
    PersonCreateService,
    ResponseInterceptor,
  ],
  exports: [PersonService],
})
export class PersonModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(AuthMiddleware).forRoutes(PersonController)
  }
}
