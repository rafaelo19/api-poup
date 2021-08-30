import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from "./person/person.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from "./config/database.config";

@Module({
  imports: [
      PersonModule,
      TypeOrmModule.forRoot(databaseConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})

export class AppModule {}
