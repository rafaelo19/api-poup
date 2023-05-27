import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany, OneToOne,
} from 'typeorm';
import { ModalityEntity } from './modality.entity';
import { v4 as uuid } from 'uuid';
import {PersonEntity} from "../../person/entity/person.entity";

@Entity({ schema: 'cad', name: 'conta' })
export class AccountEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 8 })
  numero: string;

  @Column({ type: 'varchar', length: 2 })
  digito: string;

  @OneToOne(() => PersonEntity, (pessoa) => pessoa.usuario)
  @JoinColumn({ name: 'pessoa_id', referencedColumnName: 'id' })
  pessoa: PersonEntity;

  constructor() {
    super();
    this.id = uuid();
  }
}
