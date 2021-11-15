import {BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany} from "typeorm";
import {ModalityEntity} from "./modality.entity";
import { v4 as uuid } from 'uuid';

@Entity({schema: 'cad', name: 'conta'})
export class AccountEntity extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: 'varchar', length: 8})
    numero: string

    @Column({type: 'varchar', length: 2})
    digito: string

    @OneToMany(type => ModalityEntity, modalidade => modalidade.conta)
    @JoinColumn({ name: "id", referencedColumnName: "conta_id" })
    modalidade: ModalityEntity[]

    constructor() {
        super()
        this.id = uuid()
    }
}
