import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  Exclusion,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { UserEntity } from '../../user/entity/user.entity';

@Entity({ schema: 'cad', name: 'pessoa' })
export class PersonEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string = null;

  @Column({ type: 'varchar', length: 100 })
  nome: string = null;

  @Column({ type: 'varchar', length: 14 })
  identificacao: string = null;

  @OneToOne(() => UserEntity, (user) => user.pessoa, { cascade: true })
  user: UserEntity;

  constructor() {
    super();
    this.id = uuid();
  }
}
