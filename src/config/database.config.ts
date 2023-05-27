import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'poup',
  entities: [__dirname + './../**/entity/*.entity.{js,ts}'],
  synchronize: false,
};
