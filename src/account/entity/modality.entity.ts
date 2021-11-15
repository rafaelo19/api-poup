import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AccountEntity } from './account.entity';
import { MovimentEntity } from './moviment.entity';
import { v4 as uuid } from 'uuid';

@Entity({ schema: 'cad', name: 'modalidade' })
export class ModalityEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'descricao', type: 'varchar' })
  descricao: string;

  @Column({ name: 'status', type: 'boolean' })
  status: boolean;

  @Column({ name: 'conta_id', type: 'varchar' })
  conta_id: string;

  @ManyToOne((type) => AccountEntity, (conta) => conta.modalidade)
  @JoinColumn({ name: 'conta_id', referencedColumnName: 'id' })
  conta: AccountEntity;

  @OneToMany((type) => MovimentEntity, (movimento) => movimento.modalidade)
  @JoinColumn({ name: 'id', referencedColumnName: 'modalidade_id' })
  movimento: MovimentEntity[];

  constructor() {
    super();
    this.id = uuid();
  }
}
