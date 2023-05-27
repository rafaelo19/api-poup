import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { PersonEntity } from '../../person/entity/person.entity';
import { v4 as uuid } from 'uuid';

@Entity({ schema: 'cad', name: 'usuario' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string = null;

  @Column({ type: 'varchar', length: 100 })
  login: string = null;

  @Column({ type: 'varchar', length: 20 })
  senha: string = null;

  @Column({ type: 'uuid' })
  pessoa_id: string = null;

  @OneToOne(() => PersonEntity, (pessoa) => pessoa.user)
  @JoinColumn({ name: 'pessoa_id', referencedColumnName: 'id' })
  pessoa: PersonEntity;

  constructor() {
    super();
    this.id = uuid();
  }
}
