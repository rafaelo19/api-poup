import { InjectRepository } from '@nestjs/typeorm';
import { AccountEntity } from '../entity/account.entity';

export class AccountRepository {
  constructor(@InjectRepository(AccountEntity) account: AccountEntity) {}
}
