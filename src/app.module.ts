import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';
import { UserModule } from './user/user.module';

@Module({
  imports: [PersonModule, UserModule, TypeOrmModule.forRoot(databaseConfig)],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
