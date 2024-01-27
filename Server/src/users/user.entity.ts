import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'users'})
export class User {

    @PrimaryGeneratedColumn()//Crea el id solo automaticamentesa
    id: number

    @Column()//Esto es para que se tranforme en una tabla
    username: string

    @Column()
    password: string

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date

    @Column({nullable: true})//nullable: true es como decir que no es necesario que cargemos sino que es opcional
    authStrategy: string
}