import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity({schema: 'cad', name: 'pessoa'})
export class PersonEntity extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string = null

    @Column({type: 'varchar', length: 100})
    nome: string = null

    @Column({type: 'varchar', length: 14})
    identificacao: string = null

    constructor() {
        super()
        this.id = uuid();
    }
}
