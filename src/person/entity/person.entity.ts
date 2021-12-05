import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { UserEntity } from '../../user/entity/user.entity';
import {AccountEntity} from "../../account/entity/account.entity";

@Entity({ schema: 'cad', name: 'pessoa' })
export class PersonEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string = null;

  @Column({ type: 'varchar', length: 100 })
  nome: string = null;

  @Column({ type: 'varchar', length: 14 })
  identificacao: string = null;

  @OneToOne(() => UserEntity, (user) => user.pessoa, { cascade: true })
  usuario: UserEntity;

  @OneToOne(() => AccountEntity, (person) => person.pessoa, { cascade: true })
  conta: AccountEntity;

  constructor() {
    super();
    this.id = uuid();
  }
}
