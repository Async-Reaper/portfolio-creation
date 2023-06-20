import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Portfolio} from "../portfolio/portfolio.model";
import sequelize from "sequelize";
import {SocialLink} from "../social-link/social-link.model";

interface UserCreationAttrs {
    avatar
    email: string;
    password: string;
    full_name: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'user.jpg', description: 'Аватар'})
    @Column({type: DataType.STRING})
    avatar: string;

    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '12345678', description: 'Пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'Попцов Игорь Сергеевич', description: 'ФИО пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    full_name: string;

    @HasMany(() => SocialLink)
    social_link: SocialLink[];

    @HasMany(() => Portfolio)
    portfolio: Portfolio[];
}
