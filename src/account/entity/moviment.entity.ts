import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { ModalityEntity } from './modality.entity';

@Entity({ schema: 'cad', name: 'movimento' })
export class MovimentEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'valor', type: 'numeric' })
  valor: number;

  @Column({ name: 'data', type: 'date' })
  data: string;

  @Column({ name: 'modalidade_id', type: 'varchar' })
  modalidade_id: string;

  @ManyToOne(() => ModalityEntity, (modalidade) => modalidade.movimento)
  @JoinColumn({ name: 'modalidade_id', referencedColumnName: 'id' })
  modalidade: ModalityEntity;

  constructor() {
    super();
    this.id = uuid();
  }
}
