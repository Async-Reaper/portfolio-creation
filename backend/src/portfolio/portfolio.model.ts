import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {ContentPortfolio} from "../content-portfolio/content-portfolio.model";

interface PortfolioCreationAttrs {
    title: string;
    description: string;
}

@Table({tableName: 'portfolio'})
export class Portfolio extends Model<Portfolio, PortfolioCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;
    @ApiProperty({example: '12345678', description: 'Пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @ApiProperty({example: '1246', description: 'Количество просмотров'})
    @Column({type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    count_view: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    author: User

    @HasMany(() => ContentPortfolio)
    content: ContentPortfolio[];
}
