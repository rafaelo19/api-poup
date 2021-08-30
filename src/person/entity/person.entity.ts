import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({schema: 'cad', name: 'pessoa'})
export class PersonEntity extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: 'varchar', length: 100})
    nome: string

    @Column({type: 'varchar', length: 14})
    identificacao: string

    constructor(id: string, nome: string, identificacao: string) {
        super()
        this.id = id
        this.nome = nome
        this.identificacao = identificacao
    }
}
