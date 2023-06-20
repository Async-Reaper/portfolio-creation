import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {ApiProperty} from "@nestjs/swagger";

interface SocialLinkCreationAttrs {
    id: number;
    link: string;
}

@Table({tableName: 'social-link'})
export class SocialLink extends Model<SocialLink, SocialLinkCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'vk.com', description: 'Ссылка на соц. сеть'})
    @Column({type: DataType.STRING, allowNull: false})
    link: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    author: User
}
