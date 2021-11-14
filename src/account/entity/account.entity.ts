import {BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import {PersonEntity} from "../../person/entity/person.entity";

@Entity({schema: 'cad', name: 'conta'})
export class AccountEntity extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: 'varchar', length: 8})
    numero: string

    @Column({type: 'varchar', length: 2})
    digito: string

    @OneToOne(type => PersonEntity)
    @JoinColumn({ name: "pessoa_id" })
    pessoa: PersonEntity

    constructor(id: string,
                numero: string,
                digito: string,
                pessoa: PersonEntity) {
        super()
        this.id = id
        this.numero = numero
        this.digito = digito
        this.pessoa = pessoa
    }
}
