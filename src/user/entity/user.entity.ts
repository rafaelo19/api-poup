import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import {PersonEntity} from "../../person/entity/person.entity";

@Entity({schema: 'cad', name: 'usuario'})
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: 'varchar', length: 100})
    login: string

    @Column({type: 'varchar', length: 20})
    senha: string

    @Column({type: 'uuid'})
    pessoa_id: string

    @OneToOne(type => PersonEntity)
    @JoinColumn({ name: "pessoa_id" })
    pessoa: PersonEntity;

    constructor(id: string,
                login: string,
                senha: string,
                pessoa: PersonEntity) {
        super()
        this.id = id
        this.login = login
        this.senha = senha
        this.pessoa = pessoa
    }
}
