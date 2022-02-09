import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

export enum RegionEnum {
    COS = "COS",
    SIE = "SIE",
    ORI = "ORI",
    INS = "INS"
}

@Entity('offices')
export class Office {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'int',
        nullable: false,
        default: 1,
    })
    code_company: number;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    code_sucursal: string;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    name_sucursal: string;

    @Column({
        type: 'enum',
        /* enum: ["COS", "SIE", "ORI", "INS"], */
        enum: RegionEnum,
        nullable: false
    })
    region: RegionEnum;

    @Column({
        type: 'varchar',
        nullable: false
    })
    user_register: string;

    @Column({
        type: 'date',
        nullable: false
    })
    date_register: Date;
}